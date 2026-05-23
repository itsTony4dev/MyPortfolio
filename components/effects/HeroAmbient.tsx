"use client";

import { motion } from "framer-motion";
import { usePerformanceMode } from "@/hooks/use-performance-mode";

const floatingShapes = [
  { className: "top-[15%] right-[12%] w-20 h-20 border-primary/30", delay: 0 },
  { className: "top-[45%] right-[5%] w-12 h-12 border-accent/40", delay: 0.8 },
  { className: "bottom-[30%] right-[18%] w-8 h-8 border-primary/25", delay: 1.4 },
];

export function HeroAmbient() {
  const { enableHeavyEffects, ready } = usePerformanceMode();

  if (!ready || !enableHeavyEffects) return null;

  return (
    <div className="hidden md:block" aria-hidden>
      <div className="hero-grid-drift absolute inset-0 pointer-events-none opacity-40" />

      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute border rotate-45 ${shape.className}`}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute top-24 left-6 w-8 h-8 border-l-2 border-t-2 border-primary/40"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-24 right-6 w-8 h-8 border-r-2 border-b-2 border-accent/40"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </div>
  );
}
