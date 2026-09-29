import { useHashRoute } from './hooks/useHashRoute';
import HomePage from './pages/HomePage';
import EraPage from './pages/EraPage';
import GodPage from './pages/GodPage';
import LocationPage from './pages/LocationPage';

/**
 * Hash-routed SPA: `#/home` renders the dashboard; `#/era/:id`, `#/god/:id`,
 * and `#/location/:id` render full-screen reading pages. The route object is
 * keyed into the DOM so React remounts pages, driving the fade transition.
 */
export default function App() {
  const route = useHashRoute();
  const key =
    route.page === 'home' ? 'home' : `${route.page}:${route.id}`;

  return (
    <div className="relative w-full" key={key}>
      {route.page === 'home' && <HomePage />}
      {route.page === 'era' && <EraPage id={route.id} />}
      {route.page === 'god' && <GodPage id={route.id} />}
      {route.page === 'location' && <LocationPage id={route.id} />}
    </div>
  );
}
