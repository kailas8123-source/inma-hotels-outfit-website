import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaSection, IndustriesSection, ProjectsSection, TrustSection } from "@/components/Sections";
import { heroImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Industries",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industries Served"
        title="Enterprise supply support for hotels, facilities, utilities, and commercial operators."
        text="INMA supports procurement teams across hospitality, restaurants, commercial buildings, facility management, healthcare, corporate offices, utilities, and industrial operations."
        image={heroImages.hotel}
      />
      <IndustriesSection compact />
      <ProjectsSection />
      <TrustSection />
      <CtaSection />
    </main>
  );
}
