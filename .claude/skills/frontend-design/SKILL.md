---
name: frontend-design
description: Design language for the FlowerDoro Book UI — palette, typography, layout, animation rules. Read before building or restyling any page, component, or animation in this app.
---

# FlowerDoro Book — Design Language

The app is a botanical field book: warm, calm, paper-like. It should feel like flipping through a beautifully illustrated encyclopedia, not a dashboard.

## Palette

Defined as Tailwind v4 theme tokens in `src/index.css` (`@theme`). Core roles:

- **Paper** — warm cream background (`--color-paper`, ~`#faf6ee`), slightly darker panels (`--color-paper-deep`).
- **Ink** — soft dark brown-green for text (`--color-ink`, ~`#2d3a2e`), muted variant for secondary text.
- **Leaf** — desaturated green accent (`--color-leaf`) for progress, active states.
- **Bloom** — one warm accent (`--color-bloom`, rose/terracotta) used sparingly: highlights, rarity badges, unlock moments.
- Dark mode: deep moss/charcoal paper, cream ink — keep the botanical warmth, never pure black/white.

Rarity colors: `common` = leaf, `uncommon` = sky blue, `rare` = violet, `legendary` = gold. Use tinted badges, not full-saturation fills.

## Typography

- Display/headings: serif (Georgia / `font-serif` stack) — encyclopedia character.
- Body/UI: system sans.
- Flower names: serif, generous size; scientific/secondary names italic and muted.

## Layout

- Book grid: responsive card grid (2 cols mobile → 5-6 desktop), cards with soft rounded corners (`rounded-2xl`), subtle borders instead of heavy shadows.
- Detail view: large flower art on one side, name + description + facts as "field notes" on the other; stacks vertically on mobile.
- Locked flowers: silhouette/desaturated art, muted card, small lock affordance — still visible so the collection feels explorable.

## Animation (Framer Motion)

- Grid entrance: stagger children (~0.03s per card), fade + slight rise (`y: 8 → 0`).
- Card hover: gentle scale (≤1.03) + art sway; never bounce.
- Detail open: shared-layout transition from card to detail (layoutId per flower kind) when feasible, else crossfade + scale.
- Unlock moment: petal/bloom reveal — this is the one place exuberant animation is welcome.
- Durations 0.2–0.5s, easing `easeOut`/spring with low stiffness. Nothing loops forever except very subtle ambient sway.
- Always respect `prefers-reduced-motion`: disable stagger/sway, keep instant fades.

## Quality bar

- Flower art: highest quality available — inline SVG illustrations or high-res assets keyed by `asset_name`. No emoji as final art (placeholder only, flagged with a TODO).
- Copy: botanically accurate, bilingual EN/VI, never lorem ipsum in committed code.
- Every interactive element needs hover, focus-visible, and active states.
