# KEMET: The First Age — Interactive History SPA

Hash-routed single-page application (React + Vite + Tailwind CSS v4 +
TypeScript) serving as an interactive journal and historical database for
Ancient Egypt, with a looping ambient desert video behind the dashboard.

## Routes

- `#/home` — dashboard: hero, deity grid, timeline, map, scrolls, chronicles
- `#/era/:id` — full-page era article (e.g. `#/era/new-kingdom`)
- `#/god/:id` — full-page deity story (e.g. `#/god/isis`)
- `#/location/:id` — full-page site history (e.g. `#/location/amarna`)

Every detail page has a **← Back to Dashboard** button, a hero header, an
`animate-fade-in` page transition, scroll-to-top on navigation, long-form
subheaded sections, and a key-facts sidebar (capital, pharaohs, deities,
symbols).

## Data layer

All historical content lives in [src/data](src/data) (`eras.ts`,
`deities.ts`, `locations.ts`, `types.ts`) — 7 eras, 9 deities, and 7 sacred
locations, each with multi-paragraph subheaded stories. The dashboard's
timeline tabs, deity cards, and map cards link into the detail routes; the
map's marker↔card selection sync is retained.

## Stack

- **React 19** + **Vite 8** + **TypeScript** (strict)
- **Tailwind CSS v4** via `@tailwindcss/vite` (CSS-first config in `src/styles/theme.css`)
- Fonts: **Instrument Serif** (display) & **Inter** (body), imported in `src/styles/fonts.css`

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # typecheck + production build
npm run preview  # serve the production build
```

## The background video

The ambient loop lives at `public/aethera-loop.mp4` (~24 MB, **2:33.5** — the
final minute of the source clip is trimmed, audio removed, `+faststart`). It
is self-hosted rather than hot-linked from
[Google Drive](https://drive.google.com/file/d/1FE48vWZZeSGzHeA9gglBrMWAjOb2nvzu/view?t=4.668)
because Drive serves hot-linked `<video>` requests unreliably (UA/consent
interstitials that break media parsing).

If the file is missing (e.g. a fresh clone without the binary), either:

```bash
node scripts/fetch-video.mjs   # re-downloads it from Drive + applies the trim
```

or rely on the runtime fallback in
[src/hooks/useVideoFadeLoop.ts](src/hooks/useVideoFadeLoop.ts), which
transparently retries the Drive URL if the local file 404s.

## Custom loop & fade logic

[src/hooks/useVideoFadeLoop.ts](src/hooks/useVideoFadeLoop.ts) drives a
seamless manual loop:

- `requestAnimationFrame` monitors `currentTime` / `duration` every frame and
  maps playback position to opacity (a `timeupdate` listener covers throttled
  background tabs, where rAF is starved).
- Fade in over **0.5s** at the start; fade out over the final **0.5s**.
- On `ended`: set opacity to 0, wait **100ms**, reset `currentTime = 0`, then
  `play()` again.

## Layout

- Video layer (`z-0`): `fixed` full-viewport `object-cover` backdrop behind
  the whole site, with a `bg-gradient-to-b from-background via-background/40
  to-background` veil; content sections float on a frosted `.glass-section`.
- Navbar & hero (`z-10`): normal flow above the video.
- Sections: **DeityGallery** (nine god profile cards opening full-story modal
  readers), the interactive **Timeline** (seven eras with narratives,
  pharaohs, developments, and gods), the cross-linked **KemetMap** (stylized
  SVG Egypt — 7 clickable sacred cities, each tagged with its era and cult
  deities), the **Zep Tepi** creation scrolls, and a **Chronicles** contact
  finale.
