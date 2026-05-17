"use client";

import { motion } from "framer-motion";

const tags = ["TypeScript", "Node.js", "PostgreSQL", "Docker", "Go", "Socket.IO"];

export function HeroMobileStrip() {
  return (
    <div className="md:hidden mt-10 overflow-hidden">
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...tags, ...tags].map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className="font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-surface/80 text-muted shrink-0"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
