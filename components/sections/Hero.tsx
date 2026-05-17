"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { HeroParticles } from "@/components/effects/HeroParticles";
import { LetterReveal } from "@/components/effects/LetterReveal";
import { Typewriter } from "@/components/effects/Typewriter";
import { site } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden noise">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <HeroParticles />

      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-[120px] pointer-events-none bg-accent"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-15 blur-[120px] pointer-events-none bg-primary"
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-mono text-sm text-muted mb-6"
        >
          <span className="text-success">●</span> Available for opportunities ·{" "}
          {site.location}
        </motion.p>

        <h1 className="font-mono text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-text leading-[1.05] mb-6">
          <LetterReveal text={site.name} />
        </h1>

        <div className="font-mono text-xl md:text-2xl text-muted mb-8 min-h-[2.5rem]">
          <Typewriter text={site.title} speed={45} />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="glow-cta inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-border text-text hover:border-primary/50 hover:text-primary transition-all"
          >
            <Mail size={16} />
            Contact
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-primary transition-colors"
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
