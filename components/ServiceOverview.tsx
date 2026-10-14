import Image from "next/image";
import Icon from "@/components/Icon";
import { SectionLabel } from "@/components/SectionHeading";
import { site as data, type ServiceItem } from "@/data";

const { detail } = data.services;

export default function ServiceOverview({ service }: { service: ServiceItem }) {
  const title = "detailTitle" in service && service.detailTitle ? service.detailTitle : service.title;

  return (
    <div>
      <div className="relative h-220 overflow-hidden rd-4 sm:h-320 xl:h-410">
        <Image src={service.image} alt={title} fill priority sizes="(min-width: 1280px) 64vw, 100vw" className="object-cover" />
      </div>

      <SectionLabel
        text={detail.overviewLabel}
        align="left"
        lineClass="h-3 w-56 bg-crimson xl:h-5 xl:w-85"
        className="mt-36 font-poppins fs-14 font-semibold tracking-[0.2em] text-[#3a4d55] xl:mt-56 xl:fs-19"
      />
      <h2 className="mt-10 font-jakarta fs-36 leading-44 font-extrabold tracking-[-0.03em] text-ink sm:fs-50 sm:leading-58 xl:mt-10 xl:fs-74 xl:leading-86">
        {title}
      </h2>
      <div className="mt-14 flex flex-col gap-18 xl:mt-16 xl:gap-28">
        {service.paragraphs.map((paragraph, index) => (
          <p key={index} className="font-jakarta fs-16 leading-28 text-[#5b6770] xl:fs-26 xl:leading-38">
            {paragraph}
          </p>
        ))}
      </div>

      <ul className="mt-36 grid grid-cols-2 gap-y-28 rd-6 bg-[#eef3f6] py-28 xl:mt-56 xl:grid-cols-4 xl:gap-y-0 xl:py-42">
        {service.features.map((feature, index) => (
          <li
            key={feature.title}
            className={`flex flex-col items-center px-12 text-center xl:px-14 ${index > 0 ? "xl:border-l xl:border-[#cfd8de]" : ""} ${
              index % 2 === 1 ? "border-l border-[#cfd8de]" : ""
            }`}
          >
            <span
              className={`flex size-72 items-center justify-center rounded-full text-white xl:size-106 ${
                index % 2 === 0 ? "bg-[#a3181f]" : "bg-ink"
              }`}
            >
              <Icon name={feature.icon} className="size-34 xl:size-48" strokeWidth={1.5} />
            </span>
            <h3 className="mt-12 font-jakarta fs-17 leading-24 font-bold whitespace-pre-line text-ink xl:mt-16 xl:fs-25 xl:leading-35">
              {feature.title}
            </h3>
            <p className="mt-6 font-poppins fs-14 leading-22 text-muted xl:mt-6 xl:fs-23 xl:leading-35 xl:whitespace-pre-line">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
