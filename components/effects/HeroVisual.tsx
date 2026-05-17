"use client";

import { motion } from "framer-motion";

const terminalLines = [
  { prefix: "$", text: "npm run build", delay: 0 },
  { prefix: ">", text: "Compiling TypeScript...", delay: 0.4 },
  { prefix: "✓", text: "Build completed in 4.2s", delay: 0.8, success: true },
  { prefix: "$", text: "vitest run --coverage", delay: 1.2 },
  { prefix: ">", text: "Tests: 142 passed (80% coverage)", delay: 1.6, success: true },
  { prefix: "$", text: "deploy --env production", delay: 2.0 },
  { prefix: "✓", text: "Deployed to cluster · 200+ concurrent", delay: 2.4, success: true },
];

const orbitBadges = [
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Socket.IO",
  "Go",
];

const orbitPositions = [
  { x: "8%", y: "12%", delay: 0 },
  { x: "78%", y: "8%", delay: 0.5 },
  { x: "88%", y: "55%", delay: 1 },
  { x: "72%", y: "82%", delay: 1.5 },
  { x: "12%", y: "78%", delay: 2 },
  { x: "4%", y: "42%", delay: 2.5 },
];

const connectionLines = [
  { x2: "20%", y2: "20%", delay: 1.5 },
  { x2: "85%", y2: "25%", delay: 1.7 },
  { x2: "80%", y2: "70%", delay: 1.9 },
];

export function HeroVisual() {
  return (
    <div className="relative w-full h-[420px] md:h-[520px] lg:h-[580px] hidden md:block">
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] lg:w-[340px] lg:h-[340px] rounded-full border border-primary/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] lg:w-[260px] lg:h-[260px] rounded-full border border-accent/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-dashed border-primary/20"
        animate={{ rotate: 360, scale: [1, 1.04, 1] }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        aria-hidden
      />

      <motion.div
        className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/40 z-10"
        animate={{
          boxShadow: [
            "0 0 20px rgba(0,212,255,0.2)",
            "0 0 40px rgba(124,58,237,0.35)",
            "0 0 20px rgba(0,212,255,0.2)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <div className="absolute inset-2 rounded-full bg-bg/80 flex items-center justify-center font-mono text-xs text-primary">
          API
        </div>
      </motion.div>

      {orbitBadges.map((badge, i) => (
        <motion.span
          key={badge}
          className="absolute font-mono text-[11px] px-2.5 py-1 rounded-full border border-border/80 bg-surface/90 text-muted backdrop-blur-sm z-10"
          style={{ left: orbitPositions[i].x, top: orbitPositions[i].y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.6, 1, 0.6],
            y: [0, -8, 0],
            scale: 1,
          }}
          transition={{
            opacity: {
              duration: 3,
              repeat: Infinity,
              delay: orbitPositions[i].delay,
            },
            y: {
              duration: 4,
              repeat: Infinity,
              delay: orbitPositions[i].delay,
              ease: "easeInOut",
            },
            scale: { duration: 0.5, delay: 0.3 + i * 0.1 },
          }}
        >
          {badge}
        </motion.span>
      ))}

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0"
        aria-hidden
      >
        <defs>
          <linearGradient id="hero-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {connectionLines.map((line) => (
          <motion.line
            key={`${line.x2}-${line.y2}`}
            x1="50%"
            y1="38%"
            x2={line.x2}
            y2={line.y2}
            stroke="url(#hero-line-grad)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{
              delay: line.delay,
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute bottom-0 left-0 right-0 lg:left-4 lg:right-auto lg:w-[92%] glass-card rounded-xl overflow-hidden border-primary/20 shadow-[0_0_60px_rgba(0,212,255,0.08)] z-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface/80">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-xs text-muted">~/backend — zsh</span>
        </div>
        <div className="p-4 font-mono text-xs sm:text-sm space-y-2 min-h-[180px] bg-bg/60">
          {terminalLines.map((line) => (
            <motion.div
              key={line.text}
              className="flex gap-2"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + line.delay, duration: 0.4 }}
            >
              <span
                className={
                  line.success
                    ? "text-success shrink-0"
                    : line.prefix === "$"
                      ? "text-primary shrink-0"
                      : "text-accent shrink-0"
                }
              >
                {line.prefix}
              </span>
              <span className={line.success ? "text-muted" : "text-text/90"}>
                {line.text}
              </span>
            </motion.div>
          ))}
          <motion.span
            className="inline-block w-2 h-4 bg-primary cursor-blink ml-0.5 align-middle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
            aria-hidden
          />
        </div>
      </motion.div>
    </div>
  );
}
