"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/Button";
import { heroImages, stats } from "@/lib/site-data";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    const hero = heroRef.current;
    const light = lightRef.current;
    if (!hero || !light) return;

    const move = (event: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      gsap.to(light, {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    hero.addEventListener("mousemove", move);
    return () => hero.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-light" ref={lightRef} aria-hidden="true" />
      <motion.div className="hero-backdrop" style={{ y }} aria-hidden="true">
        <img src={heroImages.hotel} alt="" />
      </motion.div>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.span className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Ajman-Based Hotel Supplier Across The UAE
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.08 }}>
            Premium Hotel Amenities & Outfit Supply Across The UAE
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.18 }}>
            Supplying 4 and 5-star hotels, boutique properties, and luxury resorts with branded toiletries, premium linens,
            towels, guest room accessories, lobby essentials, and hygiene products with same-day or 48-hour UAE delivery.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.28 }}>
            <Button href="/catalog" variant="primary">
              View Catalog <ArrowRight size={16} />
            </Button>
            <Button href="/products" variant="secondary">
              Hotel Products
            </Button>
            <Button href="/api/catalog" variant="ghost" download>
              <Download size={16} /> Download Catalog
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="visual-main product-composite"
            role="img"
            aria-label="Premium hotel supply collection with toiletries, towels, bedding, lobby accessories, and hygiene products"
          >
            <div className="composite-tile tile-large">
              <img src={heroImages.amenities} alt="" />
              <span>Branded toiletries</span>
            </div>
            <div className="composite-tile">
              <img src={heroImages.towels} alt="" />
              <span>Luxury towels</span>
            </div>
            <div className="composite-tile">
              <img src={heroImages.bedding} alt="" />
              <span>Bedsheets</span>
            </div>
            <div className="composite-tile">
              <img src={heroImages.lobby} alt="" />
              <span>Room & lobby</span>
            </div>
            <div className="composite-tile">
              <img src={heroImages.hygiene} alt="" />
              <span>Hygiene supply</span>
            </div>
            <div className="composite-badge">
              <small>Hotel Supply Collection</small>
              <strong>Amenities, linen, accessories & hygiene</strong>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container hero-trust">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
