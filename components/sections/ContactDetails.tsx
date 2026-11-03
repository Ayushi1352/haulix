import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { CompanyData, ContactData } from "@/types/templates.types";
import { contactField, contactHref, mapUrl } from "@/components/ui/text";

// Right column: four info cards, the office photo and the location map.
export const ContactDetails = ({ data: contact, company }: { data: ContactData; company: CompanyData }) => {
  // Opening hours break after the days, as on the Business Hours card.
  const timing = contactField("timing", company).lines.join("\n");
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-20 xl:gap-22">
      <ul data-reveal-stagger className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:gap-7 [&>li:last-child:nth-child(odd)]:col-span-2 md:[&>li:last-child:nth-child(odd)]:col-span-1">
        {contact.infoCards.map((card) => {
          const { lines, type } = contactField(card.field, company);
          const note = card.showTiming ? timing : card.note;
          const body = (
            <>
              <span className="mx-auto flex size-48 items-center justify-center rounded-full bg-brand text-[var(--color-white)] transition-[transform] duration-300 group-hover:-rotate-6 group-hover:scale-110 xl:size-57">
                <Icon name={card.icon} className="size-22 xl:size-27" />
              </span>
              <span className="mt-12 block font-heading text-[0.9375rem] font-bold text-ink xl:mt-16 xl:text-[1.125rem]">{card.title}</span>
              <span className="mt-6 block font-body text-[0.875rem] leading-22 text-steel transition-colors group-hover:text-brand xl:mt-8 xl:text-[1.0625rem] xl:leading-26">
                {lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
              {note && (
                <span className="mt-4 block font-body whitespace-pre-line text-[0.75rem] text-muted xl:mt-6 xl:text-[0.8125rem]">{note}</span>
              )}
            </>
          );
          const href = contactHref(type, lines[0]);
          const box =
            "block h-full rounded-[0.25rem] border border-line bg-[var(--color-white)] px-10 py-18 text-center shadow-[0_4px_14px_var(--color-shadow-ink-4)] xl:min-h-202 xl:px-8 xl:pt-22 xl:pb-18";
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

      <div data-reveal="zoom" className="relative h-200 overflow-hidden rounded-[0.25rem] sm:h-268 xl:mt-7 xl:h-268">
        <Image src={contact.image} alt={contact.imageAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
      </div>

      <div data-reveal="up" className="relative h-200 overflow-hidden rounded-[0.25rem] sm:h-235">
        <iframe
          src={mapUrl(company.mapEmbedUrl, company)}
          title={contact.map.alt}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0"
        />
        <a
          href={mapUrl(company.mapOpenUrl, company)}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-10 bottom-10 rounded-[0.1875rem] bg-[var(--color-white)] px-12 py-6 font-body text-[0.8125rem] font-medium text-ink shadow-[0_4px_14px_var(--color-shadow-ink-15)] transition-colors hover:bg-brand hover:text-[var(--color-white)] xl:text-[0.875rem]"
        >
          {contact.map.label}
        </a>
      </div>
    </div>
  );
};
