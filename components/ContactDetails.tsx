import Image from "next/image";
import Icon from "@/components/Icon";
import { companyMap, contactField, contactHref, site as data } from "@/data";

const { contact, company } = data;

// Right column: four info cards, the office photo and the location map.
export default function ContactDetails() {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-20 xl:gap-22">
      <ul data-reveal-stagger className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:gap-7 [&>li:last-child]:col-span-2 md:[&>li:last-child]:col-span-1">
        {contact.infoCards.map((card) => {
          const { lines, type } = contactField(card.field);
          const note = card.showTiming ? company.timing : card.note;
          const body = (
            <>
              <span className="mx-auto flex size-48 items-center justify-center rounded-full bg-brand text-white transition-[rotate] duration-700 group-hover:rotate-[360deg] xl:size-57">
                <Icon name={card.icon} className="size-22 xl:size-27" />
              </span>
              <span className="mt-12 block font-heading fs-15 font-bold text-ink xl:mt-16 xl:fs-18">{card.title}</span>
              <span className="mt-6 block font-body fs-14 leading-22 text-steel transition-colors group-hover:text-brand xl:mt-8 xl:fs-17 xl:leading-26">
                {lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
              {note && (
                <span className="mt-4 block font-body fs-12 text-muted xl:mt-6 xl:fs-13">{note}</span>
              )}
            </>
          );
          const href = contactHref(type, lines[0]);
          const box =
            "block h-full rd-4 border border-line bg-white px-10 py-18 text-center shadow-[0_4px_14px_rgba(10,40,50,0.04)] xl:h-202 xl:px-8 xl:pt-22 xl:pb-0";
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

      <div data-reveal="zoom" className="relative h-200 overflow-hidden rd-4 sm:h-268 xl:mt-7 xl:h-268">
        <Image src={contact.image} alt={contact.imageAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
      </div>

      <div data-reveal="up" className="relative h-200 overflow-hidden rd-4 sm:h-235">
        <iframe
          src={companyMap.embed}
          title={contact.map.alt}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0"
        />
        <a
          href={companyMap.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-10 bottom-10 rd-3 bg-white px-12 py-6 font-body fs-13 font-medium text-ink shadow-[0_4px_14px_rgba(10,40,50,0.15)] transition-colors hover:bg-brand hover:text-white xl:fs-14"
        >
          {contact.map.label}
        </a>
      </div>
    </div>
  );
}
