import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Highlight } from "@/components/ui/SectionHeading";
import type { CompanyData, QuoteData } from "@/types/templates.types";
import { contactField, contactHref } from "@/components/ui/text";

// Right column: photo with the feature card, and the "Need Immediate Assistance?" panel.
export const QuoteAside = ({ data: quote, company }: { data: QuoteData; company: CompanyData }) => {
  const { assistance } = quote;

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-24 xl:gap-28">
      <div data-reveal="zoom" className="relative h-300 overflow-hidden rounded-[0.25rem] sm:h-380 xl:h-434">
        <Image
          src={quote.image}
          alt={quote.imageAlt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover object-right transition-transform duration-700 hover:scale-105"
        />
        <ul data-reveal="right" data-reveal-delay="350" className="absolute top-16 right-0 flex w-210 flex-col gap-16 sm:top-20 sm:w-250 sm:gap-22 rounded-l-[0.375rem] bg-[var(--color-white-92)] px-22 py-26 shadow-[0_10px_30px_var(--color-shadow-black-12)] backdrop-blur-[8px] sm:flex xl:top-72 xl:w-292 xl:gap-26 xl:px-25 xl:py-30">
          {quote.imagePoints.map((point) => (
            <li key={point.title} className="group flex items-center gap-14 xl:gap-18">
              <Icon name={point.icon} className="size-30 shrink-0 text-brand transition-[transform] duration-300 group-hover:-rotate-6 group-hover:scale-110 xl:size-36" strokeWidth={1.6} />
              <span>
                <span className="block font-heading text-[0.9375rem] font-bold text-ink xl:text-[1.0625rem]">{point.title}</span>
                <span className="mt-2 block font-body text-[0.8125rem] text-steel xl:text-[0.875rem] xl:whitespace-nowrap">{point.description}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div data-reveal="up" data-reveal-delay="150" className="rounded-[0.375rem] border border-line bg-cloud px-20 pt-28 pb-24 sm:px-32 xl:px-30 xl:pt-30 xl:pb-22">
        <h2 className="font-heading text-[1.625rem] leading-34 font-extrabold tracking-[-0.02em] text-ink xl:text-[2.3125rem] xl:leading-46">
          <Highlight text={assistance.title} highlight={assistance.titleHighlight} highlightClass="text-brand" />
        </h2>
        <p className="mt-6 font-heading text-[0.9375rem] leading-24 font-medium text-steel xl:mt-6 xl:text-[1.25rem] xl:leading-30">
          {assistance.description}
        </p>
        <ul data-reveal-stagger className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-3 xl:mt-28 xl:gap-16 [&>li:last-child]:col-span-2 md:[&>li:last-child]:col-span-1">
          {assistance.cards.map((card) => {
            const { lines, type } = contactField(card.field, company);
            const body = (
              <>
                <Icon name={card.icon} className="mx-auto size-36 text-brand transition-[transform] duration-300 group-hover:-translate-y-4 group-hover:scale-110 xl:size-43" strokeWidth={1.6} />
                <span className="mt-10 block font-heading text-[0.9375rem] font-bold text-ink xl:mt-14 xl:text-[1.0625rem]">{card.title}</span>
                <span className="mt-4 block font-body text-[0.8125rem] leading-21 text-steel transition-colors group-hover:text-brand xl:mt-6 xl:text-[1rem] xl:leading-24">
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
              "block h-full rounded-[0.25rem] border border-line bg-[var(--color-white)] px-8 py-18 text-center xl:h-164 xl:pt-23 xl:pb-0";
            return (
              <li key={card.title}>
                {href ? (
                  <a href={href} className={`${box} group transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-4 hover:border-brand hover:shadow-[0_10px_24px_var(--color-shadow-ink-10)]`}>
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
};
