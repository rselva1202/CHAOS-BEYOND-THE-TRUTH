import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VideoBackground from '../components/VideoBackground';
import DeityGallery from '../components/DeityGallery';
import Timeline from '../components/Timeline';
import KemetMap from '../components/KemetMap';
import Journal from '../components/Journal';
import ReachUs from '../components/ReachUs';

/**
 * Dashboard view: fixed cinematic video backdrop, hero on the first screen,
 * then the gallery, timeline, map, scrolls, and chronicles sections.
 */
export default function HomePage() {
  return (
    <>
      <VideoBackground />
      <Navbar />
      <main className="relative z-10 animate-fade-in">
        <div id="top" className="relative min-h-screen">
          <Hero />
        </div>
        <div>
          <DeityGallery />
          <Timeline />
          <KemetMap />
          <Journal />
          <ReachUs />
        </div>
      </main>
    </>
  );
}
