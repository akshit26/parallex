"use client";

import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapContext = (
  scope: RefObject<HTMLElement>,
  setup: () => void
) => {
  useLayoutEffect(() => {
    if (!scope.current) return;

    // `gsap.context` scopes selectors/animations and handles teardown automatically.
    const ctx = gsap.context(() => setup(), scope);
    return () => ctx.revert();
  }, [scope, setup]);
};
