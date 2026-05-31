"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const members = [
  {
    initials: "MS",
    name: "Martina Inés Santilli",
    role: "Abogada",
    matricula: "Mat. C.A.P. XXXX",
    specialties: ["Derecho de Familia", "Sucesiones", "Derecho Civil"],
    bio: "Abogada egresada de [Universidad]. Especialista en Derecho de Familia y Sucesiones. Comprometida con el acompañamiento integral de cada cliente, brinda asesoramiento claro y empático en cada etapa del proceso.",
  },
  {
    initials: "LM",
    name: "Luis Ernesto Martino",
    role: "Abogado",
    matricula: "Mat. C.A.P. XXXX",
    specialties: ["Derecho Civil", "Accidentes de Tránsito", "Contratos"],
    bio: "Abogado egresado de [Universidad]. Especialista en Derecho Civil y Accidentes de Tránsito. Con foco en la defensa de los derechos de las personas, trabaja con rigor profesional y cercanía humana.",
  },
];

export default function Team() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="equipo"
      ref={ref}
      className="py-24 md:py-32 px-6 bg-white"
      aria-labelledby="team-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-gold" aria-hidden="true" />
            <p className="text-xs font-medium tracking-[0.25em] text-warm-gray uppercase">
              El equipo
            </p>
          </div>
          <h2
            id="team-heading"
            className="font-serif text-3xl md:text-4xl font-semibold text-charcoal"
          >
            Quiénes somos
          </h2>
        </motion.div>

        {/* Team cards */}
        <div className="grid md:grid-cols-2 gap-px bg-[#E5E0D6]">
          {members.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.12 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white p-10 md:p-12"
              aria-label={`Perfil de ${member.name}`}
            >
              {/* Photo placeholder */}
              <div
                className="w-full aspect-[4/3] bg-placeholder-bg flex items-center justify-center mb-8 overflow-hidden"
                role="img"
                aria-label={`Foto de ${member.name} — a completar`}
              >
                <span
                  className="font-serif text-5xl font-semibold text-charcoal/30 select-none"
                  aria-hidden="true"
                >
                  {member.initials}
                </span>
              </div>

              {/* Info */}
              <div className="space-y-1 mb-4">
                <h3 className="font-serif text-2xl font-semibold text-charcoal">
                  {member.name}
                </h3>
                <p className="text-sm text-warm-gray">
                  {member.role} &mdash; <span className="text-gold">{member.matricula}</span>
                </p>
              </div>

              {/* Divider */}
              <div className="w-8 h-[1px] bg-gold mb-5" aria-hidden="true" />

              {/* Bio */}
              <p className="text-sm text-warm-gray leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2" aria-label="Especialidades">
                {member.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-medium tracking-wide border border-[#E5E0D6] text-warm-gray px-3 py-1 uppercase"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
