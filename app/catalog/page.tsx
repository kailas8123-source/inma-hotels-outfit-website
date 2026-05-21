import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CatalogExperience, ContactBand, CtaSection } from "@/components/Sections";
import { ProductExplorer } from "@/components/ProductExplorer";
import { heroImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Catalog",
};

export default function CatalogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Catalog"
        title="A hotel-supply catalog for amenities, linens, accessories, and hygiene products."
        text="Search INMA product families, download the corporate catalog, and submit an RFQ for branded toiletries, towels, bedsheets, guest room accessories, lobby essentials, or hygiene products."
        image={heroImages.amenities}
        cta="Request Catalog Pricing"
      />
      <CatalogExperience />
      <ProductExplorer />
      <ContactBand />
      <CtaSection />
    </main>
  );
}
