import { useEffect, useState } from 'react';

export type Route =
  | { page: 'home' }
  | { page: 'era'; id: string }
  | { page: 'god'; id: string }
  | { page: 'location'; id: string }
  | { page: 'acts' }
  | { page: 'act'; id: string };

const PAGE_PATTERN = /^(era|god|location|acts|act)\/(.+)$/;

/**
 * Parse a hash into a route. Supports compound hashes like
 * `#/home#timeline`: the part before `#` selects the page, the part after
 * names a section anchor to scroll to once the page has rendered.
 */
function parseHash(): Route {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const path = raw.split('#')[0];
  if (path === 'acts' && !raw.includes('#')) return { page: 'acts' };
  const match = PAGE_PATTERN.exec(path);
  if (match) {
    const [, head, id] = match;
    if (head === 'era') return { page: 'era', id };
    if (head === 'god') return { page: 'god', id };
    // `acts/:id` and `act/:id` both open one act (nested hash support).
    if (head === 'acts' || head === 'act') return { page: 'act', id };
    return { page: 'location', id };
  }
  return { page: 'home' };
}

/**
 * Minimal hash router. Detail routes reset the viewport to the top; plain
 * section anchors (#studio, #timeline…) scroll to their element on home.
 */
export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const onChange = () => {
      const raw = window.location.hash.replace(/^#\/?/, '');
      const [path, anchor] = raw.split('#');
      setRoute(parseHash());
      if (
        PAGE_PATTERN.test(path) ||
        path === '' ||
        path === 'home' ||
        path === 'acts' ||
        path.startsWith('acts/')
      ) {
        // A compound hash (`#/home#timeline`) should land on its section,
        // not snap to the top first.
        if (anchor) {
          requestAnimationFrame(() => {
            document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
          });
          return;
        }
        window.scrollTo(0, 0);
        return;
      }
      // Section anchor (possibly after navigating home): wait for the home
      // page to render, then jump to the element.
      const stored = sessionStorage.getItem('kemet-anchor') ?? anchor ?? raw;
      sessionStorage.removeItem('kemet-anchor');
      requestAnimationFrame(() => {
        document.getElementById(stored)?.scrollIntoView({ behavior: 'smooth' });
      });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
