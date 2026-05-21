import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactBand, CtaSection, ProductExperience, ProjectsSection } from "@/components/Sections";
import { heroImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Hospitality Solutions",
};

export default function HospitalitySolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Hospitality Solutions"
        title="Hotel outfitting and amenity supply for refined guest environments."
        text="INMA supports boutique hotels, luxury resorts, restaurants, and serviced properties with branded toiletries, premium linens, guestroom accessories, lobby accessories, and hygiene products."
        image={heroImages.bedding}
        cta="Plan Hospitality Supply"
      />
      <ProductExperience />
      <ProjectsSection />
      <ContactBand />
      <CtaSection />
    </main>
  );
}
