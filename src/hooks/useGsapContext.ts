"use client";

import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapContext = (
  scope: RefObject<HTMLElement>,
  setup: () => void | (() => void)
) => {
  useLayoutEffect(() => {
    if (!scope.current) return;

    let cleanup: void | (() => void);

    // `gsap.context` scopes selectors/animations and handles teardown automatically.
    const ctx = gsap.context(() => {
      cleanup = setup();
    }, scope);

    return () => {
      cleanup?.();
      ctx.revert();
    };
  }, [scope, setup]);
};
