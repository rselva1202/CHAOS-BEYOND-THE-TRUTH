import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { LOCATIONS } from '../data/locations';

/** Era id → display label, mirroring Timeline.tsx. */
const ERA_LABELS: Record<string, string> = {
  'zep-tepi': 'Zep Tepi',
  predynastic: 'Early Dynastic',
  'old-kingdom': 'Old Kingdom',
  'middle-kingdom': 'Middle Kingdom',
  'new-kingdom': 'New Kingdom',
  'late-period': 'Late Period',
  ptolemaic: 'Ptolemaic',
};

/** Card-view projection of the shared location data. */
const REGIONS = LOCATIONS.map((location) => ({
  id: location.id,
  name: location.name,
  ancientName: location.ancientName,
  epithet: location.epithet,
  lore: location.sections[0]?.paragraphs[0] ?? '',
  x: location.x,
  y: location.y,
  era: location.era,
  cult: location.deities,
}));

/** Stylized sacred geography: Nile (Iteru) from Upper Egypt into the Delta. */
function MapFrame({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (id: string) => void;
}) {
  return (
    <svg
      viewBox="0 0 100 130"
      className="h-full w-full"
      role="img"
      aria-label="Stylized map of ancient Egypt showing the sacred cities along the Nile"
    >
      <defs>
        <linearGradient id="landGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5e3bf" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#eed9a8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#e6c88a" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="nileGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7fb2c9" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#4d8aa8" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Mediterranean sea */}
      <path
        d="M0 0 H100 V13 Q75 16 50 14 Q25 12 0 15 Z"
        fill="#a9cfd8"
        opacity="0.55"
      />
      <text x="50" y="8" textAnchor="middle" className="fill-black/40" fontSize="4.2" letterSpacing="0.6">
        THE GREAT GREEN
      </text>

      {/* Lower Egypt — Ta-Mehu, the Delta fan */}
      <path
        d="M22 15 Q38 14 50 15 Q64 14 78 16 L82 30 Q72 38 62 37 Q56 40 50 39 Q44 40 38 37 Q28 38 19 30 Z"
        fill="url(#landGrad)"
        stroke="#b08d4f"
        strokeOpacity="0.35"
        strokeWidth="0.4"
      />
      {/* Delta branches of Iteru */}
      <path d="M53 42 C50 34 46 26 42 18" fill="none" stroke="url(#nileGrad)" strokeWidth="2.2" strokeLinecap="round" opacity="0.55" />
      <path d="M53 42 C54 34 56 26 60 19" fill="none" stroke="url(#nileGrad)" strokeWidth="2.2" strokeLinecap="round" opacity="0.55" />
      <path d="M53 42 C52 34 51 27 51 18" fill="none" stroke="url(#nileGrad)" strokeWidth="2.2" strokeLinecap="round" opacity="0.55" />

      {/* Upper Egypt — Ta-Shemau, the river valley */}
      <path
        d="M19 32 Q30 40 40 47 Q48 56 44 66 Q40 78 44 90 Q48 102 46 112 Q44 121 47 128 L62 128 Q58 118 60 108 Q63 96 58 84 Q53 72 58 60 Q64 50 58 44 Q50 38 46 32 Q38 26 30 24 Q22 26 19 32 Z"
        fill="url(#landGrad)"
        stroke="#b08d4f"
        strokeOpacity="0.35"
        strokeWidth="0.4"
      />

      {/* The Iteru (Nile) proper */}
      <path
        d="M51 17 C51 28 52 36 53 43 C53 52 47 58 46 66 C45 78 48 90 46 100 C45 110 47 120 48 128"
        fill="none"
        stroke="url(#nileGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <text x="66" y="76" className="fill-black/35" fontSize="3.6" letterSpacing="0.5" transform="rotate(78 66 76)">
        ITERU — THE NILE
      </text>

      {/* Eastern desert hills */}
      <path
        d="M70 40 Q76 52 74 66 Q72 82 76 96 Q78 108 74 120"
        fill="none"
        stroke="#c2a06a"
        strokeWidth="0.8"
        strokeOpacity="0.4"
        strokeDasharray="1.6 1.6"
      />
      {/* Western desert — the red land of Set */}
      <path
        d="M12 44 Q8 60 12 76 Q15 92 11 108"
        fill="none"
        stroke="#c98a6a"
        strokeWidth="0.8"
        strokeOpacity="0.4"
        strokeDasharray="1.6 1.6"
      />
      <text x="14" y="26" className="fill-black/35" fontSize="3.4" letterSpacing="0.5" transform="rotate(90 14 26)">
        TA-MEHU
      </text>
      <text x="88" y="52" className="fill-black/35" fontSize="3.4" letterSpacing="0.5" transform="rotate(90 88 52)">
        TA-SHEMAU
      </text>

      {/* Region markers */}
      {REGIONS.map((region) => {
        const isSelected = region.id === selected;
        return (
          <g
            key={region.id}
            transform={`translate(${region.x} ${region.y})`}
            onClick={() => onSelect(region.id)}
            className="cursor-pointer"
            role="button"
            aria-pressed={isSelected}
            aria-label={`${region.name} (${region.ancientName})`}
          >
            {isSelected && (
              <circle r="5.4" fill="#d4a24c" opacity="0.3" className="animate-ping" />
            )}
            <circle
              r={isSelected ? 3.1 : 2.2}
              fill={isSelected ? '#b8860b' : '#8a6d3b'}
              stroke="#fffdf5"
              strokeWidth="0.9"
              className="transition-all duration-300"
            />
            <text
              x="4.6"
              y="1.6"
              fontSize={isSelected ? 4 : 3.4}
              fontWeight={isSelected ? 600 : 400}
              className="fill-black/80 transition-all duration-300"
            >
              {region.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** Sacred realms: interactive map of Kemet + selectable region lore cards. */
export default function KemetMap() {
  const [selected, setSelected] = useState<string>('heliopolis');

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Map of Kemet"
        title="Map of Kemet: Sacred Realms of the Gods"
        subtitle="Explore the ancient cities where the cult centers of the gods were established. Open any location for its full history."
      />

      <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* Illustrative map frame */}
        <Reveal direction="left" className="card-frame bg-amber-50/30 p-4 sm:p-6">
          <MapFrame selected={selected} onSelect={setSelected} />
        </Reveal>

        {/* Region lore cards */}
        <div className="grid content-start gap-5 sm:grid-cols-2">
          {REGIONS.map((region, i) => {
            const isSelected = region.id === selected;
            return (
              <Reveal
                key={region.id}
                direction={i % 2 === 0 ? 'left' : 'right'}
                delay={i * 90}
              >
                <a
                  href={`#/location/${region.id}`}
                  onClick={(e) => {
                    // First click selects on the map; open the page on second
                    // click (or if already selected). Shift-click opens directly.
                    if (isSelected && !e.shiftKey || e.shiftKey) return;
                    e.preventDefault();
                    setSelected(region.id);
                  }}
                  aria-pressed={isSelected}
                  className={`card-frame block h-full w-full p-6 text-left transition-all duration-300 ${
                    isSelected
                      ? 'border-amber-500/60 bg-amber-100/45 shadow-[0_22px_70px_-28px_rgba(180,130,40,0.55)]'
                      : 'bg-white/25 hover:bg-white/40'
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-800/80">
                    {region.ancientName}
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-ink">{region.name}</h3>
                  <p className="mt-0.5 font-display text-lg italic text-amber-700/90">
                    “{region.epithet}”
                  </p>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-black/75">{region.lore}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    <span className="rounded-full border border-amber-700/25 bg-amber-100/50 px-2.5 py-0.5 text-[11px] font-medium text-amber-800">
                      𓊖 {ERA_LABELS[region.era]}
                    </span>
                    {region.cult.map((god) => (
                      <span
                        key={god}
                        className="rounded-full border border-white/50 bg-white/40 px-2.5 py-0.5 text-[11px] text-black/70"
                      >
                        𓊹 {god}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
