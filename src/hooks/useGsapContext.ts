"use client";

import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapContext = (
  scope: RefObject<HTMLElement>,
  setup: (ctx: gsap.Context) => void
) => {
  useLayoutEffect(() => {
    if (!scope.current) return;

    const ctx = gsap.context(() => setup(ctx), scope);
    return () => ctx.revert();
  }, [scope, setup]);
};
