import { Highlight, SectionLabel } from "@/components/ui/SectionHeading";
import type { SectionIntroData } from "@/types/templates.types";

export const TestimonialsHeading = ({ data: testimonials }: { data: SectionIntroData }) => {
  return (
    <div className="px-20 text-center sm:px-40">
      <SectionLabel
        text={testimonials.label}
        lineClass="h-4 w-60 bg-brand xl:h-5 xl:w-82"
        className="font-body text-[0.9375rem] tracking-[0.27em] text-[var(--color-heading-90)] xl:text-[1.4375rem]"
      />
      <h2 data-reveal="up" data-reveal-delay="100" className="mt-16 font-display text-[2.375rem] leading-46 font-black tracking-[-0.04em] text-heading sm:text-[3.5rem] sm:leading-64 xl:mt-30 xl:text-[5.3125rem] xl:leading-96">
        <Highlight text={testimonials.title} highlight={testimonials.titleHighlight} highlightClass="text-brand" />
      </h2>
      <p data-reveal="up" data-reveal-delay="200" className="mx-auto mt-14 max-w-900 font-body text-[1rem] leading-26 text-slate xl:mt-13 xl:max-w-none xl:text-[1.625rem] xl:leading-36 xl:whitespace-pre-line">
        {testimonials.description}
      </p>
    </div>
  );
};
