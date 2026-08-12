# Cab Driver Website

A premium, minimal single-page site for an individual local cab driver — built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

## Customize

All real content lives in two files — edit these first:

- `src/data/driver.js` — name, tagline, photo, phone, WhatsApp number, email, service area, languages, availability.
- `src/data/vehicles.js` — the vehicle fleet. Add, remove, or edit entries; the Fleet section renders whatever's in the array.

Swap the placeholder `picsum.photos` image URLs for real photos of the driver and vehicles.

## Structure

```
src/
  components/   Hero, About, Fleet, VehicleCard, Contact, Footer, NavBar, CtaButtons, RouteLine
  data/         driver.js, vehicles.js  (the only files you need to touch for content)
  index.css     design tokens (colors, fonts) via Tailwind v4 @theme
```

## Design notes

- **Signature element**: a thin route line runs down the page (desktop only) and draws itself in as you scroll — a nod to a trip unfolding on a map. Purely decorative, respects `prefers-reduced-motion`.
- **Palette**: warm paper white, deep ink-blue for text/primary, emerald for accent/actions — kept deliberately restrained.
- **Type**: Manrope for headings, Inter for body and data (seats, luggage, etc. use tabular figures).

## Built for scale

- `data/driver.js` is a single object today, but shaped so it can become an array of drivers without touching component code.
- `data/vehicles.js` is already an array — search, filters, and categories can filter this array directly.
- Components are presentational and take data as props, so wiring in a real backend/API later is a data-layer change, not a rewrite.
