import TestimonialCard from "@/components/TestimonialCard";
import TestimonialsHeading from "@/components/TestimonialsHeading";
import { site as data } from "@/data";

const { testimonials } = data;

export default function ReviewGrid() {
  // `page.order` lists which testimonial goes in each slot of the grid.
  const items = testimonials.page.order.map((index) => testimonials.items[index]).filter(Boolean);

  return (
    <section className="bg-white pt-64 pb-72 sm:pt-80 xl:pt-115 xl:pb-128">
      <TestimonialsHeading />
      <ul className="mx-auto mt-32 grid max-w-1640 gap-24 px-20 sm:px-40 md:grid-cols-2 xl:mt-45 xl:grid-cols-3 xl:gap-x-33 xl:gap-y-63 xl:px-0">
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`}>
            <TestimonialCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
