import Paginated from "@/components/Paginated";
import TestimonialCard from "@/components/TestimonialCard";
import TestimonialsHeading from "@/components/TestimonialsHeading";
import { site as data } from "@/data";

const { testimonials } = data;

export default function ReviewGrid() {
  const { items } = testimonials;

  return (
    <section data-white-section className="py-64 sm:py-80 xl:py-120 bg-white [[data-white-section]+&]:pt-0!">
      <TestimonialsHeading />
      <Paginated perPage={testimonials.perPage} className="mx-auto mt-32 grid max-w-1640 gap-24 px-20 sm:px-40 md:grid-cols-2 xl:mt-39 xl:grid-cols-3 xl:gap-x-33 xl:gap-y-60 xl:px-0">
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`}>
            <TestimonialCard item={item} />
          </li>
        ))}
      </Paginated>
    </section>
  );
}
