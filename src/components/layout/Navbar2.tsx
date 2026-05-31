"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre nosotros", href: "#sobre-el-estudio" },
  { label: "Áreas", href: "#areas" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar2() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-charcoal/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(197,154,74,0.2)]"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between"
        style={{ height: scrolled ? "64px" : "80px", transition: "height 0.4s ease" }}
        aria-label="Navegación principal"
      >
        {/* Logo blanco */}
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
          aria-label="M&S Estudio Jurídico — Inicio"
          className="block"
          style={{ overflow: "hidden", height: "52px" }}
        >
          <Image
            src="/logo.png"
            alt="M&S Estudio Jurídico"
            width={156}
            height={156}
            priority
            style={{
              display: "block",
              marginTop: "-52px",
              filter: "brightness(0) invert(1)",
              opacity: 0.92,
            }}
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative after:absolute after:-bottom-0.75 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium border border-gold/60 text-white hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300 tracking-wide"
        >
          Consultar
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white hover:text-gold transition-colors"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-400",
          menuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-charcoal/97 backdrop-blur-sm border-t border-white/10 px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-sm font-medium text-white/80 py-3 border-b border-white/10 last:border-0 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
            className="mt-4 text-center py-3 border border-gold/60 text-sm font-medium text-white hover:bg-gold hover:text-charcoal transition-all"
          >
            Consultar
          </a>
        </div>
      </div>
    </header>
  );
}
