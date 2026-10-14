import Icon from "@/components/Icon";
import type { TestimonialItem } from "@/data";

export default function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <figure className="flex h-full flex-col rd-10 border-2 border-[#e4e8ea] bg-white px-26 pt-26 pb-28 xl:h-513 xl:px-46 xl:pt-19 xl:pb-27">
      <Icon name="quote" className="h-44 w-52 shrink-0 text-crimson xl:-ml-9 xl:h-81 xl:w-86" />
      <blockquote className="mt-14 font-poppins fs-17 leading-27 text-[#3d4f58] xl:mt-8 xl:fs-22 xl:leading-34 xl:tracking-[0.012em] xl:whitespace-pre-line">
        {item.quote}
      </blockquote>
      <figcaption className="mt-auto pt-26 xl:pt-17">
        <span className="block h-3 w-64 bg-crimson xl:h-5 xl:w-82" />
        <p className="mt-16 font-jakarta fs-19 font-extrabold text-ink xl:mt-17 xl:fs-26 xl:leading-34">{item.name}</p>
        <p className="font-poppins fs-16 leading-24 text-[#55666e] xl:fs-23 xl:leading-31">{item.role}</p>
        <p className="font-poppins fs-16 leading-24 text-[#55666e] xl:fs-23 xl:leading-31">{item.company}</p>
      </figcaption>
    </figure>
  );
}
