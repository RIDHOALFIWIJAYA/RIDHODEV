import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Projects = lazy(() => import('./components/Projects'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      void error;
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-ink dark:text-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:inline-flex focus:min-h-11 focus:items-center focus:bg-ink focus:px-4 focus:text-sm focus:text-paper dark:focus:bg-paper dark:focus:text-ink"
      >
        Lewati ke konten
      </a>

      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />

      <main id="main" className="pt-16 sm:pt-20">
        <Hero />
        <Suspense fallback={<SectionLoading label="Proyek" />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoading label="Tentang" />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoading label="Kontak" />}>
          <Contact />
        </Suspense>
      </main>

      <footer className="border-t border-ink/10 py-10 dark:border-paper/10">
        <div className="shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-lg text-ink dark:text-paper">RIDHO.DEV</span>
          <nav aria-label="Tautan footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-concrete *:inline-flex *:min-h-11 *:items-center dark:text-ash">
            <a href="#home" className="hover:text-accent-ink dark:hover:text-accent">Beranda</a>
            <a href="#projects" className="hover:text-accent-ink dark:hover:text-accent">Proyek</a>
            <a href="#about" className="hover:text-accent-ink dark:hover:text-accent">Tentang</a>
            <a href="#contact" className="hover:text-accent-ink dark:hover:text-accent">Kontak</a>
            <a href="https://github.com/RIDHOALFIWIJAYA" target="_blank" rel="noopener noreferrer" className="hover:text-accent-ink dark:hover:text-accent">GitHub</a>
          </nav>
          <p className="text-sm text-concrete dark:text-ash">© {new Date().getFullYear()} RIDHO.DEV</p>
        </div>
      </footer>
    </div>
  );
};

const SectionLoading = ({ label }) => (
  <div className="shell py-20 text-concrete dark:text-ash" role="status">
    Memuat bagian {label}...
  </div>
);

export default App;
