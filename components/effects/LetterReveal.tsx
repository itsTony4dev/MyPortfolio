"use client";

import { motion } from "framer-motion";
import { usePerformanceMode } from "@/hooks/use-performance-mode";

type LetterRevealProps = {
  text: string;
  className?: string;
};

export function LetterReveal({ text, className = "" }: LetterRevealProps) {
  const { enableHeavyEffects, ready } = usePerformanceMode();

  if (!ready) {
    return <span className={className}>{text}</span>;
  }

  if (!enableHeavyEffects) {
    return <span className={className}>{text}</span>;
  }

  const letters = text.split("");

  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {letters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={char === " " ? "w-[0.35em]" : "inline-block"}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
