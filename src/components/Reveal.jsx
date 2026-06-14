import { useEffect, useRef } from 'react';

export const FadeIn = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  const offset = directions[direction] || { x: 0, y: 0 };

  return (
    <div
      ref={ref}
      className="fade-in"
      style={{
        opacity: 0,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: `opacity 0.7s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}s, transform 0.7s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};
