---
name: release
description: Cut a release of flower-doro-book — version bump, changelog, tag, GitHub release. Use when the user says "release", "cut a release", "bump version", or "publish a new version".
---

# Release

Release flow for flower-doro-book. Semantic versioning: `MAJOR.MINOR.PATCH`.

## Steps

1. **Preflight** — working tree clean, on `main`, up to date with origin:
   ```bash
   git status --porcelain && git pull --ff-only
   ```
   Abort if dirty or behind.

2. **Verify** — both must pass before anything is tagged:
   ```bash
   npm run lint && npm run build
   ```

3. **Pick version** — inspect commits since last tag:
   ```bash
   git log $(git describe --tags --abbrev=0)..HEAD --oneline
   ```
   - `feat:` commits → minor bump
   - only `fix:`/`chore:`/`docs:` → patch bump
   - breaking change noted in any commit → major bump (confirm with user first)
   - No tags yet → start at `0.1.0`.

4. **Bump** — update `package.json` version (no git tag from npm):
   ```bash
   npm version <new-version> --no-git-tag-version
   ```

5. **Changelog** — prepend a section to `CHANGELOG.md` (create if missing):
   ```markdown
   ## v<version> — <YYYY-MM-DD>
   ### Added / Changed / Fixed
   - one line per user-visible change (skip pure chores)
   ```

6. **Commit, tag, push**:
   ```bash
   git add package.json package-lock.json CHANGELOG.md
   git commit -m "chore(release): v<version>"
   git tag v<version>
   git push origin main --tags
   ```

7. **GitHub release** — body is the new changelog section:
   ```bash
   gh release create v<version> --title "v<version>" --notes-file <(changelog section)
   ```

## Rules

- Never tag with failing lint/build.
- Never rewrite an already-pushed tag.
- If any step fails, stop and report — do not continue the sequence.
