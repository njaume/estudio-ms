"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre-el-estudio"
      ref={ref}
      className="py-24 md:py-32 px-6"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">

          {/* Left: label + decorative element */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:pt-2"
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-[2px] bg-gold" aria-hidden="true" />
              <p className="text-xs font-medium tracking-[0.25em] text-warm-gray uppercase">
                Sobre el estudio
              </p>
              <p className="text-sm italic text-warm-gray/80 mt-3 leading-snug max-w-[18ch]">
                &ldquo;Detrás de cada expediente hay una historia que merece ser escuchada.&rdquo;
              </p>
            </div>

            {/* Decorative quote mark */}
            <div
              className="hidden md:block mt-12 font-serif text-[6rem] leading-none text-gold/15 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl md:text-4xl font-semibold text-charcoal leading-[1.2] mb-8"
            >
              Estudio Jurídico con enfoque humano que escucha y resuelve.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5 text-warm-gray leading-relaxed"
            >
              <p className="text-base md:text-lg">
                Fundamos M&S con una convicción: el derecho debe ser accesible.
                No Creemos que cada consulta merece tiempo, escucha y una
                respuesta clara, sin vueltas ni tecnicismos.
              </p>
              <p className="text-base md:text-lg">
                Acompañamos a personas y familias en momentos que suelen generar
                incertidumbre: una sucesión, un accidente de tránsito, una
                separación, un conflicto contractual o cualquier situación que
                requiera asesoramiento legal. Nuestro compromiso es brindar
                soluciones jurídicas con profesionalismo, cercanía y
                responsabilidad para que cada cliente pueda tomar decisiones con
                tranquilidad y confianza.
              </p>
            </motion.div>

            {/* Stats / highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 pt-10 border-t border-[#E5E0D6] grid grid-cols-3 gap-8"
            >
              {[
                { value: "2+", label: "Socios dedicados" },
                { value: "9", label: "Áreas de práctica" },
                { value: "100%", label: "Atención personalizada" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-serif text-3xl md:text-4xl text-gold font-semibold">
                    {stat.value}
                  </span>
                  <span className="text-xs text-warm-gray leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
