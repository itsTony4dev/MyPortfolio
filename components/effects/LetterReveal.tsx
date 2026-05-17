"use client";

import { motion } from "framer-motion";

type LetterRevealProps = {
  text: string;
  className?: string;
};

export function LetterReveal({ text, className = "" }: LetterRevealProps) {
  const letters = text.split("");

  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-label={text}>
      {letters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: i * 0.05,
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
