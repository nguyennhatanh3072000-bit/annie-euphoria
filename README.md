# annie-euphoria

Annie Reading Room · Magic Shop — Vite + React + TypeScript + Tailwind.

**Live site (Cloudflare Pages):** https://byannietarrot.pages.dev

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

Output is written to `dist/`.

## Deploy (Cloudflare Pages)

The project is configured in `wrangler.toml`: Pages project name `byannietarrot` and build output `dist/`. Wrangler uses that file when you run **`wrangler pages deploy`** with no extra flags (no need to pass `--project-name` or the folder if you deploy from the repo root).

### One-time setup

1. [Install / log in to Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/): `pnpm exec wrangler login` (uses the browser once).
2. The Cloudflare Pages project **`byannietarrot`** must exist under your account. If it does not, create it from the repo root:

   ```bash
   pnpm exec wrangler pages project create byannietarrot --production-branch=main
   ```

### Manual deploy (CLI)

From the repository root, after a production build:

```bash
pnpm build
pnpm exec wrangler pages deploy
```

Wrangler infers the **current Git branch** and attaches it to the deployment. To match the project’s production branch explicitly (usually **`main`**):

```bash
pnpm build
pnpm exec wrangler pages deploy --branch=main
```

If you have **uncommitted** changes, Wrangler warns unless you pass:

```bash
pnpm exec wrangler pages deploy --branch=main --commit-dirty=true
```

Shortcut (build + deploy to production branch):

```bash
pnpm run deploy:pages
```

### Local preview of the built site

```bash
pnpm build
pnpm exec wrangler pages dev dist
```

### Git-based deploys (optional)

In the Cloudflare dashboard you can connect this repository so pushes build and deploy automatically. Use the same build settings:

- **Build command:** `pnpm build`
- **Build output directory:** `dist`

### Custom domains

Add domains under **Workers & Pages → byannietarrot → Custom domains** in the Cloudflare dashboard. No change to `wrangler.toml` is required for DNS-only custom hosts.
