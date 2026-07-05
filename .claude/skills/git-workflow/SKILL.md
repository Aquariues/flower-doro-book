---
name: git-workflow
description: Branching, commit, and PR conventions for flower-doro-book. Use when committing, branching, opening PRs, or asked about git process in this repo.
---

# Git Workflow

## Branches

- `main` — always buildable; deploys come from here.
- Feature work: `feat/<short-slug>` (e.g. `feat/flower-detail-page`).
- Fixes: `fix/<short-slug>`. Chores/docs: `chore/<slug>`, `docs/<slug>`.
- Branch from up-to-date `main`; delete branches after merge.

## Commits

Conventional Commits, imperative mood, subject ≤ 72 chars:

```
feat(book): add rarity filter to flower grid
fix(detail): correct Vietnamese fact ordering
chore: bump framer-motion to 12.x
```

- Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `style`, `test`.
- Scope optional; use the area (`book`, `detail`, `garden`, `api`).
- Body only when "why" isn't obvious from the diff.
- One logical change per commit — don't mix refactor + feature.

## Before committing

```bash
npm run lint && npm run build
```

Both must pass. No committing `node_modules`, `dist`, `.env*`, or editor junk (`.gitignore` covers these — extend it, don't force-add).

## Pull requests

- Target `main`, keep small (ideally < ~400 lines of diff).
- Title = conventional commit style. Description: what + why + screenshot/GIF for UI changes.
- Use `gh pr create`; merge with squash unless commits are individually meaningful.

## Releases

Tags `v<semver>` on `main` only — see the `release` skill.
