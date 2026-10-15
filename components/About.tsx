import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { contactHref, site as data } from "@/data";

const { about, company } = data;

// Layered image collage: teal block, main photo, worker photo and the experience badge.
function AboutVisual({ detailed }: { detailed: boolean }) {
  return (
    <div className={`relative mx-auto aspect-[943/843] w-full max-w-600 xl:max-w-none xl:shrink-0 ${detailed ? "xl:w-943" : "xl:w-955"}`}>
      <span data-reveal="left" className="absolute top-0 left-0 h-[42%] w-[36%] rd-4 bg-ink" />
      <div data-reveal="zoom" className="absolute top-[5.93%] left-[4.88%] [--delay:150ms] h-[81.97%] w-[89.4%] overflow-hidden rd-22 border-4 border-white bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <Image
          src={about.images.main}
          alt={about.images.mainAlt}
          fill
          sizes="(min-width: 1024px) 44vw, 90vw"
          className="rd-18 object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div data-reveal="up" className="absolute right-0 bottom-0 h-[42%] w-[39%] [--delay:400ms] overflow-hidden rd-20 border-4 border-white bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
        <Image
          src={about.images.secondary}
          alt={about.images.secondaryAlt}
          fill
          sizes="(min-width: 1024px) 19vw, 40vw"
          className="rd-16 object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div data-reveal="zoom" className="absolute bottom-[8.8%] left-[2.12%] [--delay:600ms] flex max-w-[70%] items-center gap-10 rd-12 bg-brand px-14 py-10 text-white shadow-[0_14px_30px_color-mix(in_srgb,var(--color-brand)_25%,transparent)] sm:gap-16 sm:px-22 sm:py-16 xl:h-[20.5%] xl:w-[41.7%] xl:max-w-none xl:gap-33 xl:px-30 xl:py-0">
        <Icon name={about.experience.icon} className="h-auto w-36 shrink-0 motion-safe:animate-drive sm:w-60 xl:w-108" strokeWidth={1.3} />
        <div>
          <p className="font-heading fs-20 leading-24 font-extrabold sm:fs-32 sm:leading-36 xl:fs-50 xl:leading-56">
            {about.experience.value}
          </p>
          <p className="mt-2 font-body fs-11 leading-14 whitespace-pre sm:fs-14 sm:leading-19 xl:mt-4 xl:fs-21 xl:leading-31">
            {about.experience.label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function About({ detailed = false }: { detailed?: boolean }) {
  const paragraphs = detailed ? about.paragraphs : about.paragraphs.slice(0, 1);

  return (
    <section
      className="section-y overflow-hidden bg-white px-20 sm:px-40 lg:px-64 xl:px-0 xl:pr-54 xl:pl-58"
    >
      <div className="flex flex-col gap-48 xl:flex-row xl:items-start xl:gap-39">
        <AboutVisual detailed={detailed} />

        <div className="min-w-0 flex-1 xl:pt-58">
          <SectionLabel
            text={about.label}
            align="left"
            lineClass="h-4 w-44 bg-brand xl:h-6 xl:w-60"
            className="font-body fs-14 font-medium tracking-[0.3em] text-slate xl:fs-19"
          />
          <h2 data-reveal="up" className="mt-16 [--delay:100ms] font-heading fs-36 leading-42 font-extrabold tracking-[-0.03em] text-ink sm:fs-52 sm:leading-58 xl:mt-24 xl:fs-81 xl:leading-82">
            <Highlight text={about.title} highlight={about.titleHighlight} highlightClass="text-brand" />
          </h2>
          <div data-reveal="up" className="mt-20 flex flex-col gap-14 [--delay:200ms] xl:mt-28 xl:max-w-805">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-heading fs-16 leading-28 font-medium tracking-[0.02em] text-steel xl:fs-21 xl:leading-35"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {!detailed && (
            <>
              <div data-reveal-stagger className="mt-28 grid gap-14 sm:grid-cols-3 xl:mt-38 xl:gap-23">
                {about.features.map((feature) => (
                  <div key={feature.title} className="group rd-12 bg-cloud transition-[translate,box-shadow] duration-300 hover:-translate-y-6 hover:shadow-[0_18px_40px_rgba(10,40,50,0.1)] px-20 py-18 xl:h-221 xl:px-25 xl:pt-17">
                    <span className="flex size-52 items-center justify-center rounded-full bg-brand text-white transition-[rotate,scale] duration-300 group-hover:-rotate-6 group-hover:scale-110 xl:size-68">
                      <Icon name={feature.icon} className="size-26 xl:size-34" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-14 font-heading fs-18 leading-26 font-bold text-heading xl:mt-24 xl:fs-22 xl:leading-30">
                      {feature.title}
                    </h3>
                    <p className="mt-4 font-heading fs-15 leading-24 font-medium tracking-[0.01em] text-muted xl:mt-8 xl:fs-18 xl:leading-30 xl:whitespace-pre-line">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div data-reveal="up" className="mt-28 flex flex-wrap items-center gap-20 [--delay:150ms] xl:mt-43 xl:gap-0">
                <Link
                  href={about.button.href}
                  className="group inline-flex h-54 items-center justify-center gap-14 rd-3 border border-brand bg-brand px-28 font-heading fs-17 font-semibold text-white transition-colors hover:bg-white hover:text-brand xl:h-73 xl:w-243 xl:gap-20 xl:px-0 xl:fs-22"
                >
                  {about.button.label}
                  <Icon name="arrow-right" className="size-18 transition-transform group-hover:translate-x-4 xl:size-24" strokeWidth={2.2} />
                </Link>
                <span className="hidden h-60 w-2 bg-line sm:block xl:mx-33" />
                <a href={contactHref("tel", company.phone)} className="group flex items-center gap-16 xl:gap-26">
                  <Icon name={about.help.icon} className="size-40 text-brand motion-safe:animate-ring xl:size-55" strokeWidth={1.6} />
                  <span className="flex flex-col">
                    <span className="font-body fs-14 text-slate xl:fs-18">{about.help.label}</span>
                    <span className="font-heading fs-20 leading-28 font-extrabold text-ink transition-colors group-hover:text-brand xl:fs-29 xl:leading-36">
                      {company.phone}
                    </span>
                  </span>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
