import type { StorySection } from '../types';

/**
 * THE FOUR ACTS — narrative layer types.
 *
 * The Acts are a storytelling system that sits ON TOP of the existing data
 * (deities, eras, locations). They never replace those systems: every figure,
 * place, or period mentioned in an act links back to its existing profile
 * page via the *Reference helpers below, which mirror the href conventions
 * already used across the app (`#/god/:id`, `#/location/:id`, `#/era/:id`).
 */

/** A named figure inside a section (deity, pharaoh, or person). */
export interface ActFigure {
  /** Display name, e.g. 'Nun' or 'Cleopatra VII'. */
  name: string;
  /** One-line role within this section, e.g. 'the primeval waters'. */
  role: string;
  /** Existing deity id in src/data/deities.ts, when the figure has a profile. */
  deityId?: string;
}

/** A place mentioned in a section. */
export interface ActLocationReference {
  /** Display name, e.g. 'Heliopolis'. */
  name: string;
  /** Why this place matters in this section. */
  significance: string;
  /** Existing location id in src/data/locations.ts, when one exists. */
  locationId?: string;
}

/**
 * A historical period this section touches (or, for Act IV, embodies).
 *
 * `kind` distinguishes mythic references (Zep Tepi, the Contendings) from
 * genuinely historical ones (the New Kingdom, the Ptolemaic dynasty) so the
 * UI can label mythological tradition honestly rather than implying dates.
 */
export interface ActTimelineReference {
  /** Display label, e.g. 'New Kingdom'. */
  name: string;
  /** How the section relates to the period. */
  relevance: string;
  /** Whether this is mythic tradition or documented historical context. */
  kind: 'mythological-tradition' | 'historical-context';
  /** Existing era id in src/data/eras.ts, when one exists. */
  eraId?: string;
}

/**
 * An outbound link to any existing page, rendered as a "Continue reading" chip.
 */
export interface ActCrossReference {
  label: string;
  /** Hash href following existing conventions, e.g. `#/god/osiris`. */
  href: string;
  /** Kind of destination, for iconography/eyebrows. */
  kind: 'deity' | 'era' | 'location';
  /** Optional myth-vs-history qualifier shown on era chips. */
  detail?: string;
}

/** Visual/hero metadata, mirroring the Deity `plate`/`image` conventions. */
export interface ActVisual {
  /** Tailwind gradient classes for the hero plate (bg-gradient-to-br …). */
  plate: string;
  /** Large decorative Egyptian glyph shown on the plate. */
  glyph: string;
  /** Optional artwork path under public/, rendered over the plate. */
  image?: string;
  /** Optional hieroglyph strip used as a watermark. */
  hieroglyph?: string;
}

/**
 * One numbered section (chapter beat) inside an act.
 *
 * Navigation (previous/next) is NOT stored by hand: `index.ts` derives the
 * ordered chain from the act's `sections` array, so authors only maintain
 * the list order. The fields below remain in the model so future phases
 * can override a derived link if a narrative ever demands a non-linear order.
 */
export interface ActSection {
  id: string;
  title: string;
  /** One-line teaser shown on hub cards and section rails. */
  shortDescription: string;
  /** Full narrative — complete prose, structured like Deity sections. */
  narrative: StorySection[];
  /** Figures involved in this beat. */
  figures: ActFigure[];
  places: ActLocationReference[];
  timeline: ActTimelineReference[];
  /** Explicit override for the previous section id (derived by default). */
  previousSectionId?: string;
  /** Explicit override for the next section id (derived by default). */
  nextSectionId?: string;
  /** Related existing deity profile ids. */
  relatedDeityIds: string[];
  /** Related existing location page ids. */
  relatedLocationIds: string[];
  /** Related existing era page ids. */
  relatedEraIds: string[];
  /** Optional per-section visual overrides (falls back to the act's). */
  visual?: ActVisual;
}

/** One of the Four Acts — a full narrative arc. */
export interface Act {
  id: string;
  /** 1-based act number (I–IV). */
  actNumber: 1 | 2 | 3 | 4;
  /** Roman numeral display form, e.g. 'I'. */
  numeral: string;
  title: string;
  subtitle: string;
  /** 1–2 paragraph introduction shown on the act page before section I. */
  introduction: string[];
  /** Ordered narrative beats. */
  sections: ActSection[];
  /** Position of this act in the overall cycle (equals actNumber). */
  chronologicalPosition: number;
  /** Deities whose myths drive this act. */
  primaryDeities: ActFigure[];
  /** Historical periods the act spans or retells. */
  historicalReferences: ActTimelineReference[];
  /** Thematic keywords for future search/filter UI. */
  keywords: string[];
  relatedDeityIds: string[];
  relatedLocationIds: string[];
  relatedEraIds: string[];
  visual: ActVisual;
}
