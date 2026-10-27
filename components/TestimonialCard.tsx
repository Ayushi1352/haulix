import Icon from "@/components/Icon";
import type { TestimonialItem } from "@/data";

export default function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <figure className="group flex h-full flex-col rounded-[calc(10*var(--spacing))] border-2 border-line bg-white transition-[translate,border-color,box-shadow] duration-300 hover:-translate-y-6 hover:border-brand hover:shadow-[0_20px_44px_rgba(10,40,50,0.1)] px-26 pt-26 pb-28 xl:h-513 xl:px-46 xl:pt-19 xl:pb-27">
      <Icon name="quote" className="h-44 w-52 shrink-0 origin-bottom-left text-brand transition-[rotate,scale] duration-300 group-hover:-rotate-6 group-hover:scale-110 xl:-ml-9 xl:h-81 xl:w-86" />
      <blockquote className="mt-14 font-body text-[calc(17*var(--spacing))] leading-27 text-graphite xl:mt-8 xl:text-[calc(22*var(--spacing))] xl:leading-34 xl:tracking-[0.012em] xl:whitespace-pre-line">
        {item.quote}
      </blockquote>
      <figcaption className="mt-auto pt-26 xl:pt-17">
        <span className="block h-3 w-64 bg-brand transition-[width] duration-300 group-hover:w-96 xl:h-5 xl:w-82 xl:group-hover:w-120" />
        <p className="mt-16 font-heading text-[calc(19*var(--spacing))] font-extrabold text-ink xl:mt-17 xl:text-[calc(26*var(--spacing))] xl:leading-34">{item.name}</p>
        <p className="font-body text-[calc(16*var(--spacing))] leading-24 text-slate xl:text-[calc(23*var(--spacing))] xl:leading-31">{item.role}</p>
        <p className="font-body text-[calc(16*var(--spacing))] leading-24 text-slate xl:text-[calc(23*var(--spacing))] xl:leading-31">{item.company}</p>
      </figcaption>
    </figure>
  );
}
