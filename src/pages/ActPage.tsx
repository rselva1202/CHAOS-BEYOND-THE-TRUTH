import Reveal from '../components/Reveal';
import Navbar from '../components/Navbar';
import { NotFound } from './EraPage';
import { ACTS, getAct, getActCrossReferences, getActSectionsWithNav } from '../data/acts';
import type { ActTimelineReference } from '../data/acts';

/** Glyph for each cross-reference kind. */
const KIND_GLYPH: Record<string, string> = {
  deity: '𓊹',
  era: '𓋾',
  location: '𓊖',
};

/** Eyebrow labels for timeline references — honest about myth vs. history. */
const TIMELINE_KIND_LABEL: Record<ActTimelineReference['kind'], string> = {
  'mythological-tradition': 'Mythological Tradition',
  'historical-context': 'Historical Context',
};

/**
 * One act of the Four Acts (#/acts/:id): act hero, progress rail, section
 * narratives with figure/location/timeline cross-links, and prev/next
 * navigation. Uses the site's existing serif / card-frame / reveal language.
 */
export default function ActPage({ id }: { id: string }) {
  const act = getAct(id);

  if (!act) {
    return <NotFound label="This act was never written." />;
  }

  const sections = getActSectionsWithNav(act);
  const crossRefs = getActCrossReferences(act);
  const index = ACTS.findIndex((a) => a.id === act.id);
  const previousAct = index > 0 ? ACTS[index - 1] : undefined;
  const nextAct = index < ACTS.length - 1 ? ACTS[index + 1] : undefined;

  return (
    <>
      <Navbar />
      <main className="relative z-10 animate-fade-in">
        <div className="mx-auto max-w-6xl px-6 pt-24 sm:pt-28">
          {/* Wayfinder: return links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#/acts"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-5 py-2.5 text-sm text-ink backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:bg-white/60"
            >
              <span aria-hidden="true">←</span> Return to Acts
            </a>
            <a
              href="#/home"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              Return to Home
            </a>
          </div>

          {/* Act hero plate */}
          <header
            className={`card-frame relative mt-8 flex aspect-[21/9] max-h-[380px] items-center justify-center overflow-hidden bg-gradient-to-br sm:aspect-[21/7] ${act.visual.plate}`}
          >
            <span aria-hidden="true" className={`font-display text-[8rem] leading-none text-black/20 sm:text-[9rem] ${act.visual.image ? 'hidden' : ''}`}>
              {act.visual.glyph}
            </span>
            {act.visual.image && (
              <img
                src={act.visual.image}
                alt={`Artwork of ${act.title}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            {act.visual.hieroglyph && (
              <span aria-hidden="true" className="absolute bottom-6 right-8 font-display text-6xl text-black/10 sm:text-7xl">
                {act.visual.hieroglyph}
              </span>
            )}
            <span className="absolute left-6 top-6 rounded-full border border-white/50 bg-black/75 px-4 py-1.5 text-xs text-amber-100">
              ACT {act.numeral} · of IV
            </span>
          </header>

          {/* Act title block */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-800/80">
              The Four Acts — Act {act.numeral}
            </p>
            <h1 className="mt-3 font-display text-5xl text-ink sm:text-6xl">{act.title}</h1>
            <p className="mt-2 font-display text-xl italic text-amber-700/90">{act.subtitle}</p>
          </div>

          {/* Act progress indicator */}
          <Reveal direction="up">
            <nav
              aria-label="Act progress"
              className="mt-10 flex flex-wrap items-center justify-center gap-2 rounded-3xl border border-white/40 bg-white/25 px-4 py-4 sm:gap-4 sm:px-8"
            >
              {ACTS.map((a, i) => {
                const isCurrent = a.id === act.id;
                return (
                  <div key={a.id} className="flex items-center gap-2 sm:gap-4">
                    {i > 0 && (
                      <span aria-hidden="true" className="h-px w-5 bg-amber-700/40 sm:w-10" />
                    )}
                    <a
                      href={`#/acts/${a.id}`}
                      aria-current={isCurrent ? 'step' : undefined}
                      className={`rounded-full px-3.5 py-1.5 font-display text-sm transition-all sm:px-5 ${
                        isCurrent
                          ? 'bg-ink text-paper shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]'
                          : 'border border-amber-700/30 bg-white/40 text-ink hover:bg-amber-100/60'
                      }`}
                    >
                      ACT {a.numeral}
                    </a>
                  </div>
                );
              })}
            </nav>
          </Reveal>

          {/* Act I ↔ Zep Tepi: the two tellings of the First Time, linked both ways */}
          {act.id === 'dawn-of-creation' && (
            <Reveal direction="up" className="mt-10">
              <div className="card-frame flex flex-col items-start justify-between gap-4 bg-gradient-to-br from-sky-100/40 via-white/30 to-indigo-100/40 p-6 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-800/80">
                    Mythological Tradition — Experience
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-black/80">
                    This act is the full narrative telling of <span className="font-medium">Zep Tepi</span> —
                    “the First Time.” The interactive Zep Tepi experience offers the creation story in its
                    original form.
                  </p>
                </div>
                <a href="#/era/zep-tepi" className="btn-pill shrink-0 px-8 py-3 text-sm">
                  Enter Zep Tepi →
                </a>
              </div>
            </Reveal>
          )}

          {/* Introduction */}
          <div className="mx-auto mt-12 max-w-3xl space-y-5">
            {act.introduction.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 32)} direction="up">
                <p className="font-display text-xl leading-relaxed text-black/85 sm:text-2xl">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Sections */}
          <ol className="mt-16 space-y-16">
            {sections.map(({ section, previous, next }, i) => (
              <li key={section.id}>
                <article id={section.id} className="scroll-mt-28">
                  {/* Section heading rail */}
                  <Reveal direction="up">
                    <div className="flex items-baseline gap-5">
                      <span
                        aria-hidden="true"
                        className="font-display text-6xl leading-none text-black/20 sm:text-7xl"
                      >
                        {section.id ? String(i + 1).padStart(2, '0') : ''}
                      </span>
                      <div>
                        <h2 className="font-display text-3xl text-ink sm:text-4xl">
                          {section.title}
                        </h2>
                        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                          {section.shortDescription}
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 h-px w-full bg-gradient-to-r from-amber-600/60 via-amber-600/20 to-transparent" />
                  </Reveal>

                  {/* Narrative */}
                  <div className="mt-6 space-y-8">
                    {section.narrative.map((block) => (
                      <Reveal key={block.heading} direction={i % 2 === 0 ? 'left' : 'right'}>
                        <section>
                          <h3 className="font-display text-2xl text-ink">{block.heading}</h3>
                          <div className="mt-3 space-y-4">
                            {block.paragraphs.map((paragraph) => (
                              <p
                                key={paragraph.slice(0, 32)}
                                className="max-w-3xl text-[15px] leading-relaxed text-black/80"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </section>
                      </Reveal>
                    ))}
                  </div>

                  {/* Cross-links into the existing systems */}
                  <Reveal direction="up" className="mt-8">
                    <div className="card-frame bg-white/30 p-6">
                      <h4 className="text-xs uppercase tracking-[0.25em] text-amber-800">
                        𓋹 Connect to the Chronicles
                      </h4>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {section.figures
                          .filter((figure) => figure.deityId)
                          .map((figure) => (
                            <a
                              key={figure.name}
                              href={`#/god/${figure.deityId}`}
                              className="rounded-full border border-amber-700/25 bg-amber-100/50 px-3 py-1 text-xs font-medium text-amber-800 transition-colors hover:bg-amber-100/80"
                            >
                              𓊹 {figure.name} →
                            </a>
                          ))}
                        {section.places
                          .filter((place) => place.locationId)
                          .map((place) => (
                            <a
                              key={place.name}
                              href={`#/location/${place.locationId}`}
                              className="rounded-full border border-emerald-700/25 bg-emerald-100/40 px-3 py-1 text-xs font-medium text-emerald-900 transition-colors hover:bg-emerald-100/70"
                            >
                              𓊖 {place.name} →
                            </a>
                          ))}
                        {section.timeline
                          .filter((reference) => reference.eraId)
                          .map((reference) => (
                            <a
                              key={reference.name}
                              href={`#/era/${reference.eraId}`}
                              className="rounded-full border border-sky-700/25 bg-sky-100/40 px-3 py-1 text-xs font-medium text-sky-900 transition-colors hover:bg-sky-100/70"
                              title={`${TIMELINE_KIND_LABEL[reference.kind]} — ${reference.relevance}`}
                            >
                              𓋾 {reference.name} →
                            </a>
                          ))}
                      </div>

                      {/* Myth vs. history labels for this section's timeline links */}
                      {section.timeline.some((reference) => reference.eraId) && (
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                          {[
                            ...new Map(
                              section.timeline
                                .filter((reference) => reference.eraId)
                                .map((reference) => [reference.kind, reference]),
                            ).values(),
                          ].map((reference) => (
                            <p
                              key={reference.kind}
                              className="text-[11px] uppercase tracking-[0.2em] text-muted"
                            >
                              {reference.kind === 'mythological-tradition'
                                ? '◈'
                                : '◆'}{' '}
                              {TIMELINE_KIND_LABEL[reference.kind]}
                            </p>
                          ))}
                        </div>
                      )}

                      {(previous || next) && (
                        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-black/5 pt-4 text-xs text-muted">
                          {previous ? (
                            <a
                              href={`#/acts/${act.id}#${previous.id}`}
                              className="transition-colors hover:text-ink"
                            >
                              ↑ {previous.title}
                            </a>
                          ) : (
                            <span />
                          )}
                          {next && (
                            <a
                              href={`#/acts/${act.id}#${next.id}`}
                              className="transition-colors hover:text-ink"
                            >
                              {next.title} ↓
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </Reveal>
                </article>
              </li>
            ))}
          </ol>

          {/* Related pages in the existing systems */}
          {crossRefs.length > 0 && (
            <Reveal direction="up" className="mt-16">
              <div className="card-frame bg-gradient-to-br from-amber-50/50 via-white/30 to-amber-100/40 p-8">
                <h3 className="font-display text-3xl text-ink">Related Chronicles</h3>
                <p className="mt-2 text-sm text-muted">
                  Deities, eras, and sacred places woven through this act.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {crossRefs.map((ref) => (
                    <a
                      key={ref.href}
                      href={ref.href}
                      className="rounded-full border border-white/50 bg-white/40 px-4 py-1.5 text-xs text-ink transition-colors hover:bg-amber-100/60"
                      title={ref.detail ? `${ref.detail} — opens the ${ref.label} page` : undefined}
                    >
                      <span aria-hidden="true" className="mr-1.5">{KIND_GLYPH[ref.kind]}</span>
                      {ref.label}
                      {ref.kind === 'era' && ref.detail && (
                        <span aria-hidden="true" className="ml-1.5 text-[10px] uppercase tracking-[0.15em] text-muted">
                          · {ref.detail}
                        </span>
                      )}
                      {' →'}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {/* Previous / Next act navigation */}
          <Reveal direction="up" className="mt-12">
            <nav
              aria-label="Act navigation"
              className="grid gap-4 sm:grid-cols-2"
            >
              {previousAct ? (
                <a
                  href={`#/acts/${previousAct.id}`}
                  className="card-frame group bg-white/30 p-6 transition-colors hover:bg-amber-100/50"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-muted">
                    ← Previous Act
                  </p>
                  <p className="mt-2 font-display text-2xl text-ink">
                    ACT {previousAct.numeral} — {previousAct.title}
                  </p>
                </a>
              ) : (
                <span aria-hidden="true" />
              )}
              {nextAct ? (
                <a
                  href={`#/acts/${nextAct.id}`}
                  className="card-frame group bg-white/30 p-6 text-right transition-colors hover:bg-amber-100/50 sm:col-start-2"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-muted">
                    Next Act →
                  </p>
                  <p className="mt-2 font-display text-2xl text-ink">
                    ACT {nextAct.numeral} — {nextAct.title}
                  </p>
                </a>
              ) : (
                <span aria-hidden="true" />
              )}
            </nav>
          </Reveal>

          {/* Returns */}
          <Reveal direction="up" className="mt-14 flex flex-wrap items-center justify-center gap-4 pb-24">
            <a href="#/acts" className="btn-pill px-10 py-3.5 text-sm">
              Return to Acts
            </a>
            <a
              href="#/home"
              className="rounded-full border border-amber-700/30 bg-white/40 px-10 py-3.5 text-sm text-ink transition-colors hover:bg-amber-100/60"
            >
              Return to Home
            </a>
            {!nextAct && (
              <>
                <a
                  href="#/home#timeline"
                  className="rounded-full border border-sky-700/30 bg-sky-100/40 px-10 py-3.5 text-sm text-ink transition-colors hover:bg-sky-100/70"
                >
                  𓋾 Explore Timeline
                </a>
                <a
                  href="#/home#studio"
                  className="rounded-full border border-amber-700/30 bg-amber-100/50 px-10 py-3.5 text-sm text-ink transition-colors hover:bg-amber-100/70"
                >
                  𓊹 Explore Gods
                </a>
                <a
                  href="#/home#about"
                  className="rounded-full border border-emerald-700/30 bg-emerald-100/40 px-10 py-3.5 text-sm text-ink transition-colors hover:bg-emerald-100/70"
                >
                  𓊖 Explore Map
                </a>
                <a
                  href="#/home#reach-us"
                  className="rounded-full border border-violet-700/30 bg-violet-100/40 px-10 py-3.5 text-sm text-ink transition-colors hover:bg-violet-100/70"
                >
                  ✉ Explore Chronicles
                </a>
              </>
            )}
          </Reveal>
        </div>
      </main>
    </>
  );
}
