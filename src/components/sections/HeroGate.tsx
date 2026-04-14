"use client";

import { forwardRef } from "react";

export const HeroGate = forwardRef<HTMLElement>(function HeroGate(_, ref) {
  return (
    <section ref={ref} className="scene relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_55%)]" />
      <div className="fog absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />

      <div className="gate-frame relative z-10 h-[55vh] w-[70vw] max-w-5xl rounded-2xl border border-neon-blue/40 bg-black/50 shadow-neon backdrop-blur-md">
        <div className="gate-left absolute inset-y-0 left-0 w-1/2 border-r border-neon-purple/40 bg-gradient-to-r from-neon-purple/15 to-transparent" />
        <div className="gate-right absolute inset-y-0 right-0 w-1/2 border-l border-neon-blue/40 bg-gradient-to-l from-neon-blue/15 to-transparent" />

        <h1 className="brand absolute inset-0 flex items-center justify-center text-center text-4xl font-black uppercase tracking-[0.4em] text-white md:text-6xl">
          PARALLEX
        </h1>
      </div>

      <div className="particle-field absolute inset-0 opacity-60" />
    </section>
  );
});
