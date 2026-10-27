import Carousel from "@/components/Carousel";
import { site as data } from "@/data";
import TestimonialCard from "./TestimonialCard";
import TestimonialsHeading from "./TestimonialsHeading";

const { testimonials } = data;

// On phones the arrows sit on the dots row, one at each end, so they never cover the quote.
const arrow =
  "absolute top-1/2 z-10 flex size-40 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-[0_6px_20px_rgba(10,40,50,0.14)] transition-colors hover:bg-brand hover:text-white max-md:top-auto max-md:bottom-7 max-md:translate-y-1/2 md:size-56 xl:-mt-62 xl:size-82";

export default function Testimonials() {
  return (
    <section data-white-section className="py-64 sm:py-80 xl:py-120 bg-white [[data-white-section]+&]:pt-0!">
      <TestimonialsHeading />
      <div data-reveal="up" data-reveal-delay="250" className="mx-auto mt-32 max-w-1900 px-20 sm:px-40 md:px-88 xl:mt-38 xl:px-136">
        <Carousel
          label={testimonials.label}
          trackClass="[--n:1] md:[--n:2] xl:[--n:3] [--gap:calc(var(--spacing)*24)] xl:[--gap:calc(var(--spacing)*33)]"
          autoplay={4000}
          prevClass={`${arrow} left-0 md:-left-72 xl:-left-95`}
          nextClass={`${arrow} right-0 md:-right-72 xl:-right-95`}
          arrowIconClass="size-20 md:size-24 xl:size-32"
          dots
          dotsClass="mt-28 xl:mt-37"
        >
          {testimonials.items.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
