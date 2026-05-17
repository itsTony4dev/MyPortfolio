"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
          mobileOpen
            ? "bg-bg border-b border-border"
            : scrolled
              ? "bg-bg/95 backdrop-blur-xl border-b border-border"
              : "bg-transparent"
        }`}
      >
        <nav className="relative z-[201] max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-mono text-sm font-medium text-text hover:text-primary transition-colors"
            onClick={closeMobile}
          >
            {site.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex glow-cta px-5 py-2 rounded-full text-sm"
          >
            Hire Me
          </a>

          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-text hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-[199]"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#0a0a0f] cursor-default"
            onClick={closeMobile}
            aria-label="Close menu"
          />

          <nav className="relative z-[1] flex min-h-full flex-col justify-between pt-24 pb-10 px-8 pointer-events-none">
            <ul className="flex flex-col gap-1 pointer-events-auto">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-baseline gap-4 py-3 transition-colors"
                    onClick={closeMobile}
                  >
                    <span className="font-mono text-xs text-primary/50 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-2xl sm:text-3xl text-muted group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pointer-events-auto space-y-6 border-t border-border/60 pt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:gap-3 transition-all"
                onClick={closeMobile}
              >
                Hire Me
                <span aria-hidden>→</span>
              </a>
              <p className="font-mono text-[10px] text-muted tracking-widest uppercase">
                {site.location} · Open to remote
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
