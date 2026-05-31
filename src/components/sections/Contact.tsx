"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, MessageSquare, Mail, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  phone: z.string().min(8, "Ingresá un teléfono válido"),
  email: z.string().email("Ingresá un email válido"),
  message: z.string().min(10, "Por favor describí brevemente tu consulta (mínimo 10 caracteres)"),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "[Calle y número], Paraná, Entre Ríos",
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 343 XXX-XXXX",
    href: "tel:+5434300000000",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+54 343 XXX-XXXX",
    href: "https://wa.me/5434300000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "consultas@msestudiojuridico.com.ar",
    href: "mailto:consultas@msestudiojuridico.com.ar",
  },
];

function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-medium tracking-wide text-charcoal/70 uppercase"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-500 mt-0.5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Form submission:", data);
    setSubmitting(false);
    setSubmitted(true);
    reset();
  };

  const baseInputClass =
    "w-full border border-[#E5E0D6] bg-white px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray/60 focus:outline-none focus:border-gold transition-colors duration-200";

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-24 md:py-32 px-6"
      aria-labelledby="contact-heading"
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
              Contacto
            </p>
          </div>
          <h2
            id="contact-heading"
            className="font-serif text-3xl md:text-4xl font-semibold text-charcoal"
          >
            Contactate con nosotros
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[2fr_3fr] gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-warm-gray text-sm leading-relaxed mb-10">
              Podés comunicarte con nosotros por el medio que prefieras. Respondemos
              a la brevedad, generalmente dentro del mismo día hábil.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-4 hover:opacity-90 transition-opacity"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <div
                      className="mt-0.5 w-9 h-9 flex-shrink-0 flex items-center justify-center border border-[#E5E0D6] group-hover:border-gold transition-colors duration-300"
                      aria-hidden="true"
                    >
                      <Icon size={16} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs text-warm-gray uppercase tracking-wide mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-charcoal font-medium">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Separator */}
            <div className="mt-10 pt-10 border-t border-[#E5E0D6]">
              <p className="text-xs text-warm-gray leading-relaxed">
                M&S Estudio Jurídico
                <br />
                Colegio de Abogados de Paraná, Entre Ríos
                <br />
                Lunes a viernes, 9:00 a 18:00 hs.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full min-h-[320px] text-center gap-4"
                role="status"
                aria-live="polite"
              >
                <CheckCircle size={40} className="text-gold" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-charcoal">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed max-w-xs">
                  Gracias por contactarnos. Nos comunicaremos con vos a la
                  brevedad.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs text-gold underline underline-offset-4 hover:text-gold-light transition-colors"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                noValidate
                aria-label="Formulario de consulta"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField id="name" label="Nombre completo" error={errors.name?.message}>
                    <input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      className={cn(baseInputClass, errors.name && "border-red-400")}
                      {...register("name")}
                    />
                  </FormField>

                  <FormField id="phone" label="Teléfono" error={errors.phone?.message}>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+54 343..."
                      autoComplete="tel"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      className={cn(baseInputClass, errors.phone && "border-red-400")}
                      {...register("phone")}
                    />
                  </FormField>
                </div>

                <FormField id="email" label="Email" error={errors.email?.message}>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    className={cn(baseInputClass, errors.email && "border-red-400")}
                    {...register("email")}
                  />
                </FormField>

                <FormField id="message" label="¿En qué podemos ayudarte?" error={errors.message?.message}>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Contanos brevemente tu situación o consulta..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    className={cn(
                      baseInputClass,
                      "resize-none",
                      errors.message && "border-red-400"
                    )}
                    {...register("message")}
                  />
                </FormField>

                <p className="text-xs text-warm-gray">
                  Tu información es confidencial y no se comparte con terceros.
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-stone text-sm font-medium tracking-wide hover:bg-gold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
                  aria-label="Enviar consulta"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar consulta"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
