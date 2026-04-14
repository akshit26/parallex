"use client";

import { forwardRef } from "react";

export const CityEntrance = forwardRef<HTMLElement>(function CityEntrance(_, ref) {
  return (
    <section ref={ref} className="scene city relative min-h-screen overflow-hidden py-16">
      <div className="city-parallax absolute inset-0">
        <div className="city-bg absolute inset-0 bg-[linear-gradient(180deg,#05030c_10%,#0b0b1d_70%,#040406_100%)]" />
        <div className="roads absolute bottom-0 h-1/2 w-full bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.35),transparent_60%)]" />
        <div className="buildings-mid absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(139,92,246,.2),transparent)]" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-36 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-neon-green">Scene 02 · Entering the City</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-6xl">Immersive acquisition infrastructure</h2>
      </div>
    </section>
  );
});
