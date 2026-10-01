# Quinfosys Clean Redesign Scaffold

A lean Vite + React + TypeScript + Tailwind scaffold for the Quinfosys website redesign.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

GitHub Actions FTP deployment is included at `.github/workflows/deploy-ftp.yml`. See `docs/DEPLOYMENT_CRAZY_DOMAINS.md` for the Crazy Domains path setup.

## Design notes

- Homepage keeps the provided sticky black/white animation structure.
- Navbar is white because the Quinfosys logo text is black.
- There are no navbar dropdowns.
- Products, Technologies, Industries, Services, Research, and Resources follow the Quinfosys Website Navigation specification. Solutions are shown inside the relevant Industry, Technology, or Service pages, not as a primary navigation item.
- The footer is concise and white.
