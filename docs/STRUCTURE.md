# Structure

This is a lean redesign scaffold.

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
    SolutionsPage.tsx
    ServicesPage.tsx
    ResearchDevelopmentPage.tsx
    ResourcesPage.tsx
    CompanyPage.tsx
    NotFound.tsx
```

No navbar dropdowns are used. Products, Solutions, Services, Research & Development, Resources, and Company are direct pages. In-page expandable sections are handled by `AccordionList.tsx`.
