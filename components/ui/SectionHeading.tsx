type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <header className="mb-12 md:mb-16">
      <p className="font-mono text-sm tracking-widest text-primary uppercase mb-3">
        {label}
      </p>
      <h2 className="font-mono text-3xl md:text-4xl font-medium text-text tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted max-w-2xl text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
}
