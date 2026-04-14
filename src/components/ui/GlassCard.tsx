import { PropsWithChildren } from "react";

export const GlassCard = ({ children }: PropsWithChildren) => {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-glass backdrop-blur-xl">
      {children}
    </div>
  );
};
