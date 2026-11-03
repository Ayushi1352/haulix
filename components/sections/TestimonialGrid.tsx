import { Paginated } from "@/components/ui/Pagination";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { TestimonialsHeading } from "@/components/sections/TestimonialsHeading";
import type { GlobalUIData, TestimonialsData } from "@/types/templates.types";

export const TestimonialGrid = ({ data: testimonials, ui }: { data?: TestimonialsData; ui: GlobalUIData }) => {
  if (!testimonials) return null;
  const { items } = testimonials;

  return (
    <section data-white-section className="py-64 sm:py-80 xl:py-120 bg-[var(--color-white)] [[data-white-section]+&]:!pt-0">
      <TestimonialsHeading data={testimonials} />
      <Paginated perPage={testimonials.perPage} ui={ui} className="mx-auto mt-32 grid max-w-1640 gap-24 px-20 sm:px-40 md:grid-cols-2 xl:mt-39 xl:grid-cols-3 xl:gap-x-33 xl:gap-y-60 xl:px-0">
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`}>
            <TestimonialCard item={item} />
          </li>
        ))}
      </Paginated>
    </section>
  );
};
