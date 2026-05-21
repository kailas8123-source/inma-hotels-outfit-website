import { Hero } from "@/components/Hero";
import {
  AboutStorySection,
  ContactBand,
  CtaSection,
  ProductExperience,
  TrustSection,
  WhyChoose,
} from "@/components/Sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <AboutStorySection />
      <ProductExperience />
      <WhyChoose />
      <ContactBand />
      <CtaSection />
    </main>
  );
}
