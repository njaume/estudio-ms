"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Navbar2 from "@/components/layout/Navbar2";
import Hero from "@/components/sections/Hero";
import Hero2 from "@/components/sections/Hero2";

export default function HeroSwitcher() {
  const [variant, setVariant] = useState<"A" | "B">("B");

  return (
    <>
      {variant === "A" ? (
        <>
          <Navbar />
          <Hero />
        </>
      ) : (
        <>
          <Navbar2 />
          <Hero2 />
        </>
      )}

      {/* ── Botón flotante de demo ── */}
      <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start gap-2">
        <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-white/60 bg-black/50 px-2 py-0.5 rounded-sm backdrop-blur-sm">
          Demo
        </span>
        <div className="flex items-center gap-0 rounded-full overflow-hidden border border-white/20 shadow-lg backdrop-blur-sm bg-black/40">
          <button
            onClick={() => setVariant("A")}
            className={`px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
              variant === "A"
                ? "bg-gold text-charcoal"
                : "text-white/60 hover:text-white"
            }`}
            aria-pressed={variant === "A"}
          >
            Versión A
          </button>
          <div className="w-px h-5 bg-white/20" aria-hidden="true" />
          <button
            onClick={() => setVariant("B")}
            className={`px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
              variant === "B"
                ? "bg-gold text-charcoal"
                : "text-white/60 hover:text-white"
            }`}
            aria-pressed={variant === "B"}>
            Versión B
          </button>
        </div>
      </div>
    </>
  );
}
