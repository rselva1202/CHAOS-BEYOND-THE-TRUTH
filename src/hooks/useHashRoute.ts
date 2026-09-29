import { useEffect, useState } from 'react';

export type Route =
  | { page: 'home' }
  | { page: 'era'; id: string }
  | { page: 'god'; id: string }
  | { page: 'location'; id: string };

const PAGE_PATTERN = /^(era|god|location)\/(.+)$/;

/** Parse `#/era/new-kingdom` into a typed route. Unknown paths fall back home. */
function parseHash(): Route {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const match = PAGE_PATTERN.exec(raw);
  if (match) {
    const [, head, id] = match;
    if (head === 'era') return { page: 'era', id };
    if (head === 'god') return { page: 'god', id };
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
      setRoute(parseHash());
      if (PAGE_PATTERN.test(raw) || raw === '' || raw === 'home') {
        window.scrollTo(0, 0);
        return;
      }
      // Section anchor (possibly after navigating home): wait for the home
      // page to render, then jump to the element.
      const anchor = sessionStorage.getItem('kemet-anchor') ?? raw;
      sessionStorage.removeItem('kemet-anchor');
      requestAnimationFrame(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
