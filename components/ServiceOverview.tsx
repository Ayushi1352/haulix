import Image from "next/image";
import Icon from "@/components/Icon";
import { SectionLabel } from "@/components/SectionHeading";
import { site as data, type ServiceItem } from "@/data";

const { detail } = data.services;

export default function ServiceOverview({ service }: { service: ServiceItem }) {
  const title = "detailTitle" in service && service.detailTitle ? service.detailTitle : service.title;

  return (
    <div>
      <div data-reveal="zoom" className="relative h-220 overflow-hidden rounded-[calc(4*var(--spacing))] sm:h-320 xl:-mt-11 xl:h-410">
        <Image src={service.image} alt={title} fill priority sizes="(min-width: 1024px) 64vw, 100vw" className="object-cover" />
      </div>

      <SectionLabel
        text={detail.overviewLabel}
        align="left"
        lineClass="h-3 w-56 bg-brand xl:h-5 xl:w-85"
        className="mt-36 font-body text-[calc(14*var(--spacing))] font-semibold tracking-[0.2em] text-graphite xl:mt-56 xl:text-[calc(19*var(--spacing))]"
      />
      <h2 data-reveal="up" data-reveal-delay="100" className="mt-10 font-heading text-[calc(36*var(--spacing))] leading-44 font-extrabold tracking-[-0.03em] text-ink sm:text-[calc(50*var(--spacing))] sm:leading-58 xl:mt-10 xl:text-[calc(74*var(--spacing))] xl:leading-86">
        {title}
      </h2>
      <div data-reveal="up" data-reveal-delay="200" className="mt-14 flex flex-col gap-18 xl:mt-16 xl:gap-28">
        {service.paragraphs.map((paragraph, index) => (
          <p key={index} className="font-heading text-[calc(16*var(--spacing))] leading-28 text-steel xl:text-[calc(27*var(--spacing))] xl:leading-38">
            {paragraph}
          </p>
        ))}
      </div>

      <ul data-reveal-stagger className="mt-36 grid grid-cols-2 gap-y-28 rounded-[calc(6*var(--spacing))] bg-mist py-28 xl:mt-56 xl:grid-cols-4 xl:gap-y-0 xl:pt-44 xl:pb-50">
        {service.features.map((feature, index) => (
          <li
            key={feature.title}
            className={`group flex flex-col items-center px-12 text-center xl:px-14 ${index > 0 ? "xl:border-l xl:border-line-strong" : ""} ${
              index % 2 === 1 ? "border-l border-line-strong" : ""
            }`}
          >
            <span
              className={`flex size-72 items-center justify-center rounded-full text-white transition-[translate,scale] duration-300 group-hover:-translate-y-6 group-hover:scale-110 xl:size-106 ${
                index % 2 === 0 ? "bg-brand" : "bg-ink"
              }`}
            >
              <Icon name={feature.icon} className="size-34 xl:size-48" strokeWidth={1.5} />
            </span>
            <h3 className="mt-12 font-heading text-[calc(17*var(--spacing))] leading-24 font-bold whitespace-pre-line text-ink xl:mt-16 xl:text-[calc(25*var(--spacing))] xl:leading-35">
              {feature.title}
            </h3>
            <p className="mt-6 font-body text-[calc(14*var(--spacing))] leading-22 text-muted xl:mt-6 xl:text-[calc(23*var(--spacing))] xl:leading-35 xl:whitespace-pre-line">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
