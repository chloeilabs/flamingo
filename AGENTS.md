<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This is a single Next.js 16 app (package `flamingo`) using shadcn/ui, Tailwind v4, and pnpm. There is no backend, database, or test suite.

- Package manager is pnpm (`pnpm-lock.yaml`). The startup update script already runs `pnpm install`.
- Run the dev server with `pnpm dev` (Next.js + Turbopack, serves on http://localhost:3000). Use a long-lived terminal (e.g. tmux) since it stays running.
- Other scripts: `pnpm lint` (ESLint), `pnpm typecheck` (`tsc --noEmit`), `pnpm build` (production build). `pnpm dev` is the development command; do not use `pnpm build`/`pnpm start` for dev work.
- Lint currently reports one pre-existing warning (`'Geist' is defined but never used` in `app/layout.tsx`); it is not an error.
- Dark mode is toggled in the UI by pressing the `d` key (via `next-themes`).
