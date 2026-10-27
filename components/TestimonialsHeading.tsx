import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { testimonials } = data;

export default function TestimonialsHeading() {
  return (
    <div className="px-20 text-center sm:px-40">
      <SectionLabel
        text={testimonials.label}
        lineClass="h-4 w-60 bg-brand xl:h-5 xl:w-82"
        className="font-body text-[calc(15*var(--spacing))] tracking-[0.27em] text-heading/90 xl:text-[calc(23*var(--spacing))]"
      />
      <h2 data-reveal="up" data-reveal-delay="100" className="mt-16 font-display text-[calc(38*var(--spacing))] leading-46 font-black tracking-[-0.04em] text-heading sm:text-[calc(56*var(--spacing))] sm:leading-64 xl:mt-30 xl:text-[calc(85*var(--spacing))] xl:leading-96">
        <Highlight text={testimonials.title} highlight={testimonials.titleHighlight} highlightClass="text-brand" />
      </h2>
      <p data-reveal="up" data-reveal-delay="200" className="mx-auto mt-14 max-w-900 font-body text-[calc(16*var(--spacing))] leading-26 text-slate xl:mt-13 xl:max-w-none xl:text-[calc(26*var(--spacing))] xl:leading-36 xl:whitespace-pre-line">
        {testimonials.description}
      </p>
    </div>
  );
}
