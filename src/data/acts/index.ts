import type { Act, ActCrossReference, ActSection } from './types';
import { ACT_ONE } from './act1';
import { ACT_TWO } from './act2';
import { ACT_THREE } from './act3';
import { ACT_FOUR } from './act4';
import { DEITIES } from '../deities';
import { LOCATIONS } from '../locations';
import { ERAS } from '../eras';

export type {
  Act,
  ActSection,
  ActCrossReference,
  ActFigure,
  ActLocationReference,
  ActTimelineReference,
  ActVisual,
} from './types';

/** The Four Acts in canonical, chronological order. */
export const ACTS: Act[] = [ACT_ONE, ACT_TWO, ACT_THREE, ACT_FOUR];

/** Find an act by its hash id (e.g. 'myth-of-osiris'). */
export function getAct(id: string): Act | undefined {
  return ACTS.find((act) => act.id === id);
}

/**
 * The ordered section chain for an act, with previous/next resolved.
 *
 * Explicit `previousSectionId`/`nextSectionId` overrides win when present;
 * otherwise the act's array order defines the reading path. Ids outside the
 * act are dropped so navigation never leaves the act unintentionally.
 */
export function getActSectionsWithNav(act: Act): {
  section: ActSection;
  previous: ActSection | undefined;
  next: ActSection | undefined;
}[] {
  return act.sections.map((section, i) => {
    const byId = (id: string | undefined) =>
      id ? act.sections.find((s) => s.id === id) : undefined;
    return {
      section,
      previous: byId(section.previousSectionId) ?? act.sections[i - 1],
      next: byId(section.nextSectionId) ?? act.sections[i + 1],
    };
  });
}

/** Id → display-name lookups for building cross-reference labels. */
const DEITY_TITLES = new Map(DEITIES.map((d) => [d.id, d.name]));
const LOCATION_TITLES = new Map(LOCATIONS.map((l) => [l.id, l.name]));
const ERA_TITLES = new Map(ERAS.map((e) => [e.id, e.short]));

/**
 * Cross-references from an act into the existing systems (deity profiles,
 * location pages, era pages). Only ids that actually exist in the data layer
 * produce links, so a renamed/removed id degrades gracefully instead of
 * producing a dead route. Deduplicated in first-seen order.
 */
export function getActCrossReferences(act: Act): ActCrossReference[] {
  const refs: ActCrossReference[] = [];
  const seen = new Set<string>();

  const push = (label: string, href: string, kind: ActCrossReference['kind'], detail?: string) => {
    if (seen.has(href)) return;
    seen.add(href);
    refs.push({ label, href, kind, ...(detail ? { detail } : {}) });
  };

  act.relatedDeityIds.forEach((id) => {
    const label = DEITY_TITLES.get(id);
    if (label) push(label, `#/god/${id}`, 'deity');
  });
  act.relatedLocationIds.forEach((id) => {
    const label = LOCATION_TITLES.get(id);
    if (label) push(label, `#/location/${id}`, 'location');
  });
  act.relatedEraIds.forEach((id) => {
    const label = ERA_TITLES.get(id);
    if (label) {
      const mythic = act.historicalReferences.some(
        (r) => r.eraId === id && r.kind === 'mythological-tradition',
      );
      push(label, `#/era/${id}`, 'era', mythic ? 'Mythological Tradition' : 'Historical Context');
    }
  });

  return refs;
}
