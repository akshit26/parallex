export const services = [
  {
    id: "influencer",
    title: "Creator Boulevard",
    subtitle: "Influencer Marketing",
    points: [
      "AI-powered creator discovery across tier-1 and niche audiences",
      "Narrative-first campaign architecture for premium brand lift",
      "Real-time attribution from first touch to revenue"
    ]
  },
  {
    id: "performance",
    title: "Conversion Highway",
    subtitle: "Performance Marketing",
    points: [
      "Full-funnel paid media velocity with creative experimentation",
      "Automated budget reallocation based on live CAC and ROAS",
      "Cross-channel retargeting loops built for rapid scale"
    ]
  },
  {
    id: "seo",
    title: "Search District",
    subtitle: "SEO",
    points: [
      "Entity-based SEO strategy mapped to high-intent journeys",
      "Programmatic content systems with editorial quality control",
      "Technical SEO hardening for speed, crawlability, and authority"
    ]
  },
  {
    id: "ai",
    title: "Automation Lab",
    subtitle: "AI Tools",
    points: [
      "Workflow agents for lead qualification and outreach",
      "Predictive campaign assistants for faster creative decisions",
      "Ops automations that cut manual effort and boost output"
    ]
  }
] as const;

export const caseStudies = [
  {
    id: "nova-beauty",
    brand: "Nova Beauty",
    problem: "High creator spend, weak conversion efficiency.",
    action: "Built an AI creator scoring engine + performance retargeting mesh.",
    results: [
      { label: "ROAS", value: 4.6, suffix: "x" },
      { label: "CAC", value: 38, suffix: "%↓" },
      { label: "Revenue", value: 2.1, suffix: "M" }
    ]
  },
  {
    id: "volt-fitness",
    brand: "Volt Fitness",
    problem: "Plateaued growth from paid social.",
    action: "Unified SEO + paid media with AI landing page personalization.",
    results: [
      { label: "MQL", value: 187, suffix: "%↑" },
      { label: "CPL", value: 31, suffix: "%↓" },
      { label: "Organic", value: 3.4, suffix: "x" }
    ]
  },
  {
    id: "quantum-fintech",
    brand: "Quantum Fintech",
    problem: "Strong traffic, low activation and retention.",
    action: "Launched lifecycle automations and influencer trust campaigns.",
    results: [
      { label: "Activation", value: 62, suffix: "%↑" },
      { label: "Retention", value: 29, suffix: "%↑" },
      { label: "LTV", value: 2.2, suffix: "x" }
    ]
  }
] as const;
