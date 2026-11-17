# Zynera Connect website

Marketing site for https://zyneraconnect.com built with **React 18 + Vite + React Router**. It compiles to plain static files, so it hosts for free on S3 + CloudFront and can grow later (blog, CMS, client portal, i18n) without a rewrite.

## Run it

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production files in /dist
```

## Where to edit

| What | File |
|---|---|
| Phone, email, LinkedIn, form key | `src/config.js` |
| All service, stats, industries and job copy | `src/data/content.js` |
| Colors, fonts, spacing | `src/styles.css` (tokens at the top) |
| Pages | `src/pages/` (Home, Services, About, Careers, Contact, NotFound) |
| Header and footer | `src/components/Layout.jsx` |

To post a job, add an entry to `jobs` in `src/data/content.js` and push. Set `jobs = []` to show only the talent network form.

## Pages

`/` Home · `/services` (with anchors per vertical, e.g. `/services#teams-on-demand`) · `/about` · `/careers` · `/contact` (accepts `?service=Teams%20on%20Demand` to preselect)

## Deploy

See **DEPLOY.md** for the step by step AWS setup (S3 + CloudFront Free plan + ACM + GitHub Actions).
