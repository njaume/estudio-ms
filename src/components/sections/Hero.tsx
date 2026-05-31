"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function fade(delay: number) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  };
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      aria-label="Sección principal"
    >
      {/* Gold top rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease }}
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold to-transparent origin-left"
        aria-hidden="true"
      />

      {/* Radial glow sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 35%, rgba(197,154,74,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Layout principal: logo arriba, texto abajo */}
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center">

        {/* Logo grande — cover crop centrado en la marca */}
        <motion.div {...fade(0)} className="mb-0">
          <div
            style={{
              width: "clamp(260px, 52vw, 480px)",
              aspectRatio: "480 / 170",
              overflow: "hidden",
              position: "relative",
            }}
            role="img"
            aria-label="M&S Estudio Jurídico"
          >
            <Image
              src="/logo.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 260px, (max-width: 1024px) 42vw, 480px"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
        </motion.div>

        {/* Gold separator */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.25, ease }}
          className="h-px bg-linear-to-r from-transparent via-gold/50 to-transparent origin-center mb-8 mt-6"
          style={{ width: "clamp(200px, 40vw, 400px)" }}
          aria-hidden="true"
        />

        {/* Location */}
        <motion.p
          {...fade(0.3)}
          className="text-[10px] font-medium tracking-[0.3em] text-warm-gray uppercase mb-6"
        >
          Paraná &middot; Entre Ríos
        </motion.p>

        {/* Headline — 2 líneas limpias */}
        <motion.h1
          {...fade(0.42)}
          className="font-serif text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3rem] font-semibold text-charcoal leading-[1.18] mb-5 max-w-2xl"
        >
          Asesoramiento jurídico{" "}
          <em className="not-italic text-gold">claro y cercano</em>
          {" "}para personas y familias.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fade(0.55)}
          className="text-warm-gray text-sm md:text-base leading-relaxed max-w-md"
        >
          Acompañamos a quienes enfrentan situaciones jurídicas complejas
          con dedicación, transparencia y respeto.
        </motion.p>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.32em] text-warm-gray/50 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-px h-10 bg-linear-to-b from-gold/50 to-transparent"
        />
      </motion.div>

    </section>
  );
}
