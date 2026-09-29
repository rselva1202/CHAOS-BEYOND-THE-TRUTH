/** Long-form subheading sections for detail pages. */
export interface StorySection {
  heading: string;
  paragraphs: string[];
}

/** Base shape shared by gallery cards and god detail pages. */
export interface DeityStory {
  name: string;
  epithet: string;
  /** Portrait placeholder slot — swap for high-res deity artwork. */
  glyph: string;
  plate: string;
  /** Optional artwork rendered over the gradient plate (cards + detail hero). */
  image?: string;
  /** Optional short summary shown on the gallery card. */
  summary?: string;
  hieroglyph: string;
  symbols: string[];
  cultCenter: string;
}

/** Gallery card data keyed by hash id (#/god/:id). */
export interface Deity extends DeityStory {
  id: string;
  /** Short domain line shown under the name on the detail header. */
  span: string;
  sections: StorySection[];
}

export interface EraDetail {
  id: string;
  name: string;
  short: string;
  span: string;
  tagline: string;
  sections: StorySection[];
  pharaohs: string[];
  developments: string[];
  gods: string[];
  capital: string;
}

export interface LocationDetail {
  id: string;
  name: string;
  ancientName: string;
  epithet: string;
  span: string;
  sections: StorySection[];
  knownFor: string[];
  deities: string[];
  pharaohs: string[];
}
