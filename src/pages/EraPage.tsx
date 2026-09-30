import DetailShell, { StoryBlock } from '../components/DetailShell';
import { ERAS } from '../data/eras';

/** Full-page article for one historical era (#/era/:id). */
export default function EraPage({ id }: { id: string }) {
  const era = ERAS.find((e) => e.id === id);

  if (!era) {
    return <NotFound label="This era is lost to the sands." />;
  }

  const isZepTepi = era.id === 'zep-tepi';

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

      {isZepTepi && (
        <section className="card-frame bg-gradient-to-br from-sky-100/40 via-white/30 to-indigo-100/40 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-800/80">The Narrative Cycle</p>
          <h2 className="mt-3 font-display text-3xl text-ink">Experience the Full Story</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-black/80">
            Zep Tepi is the First Time this whole website is built upon. Act I of the Four Acts —
            <span className="italic"> The Dawn of Creation</span> — tells it as full immersive
            narrative: the waters of Nun, the mound, the first family of gods, and the struggle of
            Ma’at and Isfet that everything after depends on.
          </p>
          <a href="#/acts/dawn-of-creation" className="btn-pill mt-6 inline-block px-8 py-3 text-sm">
            Read Act I — The Dawn of Creation →
          </a>
        </section>
      )}
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
