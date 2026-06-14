"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Derecho Civil",
    description:
      "Representamos a personas en conflictos vinculados a contratos, daños y perjuicios, incumplimientos de obligaciones, responsabilidad civil y demás relaciones jurídicas entre particulares.",
  },
  {
    number: "02",
    title: "Derecho de Familia",
    description:
      "Asesoramos en divorcios, alimentos, cuidado personal de hijos, régimen de comunicación, uniones convivenciales y demás conflictos familiares.",
  },
  {
    number: "03",
    title: "Sucesiones",
    description:
      "Gestionamos procesos sucesorios, declaratorias de herederos, particiones y división de bienes.",
  },
  {
    number: "04",
    title: "Accidentes de Tránsito",
    description:
      "Representamos a personas que han sufrido lesiones o daños materiales como consecuencia de accidentes de tránsito. Nos encargamos de los reclamos ante aseguradoras extrajudiciales, acciones judiciales por lesiones o daños materiales.",
  },
  {
    number: "05",
    title: "Contratos",
    description:
      "Brindamos asesoramiento en la redacción, revisión y negociación de contratos civiles y comerciales.",
  },
  {
    number: "06",
    title: "Mediación",
    description:
      "Intervenimos en procesos de mediación orientados a la resolución pacífica de conflictos. A través del diálogo y la negociación, buscamos acuerdos que permitan evitar litigios innecesarios y preservar los vínculos entre las partes.",
  },
  {
    number: "07",
    title: "Derecho Inmobiliario",
    description:
      "Asesoramos en operaciones de compraventa, alquileres, transferencias y conflictos relacionados con bienes inmuebles.",
  },
  {
    number: "08",
    title: "Amparos de salud",
    description:
      "Intervenimos en acciones de amparo vinculadas al acceso a prestaciones médicas, medicamentos, tratamientos, estudios y coberturas de obras sociales y empresas de medicina prepaga.",
  },
  {
    number: "09",
    title: "Derecho Previsional",
    description:
      "Gestionamos trámites jubilatorios, pensiones, reajustes, reconocimiento de servicios y demás cuestiones previsionales.",
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
