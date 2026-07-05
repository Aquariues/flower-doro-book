# FlowerDoro Book

Frontend web app for the FlowerDoro flower encyclopedia ("flower book"). FlowerDoro is a focus/pomodoro app where completed focus sessions reward the user with flowers collected in a garden and a book. This app is the book: a beautiful, animated reference where users browse flowers, learn real facts about them, and see their collection progress.

## Product goals

- Book-quality presentation: high-quality flower art, smooth page/reveal animations, botanically correct information.
- Bilingual content: English and Vietnamese (BE stores both; default locale is `vi`).
- Collection awareness: locked vs unlocked flowers, collected counts, rarity.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no tailwind.config file; theme lives in `src/index.css` under `@theme`)
- Framer Motion for animations

## Commands

- `npm run dev` — dev server (proxies `/api` → `http://localhost:8080`)
- `npm run build` — typecheck + production build
- `npm run lint` — oxlint

## Backend

Go/Gin API in sibling repo `../flower-doro-api` (default `:8080`). Relevant endpoints:

- `GET /api/v1/flowers` — full catalog, ordered by `sort_order`
- `GET /api/v1/flowers/:kind` — one flower
- `GET /api/v1/users/:id/flower-book` — catalog + per-user `unlocked` / `collected_count`

Flower shape (see `../flower-doro-api/internal/models/models.go`):
`kind` (slug, unique), `sort_order`, `english_name`, `vietnamese_name`, `english_description`, `vietnamese_description`, `english_fact_1..3`, `vietnamese_fact_1..3`, `rarity` (default `common`), `asset_name`.

~90 flowers are seeded (daisy, rose, sunflower, tulip, lotus, lavender, orchid, …). During UI development, `src/data/flowers.ts` holds a representative sample; production reads from the API.

## Conventions

- Components in `src/components/`, one component per file, PascalCase filenames.
- Shared types in `src/types.ts` — keep field names matching the BE JSON tags exactly.
- Animations: prefer Framer Motion variants over ad-hoc CSS transitions; respect `prefers-reduced-motion`.
- Flower facts and descriptions must stay botanically accurate — do not invent facts when adding content.

## Skills

- `release` — version bump, changelog, tag, GitHub release
- `frontend-design` — design language, palette, animation guidelines for this app
- `git-workflow` — branching, commit, and PR conventions
