"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function fade(delay: number) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.0, delay, ease },
  };
}

/**
 * Para usar imagen de fondo: colocar el archivo en /public/hero-bg.jpg
 * Para usar video: colocar /public/hero-bg.mp4
 * Cambiar USE_VIDEO = true para activar el video.
 */
const USE_VIDEO = false;

export default function Hero2() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Sección principal"
    >

      {/* ── Fondo: video o imagen ── */}
      {USE_VIDEO ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "blur(3px) brightness(0.7)", transform: "scale(1.05)" }}
          aria-hidden="true"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 60% 40%, #2a2318 0%, #1a1610 40%, #101216 100%)",
          }}
          aria-hidden="true"
        />
      )}

      {/* ── Línea dorada top ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease }}
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold to-transparent origin-left z-10"
        aria-hidden="true"
      />

      {/* ── Contenido ── */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Logo en blanco */}
        <motion.div {...fade(0)} className="mb-6">
          <div
            style={{
              width: "clamp(220px, 44vw, 400px)",
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
              sizes="(max-width: 768px) 220px, 400px"
              style={{
                objectFit: "cover",
                objectPosition: "50% 50%",
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>
        </motion.div>

        {/* Separador dorado */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.2, ease }}
          className="h-px bg-linear-to-r from-transparent via-gold to-transparent origin-center mb-7"
          style={{ width: "clamp(160px, 30vw, 320px)" }}
          aria-hidden="true"
        />

        {/* Location */}
        <motion.p
          {...fade(0.28)}
          className="text-[10px] font-medium tracking-[0.3em] text-white/60 uppercase mb-7"
        >
          Entre Ríos &middot; Argentina
        </motion.p>

        {/* Headline */}
        <motion.h1
          {...fade(0.4)}
          className="font-serif text-[2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.4rem] font-semibold text-white leading-[1.14] mb-6 max-w-2xl"
        >
          Asesoramiento jurídico{" "}
          <em className="not-italic text-gold-light">claro y cercano</em>
          {" "}para personas y familias.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fade(0.54)}
          className="text-white/65 text-sm md:text-base leading-relaxed max-w-md"
        >
          Acompañamos a quienes enfrentan situaciones jurídicas complejas
          con dedicación, transparencia y respeto.
        </motion.p>

      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.32em] text-white/40 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-px h-10 bg-linear-to-b from-gold/60 to-transparent"
        />
      </motion.div>

    </section>
  );
}
