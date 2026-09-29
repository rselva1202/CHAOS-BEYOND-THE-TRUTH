import Reveal from './Reveal';

/** Chronicles section + site footer. */
export default function ReachUs() {
  return (
    <section id="reach-us" className="relative px-6 pb-14 pt-28 sm:pt-36">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal direction="up">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">04 — Chronicles</p>
        </Reveal>

        <Reveal direction="left" delay={100}>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] text-ink sm:text-7xl">
            Enter the <em className="text-muted">Duat.</em>
          </h2>
        </Reveal>

        <Reveal direction="right" delay={200}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            The hidden one keeps the record. Every scroll, every era, every god
            — preserved beyond the sand.
          </p>
        </Reveal>

        <Reveal direction="up" delay={300}>
          <a
            href="https://github.com/rselva1202"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill mt-12 px-14 py-5 text-base"
          >
            The Hidden One
          </a>
        </Reveal>
      </div>

      <footer className="mx-auto mt-28 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 sm:flex-row">
        <p className="font-display text-xl text-ink">
          KEMET
          <span className="ml-2 font-sans text-[11px] uppercase tracking-[0.32em] text-muted">
            The First Age
          </span>
        </p>
        <p className="text-sm text-muted">© 2026 KEMET. The First Age.</p>
        <div className="flex gap-6 text-sm text-muted">
          <a href="#/home" className="transition-colors hover:text-ink">Back to top</a>
        </div>
      </footer>
    </section>
  );
}
