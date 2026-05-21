"use client";

import { useMemo, useState } from "react";
import { MapPin, Search } from "lucide-react";
import { productCategories } from "@/lib/site-data";
import { Reveal } from "@/components/Motion";

export function ProductExplorer() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    if (!normalized) return productCategories;
    return productCategories.filter((category) =>
      `${category.title} ${category.tag} ${category.items.join(" ")}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <section className="section product-section">
      <div className="container">
        <div className="product-explorer-head">
          <div>
            <span className="eyebrow">Hotel Product Explorer</span>
            <h2>Clean essentials for UAE hotel operations.</h2>
          </div>
          <div className="product-search">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search amenities, towels, linen..." />
          </div>
        </div>
        <div className="location-strip" aria-label="Service locations">
          {["Ajman", "Dubai", "Abu Dhabi", "Sharjah"].map((location) => (
            <span key={location}>
              <MapPin size={14} /> {location}
            </span>
          ))}
        </div>
        <div className="product-showcase">
          {filtered.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04} className="product-card">
              <div className="product-media">
                <img src={item.image} alt={item.title} />
              </div>
              <div>
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <ul>
                  {item.items.map((entry) => (
                    <li key={entry}>{entry}</li>
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
