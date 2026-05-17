"use client";

import { motion } from "framer-motion";

const floatingShapes = [
  { className: "top-[15%] right-[12%] w-20 h-20 border-primary/30", delay: 0 },
  { className: "top-[45%] right-[5%] w-12 h-12 border-accent/40", delay: 0.8 },
  { className: "bottom-[30%] right-[18%] w-8 h-8 border-primary/25", delay: 1.4 },
  { className: "top-[25%] left-[8%] w-6 h-6 border-accent/30", delay: 0.4 },
  { className: "bottom-[20%] left-[15%] w-14 h-14 border-primary/20", delay: 1.1 },
];

const stats = [
  { label: "LATENCY", value: "12ms", delay: 0 },
  { label: "UPTIME", value: "99.9%", delay: 0.8 },
  { label: "STATUS", value: "ONLINE", highlight: true, delay: 1.6 },
];

export function HeroAmbient() {
  return (
    <>
      <div className="hero-grid-drift absolute inset-0 pointer-events-none opacity-40" aria-hidden />

      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute border rotate-45 ${shape.className}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.15, 0.35, 0.15],
            y: [0, -20, 0],
            rotate: [45, 90, 45],
          }}
          transition={{
            opacity: { duration: 5, repeat: Infinity, delay: shape.delay },
            y: {
              duration: 6,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            },
            rotate: {
              duration: 12,
              repeat: Infinity,
              delay: shape.delay,
              ease: "linear",
            },
          }}
          aria-hidden
        />
      ))}

      <motion.div
        className="absolute top-24 left-6 w-8 h-8 border-l-2 border-t-2 border-primary/40"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        aria-hidden
      />
      <motion.div
        className="absolute top-24 right-6 w-8 h-8 border-r-2 border-t-2 border-primary/40 hidden lg:block"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-24 left-6 w-8 h-8 border-l-2 border-b-2 border-accent/40"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.8 }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-24 right-6 w-8 h-8 border-r-2 border-b-2 border-accent/40 hidden lg:block"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        aria-hidden
      />

      <motion.div
        className="absolute bottom-32 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-8 hidden sm:flex gap-6 font-mono text-[10px] text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center gap-1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: stat.delay,
            }}
          >
            <span className="tracking-widest">{stat.label}</span>
            <span className={stat.highlight ? "text-success" : "text-primary"}>
              {stat.value}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
