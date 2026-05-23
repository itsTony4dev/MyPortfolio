"use client";

import { useEffect, useRef, useState } from "react";
import { usePerformanceMode } from "@/hooks/use-performance-mode";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
};

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { enableHeavyEffects, ready } = usePerformanceMode();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!enableHeavyEffects) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(canvas);

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId = 0;
    let particles: Particle[] = [];
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initParticles = () => {
      const area = canvas.offsetWidth * canvas.offsetHeight;
      const count = Math.min(Math.floor(area / 18000), 40);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.4 + 0.15,
      }));
    };

    const draw = () => {
      if (!running) return;

      if (!visible) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    draw();

    const onResize = () => {
      resize();
      initParticles();
    };

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, [enableHeavyEffects, visible]);

  if (!ready || !enableHeavyEffects) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50 hidden md:block"
      aria-hidden
    />
  );
}
