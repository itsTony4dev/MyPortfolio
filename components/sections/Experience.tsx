import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data";

function Highlight({ text }: { text: string }) {
  const parts = text.split(/(\d+%)/g);
  return (
    <span>
      {parts.map((part, i) =>
        /^\d+%$/.test(part) ? (
          <span key={i} className="text-success font-medium">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </span>
  );
}

export function Experience() {
  return (
    <AnimatedSection id="experience" className="max-w-6xl mx-auto px-6 py-4">
      <SectionHeading
        label="03 — Experience"
        title="Where I've shipped"
        subtitle="Production systems, from startups to enterprise."
      />
      <div className="relative pl-8 md:pl-10">
        <div
          className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px timeline-line"
          aria-hidden
        />
        <ul className="space-y-12">
          {experience.map((job) => (
            <li key={job.company} className="relative">
              <div
                className="absolute -left-8 md:-left-10 top-1.5 w-4 h-4 rounded-full bg-primary border-2 border-bg timeline-dot"
                aria-hidden
              />
              <article className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-mono text-xl text-text">{job.role}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <time className="font-mono text-sm text-muted shrink-0">
                    {job.period}
                  </time>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-muted text-sm md:text-base leading-relaxed flex gap-3"
                    >
                      <span className="text-primary shrink-0 mt-1.5">▹</span>
                      <Highlight text={item} />
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
