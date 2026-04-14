"use client";

import { useEffect, useState } from "react";

export const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="cursor-glow pointer-events-none fixed z-30 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-purple/20 blur-3xl"
      style={{ left: position.x, top: position.y }}
    />
  );
};
