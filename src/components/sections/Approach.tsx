"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserCheck, MessageSquare, Shield } from "lucide-react";

const pillars = [
  {
    icon: UserCheck,
    title: "Atención personalizada",
    description:
      "Cada caso es diferente. Dedicamos el tiempo necesario para entender tu situación antes de proponer cualquier solución.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación clara",
    description:
      "Explicamos cada paso del proceso en un lenguaje que se entiende. Siempre disponibles para responder tus dudas.",
  },
  {
    icon: Shield,
    title: "Compromiso profesional",
    description:
      "Asumimos cada caso con rigor y responsabilidad. Tu tranquilidad es nuestra prioridad.",
  },
];

export default function Approach() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="enfoque"
      ref={ref}
      className="py-24 md:py-32 px-6"
      aria-labelledby="approach-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-gold" aria-hidden="true" />
            <p className="text-xs font-medium tracking-[0.25em] text-warm-gray uppercase">
              Nuestro enfoque
            </p>
            <div className="w-8 h-[2px] bg-gold" aria-hidden="true" />
          </div>
          <h2
            id="approach-heading"
            className="font-serif text-3xl md:text-4xl font-semibold text-charcoal"
          >
            Cómo trabajamos
          </h2>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E5E0D6]">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.15 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center text-center px-8 md:px-10 py-10 md:py-12"
              >
                {/* Icon container */}
                <div
                  className="w-14 h-14 flex items-center justify-center border border-gold/30 mb-6"
                  aria-hidden="true"
                >
                  <Icon size={22} className="text-gold" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-warm-gray leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
