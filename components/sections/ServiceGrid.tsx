import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Paginated } from "@/components/ui/Pagination";
import { Highlight, SectionLabel } from "@/components/ui/SectionHeading";
import type { GlobalUIData, ServicesData } from "@/types/templates.types";
import { isRedTile } from "@/components/ui/text";

export const ServiceGrid = ({ data: services, ui }: { data?: ServicesData; ui: GlobalUIData }) => {
  if (!services) return null;
  return (
    <section data-white-section className="py-64 sm:py-80 xl:py-120 bg-[var(--color-white)] px-20 sm:px-40 lg:px-64 xl:px-95 [[data-white-section]+&]:!pt-0">
      <div className="text-center">
        <SectionLabel
          text={services.label}
          lineClass="h-3 w-48 bg-brand xl:h-4 xl:w-70"
          className="font-body text-[0.875rem] font-medium tracking-[0.2em] text-[var(--color-heading-85)] xl:text-[1.1875rem]"
        />
        <h2 data-reveal="up" data-reveal-delay="100" className="mt-12 font-heading text-[2rem] leading-40 font-extrabold tracking-[-0.025em] text-ink sm:text-[2.75rem] sm:leading-52 xl:mt-8 xl:text-[3.8125rem] xl:leading-70">
          <Highlight text={services.title} highlight={services.titleHighlight} />
        </h2>
        <p data-reveal="up" data-reveal-delay="200" className="mx-auto mt-12 max-w-900 font-body text-[0.9375rem] leading-25 text-graphite xl:mt-10 xl:max-w-none xl:text-[1.3125rem] xl:leading-28 xl:tracking-[-0.012em] xl:whitespace-pre-line">
          {services.pageDescription}
        </p>
      </div>

      <Paginated perPage={services.perPage} ui={ui} className="mt-36 grid gap-20 sm:grid-cols-2 xl:mt-35 xl:grid-cols-4 xl:gap-x-27 xl:gap-y-24">
        {services.items.map((item, index) => {
          const red = isRedTile(index, 4);
          return (
            <li key={item.title}>
              <Link
                href={item.url}
                className="group relative flex h-full flex-col rounded-[0.375rem] border border-line bg-cloud pt-18 pr-24 pb-22 pl-24 shadow-[0_6px_18px_var(--color-shadow-ink-5)] transition-[box-shadow,transform] duration-300 hover:-translate-y-6 hover:shadow-[0_14px_34px_var(--color-shadow-ink-12)] xl:h-306 xl:pt-17 xl:pr-30 xl:pb-0 xl:pl-36"
              >
                <span
                  className={`absolute [clip-path:polygon(14%_0,100%_0,86%_100%,0_100%)] top-0 right-8 flex h-36 w-58 items-center justify-center font-heading text-[0.9375rem] font-bold text-[var(--color-white)] xl:h-44 xl:w-70 xl:text-[1.125rem] ${
                    red ? "bg-brand" : "bg-ink"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex size-64 items-center justify-center rounded-full text-[var(--color-white)] transition-[transform] duration-300 group-hover:-rotate-6 group-hover:scale-110 xl:size-83 ${
                    red ? "bg-brand" : "bg-ink"
                  }`}
                >
                  <Icon name={item.icon} className="size-32 xl:size-42" strokeWidth={1.5} />
                </span>
                <h3 className="mt-10 font-heading text-[1.25rem] leading-28 font-extrabold text-ink transition-colors group-hover:text-brand xl:mt-8 xl:text-[1.5625rem] xl:leading-34">
                  {item.title}
                </h3>
                <p className="mt-6 font-body text-[0.9375rem] leading-23 text-graphite xl:mt-8 xl:text-[1.25rem] xl:leading-26 xl:whitespace-pre-line">
                  {item.excerpt}
                </p>
                <span className="mt-14 inline-flex items-center gap-12 font-heading text-[1rem] font-bold text-brand transition-colors group-hover:text-ink xl:mt-auto xl:mb-26 xl:gap-16 xl:text-[1.25rem]">
                  {services.readMore}
                  <Icon name="LuArrowRight" className="size-18 transition-transform group-hover:translate-x-4 xl:size-22" strokeWidth={2.4} />
                </span>
              </Link>
            </li>
          );
        })}
      </Paginated>
    </section>
  );
};
