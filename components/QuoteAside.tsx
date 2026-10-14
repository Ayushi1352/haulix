import Image from "next/image";
import Icon from "@/components/Icon";
import { Highlight } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { quote } = data;

// Right column: photo with the feature card, and the "Need Immediate Assistance?" panel.
export default function QuoteAside() {
  const { assistance } = quote;

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-24 xl:gap-28">
      <div className="relative h-300 overflow-hidden rd-4 sm:h-380 xl:h-434">
        <Image
          src={quote.image}
          alt="Logistics expert checking shipments at the container port"
          fill
          sizes="(min-width: 1280px) 45vw, 100vw"
          className="object-cover object-right"
        />
        <ul className="absolute top-16 right-0 flex w-210 flex-col gap-16 sm:top-20 sm:w-250 sm:gap-22 rd-l-6 bg-white/92 px-22 py-26 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:flex xl:top-72 xl:w-292 xl:gap-26 xl:px-25 xl:py-30">
          {quote.imagePoints.map((point) => (
            <li key={point.title} className="flex items-center gap-14 xl:gap-18">
              <Icon name={point.icon} className="size-30 shrink-0 text-[#d42027] xl:size-36" strokeWidth={1.6} />
              <span>
                <span className="block font-jakarta fs-15 font-bold text-ink xl:fs-17">{point.title}</span>
                <span className="mt-2 block font-poppins fs-13 text-[#5b6770] xl:fs-15">{point.description}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rd-6 border border-[#eceef1] bg-[#f7f8fa] px-20 pt-28 pb-24 sm:px-32 xl:px-30 xl:pt-36 xl:pb-24">
        <h2 className="font-jakarta fs-26 leading-34 font-extrabold tracking-[-0.02em] text-ink xl:fs-37 xl:leading-46">
          <Highlight text={assistance.title} highlight={assistance.titleHighlight} highlightClass="text-scarlet" />
        </h2>
        <p className="mt-6 font-jakarta fs-15 leading-24 font-medium text-[#5b6770] xl:mt-6 xl:fs-20 xl:leading-30">
          {assistance.description}
        </p>
        <ul className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-4 xl:mt-34 xl:gap-16">
          {assistance.cards.map((card) => {
            const body = (
              <>
                <Icon name={card.icon} className="mx-auto size-36 text-[#d42027] xl:size-43" strokeWidth={1.6} />
                <span className="mt-10 block font-jakarta fs-15 font-bold text-ink xl:mt-14 xl:fs-17">{card.title}</span>
                <span className="mt-4 block font-poppins fs-13 leading-21 text-[#5b6770] xl:mt-6 xl:fs-16 xl:leading-24">
                  {card.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </>
            );
            const box =
              "block h-full rd-4 border border-[#eceef1] bg-white px-8 py-18 text-center xl:h-168 xl:pt-25 xl:pb-0";
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
      </div>
    </div>
  );
}
