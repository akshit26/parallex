"use client";

import { FormEvent, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

export const AIToolsDistrict = () => {
  const [roi, setRoi] = useState<number | null>(null);
  const [fakeScore, setFakeScore] = useState<number | null>(null);
  const [budget, setBudget] = useState<number | null>(null);

  const onRoiSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const spend = Number(data.get("spend"));
    const revenue = Number(data.get("revenue"));
    setRoi(Number((((revenue - spend) / spend) * 100).toFixed(1)));
  };

  const onFakeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const engagement = Number(data.get("engagement"));
    const growth = Number(data.get("growth"));
    setFakeScore(Math.max(1, Math.min(99, Math.round(100 - engagement * 2.5 + growth * 1.6))));
  };

  const onBudgetSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const targetLeads = Number(data.get("leads"));
    const cpl = Number(data.get("cpl"));
    setBudget(Math.round(targetLeads * cpl * 1.2));
  };

  return (
    <section className="scene min-h-screen px-6 py-24">
      <div className="mx-auto max-w-6xl space-y-8">
        <p className="text-sm uppercase tracking-[0.4em] text-neon-green">Scene 05 · AI Tools District</p>
        <h2 className="text-4xl font-bold">Interactive Growth Lab</h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <GlassCard>
            <h3 className="text-xl font-semibold">Influencer ROI Calculator</h3>
            <form onSubmit={onRoiSubmit} className="mt-4 space-y-3">
              <input name="spend" placeholder="Campaign spend" className="w-full rounded-lg border border-neon-blue/50 bg-black/40 px-3 py-2" />
              <input name="revenue" placeholder="Attributed revenue" className="w-full rounded-lg border border-neon-blue/50 bg-black/40 px-3 py-2" />
              <button className="rounded-lg border border-neon-blue/70 px-3 py-2 text-neon-blue">Simulate</button>
            </form>
            {roi !== null && <p className="mt-3 text-neon-green">Estimated ROI: {roi}%</p>}
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold">Fake Follower Checker</h3>
            <form onSubmit={onFakeSubmit} className="mt-4 space-y-3">
              <input name="engagement" placeholder="Engagement rate %" className="w-full rounded-lg border border-neon-purple/50 bg-black/40 px-3 py-2" />
              <input name="growth" placeholder="Follower growth %" className="w-full rounded-lg border border-neon-purple/50 bg-black/40 px-3 py-2" />
              <button className="rounded-lg border border-neon-purple/70 px-3 py-2 text-neon-purple">Analyze</button>
            </form>
            {fakeScore !== null && <p className="mt-3 text-neon-green">Authenticity score: {100 - fakeScore}/100</p>}
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold">Campaign Budget Estimator</h3>
            <form onSubmit={onBudgetSubmit} className="mt-4 space-y-3">
              <input name="leads" placeholder="Target leads" className="w-full rounded-lg border border-neon-green/50 bg-black/40 px-3 py-2" />
              <input name="cpl" placeholder="Expected CPL" className="w-full rounded-lg border border-neon-green/50 bg-black/40 px-3 py-2" />
              <button className="rounded-lg border border-neon-green/70 px-3 py-2 text-neon-green">Estimate</button>
            </form>
            {budget !== null && <p className="mt-3 text-neon-green">Suggested budget: ${budget.toLocaleString()}</p>}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
