import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  cta = "Request Quote",
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  cta?: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-image" aria-hidden="true">
        <img src={image} alt="" />
      </div>
      <div className="page-hero-scrim" aria-hidden="true" />
      <div className="container page-hero-content">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        <Button href="/contact" variant="primary">
          {cta} <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
}
