import type { Metadata } from "next";
import { ProductExplorer } from "@/components/ProductExplorer";
import { PageHero } from "@/components/PageHero";
import { CatalogExperience, CtaSection } from "@/components/Sections";
import { heroImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Products"
        title="Premium hotel amenities, linens, accessories, and hygiene products."
        text="Explore INMA product families across branded toiletries, luxury towels, bedsheets, guest room accessories, lobby accessories, and daily hygiene supplies."
        image={heroImages.amenities}
        cta="Send Product Inquiry"
      />
      <ProductExplorer />
      <CatalogExperience />
      <CtaSection />
    </main>
  );
}
