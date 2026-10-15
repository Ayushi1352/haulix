import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { site as data, type ServiceItem } from "@/data";

const { detail } = data.services;

export default function ServiceBenefits({ benefits }: { benefits: ServiceItem["benefits"] }) {
  return (
    <div className="mt-48 xl:mt-66">
      <div className="flex flex-col gap-16 xl:flex-row xl:items-end xl:justify-between xl:gap-40">
        <div>
          <SectionLabel
            text={detail.benefitsLabel}
            align="left"
            lineClass="h-3 w-56 bg-brand xl:h-5 xl:w-85"
            className="font-body fs-14 font-semibold tracking-[0.2em] text-graphite xl:fs-19"
          />
          <h2 data-reveal="up" className="mt-12 [--delay:100ms] font-heading fs-30 leading-38 font-extrabold tracking-[-0.03em] text-ink sm:fs-42 sm:leading-50 xl:mt-14 xl:fs-57 xl:leading-62">
            <Highlight text={benefits.title} highlight={benefits.titleHighlight} highlightClass="text-brand" />
          </h2>
        </div>
        <p data-reveal="up" className="[--delay:200ms] font-body fs-15 leading-25 text-steel xl:mb-8 xl:shrink-0 xl:fs-23 xl:leading-36 xl:whitespace-pre-line">
          {benefits.description}
        </p>
      </div>

      <ul data-reveal-stagger className="mt-28 grid gap-18 md:grid-cols-2 xl:mt-40 xl:gap-x-31 xl:gap-y-31">
        {benefits.items.map((item, index) => (
          <li
            key={item.title}
            className="group flex items-start gap-18 rd-4 border-2 border-line bg-white transition-[translate,border-color,box-shadow] duration-300 hover:-translate-y-4 hover:border-brand hover:shadow-[0_16px_36px_rgba(10,40,50,0.08)] px-20 py-22 xl:h-178 xl:gap-32 xl:pr-16 xl:pl-34 xl:py-0 xl:pt-33"
          >
            <span
              className={`flex size-56 shrink-0 items-center justify-center rounded-full font-heading fs-20 font-bold text-white transition-[scale] duration-500 group-hover:scale-110 xl:size-82 xl:fs-29 ${
                index === 0 || index === 3 ? "bg-brand" : "bg-ink"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-heading fs-17 leading-24 font-bold text-ink xl:fs-25 xl:leading-34">{item.title}</h3>
              <p className="mt-4 font-body fs-14 leading-22 text-muted xl:mt-6 xl:fs-21 xl:leading-35 xl:whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
