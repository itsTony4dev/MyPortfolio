import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutText } from "@/lib/data";

export function About() {
  return (
    <AnimatedSection id="about" className="max-w-6xl mx-auto px-6 py-4">
      <SectionHeading
        label="01 — About"
        title="Engineering with intent"
        subtitle="Backend systems, real-time platforms, and the craft of reliable software."
      />
      <div className="glass-card rounded-2xl p-8 md:p-10">
        <p className="text-muted text-lg leading-relaxed whitespace-pre-line">
          {aboutText}
        </p>
      </div>
    </AnimatedSection>
  );
}
