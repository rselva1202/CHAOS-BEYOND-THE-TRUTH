import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { ERAS } from '../data/eras';

/** Card-view projection: adds the rail index and flat narrative paragraphs. */
const ERA_CARDS = ERAS.map((era, i) => ({
  ...era,
  index: String(i),
  narrative: era.sections.flatMap((section) => section.paragraphs),
}));

/** Dynasty timeline: horizontal era rail linking to full era pages. */
export default function Timeline() {
  const active = ERA_CARDS[0];

  return (
    <section id="timeline" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Historical Database"
        title="The Dynastic Timeline"
        subtitle="Six thousand years from the First Time to the last pharaoh. Open any era to read its full history, rulers, and gods."
      />

      {/* Era rail */}
      <Reveal direction="up">
        <div
          role="tablist"
          aria-label="Historical eras of ancient Egypt"
          className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-4"
        >
          {ERA_CARDS.map((era) => {
            const isActive = era.id === active.id;
            return (
              <a
                key={era.id}
                href={`#/era/${era.id}`}
                role="tab"
                aria-selected={isActive}
                className={`group flex shrink-0 flex-col items-start gap-1 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                  isActive
                    ? 'border-amber-500/60 bg-amber-100/50 shadow-[0_18px_50px_-24px_rgba(180,130,40,0.6)]'
                    : 'border-white/40 bg-white/25 hover:bg-white/45'
                }`}
              >
                <span className="font-display text-3xl leading-none text-black/25">
                  {era.index}
                </span>
                <span className="font-display text-xl text-ink">{era.short}</span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
                  {era.span}
                </span>
              </a>
            );
          })}
        </div>
      </Reveal>

      {/* Active era summary — opens the full era page. */}
      <Reveal key={active.id} direction="up" className="mt-8">
        <article
          aria-labelledby={`era-${active.id}`}
          className="card-frame bg-gradient-to-br from-amber-50/45 via-white/25 to-amber-100/30 p-8 sm:p-12"
        >
          <header className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-800/80">
                Era {active.index} — {active.span}
              </p>
              <h3
                id={`era-${active.id}`}
                className="mt-3 font-display text-4xl text-ink sm:text-5xl"
              >
                {active.name}
              </h3>
              <p className="mt-2 font-display text-xl italic text-amber-700/90">
                {active.tagline}
              </p>
            </div>
            <a
              href={`#/era/${active.id}`}
              className="btn-pill shrink-0 px-7 py-3 text-sm"
            >
              Read the full era →
            </a>
          </header>

          <div className="mt-8 space-y-5">
            {active.narrative.slice(0, 2).map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="max-w-3xl text-[15px] leading-relaxed text-black/80">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-amber-700/20 bg-amber-100/40 p-5">
              <h4 className="text-xs uppercase tracking-[0.25em] text-amber-800">Key Pharaohs</h4>
              <ul className="mt-3 space-y-1.5">
                {active.pharaohs.map((pharaoh) => (
                  <li key={pharaoh} className="flex items-baseline gap-2 text-sm text-black/80">
                    <span aria-hidden="true" className="text-amber-700">𓋾</span>
                    {pharaoh}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-700/20 bg-amber-100/40 p-5">
              <h4 className="text-xs uppercase tracking-[0.25em] text-amber-800">Major Developments</h4>
              <ul className="mt-3 space-y-1.5">
                {active.developments.map((development) => (
                  <li key={development} className="flex items-baseline gap-2 text-sm text-black/80">
                    <span aria-hidden="true" className="text-amber-700">𓊖</span>
                    {development}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-700/20 bg-amber-100/40 p-5">
              <h4 className="text-xs uppercase tracking-[0.25em] text-amber-800">Gods Worshipped</h4>
              <ul className="mt-3 space-y-1.5">
                {active.gods.map((god) => (
                  <li key={god} className="flex items-baseline gap-2 text-sm text-black/80">
                    <span aria-hidden="true" className="text-amber-700">𓊹</span>
                    {god}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
