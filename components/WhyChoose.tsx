import Image from "next/image";
import Icon from "@/components/Icon";
import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { whyChoose } = data;

// Red block, red outline frame and two overlapping photos.
function WhyVisual() {
  return (
    <div className="relative mx-auto aspect-[790/824] w-full max-w-560 xl:max-w-none xl:shrink-0 xl:w-802">
      <span className="absolute top-0 left-0 h-[38.35%] w-[51.27%] rd-18 bg-wine" />
      <span className="absolute top-[14.08%] left-[25.57%] h-[79.73%] w-[66.2%] rd-22 border-3 border-[#8b1c1c] xl:border-4" />
      <div className="absolute top-[4.37%] left-[5.82%] h-[80.83%] w-[67.22%] overflow-hidden rd-24 border-4 border-white bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
        <Image
          src={whyChoose.images.main}
          alt="Container ship docked at the port"
          fill
          sizes="(min-width: 1280px) 28vw, 60vw"
          className="object-cover"
        />
      </div>
      <div className="absolute right-0 bottom-0 h-[58.74%] w-[37.09%] overflow-hidden rd-22 border-4 border-white bg-white shadow-[0_14px_34px_rgba(0,0,0,0.16)]">
        <Image
          src={whyChoose.images.secondary}
          alt="Haulix truck on the road at sunset"
          fill
          sizes="(min-width: 1280px) 16vw, 36vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function WhyChoose({ spaced = false }: { spaced?: boolean }) {
  return (
    <section id="why-choose-us" className={`scroll-mt-20 overflow-hidden bg-white px-20 pb-72 sm:px-40 lg:px-64 xl:px-0 xl:pr-33 xl:pl-60 ${
        spaced ? "pt-64 sm:pt-80 xl:pt-83 xl:pb-104" : "pt-24 xl:pt-0 xl:pb-129"
      }`}>
      <div className="flex flex-col gap-48 xl:flex-row xl:items-start xl:gap-54">
        <WhyVisual />

        <div className="min-w-0 flex-1 xl:pt-63">
          <SectionLabel
            text={whyChoose.label}
            align="left"
            lineClass="h-4 w-52 bg-wine xl:h-6 xl:w-78"
            className="font-poppins fs-14 font-semibold tracking-[0.18em] text-wine xl:fs-19"
          />
          <h2 className="mt-16 font-jakarta fs-34 leading-42 font-extrabold tracking-[-0.025em] text-ink sm:fs-50 sm:leading-56 xl:mt-22 xl:fs-78 xl:leading-78">
            <Highlight text={whyChoose.title} highlight={whyChoose.titleHighlight} highlightClass="text-[#8b1a1d]" />
          </h2>
          <p className="mt-16 font-poppins fs-16 leading-27 text-[#5f6b73] xl:mt-29 xl:fs-24 xl:leading-33 xl:whitespace-pre-line">
            {whyChoose.description}
          </p>

          <ul className="mt-28 grid gap-16 md:grid-cols-2 xl:mt-38 xl:gap-x-20 xl:gap-y-23">
            {whyChoose.items.map((item) => (
              <li key={item.title} className="drop-shadow-[0_8px_14px_rgba(10,40,50,0.06)]">
                <div className="chevron-card relative bg-[#dfe4e7] p-2">
                  <div className="chevron-card flex h-full items-center gap-18 bg-white py-18 pr-56 pl-18 xl:h-182 xl:gap-34 xl:py-0 xl:pr-50 xl:pl-22">
                    <span
                      className={`flex size-72 shrink-0 items-center justify-center rd-8 text-white xl:size-115 ${
                        item.tone === "red" ? "bg-[#8b1c1c]" : "bg-[#06323a]"
                      }`}
                    >
                      <Icon name={item.icon} className="size-36 xl:size-56" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-jakarta fs-18 leading-26 font-bold tracking-[-0.01em] text-ink xl:fs-24 xl:leading-32">{item.title}</h3>
                      <p className="mt-4 font-poppins fs-14 leading-22 text-muted xl:mt-6 xl:fs-19 xl:leading-29 xl:whitespace-pre-line">
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
