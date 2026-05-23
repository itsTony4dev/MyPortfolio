"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { HeroAmbient } from "@/components/effects/HeroAmbient";
import { HeroMobileStrip } from "@/components/effects/HeroMobileStrip";
import { HeroParticles } from "@/components/effects/HeroParticles";
import { HeroVisual } from "@/components/effects/HeroVisual";
import { LetterReveal } from "@/components/effects/LetterReveal";
import { Typewriter } from "@/components/effects/Typewriter";
import { usePerformanceMode } from "@/hooks/use-performance-mode";
import { site } from "@/lib/data";

export function Hero() {
  const { enableHeavyEffects, ready } = usePerformanceMode();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden noise max-md:noise-off">
      <div className="absolute inset-0 grid-bg max-md:opacity-40" aria-hidden />
      <HeroParticles />
      <HeroAmbient />

      {/* Glow orbs — static on mobile (no animated blur) */}
      {enableHeavyEffects && ready ? (
        <>
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-[120px] pointer-events-none bg-accent hidden md:block"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-15 blur-[120px] pointer-events-none bg-primary hidden md:block"
            animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            aria-hidden
          />
        </>
      ) : (
        <>
          <div
            className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 bg-accent blur-3xl pointer-events-none md:hidden"
            aria-hidden
          />
          <div
            className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10 bg-primary blur-3xl pointer-events-none md:hidden"
            aria-hidden
          />
        </>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="font-mono text-sm text-muted mb-6">
              <span className="text-success">●</span> Available for opportunities
              · {site.location}
            </p>

            <h1 className="font-mono text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-medium tracking-tight text-text leading-[1.05] mb-6">
              <LetterReveal text={site.name} />
            </h1>

            <div className="font-mono text-xl md:text-2xl text-muted mb-8 min-h-[2.5rem]">
              <Typewriter text={site.title} speed={45} />
            </div>

            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10 max-md:animate-none">
              {site.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="glow-cta inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-border text-text hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                Contact
              </a>
            </div>

            <HeroMobileStrip />
          </div>

          <HeroVisual />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-primary transition-colors z-20 max-md:hidden"
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
