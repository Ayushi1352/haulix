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
            lineClass="h-3 w-56 bg-crimson xl:h-5 xl:w-85"
            className="font-poppins fs-14 font-semibold tracking-[0.2em] text-[#3a4d55] xl:fs-19"
          />
          <h2 className="mt-12 font-jakarta fs-30 leading-38 font-extrabold tracking-[-0.03em] text-ink sm:fs-42 sm:leading-50 xl:mt-18 xl:fs-50 xl:leading-56">
            <Highlight text={benefits.title} highlight={benefits.titleHighlight} highlightClass="text-[#b3141e]" />
          </h2>
        </div>
        <p className="font-poppins fs-15 leading-25 text-[#5b6770] xl:mb-8 xl:shrink-0 xl:fs-21 xl:leading-33 xl:whitespace-pre-line">
          {benefits.description}
        </p>
      </div>

      <ul className="mt-28 grid gap-18 md:grid-cols-2 xl:mt-40 xl:gap-x-31 xl:gap-y-31">
        {benefits.items.map((item, index) => (
          <li
            key={item.title}
            className="flex items-start gap-18 rd-4 border-2 border-[#e9ecef] bg-white px-20 py-22 xl:h-178 xl:gap-32 xl:px-34 xl:py-0 xl:pt-33"
          >
            <span
              className={`flex size-56 shrink-0 items-center justify-center rounded-full font-jakarta fs-20 font-bold text-white xl:size-82 xl:fs-29 ${
                index === 0 || index === 3 ? "bg-[#b3141e]" : "bg-ink"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-jakarta fs-17 leading-24 font-bold text-ink xl:fs-25 xl:leading-34">{item.title}</h3>
              <p className="mt-4 font-poppins fs-14 leading-22 text-muted xl:mt-6 xl:fs-23 xl:leading-35 xl:whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
