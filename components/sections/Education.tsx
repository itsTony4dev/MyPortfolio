import { Award, GraduationCap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, education } from "@/lib/data";

export function Education() {
  return (
    <AnimatedSection id="education" className="max-w-6xl mx-auto px-6 py-4">
      <SectionHeading
        label="05 — Education"
        title="Credentials & learning"
        subtitle="Formal education and industry certifications."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <article className="glass-card rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-mono text-xl text-text">
                {education.degree}
              </h3>
              <p className="text-primary mt-1">{education.school}</p>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-4 font-mono text-sm">
            <div>
              <dt className="text-muted mb-1">GPA</dt>
              <dd className="text-success font-medium">{education.gpa}</dd>
            </div>
            <div>
              <dt className="text-muted mb-1">Period</dt>
              <dd className="text-text">{education.period}</dd>
            </div>
          </dl>
        </article>

        <article className="glass-card rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-accent/10 text-accent">
              <Award size={24} />
            </div>
            <div>
              <h3 className="font-mono text-xl text-text">
                Cisco Certifications
              </h3>
              <p className="text-muted text-sm mt-1">Instructor-led @ LIU</p>
            </div>
          </div>
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex justify-between gap-4 text-sm border-b border-border/50 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-text leading-snug">{cert.name}</span>
                <time className="text-muted font-mono shrink-0">
                  {cert.date}
                </time>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </AnimatedSection>
  );
}
