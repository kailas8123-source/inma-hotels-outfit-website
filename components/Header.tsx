"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { navItems, searchIndex } from "@/lib/site-data";
import { Button } from "@/components/Button";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchIndex.slice(0, 7);
    return searchIndex
      .filter((item) => `${item.title} ${item.type}`.toLowerCase().includes(normalized))
      .slice(0, 8);
  }, [query]);

  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <Link className="brand" href="/" aria-label="INMA Hotels Outfit LLC home">
            <span className="brand-mark" aria-hidden="true">
              <img src="/inma-logo-mark.png" alt="" />
            </span>
            <span className="brand-copy">
              <strong>INMA</strong>
              <small>The Progress</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} className={pathname === item.href ? "active" : ""} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="icon-button" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <Search size={18} />
            </button>
            <Button className="hide-tablet" href="/api/catalog" variant="secondary" download>
              <Download size={15} /> Catalog
            </Button>
            <Button href="/catalog" variant="primary">
              View Catalog
            </Button>
            <button className="menu-button" aria-label="Menu" onClick={() => setMobileOpen((value) => !value)}>
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link href="/api/catalog" onClick={() => setMobileOpen(false)}>
                Download Catalog
              </Link>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {searchOpen ? (
          <motion.div className="overlay-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              className="search-dialog"
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 22, scale: 0.98 }}
            >
              <button className="dialog-close" aria-label="Close search" onClick={() => setSearchOpen(false)}>
                <X size={20} />
              </button>
              <span className="eyebrow">Procurement Search</span>
              <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products, industries, solutions..." />
              <div className="search-results">
                {results.map((item) => (
                  <Link key={`${item.type}-${item.title}`} href={item.href} onClick={() => setSearchOpen(false)}>
                    <small>{item.type}</small>
                    <strong>{item.title}</strong>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}

      </AnimatePresence>
    </>
  );
}
