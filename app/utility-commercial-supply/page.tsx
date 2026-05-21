import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactBand, CtaSection, IndustriesSection, ProductExperience, WhyChoose } from "@/components/Sections";
import { heroImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Utility & Commercial Supply",
};

export default function UtilityCommercialSupplyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Utility & Commercial Supply"
        title="Commercial trading and utility-sector supply for demanding operations."
        text="A practical, enterprise-grade supply model for facility support products, industrial consumables, utility operations, and commercial buildings."
        image={heroImages.industrial}
        cta="Discuss Supply Needs"
      />
      <IndustriesSection compact />
      <ProductExperience />
      <WhyChoose />
      <ContactBand />
      <CtaSection />
    </main>
  );
}
