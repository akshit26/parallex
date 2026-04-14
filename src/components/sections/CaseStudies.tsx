"use client";

import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useMemo, useState } from "react";
import { caseStudies } from "@/data/content";
import { GlassCard } from "@/components/ui/GlassCard";

type ResultCounterProps = {
  value: number;
  suffix: string;
};

const ResultCounter = ({ value, suffix }: ResultCounterProps) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const ticker = { val: 0 };
    const tween = gsap.to(ticker, {
      val: value,
      duration: 1.1,
      ease: "power2.out",
      onUpdate: () => setDisplay(Number(ticker.val.toFixed(1)))
    });

    return () => tween.kill();
  }, [value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
};

export const CaseStudies = () => {
  const [active, setActive] = useState<string | null>(null);
  const selected = useMemo(() => caseStudies.find((item) => item.id === active), [active]);

  return (
    <section className="scene min-h-screen px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.4em] text-neon-purple">Scene 04 · City Walls</p>
        <h2 className="mt-4 text-4xl font-bold">Holographic case archives</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.map((item, idx) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0.4 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              onClick={() => setActive(item.id)}
              className="rounded-2xl border border-white/20 bg-white/5 p-6 text-left backdrop-blur-md"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-neon-blue">Case Study</p>
              <h3 className="mt-2 text-2xl font-semibold">{item.brand}</h3>
              <p className="mt-3 text-sm text-white/70">{item.problem}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-3xl"
            >
              <GlassCard>
                <h3 className="text-3xl font-bold">{selected.brand}</h3>
                <p className="mt-4 text-white/80"><strong>Problem:</strong> {selected.problem}</p>
                <p className="mt-2 text-white/80"><strong>What we did:</strong> {selected.action}</p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {selected.results.map((result) => (
                    <div key={result.label} className="rounded-xl border border-white/20 bg-black/40 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-neon-green">{result.label}</p>
                      <p className="mt-2 text-3xl font-bold text-neon-blue">
                        <ResultCounter value={result.value} suffix={result.suffix} />
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};
