import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { SectionLabel } from "@/components/ui/SectionHeading";
import type { ServiceDetailData, ServiceItem } from "@/types/templates.types";

export const ServiceOverview = ({ service, detail }: { service: ServiceItem; detail: ServiceDetailData }) => {
  const title = service.detailTitle || service.title;

  return (
    <div>
      <div data-reveal="zoom" className="relative h-220 overflow-hidden rounded-[0.25rem] sm:h-320 xl:h-410">
        <Image src={service.image} alt={title} fill priority sizes="(min-width: 1024px) 64vw, 100vw" className="object-cover" />
      </div>

      <SectionLabel
        text={detail.overviewLabel}
        align="left"
        lineClass="h-3 w-56 bg-brand xl:h-5 xl:w-85"
        className="mt-36 font-body text-[0.875rem] font-semibold tracking-[0.2em] text-graphite xl:mt-56 xl:text-[1.1875rem]"
      />
      <h2 data-reveal="up" data-reveal-delay="100" className="mt-10 font-heading text-[2.25rem] leading-44 font-extrabold tracking-[-0.03em] text-ink sm:text-[3.125rem] sm:leading-58 xl:mt-10 xl:text-[4.625rem] xl:leading-86">
        {title}
      </h2>
      <div data-reveal="up" data-reveal-delay="200" className="mt-14 flex flex-col gap-18 xl:mt-16 xl:gap-28">
        {service.paragraphs.map((paragraph, index) => (
          <p key={index} className="font-heading text-[1rem] leading-28 text-steel xl:text-[1.6875rem] xl:leading-38">
            {paragraph}
          </p>
        ))}
      </div>

      <ul data-reveal-stagger className="mt-36 grid grid-cols-2 gap-y-28 rounded-[0.375rem] bg-mist py-28 xl:mt-56 xl:grid-cols-4 xl:gap-y-0 xl:pt-44 xl:pb-50">
        {service.features.map((feature, index) => (
          <li
            key={feature.title}
            className={`group flex flex-col items-center px-12 text-center xl:px-14 ${index > 0 ? "xl:border-l xl:border-line-strong" : ""} ${
              index % 2 === 1 ? "border-l border-line-strong" : ""
            }`}
          >
            <span
              className={`flex size-72 items-center justify-center rounded-full text-[var(--color-white)] transition-[transform] duration-300 group-hover:-translate-y-6 group-hover:scale-110 xl:size-106 ${
                index % 2 === 0 ? "bg-brand" : "bg-ink"
              }`}
            >
              <Icon name={feature.icon} className="size-34 xl:size-48" strokeWidth={1.5} />
            </span>
            <h3 className="mt-12 font-heading text-[1.0625rem] leading-24 font-bold whitespace-pre-line text-ink xl:mt-16 xl:text-[1.5625rem] xl:leading-35">
              {feature.title}
            </h3>
            <p className="mt-6 font-body text-[0.875rem] leading-22 text-muted xl:mt-6 xl:text-[1.4375rem] xl:leading-35 xl:whitespace-pre-line">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
