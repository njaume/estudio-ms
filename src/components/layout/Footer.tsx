import Image from "next/image";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre nosotros", href: "#sobre-el-estudio" },
  { label: "Áreas", href: "#areas" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone border-t border-[#E5E0D6]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="grid md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16 items-start mb-12">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="M&S Estudio Jurídico"
                width={168}
                height={168}
                style={{ marginTop: "-60px", marginBottom: "-52px", display: "block" }}
              />
            </div>
            <p className="text-sm text-warm-gray leading-relaxed max-w-xs">
              Asesoramiento jurídico claro, cercano y profesional en Paraná y
              Diamante, Entre Ríos.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-charcoal uppercase mb-4">
              Navegación
            </p>
            <ul className="space-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-warm-gray hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-charcoal uppercase mb-4">
              Contacto
            </p>
            <ul className="space-y-3 text-sm text-warm-gray" role="list">
              <li>Paraná / Diamante, Entre Ríos</li>
              <li>
                <a
                  href="tel:+543435169006"
                  className="hover:text-gold transition-colors"
                >
                  +54 3435 169006
                </a>
              </li>
              <li>
                <a
                  href="tel:+543436235369"
                  className="hover:text-gold transition-colors"
                >
                  +54 3436 235369
                </a>
              </li>
              <li>
                <a
                  href="mailto:estudiomartinosantilli@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  estudiomartinosantilli<br />@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#E5E0D6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-gray text-center sm:text-left">
            &copy; {year} M&S Estudio Jurídico. Todos los derechos reservados.
            <span className="mx-2 text-warm-gray/40">|</span>
            Paraná / Diamante, Entre Ríos.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4" aria-label="Redes sociales">
            <a
              href="#"
              aria-label="Instagram de M&S Estudio Jurídico"
              className="text-warm-gray hover:text-gold transition-colors duration-200"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn de M&S Estudio Jurídico"
              className="text-warm-gray hover:text-gold transition-colors duration-200"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
