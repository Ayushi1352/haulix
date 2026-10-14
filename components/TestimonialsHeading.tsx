import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { testimonials } = data;

export default function TestimonialsHeading() {
  return (
    <div className="px-20 text-center sm:px-40">
      <SectionLabel
        text={testimonials.label}
        lineClass="h-4 w-60 bg-crimson xl:h-5 xl:w-82"
        className="font-poppins fs-15 tracking-[0.27em] text-[#1d3640] xl:fs-23"
      />
      <h2 className="mt-16 font-inter fs-38 leading-46 font-black tracking-[-0.04em] text-[#023a46] sm:fs-56 sm:leading-64 xl:mt-30 xl:fs-85 xl:leading-96">
        <Highlight text={testimonials.title} highlight={testimonials.titleHighlight} highlightClass="text-[#9a1216]" />
      </h2>
      <p className="mx-auto mt-14 max-w-900 font-poppins fs-16 leading-26 text-[#4b5a62] xl:mt-13 xl:max-w-none xl:fs-26 xl:leading-36 xl:whitespace-pre-line">
        {testimonials.description}
      </p>
    </div>
  );
}
