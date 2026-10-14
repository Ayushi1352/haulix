import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { testimonials } = data;

export default function TestimonialsHeading() {
  return (
    <div className="px-20 text-center sm:px-40">
      <SectionLabel
        text={testimonials.label}
        lineClass="h-4 w-60 bg-brand xl:h-5 xl:w-82"
        className="font-body fs-15 tracking-[0.27em] text-heading/90 xl:fs-23"
      />
      <h2 data-reveal="up" className="mt-16 [--delay:100ms] font-display fs-38 leading-46 font-black tracking-[-0.04em] text-heading sm:fs-56 sm:leading-64 xl:mt-30 xl:fs-85 xl:leading-96">
        <Highlight text={testimonials.title} highlight={testimonials.titleHighlight} highlightClass="text-brand" />
      </h2>
      <p data-reveal="up" className="mx-auto mt-14 max-w-900 [--delay:200ms] font-body fs-16 leading-26 text-slate xl:mt-13 xl:max-w-none xl:fs-26 xl:leading-36 xl:whitespace-pre-line">
        {testimonials.description}
      </p>
    </div>
  );
}
