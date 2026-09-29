import Reveal from './Reveal';

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}

/** Editorial section header: muted eyebrow above a serif headline. */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <Reveal direction="up" className="mb-14 sm:mb-20">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">
        {index ? `${index} — ` : ''}
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-4xl font-display text-4xl text-ink sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
