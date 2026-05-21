import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactBand, CtaSection, ProcurementWorkflow, SolutionsSection } from "@/components/Sections";
import { heroImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Procurement Services",
};

export default function ProcurementServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Procurement Services"
        title="RFQ handling, product matching, fast delivery, and hotel supply support."
        text="INMA gives hospitality buyers a structured procurement layer for hotel openings, linen replenishment, guest amenities, hygiene programs, and recurring UAE supply."
        image={heroImages.lobby}
        cta="Request Procurement Support"
      />
      <ProcurementWorkflow />
      <SolutionsSection />
      <ContactBand />
      <CtaSection />
    </main>
  );
}
