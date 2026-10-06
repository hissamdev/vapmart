# Vapmart

## Clone and run

```bash
git clone https://github.com/hissamdev/vapmart.git
cd vapmart
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Routes

- `/` — Home page
- `/collections` — Filterable product catalog
- `/collections?category=Disposables` — Catalog filtered by category. Also supports `Pod Systems`, `E-Liquids`, and `Heated Tobacco`.
- `/products/[slug]` — Product details; slugs come from the catalog.