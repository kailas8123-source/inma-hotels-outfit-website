import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactBand, CtaSection } from "@/components/Sections";
import { heroImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact INMA"
        title="Start a hotel amenities and linen supply conversation with INMA."
        text="Send your RFQ, product list, quantities, UAE location, preferred brands, and timeline. INMA will respond with hospitality supply direction and delivery support."
        image={heroImages.lobby}
        cta="Submit RFQ"
      />
      <ContactBand />
      <CtaSection />
    </main>
  );
}
