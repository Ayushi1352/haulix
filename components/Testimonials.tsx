import Carousel from "@/components/Carousel";
import { site as data } from "@/data";
import TestimonialCard from "./TestimonialCard";
import TestimonialsHeading from "./TestimonialsHeading";

const { testimonials } = data;

const arrow =
  "absolute top-1/2 z-10 hidden size-56 -translate-y-1/2 items-center justify-center rounded-full bg-white text-crimson shadow-[0_6px_20px_rgba(10,40,50,0.14)] transition-colors hover:bg-crimson hover:text-white md:flex xl:-mt-62 xl:size-82";

// `last`: the section sits right above the footer (About page), so it ends sooner.
export default function Testimonials({ last = false }: { last?: boolean }) {
  return (
    <section className={`bg-white pt-64 pb-72 sm:pt-80 xl:pt-90 ${last ? "xl:pb-100" : "xl:pb-148"}`}>
      <TestimonialsHeading />
      <div className="mx-auto mt-32 max-w-1900 px-20 sm:px-40 md:px-88 xl:mt-38 xl:px-136">
        <Carousel
          label={testimonials.label}
          gridClass="grid gap-24 md:grid-cols-2 xl:grid-cols-3 xl:gap-33"
          slots={["", "hidden md:block", "hidden xl:block"]}
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
