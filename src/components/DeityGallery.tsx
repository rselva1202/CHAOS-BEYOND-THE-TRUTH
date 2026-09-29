import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { DEITIES } from '../data/deities';

/** Deity gallery: profile cards linking to full story pages (#/god/:id). */
export default function DeityGallery() {
  return (
    <section id="studio" className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
      <SectionHeading
        eyebrow="Pantheon of Gods"
        title="The Great Ennead & Sacred Deities"
        subtitle="Stories and portraits of the divine rulers who presided over Zep Tepi. Open any card to enter the god's full story."
      />

      <div className="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
        {DEITIES.map((deity, i) => {
          const fromLeft = i % 2 === 0;
          return (
            <Reveal
              key={deity.id}
              as="article"
              direction={fromLeft ? 'left' : 'right'}
              delay={(i % 2) * 80}
              className="group"
            >
              <a
                href={`#/god/${deity.id}`}
                className="card-frame block w-full bg-gradient-to-br from-amber-50/40 via-white/20 to-amber-100/30 text-left transition-transform duration-500 ease-out group-hover:-translate-y-1.5"
              >
                {/* Portrait plate — swap for real deity artwork. */}
                <div
                  className={`relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${deity.plate}`}
                >
                  <span
                    aria-hidden="true"
                    className={`font-display text-8xl leading-none text-black/35 drop-shadow-sm transition-transform duration-700 ease-out group-hover:scale-110 ${
                      deity.image ? 'hidden' : ''
                    }`}
                  >
                    {deity.glyph}
                  </span>
                  {deity.image && (
                    <img
                      src={deity.image}
                      alt={`Artwork of ${deity.name}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-4 right-5 font-display text-4xl text-black/15"
                  >
                    {deity.hieroglyph}
                  </span>
                  <span className="absolute left-5 top-5 rounded-full border border-white/50 bg-black/75 px-3 py-1 text-xs text-amber-100">
                    {String(i + 1).padStart(2, '0')} / Ennead
                  </span>
                  <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/50 bg-black/70 px-4 py-1.5 text-xs text-white transition-colors group-hover:bg-black/85">
                    Read the full story
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="font-display text-4xl text-ink">{deity.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-amber-800/80">
                    {deity.epithet}
                  </p>
                  {deity.summary && (
                    <p className="mt-3 text-sm leading-relaxed text-black/70">{deity.summary}</p>
                  )}
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
