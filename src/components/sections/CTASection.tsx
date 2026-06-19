"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleScroll = () => {
    const el = document.querySelector("#contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="cta"
      ref={ref}
      className="relative py-24 md:py-36 px-6 bg-charcoal overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, rgba(197,154,74,0.07) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Gold top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-4 mb-10"
          aria-hidden="true"
        >
          <div className="h-px w-10 bg-gold/50" />
          <div className="w-1 h-1 rounded-full bg-gold" />
          <div className="h-px w-10 bg-gold/50" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-5xl font-semibold text-stone leading-[1.15] mb-6"
        >
          ¿Tenés una duda legal?{" "}
          <em className="not-italic text-gold">Hablemos.</em>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-stone/60 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Contanos tu situación y te
          orientamos con claridad y sin compromiso.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/543435169006?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20sobre..."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-charcoal text-sm font-medium tracking-wide hover:bg-gold-light transition-all duration-300 w-full sm:w-auto justify-center"
            aria-label="Escribir por WhatsApp"
          >
            <MessageCircle size={16} />
            Escribirnos por WhatsApp
          </a>

          <button
            onClick={handleScroll}
            className="group inline-flex items-center gap-2 px-8 py-4 border border-stone/30 text-stone text-sm font-medium tracking-wide hover:border-stone/70 hover:bg-stone/5 transition-all duration-300 w-full sm:w-auto justify-center"
            aria-label="Ir al formulario de contacto"
          >
            Ir al formulario
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
