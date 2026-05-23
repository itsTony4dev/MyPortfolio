"use client";

import { useEffect, useState } from "react";

export type PerformanceMode = {
  /** Touch-first or narrow viewport */
  isMobile: boolean;
  /** User/OS requests reduced motion */
  prefersReducedMotion: boolean;
  /** Canvas, infinite framer loops, particle mesh, etc. */
  enableHeavyEffects: boolean;
  /** Scroll-triggered framer reveals */
  enableScrollAnimations: boolean;
  ready: boolean;
};

function getMode(): Omit<PerformanceMode, "ready"> {
  if (typeof window === "undefined") {
    return {
      isMobile: false,
      prefersReducedMotion: false,
      enableHeavyEffects: true,
      enableScrollAnimations: true,
    };
  }

  const isMobile =
    window.matchMedia("(max-width: 768px)").matches ||
    window.matchMedia("(hover: none) and (pointer: coarse)").matches;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const enableHeavyEffects = !isMobile && !prefersReducedMotion;
  const enableScrollAnimations = !prefersReducedMotion;

  return {
    isMobile,
    prefersReducedMotion,
    enableHeavyEffects,
    enableScrollAnimations,
  };
}

export function usePerformanceMode(): PerformanceMode {
  const [mode, setMode] = useState<PerformanceMode>({
    isMobile: false,
    prefersReducedMotion: false,
    enableHeavyEffects: false,
    enableScrollAnimations: false,
    ready: false,
  });

  useEffect(() => {
    const update = () => setMode({ ...getMode(), ready: true });

    update();

    const queries = [
      window.matchMedia("(max-width: 768px)"),
      window.matchMedia("(hover: none) and (pointer: coarse)"),
      window.matchMedia("(prefers-reduced-motion: reduce)"),
    ];

    queries.forEach((mq) => mq.addEventListener("change", update));
    return () => queries.forEach((mq) => mq.removeEventListener("change", update));
  }, []);

  return mode;
}
