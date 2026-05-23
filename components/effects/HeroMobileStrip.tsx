"use client";

const tags = ["TypeScript", "Node.js", "PostgreSQL", "Docker", "Go", "Socket.IO"];

export function HeroMobileStrip() {
  return (
    <div className="md:hidden mt-10 overflow-hidden mask-fade-x">
      <div className="flex gap-3 w-max animate-marquee">
        {[...tags, ...tags].map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            className="font-mono text-xs px-3 py-1.5 rounded-full border border-border bg-surface text-muted shrink-0"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
