import { useLayoutEffect } from 'react';
import { animate, createScope, createTimeline, eases, onScroll, stagger } from 'animejs';
import { splitText } from 'animejs/text';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const offsets = {
  up: [0, 16],
  down: [0, -16],
  left: [-16, 0],
  right: [16, 0],
};

export function useReveal(ref, { delay = 0, direction = 'up' } = {}) {
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || reduced()) return;

    const scope = createScope({ root: element });
    scope.add(() => {
      const [x, y] = offsets[direction] ?? offsets.up;
      animate(element, {
        opacity: [0, 1],
        x: [x, 0],
        y: [y, 0],
        duration: 480,
        delay,
        ease: 'outQuint',
        autoplay: onScroll({
          target: element,
          enter: 'end 88%',
          repeat: false,
        }),
      });
    });

    return () => scope.revert();
  }, [ref, delay, direction]);
}

export function useHeroIntro(ref) {
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || reduced()) return;

    const scope = createScope({ root });
    scope.add(() => {
      const title = root.querySelector('[data-hero="title"]');
      const split = splitText(title, { words: { wrap: 'clip' } });
      const rise = { opacity: [0, 1], y: [14, 0] };

      createTimeline({ defaults: { duration: 600, ease: 'outQuint' } })
        .add('[data-hero="kicker"]', rise, 0)
        .add(split.words, {
          opacity: [0, 1],
          y: ['110%', '0%'],
          duration: 900,
          ease: eases.outExpo,
          delay: stagger(55, { from: 'first' }),
        }, 100)
        .add('[data-hero="intro"]', rise, 200)
        .add('[data-hero="actions"]', rise, 300)
        .add('[data-hero="social"]', {
          opacity: [0, 1],
          y: [10, 0],
          delay: stagger(60, { from: 'first' }),
        }, 380)
        .add('[data-hero="portrait"]', { opacity: [0, 1], y: [20, 0], scale: [0.98, 1] }, 180);
    });

    return () => scope.revert();
  }, [ref]);
}

export function useProjectsReveal(ref) {
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || reduced()) return;

    const scope = createScope({ root });
    scope.add(() => {
      animate('[data-project-card]', {
        opacity: [0, 1],
        y: [18, 0],
        duration: 560,
        ease: 'outQuint',
        delay: stagger(70, { from: 'first' }),
        autoplay: onScroll({
          target: root,
          enter: 'end 88%',
          repeat: false,
        }),
      });
    });

    return () => scope.revert();
  }, [ref]);
}

export function useScrollProgress(sectionRef, lineRef) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line || reduced()) return;

    const scope = createScope({ root: section });
    scope.add(() => {
      const scroll = onScroll({
        target: section,
        enter: 'start start',
        leave: 'end end',
        sync: true,
        repeat: true,
      });
      animate(line, {
        scaleX: [0, 1],
        duration: 1000,
        ease: 'linear',
        autoplay: scroll,
      });
    });

    return () => scope.revert();
  }, [sectionRef, lineRef]);
}
