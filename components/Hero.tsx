import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Highlight } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { hero } = data;

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-deep">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] xl:object-center"
        />
        {/* Left-side shade that keeps the copy readable */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,36,45,0.85)_0%,rgba(4,36,45,0.55)_45%,rgba(4,36,45,0.1)_75%)] xl:bg-[linear-gradient(90deg,rgba(4,36,45,0.35)_0%,rgba(4,36,45,0.2)_35%,rgba(4,36,45,0)_55%)]" />

        <div className="relative px-20 pt-64 pb-120 sm:px-40 sm:pt-90 sm:pb-150 lg:px-64 xl:h-764 xl:px-96 xl:pt-142 xl:pb-0">
          <p className="flex items-center gap-14 font-poppins fs-13 tracking-[0.3em] text-white/90 uppercase sm:fs-15 xl:gap-22 xl:fs-19 xl:tracking-[0.275em]">
            <span className="h-4 w-36 shrink-0 bg-ember xl:h-7 xl:w-55" />
            {hero.label}
          </p>
          <h1 className="mt-18 font-jakarta fs-48 leading-50 font-extrabold tracking-[-0.03em] text-white sm:fs-72 sm:leading-72 lg:fs-96 lg:leading-92 xl:mt-28 xl:fs-122 xl:leading-102">
            <Highlight text={hero.title} highlight={hero.titleHighlight} highlightClass="text-ember tracking-[-0.085em]" />
          </h1>
          <p className="mt-18 max-w-560 font-poppins fs-17 leading-27 tracking-[0.01em] text-white/95 sm:fs-20 sm:leading-31 xl:mt-31 xl:max-w-none xl:fs-26 xl:leading-39 xl:whitespace-pre-line">
            {hero.description}
          </p>
          <Link
            href={hero.button.href}
            className="mt-26 inline-flex h-54 items-center justify-center gap-14 rd-3 bg-brand px-28 font-jakarta fs-18 font-bold text-white transition-colors hover:bg-[#a32628] xl:mt-27 xl:h-83 xl:w-287 xl:gap-20 xl:px-0 xl:fs-25"
          >
            {hero.button.label}
            <Icon name="arrow-right" className="size-20 xl:size-28" strokeWidth={2.2} />
          </Link>
        </div>
      </section>

      {/* Feature cards overlapping the hero */}
      <div className="relative z-10 -mt-80 grid gap-16 px-20 sm:px-40 md:grid-cols-3 md:gap-20 lg:px-64 xl:-mt-94 xl:gap-30 xl:pr-78 xl:pl-98">
        {hero.features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-center gap-18 rd-8 bg-white px-20 py-22 shadow-[0_18px_50px_rgba(10,40,50,0.1)] md:flex-col md:items-start lg:flex-row lg:items-center xl:h-196 xl:gap-43 xl:px-44 xl:py-0 xl:pt-10"
          >
            <span className="flex size-64 shrink-0 items-center justify-center rd-10 bg-brand text-white xl:h-114 xl:w-118">
              <Icon name={feature.icon} className="size-34 xl:size-62" strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="font-jakarta fs-19 leading-26 font-bold tracking-[-0.03em] text-heading xl:fs-27 xl:leading-34">
                {feature.title}
              </h3>
              <p className="mt-6 font-jakarta fs-15 leading-23 font-medium text-[#7b8494] xl:mt-10 xl:fs-22 xl:leading-32 xl:whitespace-pre-line">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
