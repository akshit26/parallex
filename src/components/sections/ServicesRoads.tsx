"use client";

import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import { services } from "@/data/content";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";

type Props = {
  activeRoad: number;
};

export const ServicesRoads = forwardRef<HTMLElement, Props>(function ServicesRoads({ activeRoad }, ref) {
  const [hoveredRoad, setHoveredRoad] = useState<number | null>(null);
  const current = services[activeRoad] ?? services[0];

  return (
    <section ref={ref} className="scene relative min-h-screen px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="space-y-5">
          {services.map((service, index) => {
            const isActive = activeRoad === index;
            const isHover = hoveredRoad === index;

            return (
              <motion.div
                key={service.id}
                onHoverStart={() => setHoveredRoad(index)}
                onHoverEnd={() => setHoveredRoad(null)}
                animate={{
                  opacity: isActive ? 1 : 0.45,
                  x: isActive ? 0 : index * 8,
                  boxShadow: isActive || isHover ? "0px 0px 30px rgba(34,211,238,0.28)" : "0px 0px 0px transparent"
                }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-md"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-neon-green">Road {index + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold">{service.title}</h3>
                <p className="text-sm text-white/70">{service.subtitle}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="sticky top-24 h-fit">
          <GlassCard>
            <p className="text-xs uppercase tracking-[0.3em] text-neon-blue">Active Path</p>
            <h3 className="mt-2 text-3xl font-semibold">{current.subtitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {current.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-neon-green">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <GlowButton>Explore</GlowButton>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
});
