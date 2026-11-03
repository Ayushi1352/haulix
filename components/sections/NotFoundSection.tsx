import Link from "next/link";
import type { NotFoundData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

export const NotFoundSection = ({ data }: { data?: NotFoundData }) => {
  if (!data) return null;
  return (
    <section className="bg-[var(--color-white)] px-20 py-64 text-center sm:px-40 sm:py-80 xl:py-120">
      <p data-reveal="zoom" className="font-display text-[6rem] leading-none font-black tracking-[-0.04em] text-brand sm:text-[8rem] xl:text-[11.25rem]">
        {data.code}
      </p>
      <h1 data-reveal="up" data-reveal-delay="100" className="mt-16 font-heading text-[2.125rem] leading-42 font-extrabold tracking-[-0.03em] text-ink sm:text-[3rem] sm:leading-56 xl:mt-24 xl:text-[4.0625rem] xl:leading-72">
        {data.title}
      </h1>
      <p data-reveal="up" data-reveal-delay="200" className="mx-auto mt-14 max-w-760 font-body text-[1rem] leading-26 text-steel xl:mt-18 xl:max-w-none xl:text-[1.375rem] xl:leading-34 xl:whitespace-pre-line">
        {data.description}
      </p>
      <Link
        href={data.buttonUrl}
        data-reveal="zoom"
        data-reveal-delay="300"
        className="group mt-28 inline-flex h-54 items-center justify-center gap-14 rounded-[0.1875rem] border border-brand bg-brand px-28 font-heading text-[1.0625rem] font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-brand xl:mt-40 xl:h-73 xl:gap-20 xl:px-40 xl:text-[1.375rem]"
      >
        {data.buttonText}
        <Icon name="LuArrowRight" className="size-18 transition-transform group-hover:translate-x-4 xl:size-24" strokeWidth={2.2} />
      </Link>
    </section>
  );
};
