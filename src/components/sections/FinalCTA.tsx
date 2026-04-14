"use client";

import { useState } from "react";
import { GlowButton } from "@/components/ui/GlowButton";

export const FinalCTA = () => {
  const [soundOn, setSoundOn] = useState(false);

  return (
    <section className="scene relative flex min-h-screen items-center px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.25),transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-neon-blue">Scene 06 · Rooftop</p>
        <h2 className="mt-6 text-5xl font-black uppercase md:text-7xl">Build Your Growth Engine</h2>
        <p className="mt-6 text-white/70">AI automation, creator ecosystems, and performance infrastructure fused into one cinematic growth machine.</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <GlowButton>Book a Call</GlowButton>
          <GlowButton variant="secondary">Get Free Strategy</GlowButton>
          <button
            onClick={() => setSoundOn((value) => !value)}
            className="rounded-full border border-white/30 px-4 py-3 text-xs uppercase tracking-[0.25em] text-white/80"
          >
            Ambient Sound: {soundOn ? "On" : "Off"}
          </button>
        </div>
      </div>
    </section>
  );
};
