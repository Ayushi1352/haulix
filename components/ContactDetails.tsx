import Image from "next/image";
import Icon from "@/components/Icon";
import { site as data } from "@/data";

const { contact } = data;

// Right column: four info cards, the office photo and the location map.
export default function ContactDetails() {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-20 xl:gap-22">
      <ul className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:gap-7">
        {contact.infoCards.map((card) => {
          const body = (
            <>
              <span className="mx-auto flex size-48 items-center justify-center rounded-full bg-[#d42027] text-white xl:size-57">
                <Icon name={card.icon} className="size-22 xl:size-27" />
              </span>
              <span className="mt-12 block font-jakarta fs-15 font-bold text-ink xl:mt-16 xl:fs-18">{card.title}</span>
              <span className="mt-6 block font-poppins fs-14 leading-22 text-[#5b6770] xl:mt-8 xl:fs-17 xl:leading-26">
                {card.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
              {"note" in card && card.note && (
                <span className="mt-4 block font-poppins fs-12 text-[#7a858d] xl:mt-6 xl:fs-13">{card.note}</span>
              )}
            </>
          );
          const box =
            "block h-full rd-4 border border-[#eceef1] bg-white px-10 py-18 text-center shadow-[0_4px_14px_rgba(10,40,50,0.04)] xl:h-202 xl:px-8 xl:pt-22 xl:pb-0";
          return (
            <li key={card.title}>
              {"href" in card && card.href ? (
                <a href={card.href} className={`${box} transition-shadow hover:shadow-[0_10px_24px_rgba(10,40,50,0.1)]`}>
                  {body}
                </a>
              ) : (
                <div className={box}>{body}</div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="relative h-200 overflow-hidden rd-4 sm:h-268 xl:mt-7 xl:h-268">
        <Image src={contact.image} alt="Haulix office building" fill sizes="(min-width: 1280px) 45vw, 100vw" className="object-cover" />
      </div>

      <a
        href={contact.map.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-200 overflow-hidden rd-4 sm:h-235"
      >
        <Image src={contact.map.image} alt={contact.map.alt} fill sizes="(min-width: 1280px) 45vw, 100vw" className="object-cover" />
      </a>
    </div>
  );
}
