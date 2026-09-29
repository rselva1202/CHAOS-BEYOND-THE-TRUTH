import type { ReactNode } from 'react';

interface Fact {
  label: string;
  items: string[];
  glyph: string;
}

/**
 * Full-page reading layout shared by era / god / location pages: prominent
 * back button, hero header, subheaded long-form text, key-facts sidebar.
 */
export default function DetailShell({
  eyebrow,
  title,
  tagline,
  span,
  plate,
  glyph,
  hieroglyph,
  image,
  facts,
  children,
}: {
  eyebrow: string;
  title: string;
  tagline: string;
  span: string;
  plate: string;
  glyph: string;
  hieroglyph: string;
  image?: string;
  facts: Fact[];
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-28">
        <a
          href="#/home"
          className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-5 py-2.5 text-sm text-ink backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:bg-white/60"
        >
          <span aria-hidden="true">←</span> Back to Dashboard
        </a>

        {/* Hero header */}
        <header
          className={`card-frame relative mt-8 flex aspect-[21/9] max-h-[380px] items-center justify-center overflow-hidden bg-gradient-to-br sm:aspect-[21/7] ${plate}`}
        >
          {image && (
            <img
              src={image}
              alt={`Artwork of ${title}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <span aria-hidden="true" className={`font-display text-[9rem] leading-none text-black/20 ${image ? 'hidden' : ''}`}>
            {glyph}
          </span>
          <span aria-hidden="true" className="absolute bottom-6 right-8 font-display text-7xl text-black/10">
            {hieroglyph}
          </span>
        </header>

        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-800/80">{eyebrow}</p>
          <h1 className="mt-3 font-display text-5xl text-ink sm:text-6xl">{title}</h1>
          <p className="mt-2 font-display text-xl italic text-amber-700/90">{tagline}</p>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted">{span}</p>
        </div>
      </div>

      {/* Body: story + facts sidebar */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]">
        <article className="space-y-10">
          {children}
        </article>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          {facts.map((fact) => (
            <div key={fact.label} className="card-frame bg-amber-50/35 p-6">
              <h2 className="text-xs uppercase tracking-[0.25em] text-amber-800">
                <span aria-hidden="true" className="mr-2">{fact.glyph}</span>
                {fact.label}
              </h2>
              <ul className="mt-3 space-y-1.5">
                {fact.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-2 text-sm text-black/80">
                    <span aria-hidden="true" className="text-amber-700">𓋹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

/** One subheaded story block. */
export function StoryBlock({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs: string[];
}) {
  return (
    <section>
      <h2 className="font-display text-3xl text-ink">{heading}</h2>
      <div className="mt-3 h-px w-20 bg-gradient-to-r from-amber-600/70 to-transparent" />
      <div className="mt-4 space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="text-[15px] leading-relaxed text-black/80">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
