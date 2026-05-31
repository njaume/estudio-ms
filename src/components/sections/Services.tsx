"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Derecho Civil",
    description:
      "Contratos, daños, obligaciones y relaciones entre particulares. Te ayudamos a conocer tus derechos y actuar con fundamento.",
  },
  {
    number: "02",
    title: "Derecho de Familia",
    description:
      "Divorcios, separaciones, alimentos, guarda y todo lo relacionado con el bienestar familiar. Con discreción y humanidad.",
  },
  {
    number: "03",
    title: "Sucesiones",
    description:
      "Herencias, declaratorias y división de bienes. Guiamos a las familias en cada etapa del proceso sucesorio.",
  },
  {
    number: "04",
    title: "Accidentes de Tránsito",
    description:
      "Lesiones, daños materiales y reclamos ante aseguradoras. Defendemos tus derechos desde el primer momento.",
  },
  {
    number: "05",
    title: "Contratos",
    description:
      "Redacción, revisión y negociación de contratos. Prevenir conflictos es siempre la mejor estrategia.",
  },
  {
    number: "06",
    title: "Mediación",
    description:
      "Resolución de conflictos sin necesidad de juicio. Rápido, económico y preservando relaciones.",
  },
  {
    number: "07",
    title: "Derecho Inmobiliario",
    description:
      "Compraventa, alquileres y conflictos de propiedad. Seguridad jurídica en cada operación.",
  },
  {
    number: "08",
    title: "Amparos",
    description:
      "Protección de derechos fundamentales ante organismos públicos y privados. Actuamos con rapidez cuando los derechos están en juego.",
  },
  {
    number: "09",
    title: "Derecho Previsional",
    description:
      "Jubilaciones, pensiones y reajustes. Asesoramiento para acceder a los beneficios que te corresponden.",
  },
];

function ServiceCard({
  number,
  title,
  description,
  index,
  inView,
}: {
  number: string;
  title: string;
  description: string;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.05 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-white border border-[#E5E0D6] p-8 hover:border-gold/60 hover:shadow-[0_4px_24px_rgba(197,154,74,0.08)] transition-all duration-400 cursor-default"
      aria-label={`Servicio: ${title}`}
    >
      {/* Number */}
      <span
        className="block font-serif text-sm text-gold/60 group-hover:text-gold font-medium tracking-wider mb-4 transition-colors duration-300"
        aria-hidden="true"
      >
        {number}
      </span>

      {/* Title */}
      <h3 className="font-serif text-xl font-semibold text-charcoal mb-3 group-hover:text-charcoal transition-colors">
        {title}
      </h3>

      {/* Thin gold line appears on hover */}
      <div
        className="w-8 h-[1px] bg-gold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Description */}
      <p className="text-sm text-warm-gray leading-relaxed">{description}</p>
    </motion.article>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="areas"
      ref={ref}
      className="py-24 md:py-32 px-6 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-gold" aria-hidden="true" />
              <p className="text-xs font-medium tracking-[0.25em] text-warm-gray uppercase">
                Áreas de práctica
              </p>
            </div>
            <h2
              id="services-heading"
              className="font-serif text-3xl md:text-4xl font-semibold text-charcoal leading-tight"
            >
              En qué podemos ayudarte
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-warm-gray text-sm md:text-base max-w-sm leading-relaxed md:text-right"
          >
            Abordamos cada situación con dedicación y conocimiento específico
            del área que necesitás.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E0D6]">
          {services.map((service, i) => (
            <ServiceCard key={service.number} {...service} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
