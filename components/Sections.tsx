"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Download, Search } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal, Stagger, staggerItem } from "@/components/Motion";
import {
  aboutStory,
  advantages,
  company,
  heroImages,
  industries,
  productCategories,
  projects,
  solutions,
  trustMarks,
  workflow,
} from "@/lib/site-data";
import { InquiryForm } from "@/components/InquiryForm";

export function SectionHeader({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className={dark ? "section-head dark" : "section-head"}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {text ? <p>{text}</p> : null}
    </Reveal>
  );
}

export function TrustSection() {
  return (
    <section className="section trust-section">
      <div className="container trust-grid">
        {trustMarks.map((item) => (
          <Reveal key={item.title} className="trust-item">
            <item.icon size={24} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function IndustriesSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "section compact" : "section ivory"}>
      <div className="container">
        <SectionHeader
          eyebrow="Industries Served"
          title="Designed for hotel teams that need premium supplies without delivery uncertainty."
          text="INMA supports boutique hotels, luxury resorts, restaurants, serviced apartments, and hospitality teams where product quality and speed matter."
        />
        <Stagger className="industry-grid">
          {industries.map((item) => (
            <motion.article className="industry-card" key={item.title} variants={staggerItem}>
              <item.icon size={24} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function SolutionsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Solutions"
          title="A clean operating layer for hotel amenities, linens, accessories, and hygiene supply."
          text="Every solution is structured to help hospitality buyers source premium products quickly, affordably, and with dependable UAE delivery."
        />
        <div className="solution-rail">
          {solutions.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03} className="solution-row">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <item.icon size={26} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <ArrowRight size={18} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductExperience() {
  return (
    <section className="section product-section">
      <div className="container">
        <SectionHeader
          eyebrow="Product Experience"
          title="Essential hotel products, presented cleanly for hospitality buyers."
          text="Focused supply families used daily by hotels across Ajman, Dubai, Abu Dhabi, and Sharjah."
        />
        <div className="product-showcase">
          {productCategories.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="product-card">
              <div className="product-media">
                <img src={item.image} alt={item.title} />
              </div>
              <div>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <ul>
                  {item.items.map((entry) => (
                    <li key={entry}>
                      <Check size={15} /> {entry}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcurementWorkflow() {
  return (
    <section className="section workflow-section">
      <div className="container workflow-layout">
        <Reveal>
          <span className="eyebrow">Procurement Workflow</span>
          <h2>Five precise stages from requirement to delivery support.</h2>
          <p>
            INMA creates a single hospitality supply route across product selection, quotation, availability, delivery timing,
            and after-delivery support for hotels across the UAE.
          </p>
          <Button href="/procurement-services" variant="secondary">
            View Procurement Services <ArrowRight size={16} />
          </Button>
        </Reveal>
        <div className="timeline">
          {workflow.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05} className="timeline-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="section dark-section">
      <div className="container">
        <SectionHeader
          dark
          eyebrow="Why Choose INMA"
          title="Hospitality supply experience with the speed and polish premium hotels expect."
          text="Over a decade of product knowledge, Ajman-based UAE delivery, premium quality control, and customer service built around hotel operations."
        />
        <div className="advantage-grid">
          {advantages.map((item) => (
            <Reveal key={item} className="advantage-item">
              <Check size={17} />
              <span>{item}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Projects & Clients"
          title="Supply programs built for boutique hotels, luxury resorts, and 4&5-star properties."
          text="Representative hospitality supply programs across opening packages, linen replenishment, guest amenities, and hygiene operations."
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05} className="project-card">
              <img src={project.image} alt={project.title} />
              <div>
                <span>{project.sector}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container cta-shell">
        <Reveal>
          <span className="eyebrow">Enterprise Procurement Desk</span>
          <h2>Build Your Hotel Supply Ecosystem With Confidence</h2>
          <p>
            Align amenities, luxury towels, bedsheets, guest room accessories, lobby essentials, and hygiene products through
            one premium UAE hospitality supplier.
          </p>
          <div className="cta-actions">
            <Button href="/contact" variant="primary">
              Get a Quote <ArrowRight size={16} />
            </Button>
            <Button href={company.whatsapp} variant="secondary" target="_blank" rel="noreferrer">
              Speak With Our Team
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CatalogExperience() {
  return (
    <section className="section catalog-section">
      <div className="container catalog-layout">
        <Reveal>
          <span className="eyebrow">Catalog System</span>
          <h2>A quieter catalog experience for fast hotel supply decisions.</h2>
          <p>
            Download the INMA catalog or scan the core supply families before sending your hotel requirements.
          </p>
          <div className="catalog-actions">
            <Button href="/api/catalog" variant="primary" download>
              <Download size={16} /> Download Corporate Catalog
            </Button>
            <Button href="/products" variant="secondary">
              View Product Families
            </Button>
          </div>
        </Reveal>
        <Reveal className="catalog-panel">
          <Search size={20} />
          <div>
            <span>Primary Locations</span>
            <strong>Ajman, Dubai, Abu Dhabi, Sharjah</strong>
          </div>
          <div>
            <span>Core Supply</span>
            <strong>Amenities, towels, linen, guest room accessories, hygiene</strong>
          </div>
          <Link href="/products">
            <span>Explore</span>
            <strong>View clean product families</strong>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="section contact-band">
      <div className="container contact-layout">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2>Send a structured hotel supply inquiry to the INMA team.</h2>
          <p>
            Share your amenity list, linen requirements, quantities, UAE location, preferred brands, and required delivery date.
          </p>
          <div className="contact-points">
            <span>{company.phone}</span>
            <span>{company.email}</span>
            <span>{company.location}</span>
          </div>
        </Reveal>
        <Reveal>
          <InquiryForm />
        </Reveal>
      </div>
    </section>
  );
}

export function MediaFeature() {
  return (
    <section className="section media-feature">
      <div className="container media-grid">
        <Reveal className="media-copy">
          <span className="eyebrow">Hospitality Supply, Ajman UAE</span>
          <h2>Luxury hospitality standards, fast delivery, and product variety.</h2>
          <p>
            INMA bridges premium hotel outfitting with responsive customer service, giving hospitality buyers a supplier that
            understands guest experience, product presentation, and same-day or 48-hour UAE delivery pressure.
          </p>
        </Reveal>
        <Reveal className="media-frame">
          <img src={heroImages.amenities} alt="Premium hotel toiletries and amenity supply for hospitality rooms" />
        </Reveal>
      </div>
    </section>
  );
}

export function AboutStorySection() {
  return (
    <section className="section about-story-section">
      <div className="container about-story-grid">
        <Reveal className="about-story-copy">
          <span className="eyebrow">About INMA</span>
          <h2>Trusted hospitality supplies for hotels that measure quality in every guest detail.</h2>
          <p>{aboutStory.intro}</p>
          <p>{aboutStory.detail}</p>
          <div className="about-proof-row">
            <span>Over a decade of experience</span>
            <span>4&5-star hotel outfitting</span>
            <span>Ajman-based UAE delivery</span>
          </div>
        </Reveal>
        <Reveal className="about-image-stack">
          <img src={heroImages.towels} alt="Luxury towels and hotel bath linen supplied by INMA" />
          <img src={heroImages.bedding} alt="Premium bedsheets and guest room linen for hotels" />
        </Reveal>
      </div>
      <div className="container mission-vision-grid">
        <Reveal className="mission-card">
          <span className="eyebrow">Mission</span>
          <h3>{aboutStory.mission}</h3>
        </Reveal>
        <Reveal className="mission-card dark">
          <span className="eyebrow">Vision</span>
          <h3>{aboutStory.vision}</h3>
        </Reveal>
      </div>
    </section>
  );
}
