import { useRef } from 'react';
import heroImg from '../assets/hero.webp';
import { useHeroIntro } from '../lib/motion';
import { FacebookIcon, GithubIcon, InstagramIcon, YoutubeIcon } from './Icons';

const socials = [
  { name: 'GitHub', Icon: GithubIcon, href: 'https://github.com/RIDHOALFIWIJAYA' },
  { name: 'YouTube', Icon: YoutubeIcon, href: 'https://youtube.com/@rid.xyz1?si=bNMk5fW51z_gqfnC' },
  { name: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ridho.alfi.py/' },
  { name: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/ridho.770678' },
];

const Hero = () => {
  const sectionRef = useRef(null);
  useHeroIntro(sectionRef);

  return (
    <section ref={sectionRef} id="home" className="pb-20 pt-12 lg:pb-28 lg:pt-20">
      <div className="shell grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <p data-hero="kicker" className="text-sm text-accent-ink dark:text-accent">
            Full-stack engineer
          </p>

          <h1 data-hero="title" className="mt-4 max-w-2xl text-display text-ink dark:text-paper">
            Membangun web yang rapi, dari antarmuka hingga server.
          </h1>

          <p data-hero="intro" className="mt-6 max-w-xl text-lg text-concrete dark:text-ash">
            Saya Ridho. Saya menulis React di sisi klien dan layanan Node.js di sisi server, lalu menjaga keduanya tetap mudah dipelihara.
          </p>

          <div data-hero="actions" className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#about"
              className="inline-flex min-h-12 items-center bg-ink px-5 text-sm font-medium text-paper transition-colors hover:bg-accent-ink dark:bg-paper dark:text-ink dark:hover:bg-accent"
            >
              Lihat keahlian
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center border border-ink/25 px-5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent-ink dark:border-paper/25 dark:text-paper dark:hover:border-accent dark:hover:text-accent"
            >
              Hubungi saya
            </a>
          </div>

          <div data-hero="social" className="mt-10 flex flex-wrap gap-2">
            {socials.map(({ name, Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="inline-flex h-11 w-11 items-center justify-center border border-ink/15 text-concrete transition-colors hover:border-accent hover:text-accent-ink dark:border-paper/20 dark:text-ash dark:hover:border-accent dark:hover:text-accent"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div data-hero="portrait" className="mx-auto w-full max-w-sm">
          <div className="border-2 border-ink/15 p-2 dark:border-paper/20">
            <img
              src={heroImg}
              alt="Foto profil Ridho"
              width="960"
              height="1103"
              fetchPriority="high"
              className="aspect-[960/1103] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
