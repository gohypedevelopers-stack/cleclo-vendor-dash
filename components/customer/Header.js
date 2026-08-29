"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <a href="#top" className="logo">
          <Image src="/logo.png" alt="Cleclo" width={680} height={171} className="logo-img" priority />
        </a>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href="#download" className="btn btn-primary">
            Get the App
          </a>
        </div>

        <button
          className="burger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-panel${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#download" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Get the App
        </a>
      </div>
    </header>
  );
}
