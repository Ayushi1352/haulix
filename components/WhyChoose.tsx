import Image from "next/image";
import Icon from "@/components/Icon";
import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { isRedTile, site as data } from "@/data";

const { whyChoose } = data;

// Red block, red outline frame and two overlapping photos.
function WhyVisual() {
  return (
    <div className="relative mx-auto aspect-[790/824] w-full max-w-560 xl:max-w-none xl:shrink-0 xl:w-802">
      <span data-reveal="left" className="absolute top-0 left-0 h-[38.35%] w-[51.27%] rd-18 bg-brand" />
      <span data-reveal="zoom" className="absolute top-[14.08%] left-[25.57%] [--delay:300ms] h-[79.73%] w-[66.2%] rd-22 border-3 border-brand xl:border-4" />
      <div data-reveal="up" className="absolute top-[4.37%] left-[5.82%] [--delay:150ms] h-[80.83%] w-[67.22%] overflow-hidden rd-24 border-4 border-white bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
        <Image
          src={whyChoose.images.main}
          alt={whyChoose.images.mainAlt}
          fill
          sizes="(min-width: 1024px) 28vw, 60vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div data-reveal="right" className="absolute right-0 bottom-0 h-[58.74%] w-[37.09%] [--delay:450ms] overflow-hidden rd-22 border-4 border-white bg-white shadow-[0_14px_34px_rgba(0,0,0,0.16)]">
        <Image
          src={whyChoose.images.secondary}
          alt={whyChoose.images.secondaryAlt}
          fill
          sizes="(min-width: 1024px) 16vw, 36vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  );
}

export default function WhyChoose() {
  return (
    <section id="why-choose-us" className="section-y scroll-mt-20 overflow-hidden bg-white px-20 sm:px-40 lg:px-64 xl:px-0 xl:pr-33 xl:pl-60">
      <div className="flex flex-col gap-48 xl:flex-row xl:items-start xl:gap-54">
        <WhyVisual />

        <div className="min-w-0 flex-1 xl:pt-63">
          <SectionLabel
            text={whyChoose.label}
            align="left"
            lineClass="h-4 w-52 bg-brand xl:h-6 xl:w-78"
            className="font-body fs-14 font-semibold tracking-[0.18em] text-brand xl:fs-19"
          />
          <h2 data-reveal="up" className="mt-16 [--delay:100ms] font-heading fs-34 leading-42 font-extrabold tracking-[-0.025em] text-ink sm:fs-50 sm:leading-56 xl:mt-22 xl:fs-78 xl:leading-78">
            <Highlight text={whyChoose.title} highlight={whyChoose.titleHighlight} highlightClass="text-brand" />
          </h2>
          <p data-reveal="up" className="mt-16 [--delay:200ms] font-body fs-16 leading-27 text-steel xl:mt-29 xl:fs-24 xl:leading-33 xl:whitespace-pre-line">
            {whyChoose.description}
          </p>

          <ul data-reveal-stagger className="mt-28 grid gap-16 md:grid-cols-2 xl:mt-38 xl:gap-x-20 xl:gap-y-23">
            {whyChoose.items.map((item, index) => (
              <li key={item.title} className="group drop-shadow-[0_8px_14px_rgba(10,40,50,0.06)]">
                <div className="chevron-card relative bg-line p-2 transition-[translate,background-color] duration-300 group-hover:translate-x-8 group-hover:bg-brand">
                  <div className="chevron-card flex h-full items-center gap-18 bg-white py-18 pr-56 pl-18 xl:h-182 xl:gap-34 xl:py-0 xl:pr-50 xl:pl-22">
                    <span
                      className={`flex size-72 shrink-0 items-center justify-center rd-8 text-white transition-[rotate,scale] duration-300 group-hover:-rotate-6 group-hover:scale-110 xl:size-115 ${
                        isRedTile(index, 2) ? "bg-brand" : "bg-ink"
                      }`}
                    >
                      <Icon name={item.icon} className="size-36 xl:size-56" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-heading fs-18 leading-26 font-bold tracking-[-0.01em] text-ink xl:fs-24 xl:leading-32">{item.title}</h3>
                      <p className="mt-4 font-body fs-14 leading-22 text-muted xl:mt-6 xl:fs-19 xl:leading-29 xl:whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
