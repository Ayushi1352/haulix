import Image from "next/image";
import Icon from "@/components/Icon";
import { companyMap, contactField, contactHref, site as data } from "@/data";

const { contact } = data;
// Opening hours break after the days, as on the Business Hours card.
const timing = contactField("timing").lines.join("\n");

// Right column: four info cards, the office photo and the location map.
export default function ContactDetails() {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-20 xl:gap-22">
      <ul data-reveal-stagger className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:gap-7 [&>li:last-child:nth-child(odd)]:col-span-2 md:[&>li:last-child:nth-child(odd)]:col-span-1">
        {contact.infoCards.map((card) => {
          const { lines, type } = contactField(card.field);
          const note = card.showTiming ? timing : card.note;
          const body = (
            <>
              <span className="mx-auto flex size-48 items-center justify-center rounded-full bg-brand text-white transition-[rotate,scale] duration-300 group-hover:-rotate-6 group-hover:scale-110 xl:size-57">
                <Icon name={card.icon} className="size-22 xl:size-27" />
              </span>
              <span className="mt-12 block font-heading text-[calc(15*var(--spacing))] font-bold text-ink xl:mt-16 xl:text-[calc(18*var(--spacing))]">{card.title}</span>
              <span className="mt-6 block font-body text-[calc(14*var(--spacing))] leading-22 text-steel transition-colors group-hover:text-brand xl:mt-8 xl:text-[calc(17*var(--spacing))] xl:leading-26">
                {lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
              {note && (
                <span className="mt-4 block font-body whitespace-pre-line text-[calc(12*var(--spacing))] text-muted xl:mt-6 xl:text-[calc(13*var(--spacing))]">{note}</span>
              )}
            </>
          );
          const href = contactHref(type, lines[0]);
          const box =
            "block h-full rounded-[calc(4*var(--spacing))] border border-line bg-white px-10 py-18 text-center shadow-[0_4px_14px_rgba(10,40,50,0.04)] xl:min-h-202 xl:px-8 xl:pt-22 xl:pb-18";
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

      <div data-reveal="zoom" className="relative h-200 overflow-hidden rounded-[calc(4*var(--spacing))] sm:h-268 xl:mt-7 xl:h-268">
        <Image src={contact.image} alt={contact.imageAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
      </div>

      <div data-reveal="up" className="relative h-200 overflow-hidden rounded-[calc(4*var(--spacing))] sm:h-235">
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
          className="absolute right-10 bottom-10 rounded-[calc(3*var(--spacing))] bg-white px-12 py-6 font-body text-[calc(13*var(--spacing))] font-medium text-ink shadow-[0_4px_14px_rgba(10,40,50,0.15)] transition-colors hover:bg-brand hover:text-white xl:text-[calc(14*var(--spacing))]"
        >
          {contact.map.label}
        </a>
      </div>
    </div>
  );
}
