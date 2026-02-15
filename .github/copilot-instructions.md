# Copilot instructions — lab34.github.io

Purpose
This file gives repository-specific information Copilot sessions should use when writing or modifying code in this repo.

Build / Test / Lint
- Dev server (local): `npm run dev`  — runs `next dev` (also: `yarn dev`).
- Build (production): `npm run build` — runs `next build`.
- Start (production): `npm run start` — runs `next start` after a build.
- Lint: `npm run lint` — runs Next.js ESLint (`next lint`) using `eslint-config-next`.
- Tests: no test script is configured in package.json. If a test runner is added (e.g., Jest), run a single test with:

  - `npx jest path/to/file.test.js` (run one file)
  - `npx jest -t "test name"` (run a single test matching name)

High-level architecture
- Framework: Next.js app scaffolded with `create-next-app`.
- Routing:
  - `pages/` → file-based page routes. Edit `pages/index.js` for the homepage.
  - `pages/_app.js` → global app wrapper (providers/layouts).
  - `pages/api/*` → serverless API routes mapped to `/api/*` (edit files in `pages/api`).
- Static assets: `public/` (served at `/`).
- Styling: `styles/globals.css` for global rules; `*.module.css` (e.g., `Home.module.css`) for component-scoped CSS Modules.
- Config: `next.config.js` enables `reactStrictMode: true` (project uses Next 12 + React 18 per package.json).
- Deployment: README references Vercel as the standard deployment target.

Key conventions (repo-specific)
- Put page components in `pages/` and API handlers in `pages/api/`; export default functions for API handlers.
- Use CSS Modules for component styles (`<Name>.module.css`) and `globals.css` for global styles.
- Use `npm run lint` to check code style against `eslint-config-next` before major commits.
- No test or CI configuration detected—add `__tests__/` or a test/ folder and CI workflows under `.github/workflows` if needed.
- Consider adding a `components/` directory for shared components if the project grows beyond a few pages.

Files and docs
- README.md contains the default `create-next-app` Getting Started instructions (dev/build/start) and Vercel deployment note; the relevant commands are listed above.
- No CLAUDE.md, AGENTS.md, .cursorrules, .windsurfrules, CONVENTIONS.md, AIDER_CONVENTIONS.md, or similar AI-assistant config files were found at the repo root.

What Copilot should prioritize
- Generate page files under `pages/` and API handlers under `pages/api/` following Next.js file-based conventions.
- Prefer `*.module.css` for component-local styles and `globals.css` for site-wide rules.
- Avoid suggesting changes to `next.config.js` or dependency upgrades without an explicit migration plan.

If you want more coverage
- Add CI workflows and a test-runner config (Jest/Playwright) and this file can be extended with exact commands (including single-test invocation examples) and CI instructions.

