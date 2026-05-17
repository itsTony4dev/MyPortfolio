import { ExternalLink, Github } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const upcoming = projects.find((p) => !p.featured);

  return (
    <AnimatedSection id="projects" className="max-w-6xl mx-auto px-6 py-4">
      <SectionHeading
        label="04 — Projects"
        title="Selected work"
        subtitle="Side projects and platforms built end-to-end."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {featured && (
          <article className="glass-card rounded-2xl p-8 lg:col-span-2 group">
            <span className="inline-block font-mono text-xs text-primary border border-primary/30 rounded-full px-3 py-1 mb-4">
              Featured
            </span>
            <h3 className="font-mono text-2xl md:text-3xl text-text mb-1">
              {featured.name}
            </h3>
            <p className="text-muted mb-4">{featured.tagline}</p>
            <p className="text-muted leading-relaxed mb-6 max-w-xl">
              {featured.description}
            </p>
            <ul className="space-y-2 mb-6">
              {featured.highlights.map((h) => (
                <li
                  key={h}
                  className="text-sm text-muted flex gap-2 leading-relaxed"
                >
                  <span className="text-accent shrink-0">—</span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-8">
              {featured.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-surface border border-border text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {featured.liveUrl && (
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-cta inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              {featured.githubUrl && (
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border border-border text-text hover:border-primary/50 hover:text-primary transition-all"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}
            </div>
          </article>
        )}
        {upcoming && (
          <article className="glass-card rounded-2xl p-8 flex flex-col justify-center items-center text-center border-dashed">
            <div className="font-mono text-4xl text-border mb-4">+</div>
            <h3 className="font-mono text-lg text-muted mb-2">
              {upcoming.name}
            </h3>
            <p className="text-sm text-muted">{upcoming.description}</p>
          </article>
        )}
      </div>
    </AnimatedSection>
  );
}
