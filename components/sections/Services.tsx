import Image from "next/image";
import Link from "next/link";
import { Highlight, SectionLabel } from "@/components/ui/SectionHeading";
import type { ServicesData } from "@/types/templates.types";

// White arrow with a red tail, shown in the top-right corner of each card.
const CornerArrow = () => {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" className="size-48 xl:size-70">
      <path d="M8 9h26" className="stroke-brand" strokeWidth="7" strokeLinecap="round" />
      <path d="M34 9h28v28M62 9 12 59" stroke="var(--color-white)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

export const Services = ({ data: services }: { data?: ServicesData }) => {
  if (!services) return null;
  return (
    <section data-white-section className="py-64 sm:py-80 xl:py-120 bg-[var(--color-white)] [[data-white-section]+&]:!pt-0">
      <div className="px-20 text-center sm:px-40">
        <SectionLabel
          text={services.label}
          lineClass="h-4 w-44 bg-brand xl:h-5 xl:w-55"
          className="font-body text-[0.875rem] font-medium tracking-[0.26em] text-[var(--color-heading-85)] xl:text-[1.0625rem]"
        />
        <h2 data-reveal="up" data-reveal-delay="100" className="mt-14 font-heading text-[2rem] leading-40 font-extrabold tracking-[-0.03em] text-ink sm:text-[2.75rem] sm:leading-52 xl:mt-1 xl:text-[3.5625rem] xl:leading-64">
          <Highlight text={services.title} highlight={services.titleHighlight} />
        </h2>
        <p data-reveal="up" data-reveal-delay="200" className="mx-auto mt-12 max-w-900 font-body text-[0.9375rem] leading-24 text-steel xl:mt-14 xl:max-w-none xl:text-[1rem] xl:leading-23 xl:tracking-[-0.01em] xl:whitespace-pre-line">
          {services.description}
        </p>
      </div>

      <div data-reveal-stagger className="mt-36 grid gap-2 sm:grid-cols-2 xl:mt-25 xl:grid-cols-4">
        {services.cards.map((card, index) => (
          <Link
            key={card.title}
            href={card.url}
            className="group relative block h-460 overflow-hidden bg-ocean sm:h-520 xl:h-582"
          >
            <Image
              src={card.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,var(--color-ocean-82)_55%,var(--color-ocean)_72%)]" />
            <span className="absolute top-18 right-20 transition-[transform] duration-300 group-hover:translate-x-6 group-hover:-translate-y-6 xl:top-21 xl:right-26">
              <CornerArrow />
            </span>
            <div className="absolute inset-x-0 bottom-0 px-28 pb-30 text-[var(--color-white)] xl:top-300 xl:bottom-auto xl:pr-30 xl:pl-65 xl:pb-0">
              <p className="flex items-center gap-12 font-heading text-[1.0625rem] font-bold xl:gap-14 xl:text-[1.3125rem]">
                {String(index + 1).padStart(2, "0")}
                <span className="h-2 w-40 bg-[var(--color-white-70)] transition-[width,background-color] duration-300 group-hover:w-64 group-hover:bg-brand xl:w-48 xl:group-hover:w-80" />
              </p>
              <h3 className="mt-10 font-heading text-[1.75rem] leading-30 font-extrabold whitespace-pre-line xl:mt-14 xl:text-[2.375rem] xl:leading-35">
                {card.title}
              </h3>
              <p className="mt-10 min-h-[3lh] font-body text-[0.9375rem] leading-23 text-[var(--color-white-90)] xl:mt-14 xl:text-[1.1875rem] xl:leading-[1.65625rem] xl:whitespace-pre-line">
                {card.description}
              </p>
              <span className="mt-16 inline-flex items-center gap-16 font-heading text-[1rem] font-bold transition-colors group-hover:text-[var(--color-brand-tint)] xl:mt-17 xl:text-[1.25rem]">
                {services.readMore}
                <svg viewBox="0 0 56 14" aria-hidden="true" className="h-12 w-46 transition-transform group-hover:translate-x-4 xl:h-14 xl:w-54">
                  <path d="M1 7h52M46 1l7 6-7 6" className="stroke-current" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
