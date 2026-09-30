import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#/home' },
  { label: 'The Four Acts', href: '#/acts' },
  { label: 'Pantheon of Gods', href: '#/home#studio', anchor: 'studio' },
  { label: 'Dynastic Timeline', href: '#/home#timeline', anchor: 'timeline' },
  { label: 'Map of Kemet', href: '#/home#about', anchor: 'about' },
  { label: 'Mythological Scrolls', href: '#/home#journal', anchor: 'journal' },
  { href: '#/home#reach-us', label: 'Chronicles', anchor: 'reach-us' },
] as const;

/** Fixed top navigation: serif wordmark, myth links, black pill CTA. Gains a
 *  glassmorphic backdrop once the page is scrolled. Section links navigate
 *  home first, then land on their anchor. */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 transition-all duration-300 ${
        scrolled ? 'border-b border-black/5 bg-background/70 backdrop-blur-md' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-5">
        <a
          href="#/home"
          className="font-display text-2xl leading-none tracking-tight text-ink"
          aria-label="KEMET: The First Age — home"
        >
          KEMET
          <span className="mt-0.5 block font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-muted">
            The First Age
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-sm text-muted transition-colors duration-200 hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#reach-us" className="btn-pill shrink-0 px-6 py-2.5 text-sm">
          Enter the Duat
        </a>
      </nav>
    </header>
  );
}
