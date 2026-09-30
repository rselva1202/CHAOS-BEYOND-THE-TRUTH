import Reveal from '../components/Reveal';
import Navbar from '../components/Navbar';
import VideoBackground from '../components/VideoBackground';
import { ACTS } from '../data/acts';

/** Pillars under the page title: Creation · Death · Revenge · Empire. */
const PILLARS = ['Creation.', 'Death.', 'Revenge.', 'Empire.'];

/**
 * THE FOUR ACTS — cinematic landing hub (#/acts).
 * Four epic cards over the ambient video, using the site's existing
 * card-frame / serif / reveal language. Each card opens its act page.
 */
export default function ActsPage() {
  return (
    <>
      <VideoBackground />
      <Navbar />
      <main className="relative z-10 animate-fade-in">
        <div className="mx-auto max-w-7xl px-6 pb-28 pt-32 sm:pt-40">
          {/* Epic masthead */}
          <header className="text-center">
            <Reveal direction="up">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-800/80">
                The Narrative Cycle
              </p>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h1 className="mt-5 font-display text-5xl text-ink sm:text-7xl md:text-8xl">
                THE FOUR ACTS
              </h1>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p className="mt-6 font-sans text-xs uppercase tracking-[0.3em] text-muted sm:text-sm">
                One cosmic story. Four ages of transformation.
              </p>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <div className="mt-8 flex flex-wrap items-baseline justify-center gap-x-6 gap-y-2">
                {PILLARS.map((pillar, i) => (
                  <span
                    key={pillar}
                    className="font-display text-2xl text-black/70 sm:text-3xl"
                  >
                    {pillar}
                    {i < PILLARS.length - 1 && (
                      <span aria-hidden="true" className="ml-6 text-amber-700/60">·</span>
                    )}
                  </span>
                ))}
              </div>
            </Reveal>
          </header>

          {/* Act progress rail */}
          <Reveal direction="up" delay={350}>
            <nav
              aria-label="Act progress"
              className="mx-auto mt-14 flex max-w-2xl items-center justify-center gap-2 sm:gap-4"
            >
              {ACTS.map((act, i) => (
                <div key={act.id} className="flex items-center gap-2 sm:gap-4">
                  {i > 0 && (
                    <span aria-hidden="true" className="h-px w-6 bg-amber-700/40 sm:w-12" />
                  )}
                  <a
                    href={`#/acts/${act.id}`}
                    className="rounded-full border border-amber-700/30 bg-white/40 px-3.5 py-1.5 font-display text-sm text-ink transition-colors hover:bg-amber-100/60 sm:px-5"
                  >
                    Act {act.numeral}
                  </a>
                </div>
              ))}
            </nav>
          </Reveal>

          {/* Act cards */}
          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
            {ACTS.map((act, i) => (
              <Reveal
                key={act.id}
                as="article"
                direction={i % 2 === 0 ? 'left' : 'right'}
                delay={(i % 2) * 100}
                className="group"
              >
                <div className="card-frame bg-gradient-to-br from-amber-50/70 via-white/50 to-amber-100/60 p-7 sm:p-8">
                  {/* Header row: act number + section count, cleanly inline */}
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-800/80">
                      Act {act.numeral} of IV
                    </p>
                    <span className="whitespace-nowrap rounded-full border border-white/50 bg-black/70 px-3 py-1 text-xs text-white">
                      {act.sections.length} sections
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-4xl text-ink">{act.title}</h2>
                  <p className="mt-1 font-display text-lg italic text-amber-700/90">
                    {act.subtitle}
                  </p>
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-black/75">
                    {act.introduction[0]}
                  </p>

                  {/* Primary figures */}
                  <div className="mt-5 flex flex-wrap items-center gap-1.5">
                    {act.primaryDeities.slice(0, 4).map((figure) => (
                      <span
                        key={figure.name}
                        className="rounded-full border border-amber-700/25 bg-amber-100/50 px-2.5 py-0.5 text-[11px] font-medium text-amber-800"
                      >
                        𓊹 {figure.name}
                      </span>
                    ))}
                    {act.primaryDeities.length > 4 && (
                      <span className="text-[11px] text-muted">
                        +{act.primaryDeities.length - 4} more
                      </span>
                    )}
                  </div>

                  <a
                    href={`#/acts/${act.id}`}
                    className="btn-pill mt-7 px-8 py-3 text-sm"
                    aria-label={`Enter Act ${act.numeral}: ${act.title}`}
                  >
                    Enter Act
                    <span aria-hidden="true" className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Return home */}
          <Reveal direction="up" className="mt-20 text-center">
            <a href="#/home" className="btn-pill px-10 py-3.5 text-sm">
              ← Return to Home
            </a>
          </Reveal>
        </div>
      </main>
    </>
  );
}
