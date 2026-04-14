import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          purple: "#8b5cf6",
          blue: "#22d3ee",
          green: "#22c55e"
        }
      },
      boxShadow: {
        glass: "0 0 40px rgba(139, 92, 246, 0.25)",
        neon: "0 0 20px rgba(34, 211, 238, 0.45)"
      },
      backgroundImage: {
        noise: "radial-gradient(circle at center, rgba(255,255,255,0.04) 0, transparent 65%)"
      }
    }
  },
  plugins: []
};

export default config;
