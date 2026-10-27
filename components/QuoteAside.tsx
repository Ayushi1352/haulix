import Image from "next/image";
import Icon from "@/components/Icon";
import { Highlight } from "@/components/SectionHeading";
import { contactField, contactHref, site as data } from "@/data";

const { quote } = data;

// Right column: photo with the feature card, and the "Need Immediate Assistance?" panel.
export default function QuoteAside() {
  const { assistance } = quote;

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-24 xl:gap-28">
      <div data-reveal="zoom" className="relative h-300 overflow-hidden rounded-[calc(4*var(--spacing))] sm:h-380 xl:h-434">
        <Image
          src={quote.image}
          alt={quote.imageAlt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover object-right transition-transform duration-700 hover:scale-105"
        />
        <ul data-reveal="right" data-reveal-delay="350" className="absolute top-16 right-0 flex w-210 flex-col gap-16 sm:top-20 sm:w-250 sm:gap-22 rounded-l-[calc(6*var(--spacing))] bg-white/92 px-22 py-26 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:flex xl:top-72 xl:w-292 xl:gap-26 xl:px-25 xl:py-30">
          {quote.imagePoints.map((point) => (
            <li key={point.title} className="group flex items-center gap-14 xl:gap-18">
              <Icon name={point.icon} className="size-30 shrink-0 text-brand transition-[rotate,scale] duration-300 group-hover:-rotate-6 group-hover:scale-110 xl:size-36" strokeWidth={1.6} />
              <span>
                <span className="block font-heading text-[calc(15*var(--spacing))] font-bold text-ink xl:text-[calc(17*var(--spacing))]">{point.title}</span>
                <span className="mt-2 block font-body text-[calc(13*var(--spacing))] text-steel xl:text-[calc(14*var(--spacing))] xl:whitespace-nowrap">{point.description}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div data-reveal="up" data-reveal-delay="150" className="rounded-[calc(6*var(--spacing))] border border-line bg-cloud px-20 pt-28 pb-24 sm:px-32 xl:px-30 xl:pt-30 xl:pb-22">
        <h2 className="font-heading text-[calc(26*var(--spacing))] leading-34 font-extrabold tracking-[-0.02em] text-ink xl:text-[calc(37*var(--spacing))] xl:leading-46">
          <Highlight text={assistance.title} highlight={assistance.titleHighlight} highlightClass="text-brand" />
        </h2>
        <p className="mt-6 font-heading text-[calc(15*var(--spacing))] leading-24 font-medium text-steel xl:mt-6 xl:text-[calc(20*var(--spacing))] xl:leading-30">
          {assistance.description}
        </p>
        <ul data-reveal-stagger className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-3 xl:mt-28 xl:gap-16 [&>li:last-child]:col-span-2 md:[&>li:last-child]:col-span-1">
          {assistance.cards.map((card) => {
            const { lines, type } = contactField(card.field);
            const body = (
              <>
                <Icon name={card.icon} className="mx-auto size-36 text-brand transition-[translate,scale] duration-300 group-hover:-translate-y-4 group-hover:scale-110 xl:size-43" strokeWidth={1.6} />
                <span className="mt-10 block font-heading text-[calc(15*var(--spacing))] font-bold text-ink xl:mt-14 xl:text-[calc(17*var(--spacing))]">{card.title}</span>
                <span className="mt-4 block font-body text-[calc(13*var(--spacing))] leading-21 text-steel transition-colors group-hover:text-brand xl:mt-6 xl:text-[calc(16*var(--spacing))] xl:leading-24">
                  {lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </>
            );
            const href = contactHref(type, lines[0]);
            const box =
              "block h-full rounded-[calc(4*var(--spacing))] border border-line bg-white px-8 py-18 text-center xl:h-164 xl:pt-23 xl:pb-0";
            return (
              <li key={card.title}>
                {href ? (
                  <a href={href} className={`${box} group transition-[box-shadow,border-color,translate] duration-300 hover:-translate-y-4 hover:border-brand hover:shadow-[0_10px_24px_rgba(10,40,50,0.1)]`}>
                    {body}
                  </a>
                ) : (
                  <div className={box}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
