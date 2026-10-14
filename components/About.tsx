import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { about } = data;

// Layered image collage: teal block, main photo, worker photo and the experience badge.
function AboutVisual({ detailed }: { detailed: boolean }) {
  return (
    <div className={`relative mx-auto aspect-[943/843] w-full max-w-600 xl:max-w-none xl:shrink-0 ${detailed ? "xl:w-943" : "xl:w-955"}`}>
      <span className="absolute top-0 left-0 h-[42%] w-[36%] rd-4 bg-[#0a2e36]" />
      <div className="absolute top-[5.93%] left-[4.88%] h-[81.97%] w-[89.4%] overflow-hidden rd-22 border-4 border-white bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <Image
          src={about.images.main}
          alt="Haulix truck at the port with a cargo plane overhead"
          fill
          sizes="(min-width: 1280px) 44vw, 90vw"
          className="rd-18 object-cover"
        />
      </div>
      <div className="absolute right-0 bottom-0 h-[42%] w-[39%] overflow-hidden rd-20 border-4 border-white bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
        <Image
          src={about.images.secondary}
          alt="Haulix team member in the warehouse"
          fill
          sizes="(min-width: 1280px) 19vw, 40vw"
          className="rd-16 object-cover"
        />
      </div>
      <div className="absolute bottom-[8.8%] left-[2.12%] flex h-[20.5%] w-[41.7%] items-center gap-[6%] rd-12 bg-wine px-[7%] xl:gap-33 xl:px-30 text-white shadow-[0_14px_30px_rgba(126,26,26,0.25)]">
        <Icon name={about.experience.icon} className="h-auto w-48 shrink-0 sm:w-80 xl:w-108" strokeWidth={1.3} />
        <div>
          <p className="font-jakarta fs-22 leading-26 font-extrabold sm:fs-40 sm:leading-44 xl:fs-50 xl:leading-56">
            {about.experience.value}
          </p>
          <p className="mt-2 font-poppins fs-10 leading-13 whitespace-pre sm:fs-15 sm:leading-21 xl:mt-4 xl:fs-21 xl:leading-31">
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
      className={`overflow-hidden bg-white px-20 sm:px-40 lg:px-64 xl:px-0 xl:pr-54 xl:pl-58 ${
        detailed ? "py-64 sm:py-80 xl:pt-93 xl:pb-122" : "pt-64 pb-72 sm:pt-80 sm:pb-88 xl:pt-146 xl:pb-137"
      }`}
    >
      <div className="flex flex-col gap-48 xl:flex-row xl:items-start xl:gap-39">
        <AboutVisual detailed={detailed} />

        <div className="min-w-0 flex-1 xl:pt-58">
          <SectionLabel
            text={about.label}
            align="left"
            lineClass="h-4 w-44 bg-[#821e1e] xl:h-6 xl:w-60"
            className="font-poppins fs-14 font-medium tracking-[0.3em] text-[#4f636b] xl:fs-19"
          />
          <h2 className="mt-16 font-jakarta fs-36 leading-42 font-extrabold tracking-[-0.03em] text-ink sm:fs-52 sm:leading-58 xl:mt-24 xl:fs-81 xl:leading-82">
            <Highlight text={about.title} highlight={about.titleHighlight} highlightClass="text-[#821e1e]" />
          </h2>
          <div className="mt-20 flex flex-col gap-14 xl:mt-28 xl:max-w-805">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-jakarta fs-16 leading-28 font-medium tracking-[0.02em] text-[#5f6b76] xl:fs-21 xl:leading-35"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {!detailed && (
            <>
              <div className="mt-28 grid gap-14 sm:grid-cols-3 xl:mt-38 xl:gap-23">
                {about.features.map((feature) => (
                  <div key={feature.title} className="rd-12 bg-cloud px-20 py-18 xl:h-221 xl:px-25 xl:pt-17">
                    <span className="flex size-52 items-center justify-center rounded-full bg-[#8b1c1c] text-white xl:size-68">
                      <Icon name={feature.icon} className="size-26 xl:size-34" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-14 font-jakarta fs-18 leading-26 font-bold text-heading xl:mt-24 xl:fs-22 xl:leading-30">
                      {feature.title}
                    </h3>
                    <p className="mt-4 font-jakarta fs-15 leading-24 font-medium tracking-[0.01em] text-muted xl:mt-8 xl:fs-18 xl:leading-30 xl:whitespace-pre-line">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-28 flex flex-wrap items-center gap-20 xl:mt-43 xl:gap-0">
                <Link
                  href={about.button.href}
                  className="inline-flex h-54 items-center justify-center gap-14 rd-3 bg-brand px-28 font-jakarta fs-17 font-semibold text-white transition-colors hover:bg-[#a32628] xl:h-73 xl:w-243 xl:gap-20 xl:px-0 xl:fs-22"
                >
                  {about.button.label}
                  <Icon name="arrow-right" className="size-18 xl:size-24" strokeWidth={2.2} />
                </Link>
                <span className="hidden h-60 w-2 bg-line sm:block xl:mx-33" />
                <a href={`tel:${about.help.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-16 xl:gap-26">
                  <Icon name="headset" className="size-40 text-[#8b1c1c] xl:size-55" strokeWidth={1.6} />
                  <span className="flex flex-col">
                    <span className="font-poppins fs-14 text-slate xl:fs-18">{about.help.label}</span>
                    <span className="font-jakarta fs-20 leading-28 font-extrabold text-ink xl:fs-29 xl:leading-36">
                      {about.help.phone}
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
