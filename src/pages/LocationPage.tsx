import DetailShell, { StoryBlock } from '../components/DetailShell';
import { NotFound } from './EraPage';
import { LOCATIONS } from '../data/locations';

/** Full-page article for one sacred location (#/location/:id). */
export default function LocationPage({ id }: { id: string }) {
  const location = LOCATIONS.find((l) => l.id === id);

  if (!location) {
    return <NotFound label="This city lies beneath the sands." />;
  }

  return (
    <DetailShell
      eyebrow="Map of Kemet"
      title={location.name}
      tagline={`“${location.epithet}”`}
      span={`${location.ancientName} · ${location.span}`}
      plate="from-emerald-200/40 via-amber-100/30 to-sky-300/40"
      glyph="𓊖"
      hieroglyph="𓈖"
      facts={[
        { label: 'Ancient Name', items: [location.ancientName], glyph: '𓏛' },
        { label: 'Known For', items: location.knownFor, glyph: '𓊛' },
        { label: 'Cult Deities', items: location.deities, glyph: '𓊹' },
        { label: 'Associated Pharaohs', items: location.pharaohs, glyph: '𓋾' },
      ]}
    >
      {location.sections.map((section) => (
        <StoryBlock key={section.heading} heading={section.heading} paragraphs={section.paragraphs} />
      ))}
    </DetailShell>
  );
}
