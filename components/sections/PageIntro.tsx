import { Highlight, SectionLabel } from "@/components/ui/SectionHeading";

interface PageIntroProps {
  label: string;
  title: string;
  highlight: string;
  description: string;
}

// Centered "—— LABEL / Title / description" block used on the contact and quote pages.
export const PageIntro = ({ label, title, highlight, description }: PageIntroProps) => {
  return (
    <div className="text-center">
      <SectionLabel
        text={label}
        lineClass="h-2 w-44 bg-brand xl:h-3 xl:w-55"
        className="font-heading text-[0.875rem] font-bold tracking-[0.08em] text-ink xl:text-[1rem]"
      />
      <h2 data-reveal="up" data-reveal-delay="100" className="mt-10 font-heading text-[2.25rem] leading-44 font-extrabold tracking-[-0.03em] text-ink sm:text-[3.125rem] sm:leading-58 xl:mt-8 xl:text-[4rem] xl:leading-76">
        <Highlight text={title} highlight={highlight} highlightClass="text-brand" />
      </h2>
      <p data-reveal="up" data-reveal-delay="200" className="mx-auto mt-10 max-w-760 font-heading text-[0.9375rem] leading-25 font-medium text-steel xl:mt-6 xl:max-w-none xl:text-[1.25rem] xl:leading-30 xl:tracking-[0.01em] xl:whitespace-pre-line">
        {description}
      </p>
    </div>
  );
};
