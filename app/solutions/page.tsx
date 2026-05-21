import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaSection, ProcurementWorkflow, ProductExperience, SolutionsSection, WhyChoose } from "@/components/Sections";
import { heroImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Solutions",
};

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Solutions"
        title="Integrated hotel supply solutions for 4&5-star hospitality operators."
        text="From branded toiletries to luxury towels, bedsheets, guest room accessories, lobby products, and hygiene supplies, INMA structures hotel procurement around quality, speed, and product variety."
        image={heroImages.towels}
        cta="Start a Solution RFQ"
      />
      <SolutionsSection />
      <ProductExperience />
      <ProcurementWorkflow />
      <WhyChoose />
      <CtaSection />
    </main>
  );
}
