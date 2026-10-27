import Carousel from "@/components/Carousel";
import { site as data } from "@/data";
import TestimonialCard from "./TestimonialCard";
import TestimonialsHeading from "./TestimonialsHeading";

const { testimonials } = data;

const arrow =
  "absolute top-1/2 z-10 hidden size-56 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-[0_6px_20px_rgba(10,40,50,0.14)] transition-colors hover:bg-brand hover:text-white md:flex xl:-mt-62 xl:size-82";

export default function Testimonials() {
  return (
    <section data-white-section className="py-64 sm:py-80 xl:py-120 bg-white [[data-white-section]+&]:pt-0!">
      <TestimonialsHeading />
      <div data-reveal="up" data-reveal-delay="250" className="mx-auto mt-32 max-w-1900 px-20 sm:px-40 md:px-88 xl:mt-38 xl:px-136">
        <Carousel
          label={testimonials.label}
          trackClass="[--n:1] md:[--n:2] xl:[--n:3] [--gap:calc(var(--spacing)*24)] xl:[--gap:calc(var(--spacing)*33)]"
          autoplay={4000}
          prevClass={`${arrow} -left-4 md:-left-72 xl:-left-95`}
          nextClass={`${arrow} -right-4 md:-right-72 xl:-right-95`}
          arrowIconClass="size-24 xl:size-32"
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
