import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const SCROLLS = [
  {
    title: 'Atum-Ra and the Primeval Waters of Nun',
    excerpt: 'How order was spoken out of the chaotic abyss.',
  },
  {
    title: 'The Separation of Earth and Sky',
    excerpt: 'Shu lifts Nut above Geb to form the boundary of creation.',
  },
  {
    title: 'The Reign of Osiris and the First Golden Age',
    excerpt: 'The myth of prosperity, betrayal, and the underworld.',
  },
  {
    title: 'The Duel of Horus and Set',
    excerpt: 'The clash between divine order (Ma’at) and chaotic violence.',
  },
];

/** Zep Tepi scrolls: the core creation lore, each row sliding in from its own side. */
export default function Journal() {
  return (
    <section id="journal" className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
      <SectionHeading
        eyebrow="Zep Tepi — The First Time"
        title="When Gods Walked the Earth: The Birth of Egypt"
      />

      <div>
        {SCROLLS.map((scroll, i) => (
          <Reveal
            key={scroll.title}
            as="article"
            direction={i % 2 === 0 ? 'left' : 'right'}
            className="group my-3 flex flex-col gap-2 rounded-2xl border border-white/40 bg-white/25 px-5 py-7 transition-colors hover:bg-white/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <div className="flex items-baseline gap-6">
              <span
                aria-hidden="true"
                className="shrink-0 font-display text-xl text-black/30"
              >
                {['I', 'II', 'III', 'IV'][i]}
              </span>
              <div>
                <h3 className="font-display text-2xl text-ink transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                  {scroll.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{scroll.excerpt}</p>
              </div>
            </div>
            <a
              href="#journal"
              className="inline-flex shrink-0 items-center gap-2 self-start text-sm text-ink underline-offset-4 transition-colors hover:text-muted hover:underline sm:self-auto"
            >
              Unroll the scroll
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
