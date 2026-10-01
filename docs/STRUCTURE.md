# Structure

Website structure follows the Quinfosys Website Navigation specification.

```text
src/
  assets/logo.png
  components/
    AccordionList.tsx
    FadeInSection.tsx
    QuantumDoodleWave.tsx
  data/content.ts
  layout/
    Navbar.tsx
    Footer.tsx
    PageShell.tsx
  pages/
    Home.tsx
    ProductsPage.tsx
    TechnologiesPage.tsx
    IndustriesPage.tsx
    ServicesPage.tsx
    ResearchPage.tsx
    ResourcesPage.tsx
    CompanyPage.tsx
    NotFound.tsx
```

Global navigation: Products | Technologies | Industries | Services | Research | Resources | Company.
The logo links to https://quinfosys.com; there is no separate Home item.

Routes: `/products`, `/technologies`, `/industries`, `/services`, `/research`, `/resources`, `/company`.
`/solutions` redirects to `/industries` and `/research-development` redirects to `/research`.

Solutions are not a primary navigation category. They are presented inside the relevant page:
Quantum Risk Engine (FinTech / Quantum Computing / Quantum AI), Crypto-Agility (Quantum Security and Security Services),
Wise Supply Chain Solutions (Quantum Supply Chain), AI Solutions (Quantum AI and AI Consulting & Development).

No navbar dropdowns are used. In-page expandable sections are handled per page.
