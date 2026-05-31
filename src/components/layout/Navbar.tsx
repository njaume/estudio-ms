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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
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
          ? "bg-stone/95 backdrop-blur-sm shadow-[0_1px_0_0_#E5E0D6]"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between"
        style={{ height: scrolled ? "64px" : "80px", transition: "height 0.4s ease" }}
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
          aria-label="M&S Estudio Jurídico — Inicio"
          className="block overflow-hidden opacity-90 hover:opacity-100 transition-opacity duration-300"
        >
          <Image
            src="/logo.png"
            alt="M&S Estudio Jurídico"
            width={168}
            height={168}
            priority
            style={{ marginTop: "-60px", marginBottom: "-52px", display: "block" }}
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm font-medium text-warm-gray hover:text-charcoal transition-colors duration-200 relative after:absolute after:bottom-[-3px] after:left-0 after:h-[1px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
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
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium border border-gold text-charcoal hover:bg-gold hover:text-white transition-all duration-300 tracking-wide"
        >
          Consultar
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-charcoal hover:text-gold transition-colors"
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
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-stone border-t border-[#E5E0D6] px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-sm font-medium text-charcoal py-3 border-b border-[#E5E0D6] last:border-0 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
            className="mt-4 text-center py-3 border border-gold text-sm font-medium text-charcoal hover:bg-gold hover:text-white transition-all"
          >
            Consultar
          </a>
        </div>
      </div>
    </header>
  );
}
