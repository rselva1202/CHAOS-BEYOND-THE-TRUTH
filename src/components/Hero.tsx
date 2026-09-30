/** Fullscreen hero: serif headline, pill CTA, scroll cue. */
export default function Hero() {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center px-6 pb-40 text-center"
      style={{ paddingTop: 'calc(8rem - 75px)' }}
    >
      <h1
        className="animate-fade-rise max-w-7xl font-display text-5xl font-normal text-ink sm:text-7xl md:text-8xl"
        style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}
      >
        KEMET
      </h1>

      <div className="animate-fade-rise-delay-2 mt-12 flex flex-col items-center gap-4 sm:flex-row">
        <a href="#/acts" className="btn-pill px-14 py-5 text-base">
          ENTER THE STORY
        </a>
        <a
          href="#/home#studio"
          className="rounded-full border border-amber-700/30 bg-white/40 px-10 py-5 text-base text-ink backdrop-blur-sm transition-colors hover:bg-amber-100/60"
        >
          Begin Journey
        </a>
      </div>
      <p className="animate-fade-rise-delay-2 mt-5 text-xs uppercase tracking-[0.3em] text-muted">
        One cosmic story — told in four acts
      </p>

      <a
        href="#studio"
        aria-label="Scroll to the Pantheon section"
        className="animate-fade-rise mt-16 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted transition-colors hover:text-ink"
        style={{ animationDelay: '0.6s' }}
      >
        Scroll
        <span aria-hidden="true" className="animate-bounce text-base">
          ↓
        </span>
      </a>
    </section>
  );
}
