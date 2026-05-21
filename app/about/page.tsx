import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AboutStorySection, CtaSection, MediaFeature, TrustSection, WhyChoose } from "@/components/Sections";
import { aboutStory, heroImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About INMA"
        title="A trusted UAE supplier of premium hotel amenities, linens, and guest room essentials."
        text={aboutStory.intro}
        image={heroImages.amenities}
      />
      <AboutStorySection />
      <TrustSection />
      <MediaFeature />
      <WhyChoose />
      <CtaSection />
    </main>
  );
}
