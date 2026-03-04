# Agents Instructions

## Cursor Cloud specific instructions

### Overview

This is a **Shopify theme** (based on Shopify Horizon v3.1.0) for a store at `p1pmt1-zi.myshopify.com`. There is no build system, no package.json, and no automated test suite. The codebase consists of Liquid templates, JSON config, vanilla CSS, and vanilla JS (Web Components).

### Prerequisites

- **Node.js 18+** and **Shopify CLI** (`@shopify/cli`, `@shopify/theme`) installed globally via npm.
- The environment variable `SHOPIFY_CLI_THEME_TOKEN` must be set with a valid Shopify theme access token (format `shpat_...`). Without it, `shopify theme dev` will fail.

### Key commands

| Task | Command |
|------|---------|
| **Lint** | `shopify theme check --path .` |
| **Dev server** | `shopify theme dev --store p1pmt1-zi.myshopify.com --theme 149021360324 --path .` |
| **Push to dev** | `shopify theme push --store p1pmt1-zi.myshopify.com --theme 149021360324 --path .` |

All commands are run from the repository root (`/workspace`).

### Non-obvious caveats

- `shopify theme dev` requires `SHOPIFY_CLI_THEME_TOKEN` as an **environment variable**. The CLI auto-detects it. You can also pass it explicitly with `--password "$SHOPIFY_CLI_THEME_TOKEN"`.
- The token must be a **Theme Kit Access** token (`shptka_...`) or **Admin API** token (`shpat_...`). App Shared Secrets (`shpss_...`) do **not** work for API calls.
- To verify the token is valid before starting the dev server, run: `shopify theme list --store p1pmt1-zi.myshopify.com --password "$SHOPIFY_CLI_THEME_TOKEN"`. A 401 error means the token is expired or revoked and must be regenerated in Shopify Admin.
- Theme IDs: dev=`149021360324`, main=`148524433604`, live=`148518502596`. See `SHOPIFY_SETUP_GUIDE.md` for the full list (note: the dev theme ID was updated from 148524400836 to 149021360324).
- There are no automated tests. Validation is done via `shopify theme check` (Liquid linter) and visual inspection in the browser.
- `shopify theme check` (linting) works offline without a token. It currently reports ~22 pre-existing warnings/errors (DeprecatedTag, RemoteAsset, MatchingTranslations) — these are existing theme issues.
- The CI/CD pipeline (`.github/workflows/deploy.yml`) deploys on push to `dev`, `main`, or `live` branches. It uses the `SHOPIFY_CLI_THEME_TOKEN` GitHub secret.
- Third-party page builder snippets (Shogun, GemPages, PageFly) exist in the codebase but don't affect core theme functionality.
