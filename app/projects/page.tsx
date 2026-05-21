import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaSection, ProjectsSection, TrustSection, WhyChoose } from "@/components/Sections";
import { heroImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Projects"
        title="Representative hotel supply programs across UAE hospitality operations."
        text="INMA structures supply around hotel openings, linen replenishment, guest amenity programs, hygiene operations, same-day needs, and 48-hour delivery schedules."
        image={heroImages.towels}
      />
      <ProjectsSection />
      <TrustSection />
      <WhyChoose />
      <CtaSection />
    </main>
  );
}
