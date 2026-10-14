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
        className="font-heading fs-14 font-bold tracking-[0.08em] text-ink xl:fs-16"
      />
      <h2 data-reveal="up" className="mt-10 [--delay:100ms] font-heading fs-36 leading-44 font-extrabold tracking-[-0.03em] text-ink sm:fs-50 sm:leading-58 xl:mt-8 xl:fs-64 xl:leading-76">
        <Highlight text={title} highlight={highlight} highlightClass="text-brand" />
      </h2>
      <p data-reveal="up" className="mx-auto mt-10 max-w-760 [--delay:200ms] font-heading fs-15 leading-25 font-medium text-steel xl:mt-6 xl:max-w-none xl:fs-20 xl:leading-30 xl:tracking-[0.01em] xl:whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
