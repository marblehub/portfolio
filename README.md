# Research Portfolio

Personal research portfolio for **Whyte Goodfriend M.**, focused on solar
photovoltaics, machine learning, data quality, and applied energy analytics.

[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Live-4285F4?style=for-the-badge)](https://marblehub.github.io/portfolio/)
[![Vercel](https://img.shields.io/badge/Vercel-Live-34A853?style=for-the-badge)](https://portfolio-silk-two-18.vercel.app/)

## Overview

The site presents research experience, publications, and software projects at
the intersection of photovoltaic systems and data science. It is designed as a
fast, accessible static website that can be deployed consistently to GitHub
Pages and Vercel.

## Highlights

- Research experience in photovoltaic system modeling and outdoor PV analysis
- Peer-reviewed publications and conference contributions
- Machine-learning projects for forecasting, anomaly detection, and data quality
- Applied AI tools with provenance, citations, and domain-specific workflows
- Public-safe downloadable CV
- Responsive project previews and social-sharing metadata

## Technology

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Static export for GitHub Pages
- GitHub Actions deployment

## Project Structure

```text
src/app/          Pages, metadata, sitemap, and robots configuration
src/components/   Shared navigation, layout, and project components
src/lib/          Site path helpers
public/previews/  Project preview images
public/           Social image and public-safe CV
.github/workflows GitHub Pages deployment workflow
```

## Local Development

Requirements: Node.js 24 and npm.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000` in a browser.

## Quality Checks

```bash
npm run lint
npm run build
```

The production build is exported to `out/`.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in
`.github/workflows/pages.yml`. The workflow installs dependencies, creates the
static export, and publishes it to GitHub Pages.

The Next.js configuration automatically applies the `/portfolio` base path
during the GitHub Actions build while keeping local and Vercel routes unchanged.

## Privacy

Only a public-safe CV is included in this repository. Private contact details
and private source documents are intentionally excluded from version control.
