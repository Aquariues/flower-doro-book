# Agent Guide — FlowerDoro Book

Frontend for the FlowerDoro flower encyclopedia. Read `CLAUDE.md` for full project context; this file is the quick contract for any coding agent.

## Do

- Run `npm run build` before declaring work done — it typechecks and builds.
- Keep TypeScript types in `src/types.ts` aligned with backend JSON in `../flower-doro-api/internal/models/models.go`.
- Use Tailwind v4 utilities + theme tokens from `src/index.css`; use Framer Motion for animation.
- Preserve bilingual (EN/VI) content paths — never hardcode a single language into a component.
- Keep flower information botanically accurate.

## Don't

- Don't add a `tailwind.config.js` — Tailwind v4 is configured in CSS.
- Don't invent flower facts or rarity values.
- Don't commit directly to `main` for feature work — see the `git-workflow` skill.
- Don't add heavy dependencies (UI kits, icon mega-packs) without asking; the app should stay light.

## Verify

- `npm run dev` then check the affected page renders and animates.
- `npm run lint` and `npm run build` both pass.
