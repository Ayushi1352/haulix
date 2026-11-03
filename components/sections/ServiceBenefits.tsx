import { Highlight, SectionLabel } from "@/components/ui/SectionHeading";
import type { ServiceItem } from "@/types/templates.types";

export const ServiceBenefits = ({ benefits, label }: { benefits: ServiceItem["benefits"]; label: string }) => {
  return (
    <div className="mt-48 xl:mt-66">
      <div className="flex flex-col gap-16 xl:flex-row xl:items-end xl:justify-between xl:gap-40">
        <div>
          <SectionLabel
            text={label}
            align="left"
            lineClass="h-3 w-56 bg-brand xl:h-5 xl:w-85"
            className="font-body text-[0.875rem] font-semibold tracking-[0.2em] text-graphite xl:text-[1.1875rem]"
          />
          <h2 data-reveal="up" data-reveal-delay="100" className="mt-12 font-heading text-[1.875rem] leading-38 font-extrabold tracking-[-0.03em] text-ink sm:text-[2.625rem] sm:leading-50 xl:mt-14 xl:text-[3.5625rem] xl:leading-62">
            <Highlight text={benefits.title} highlight={benefits.titleHighlight} highlightClass="text-brand" />
          </h2>
        </div>
        <p data-reveal="up" data-reveal-delay="200" className="font-body text-[0.9375rem] leading-25 text-steel xl:mb-8 xl:shrink-0 xl:text-[1.4375rem] xl:leading-36 xl:whitespace-pre-line">
          {benefits.description}
        </p>
      </div>

      <ul data-reveal-stagger className="mt-28 grid gap-18 md:grid-cols-2 xl:mt-40 xl:gap-x-31 xl:gap-y-31">
        {benefits.items.map((item, index) => (
          <li
            key={item.title}
            className="group flex items-start gap-18 rounded-[0.25rem] border-2 border-line bg-[var(--color-white)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-4 hover:border-brand hover:shadow-[0_16px_36px_var(--color-shadow-ink-8)] px-20 py-22 xl:h-178 xl:gap-32 xl:pr-16 xl:pl-34 xl:py-0 xl:pt-33"
          >
            <span
              className={`flex size-56 shrink-0 items-center justify-center rounded-full font-heading text-[1.25rem] font-bold text-[var(--color-white)] transition-[transform] duration-500 group-hover:scale-110 xl:size-82 xl:text-[1.8125rem] ${
                index === 0 || index === 3 ? "bg-brand" : "bg-ink"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-heading text-[1.0625rem] leading-24 font-bold text-ink xl:text-[1.5625rem] xl:leading-34">{item.title}</h3>
              <p className="mt-4 font-body text-[0.875rem] leading-22 text-muted xl:mt-6 xl:text-[1.3125rem] xl:leading-35 xl:whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
