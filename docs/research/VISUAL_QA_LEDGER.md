# INMA Hotels Outfit LLC Visual QA Ledger

Date: 2026-05-22
Website root: `C:\Users\Admin\Documents\New project 5`
Local URL: `http://127.0.0.1:3000`

## Evidence

- Desktop screenshot: `artifacts/inma-qa/desktop-1440-slow-revealed.png`
- Mobile screenshot: `artifacts/inma-qa/mobile-390-slow-revealed.png`
- Products search screenshot: `artifacts/inma-qa/products-search-1280.png`

## Checks

1. Copy and hierarchy: hero headline, subheading, CTAs, trust metrics, industries, solutions, products, workflow, projects, CTA, and contact sections are present.
2. Palette: white, ivory, charcoal, deep navy, metallic gold/silver accents, and frosted glass treatments match the premium UAE corporate direction.
3. Typography: large editorial headings, compact uppercase labels, restrained paragraph widths, and readable mobile sizing are implemented.
4. Assets: visual system uses hospitality, logistics, commercial, and industrial photography, plus a custom INMA SVG logo.
5. Motion: Framer Motion reveal/stagger transitions and GSAP mouse-reactive hero lighting are active, with reduced-motion CSS support.
6. Responsive behavior: verified at 1440 x 1000 and 390 x 844 with no horizontal overflow.
7. Interactions: search overlay, RFQ modal, product search filtering, WhatsApp links, sticky navigation, and catalog download were tested.
8. Forms: RFQ/contact forms submit client-side and show a confirmation state.
9. Catalog: `/api/catalog` returns `application/pdf` with a downloadable corporate catalog.
10. Console: Playwright interaction pass found no browser console errors.

## Notes

- The named 9assets export kit was not present, so the build uses a new local logo asset and remote photography instead of a supplied asset manifest.
- Full-page screenshots require a scroll-through before capture because section reveals are scroll-triggered.
