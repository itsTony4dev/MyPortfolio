import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <AnimatedSection id="skills" className="max-w-6xl mx-auto px-6 py-4">
      <SectionHeading
        label="02 — Skills"
        title="Tech stack"
        subtitle="The tools I reach for when building production-grade systems."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="glass-card rounded-2xl p-6">
            <h3 className="font-mono text-sm text-primary mb-4 tracking-wide">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill}>
                  <span className="skill-pill inline-block px-3 py-1.5 rounded-full text-sm text-text font-mono">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
