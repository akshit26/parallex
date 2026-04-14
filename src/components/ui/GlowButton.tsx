"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type GlowButtonProps = PropsWithChildren<{
  variant?: "primary" | "secondary";
}>;

export const GlowButton = ({ children, variant = "primary" }: GlowButtonProps) => {
  const base =
    "rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300";
  const style =
    variant === "primary"
      ? "bg-neon-blue/20 text-neon-blue border border-neon-blue/70"
      : "bg-neon-purple/20 text-neon-purple border border-neon-purple/70";

  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: "0px 0px 24px rgba(34,211,238,0.45)" }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${style}`}
    >
      {children}
    </motion.button>
  );
};
