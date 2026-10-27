import { Highlight, SectionLabel } from "./SectionHeading";

interface PageIntroProps {
  label: string;
  title: string;
  highlight: string;
  description: string;
}

// Centered "—— LABEL / Title / description" block used on the contact and quote pages.
export default function PageIntro({ label, title, highlight, description }: PageIntroProps) {
  return (
    <div className="text-center">
      <SectionLabel
        text={label}
        lineClass="h-2 w-44 bg-brand xl:h-3 xl:w-55"
        className="font-heading text-[calc(14*var(--spacing))] font-bold tracking-[0.08em] text-ink xl:text-[calc(16*var(--spacing))]"
      />
      <h2 data-reveal="up" data-reveal-delay="100" className="mt-10 font-heading text-[calc(36*var(--spacing))] leading-44 font-extrabold tracking-[-0.03em] text-ink sm:text-[calc(50*var(--spacing))] sm:leading-58 xl:mt-8 xl:text-[calc(64*var(--spacing))] xl:leading-76">
        <Highlight text={title} highlight={highlight} highlightClass="text-brand" />
      </h2>
      <p data-reveal="up" data-reveal-delay="200" className="mx-auto mt-10 max-w-760 font-heading text-[calc(15*var(--spacing))] leading-25 font-medium text-steel xl:mt-6 xl:max-w-none xl:text-[calc(20*var(--spacing))] xl:leading-30 xl:tracking-[0.01em] xl:whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
