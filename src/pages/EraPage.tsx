import DetailShell, { StoryBlock } from '../components/DetailShell';
import { ERAS } from '../data/eras';

/** Full-page article for one historical era (#/era/:id). */
export default function EraPage({ id }: { id: string }) {
  const era = ERAS.find((e) => e.id === id);

  if (!era) {
    return <NotFound label="This era is lost to the sands." />;
  }

  return (
    <DetailShell
      eyebrow={`Era — Historical Database`}
      title={era.name}
      tagline={era.tagline}
      span={era.span}
      plate="from-amber-200/50 via-yellow-100/30 to-orange-300/50"
      glyph="𓆣"
      hieroglyph="𓋾"
      facts={[
        { label: 'Capital City', items: [era.capital], glyph: '𓊖' },
        { label: 'Major Pharaohs', items: era.pharaohs, glyph: '𓋾' },
        { label: 'Primary Cult Deities', items: era.gods, glyph: '𓊹' },
        { label: 'Major Developments', items: era.developments, glyph: '𓊛' },
      ]}
    >
      {era.sections.map((section) => (
        <StoryBlock key={section.heading} heading={section.heading} paragraphs={section.paragraphs} />
      ))}
    </DetailShell>
  );
}

export function NotFound({ label }: { label: string }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-7xl text-black/20">𓃭</p>
      <h1 className="mt-6 font-display text-4xl text-ink">Not Found</h1>
      <p className="mt-3 text-muted">{label}</p>
      <a href="#/home" className="btn-pill mt-8 px-8 py-3 text-sm">
        ← Back to Dashboard
      </a>
    </div>
  );
}
