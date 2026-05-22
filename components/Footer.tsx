import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company, navItems, productCategories, solutions } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-skyline" aria-hidden="true" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/inma-the-progress-web.svg" alt="INMA - The Progress" />
          <p>
            Premium UAE procurement, outfitting, facility support, utility trading, and commercial supply solutions for
            hospitality and enterprise operations.
          </p>
          <div className="footer-contact">
            <span>
              <Phone size={15} /> {company.phone}
            </span>
            <span>
              <Mail size={15} /> {company.email}
            </span>
            <span>
              <MapPin size={15} /> {company.location}
            </span>
          </div>
        </div>

        <div>
          <h3>Company</h3>
          {navItems.slice(1, 8).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div>
          <h3>Solutions</h3>
          {solutions.slice(0, 6).map((item) => (
            <Link key={item.title} href="/solutions">
              {item.title}
            </Link>
          ))}
        </div>

        <div>
          <h3>Product Families</h3>
          {productCategories.map((item) => (
            <Link key={item.title} href="/products">
              {item.title}
            </Link>
          ))}
          <a className="footer-whatsapp" href={company.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> WhatsApp Inquiry <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 INMA Hotels Outfit LLC. All rights reserved.</span>
        <span>UAE enterprise procurement and trading.</span>
      </div>
    </footer>
  );
}
