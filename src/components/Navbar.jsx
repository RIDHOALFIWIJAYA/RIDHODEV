import { useEffect, useRef, useState } from 'react';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons';

const links = [
  { name: 'Beranda', href: '#home' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Tentang', href: '#about' },
  { name: 'Kontak', href: '#contact' },
];

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const themeLabel = theme === 'dark' ? 'Aktifkan tema terang' : 'Aktifkan tema gelap';

  const closeMenu = () => {
    setIsOpen(false);
    window.setTimeout(() => menuButtonRef.current?.focus(), 0);
  };

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
      scrolled
        ? 'border-ink/10 bg-paper dark:border-paper/15 dark:bg-ink'
        : 'border-transparent bg-transparent'
    }`}>
      <div className="shell flex h-16 items-center justify-between gap-4 sm:h-20">
        <a href="#home" className="inline-flex min-h-11 items-center font-display text-lg tracking-tight text-ink dark:text-paper">
          RIDHO.DEV
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center px-3 text-sm text-concrete transition-colors hover:text-accent-ink dark:text-ash dark:hover:text-accent"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex min-h-11 items-center border border-ink px-4 text-sm text-ink transition-colors hover:bg-ink hover:text-paper dark:border-paper dark:text-paper dark:hover:bg-paper dark:hover:text-ink"
            >
              Diskusi proyek
            </a>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="inline-flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-accent-ink dark:text-paper dark:hover:text-accent"
          >
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex min-h-11 items-center gap-2 px-2 text-ink dark:text-paper md:hidden"
          >
            {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            <span className="text-sm">{isOpen ? 'Tutup' : 'Menu'}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`overflow-hidden border-b bg-paper transition-all duration-200 dark:bg-ink md:hidden ${
          isOpen ? 'max-h-96 border-ink/10 opacity-100 dark:border-paper/15' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <div className="shell flex flex-col gap-1 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={closeMenu}
              className="inline-flex min-h-12 items-center border-b border-ink/10 text-base text-ink dark:border-paper/10 dark:text-paper"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            tabIndex={isOpen ? 0 : -1}
            onClick={closeMenu}
            className="mt-4 inline-flex min-h-12 items-center justify-center bg-ink px-4 text-sm text-paper dark:bg-paper dark:text-ink"
          >
            Diskusi proyek
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
