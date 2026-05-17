"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/data";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const message = data.get("message") as string;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <AnimatedSection id="contact" className="max-w-6xl mx-auto px-6 py-4">
      <SectionHeading
        label="06 — Contact"
        title="Let's build something"
        subtitle="Open to backend roles, contract work, and interesting collaborations."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <a
            href={`mailto:${site.email}`}
            className="glass-card rounded-xl p-5 flex items-center gap-4 group"
          >
            <Mail className="text-primary shrink-0" size={20} />
            <div>
              <p className="text-xs text-muted font-mono uppercase tracking-wide">
                Email
              </p>
              <p className="text-text group-hover:text-primary transition-colors">
                {site.email}
              </p>
            </div>
          </a>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="glass-card rounded-xl p-5 flex items-center gap-4 group"
          >
            <Phone className="text-primary shrink-0" size={20} />
            <div>
              <p className="text-xs text-muted font-mono uppercase tracking-wide">
                Phone
              </p>
              <p className="text-text group-hover:text-primary transition-colors">
                {site.phone}
              </p>
            </div>
          </a>
          <div className="glass-card rounded-xl p-5 flex items-center gap-4">
            <MapPin className="text-primary shrink-0" size={20} />
            <div>
              <p className="text-xs text-muted font-mono uppercase tracking-wide">
                Location
              </p>
              <p className="text-text">{site.location}</p>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-full p-3 text-muted hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-full p-3 text-muted hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-8 space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="block font-mono text-xs text-muted uppercase tracking-wide mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text text-sm focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-mono text-xs text-muted uppercase tracking-wide mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text text-sm focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-mono text-xs text-muted uppercase tracking-wide mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
              placeholder="Tell me about the role or project..."
            />
          </div>
          <button
            type="submit"
            className="glow-cta w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-medium"
          >
            <Send size={16} />
            {status === "sent" ? "Opening mail client…" : "Send Message"}
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
}
