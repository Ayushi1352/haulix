import Image from "next/image";
import Link from "next/link";
import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { services } = data;

// Each home card names the service it opens; a name with no matching service stops the build.
const cards = services.cards.map((card) => {
  if (!services.items.some((item) => item.slug === card.service)) {
    throw new Error(`Home service card "${card.title}" points to unknown service "${card.service}"`);
  }
  return { ...card, href: `/services/${card.service}` };
});

// White arrow with a red tail, shown in the top-right corner of each card.
function CornerArrow() {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" className="size-48 xl:size-70">
      <path d="M8 9h26" className="stroke-brand" strokeWidth="7" strokeLinecap="round" />
      <path d="M34 9h28v28M62 9 12 59" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export default function Services() {
  return (
    <section className="section-y bg-white">
      <div className="px-20 text-center sm:px-40">
        <SectionLabel
          text={services.label}
          lineClass="h-4 w-44 bg-brand xl:h-5 xl:w-55"
          className="font-body fs-14 font-medium tracking-[0.26em] text-heading/85 xl:fs-17"
        />
        <h2 className="mt-14 font-heading fs-32 leading-40 font-extrabold tracking-[-0.03em] text-ink sm:fs-44 sm:leading-52 xl:mt-1 xl:fs-57 xl:leading-64">
          <Highlight text={services.title} highlight={services.titleHighlight} />
        </h2>
        <p className="mx-auto mt-12 max-w-900 font-body fs-15 leading-24 text-steel xl:mt-14 xl:max-w-none xl:fs-16 xl:leading-23 xl:tracking-[-0.01em] xl:whitespace-pre-line">
          {services.description}
        </p>
      </div>

      <div className="mt-36 grid gap-2 sm:grid-cols-2 xl:mt-25 xl:grid-cols-4">
        {cards.map((card, index) => (
          <Link
            key={card.href}
            href={card.href}
            className="group relative block h-460 overflow-hidden bg-ocean sm:h-520 xl:h-582"
          >
            <Image
              src={card.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,color-mix(in_srgb,var(--color-ocean)_82%,transparent)_55%,var(--color-ocean)_72%)]" />
            <span className="absolute top-18 right-20 xl:top-21 xl:right-26">
              <CornerArrow />
            </span>
            <div className="absolute inset-x-0 bottom-0 px-28 pb-30 text-white xl:top-300 xl:bottom-auto xl:pr-30 xl:pl-65 xl:pb-0">
              <p className="flex items-center gap-12 font-heading fs-17 font-bold xl:gap-14 xl:fs-21">
                {String(index + 1).padStart(2, "0")}
                <span className="h-2 w-40 bg-white/70 xl:w-48" />
              </p>
              <h3 className="mt-10 font-heading fs-28 leading-30 font-extrabold whitespace-pre-line xl:mt-14 xl:fs-38 xl:leading-35">
                {card.title}
              </h3>
              <p className="mt-10 font-body fs-15 leading-23 text-white/90 xl:mt-14 xl:fs-19 xl:leading-26.5 xl:whitespace-pre-line">
                {card.description}
              </p>
              <span className="mt-16 inline-flex items-center gap-16 font-heading fs-16 font-bold transition-colors group-hover:text-brand xl:mt-17 xl:fs-20">
                {services.readMore}
                <svg viewBox="0 0 56 14" aria-hidden="true" className="h-12 w-46 transition-transform group-hover:translate-x-4 xl:h-14 xl:w-54">
                  <path d="M1 7h52M46 1l7 6-7 6" className="stroke-brand" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
