"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useRef, useState } from "react";
import { AIToolsDistrict } from "@/components/sections/AIToolsDistrict";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CityEntrance } from "@/components/sections/CityEntrance";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { HeroGate } from "@/components/sections/HeroGate";
import { ServicesRoads } from "@/components/sections/ServicesRoads";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { useGsapContext } from "@/hooks/useGsapContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export const CyberpunkExperience = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const cityRef = useRef<HTMLElement>(null);
  const [activeRoad, setActiveRoad] = useState(0);
  const reduceMotion = usePrefersReducedMotion();

  const setupTimeline = useCallback(
    (ctx: gsap.Context) => {
      if (reduceMotion || !heroRef.current || !cityRef.current) return;

      // Scene 1: Gate opens while user scrolls through hero.
      const gateTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=180%",
          scrub: true,
          pin: true
        }
      });

      gateTl
        .to(".gate-left", { xPercent: -110, ease: "power2.inOut" }, 0)
        .to(".gate-right", { xPercent: 110, ease: "power2.inOut" }, 0)
        .to(".brand", { scale: 0.85, opacity: 0.6 }, 0)
        .to(".fog", { opacity: 0.4 }, 0)
        .to(heroRef.current, { scale: 1.05, transformOrigin: "center center" }, 0);

      // Scene 2: Simulate camera moving into the city with layered parallax.
      const cityTl = gsap.timeline({
        scrollTrigger: {
          trigger: cityRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true
        }
      });

      cityTl
        .fromTo(".city-bg", { yPercent: 0 }, { yPercent: -10, ease: "none" }, 0)
        .fromTo(".buildings-mid", { yPercent: 0 }, { yPercent: -25, ease: "none" }, 0)
        .fromTo(".roads", { scaleY: 0.9 }, { scaleY: 1.05, ease: "none" }, 0);

      // Scene 3: Highlight each service road as the section progresses.
      ScrollTrigger.create({
        trigger: ".scene",
        start: "top top",
        end: "+=5000",
        scrub: true,
        onUpdate: (self) => {
          const index = Math.min(3, Math.floor(self.progress * 4));
          setActiveRoad(index);
        }
      });

      ctx.add(() => {
        gateTl.kill();
        cityTl.kill();
      });
    },
    [reduceMotion]
  );

  useGsapContext(rootRef, setupTimeline);

  return (
    <div ref={rootRef} className="relative overflow-x-hidden bg-[#03030a] text-white">
      <CursorGlow />
      <HeroGate ref={heroRef} />
      <CityEntrance ref={cityRef} />
      <ServicesRoads activeRoad={activeRoad} />
      <CaseStudies />
      <AIToolsDistrict />
      <FinalCTA />
      <div className="pointer-events-none fixed inset-0 z-50 bg-noise opacity-20 mix-blend-soft-light" />
    </div>
  );
};
