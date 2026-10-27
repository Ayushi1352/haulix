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
            className="font-body text-[calc(14*var(--spacing))] font-semibold tracking-[0.2em] text-graphite xl:text-[calc(19*var(--spacing))]"
          />
          <h2 data-reveal="up" data-reveal-delay="100" className="mt-12 font-heading text-[calc(30*var(--spacing))] leading-38 font-extrabold tracking-[-0.03em] text-ink sm:text-[calc(42*var(--spacing))] sm:leading-50 xl:mt-14 xl:text-[calc(57*var(--spacing))] xl:leading-62">
            <Highlight text={benefits.title} highlight={benefits.titleHighlight} highlightClass="text-brand" />
          </h2>
        </div>
        <p data-reveal="up" data-reveal-delay="200" className="font-body text-[calc(15*var(--spacing))] leading-25 text-steel xl:mb-8 xl:shrink-0 xl:text-[calc(23*var(--spacing))] xl:leading-36 xl:whitespace-pre-line">
          {benefits.description}
        </p>
      </div>

      <ul data-reveal-stagger className="mt-28 grid gap-18 md:grid-cols-2 xl:mt-40 xl:gap-x-31 xl:gap-y-31">
        {benefits.items.map((item, index) => (
          <li
            key={item.title}
            className="group flex items-start gap-18 rounded-[calc(4*var(--spacing))] border-2 border-line bg-white transition-[translate,border-color,box-shadow] duration-300 hover:-translate-y-4 hover:border-brand hover:shadow-[0_16px_36px_rgba(10,40,50,0.08)] px-20 py-22 xl:h-178 xl:gap-32 xl:pr-16 xl:pl-34 xl:py-0 xl:pt-33"
          >
            <span
              className={`flex size-56 shrink-0 items-center justify-center rounded-full font-heading text-[calc(20*var(--spacing))] font-bold text-white transition-[scale] duration-500 group-hover:scale-110 xl:size-82 xl:text-[calc(29*var(--spacing))] ${
                index === 0 || index === 3 ? "bg-brand" : "bg-ink"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-heading text-[calc(17*var(--spacing))] leading-24 font-bold text-ink xl:text-[calc(25*var(--spacing))] xl:leading-34">{item.title}</h3>
              <p className="mt-4 font-body text-[calc(14*var(--spacing))] leading-22 text-muted xl:mt-6 xl:text-[calc(21*var(--spacing))] xl:leading-35 xl:whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
