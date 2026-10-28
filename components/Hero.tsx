import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Highlight } from "@/components/SectionHeading";
import { introHidden, kenburnsStart } from "@/components/motion";
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
          data-intro="kenburns"
          className={`object-cover object-[70%_center] xl:object-center ${kenburnsStart}`}
        />
        {/* Left-side blur that fades out towards the trucks */}
        <div className="absolute inset-0 backdrop-blur-[5px] [mask-image:linear-gradient(90deg,#000_0%,#000_55%,transparent_95%)] sm:[mask-image:linear-gradient(90deg,#000_0%,#000_45%,transparent_85%)] xl:backdrop-blur-[6px] xl:[mask-image:linear-gradient(90deg,#000_0%,#000_30%,transparent_58%)]" />
        {/* Left-side shade that keeps the copy readable */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-deep)_85%,transparent)_0%,color-mix(in_srgb,var(--color-deep)_60%,transparent)_50%,color-mix(in_srgb,var(--color-deep)_15%,transparent)_85%)] sm:bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-deep)_80%,transparent)_0%,color-mix(in_srgb,var(--color-deep)_55%,transparent)_45%,color-mix(in_srgb,var(--color-deep)_10%,transparent)_75%)] xl:bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-deep)_60%,transparent)_0%,color-mix(in_srgb,var(--color-deep)_40%,transparent)_35%,transparent_58%)]" />

        <div className="relative px-20 pt-64 pb-120 sm:px-40 sm:pt-90 sm:pb-150 lg:px-64 xl:h-764 xl:px-96 xl:pt-92 xl:pb-0">
          <p data-intro="up" className={`flex items-center gap-14 font-body text-[calc(13*var(--spacing))] tracking-[0.3em] text-white/90 uppercase sm:text-[calc(15*var(--spacing))] xl:gap-22 xl:text-[calc(19*var(--spacing))] xl:tracking-[0.275em] ${introHidden}`}>
            <span data-intro="line" data-intro-delay="400" className={`h-4 w-36 shrink-0 origin-left bg-brand xl:h-7 xl:w-55 ${introHidden}`} />
            {hero.label}
          </p>
          <h1 data-intro="up" data-intro-delay="150" className={`mt-18 font-heading text-[calc(40*var(--spacing))] leading-48 font-extrabold tracking-[-0.03em] text-white sm:text-[calc(58*var(--spacing))] sm:leading-68 lg:text-[calc(80*var(--spacing))] lg:leading-92 xl:mt-28 xl:text-[calc(100*var(--spacing))] xl:leading-112 ${introHidden}`}>
            <Highlight text={hero.title} highlight={hero.titleHighlight} highlightClass="text-brand tracking-[-0.085em]" />
          </h1>
          <p data-intro="up" data-intro-delay="300" className={`mt-18 max-w-560 font-body text-[calc(17*var(--spacing))] leading-27 tracking-[0.01em] text-white/95 sm:text-[calc(20*var(--spacing))] sm:leading-31 xl:mt-31 xl:max-w-none xl:text-[calc(26*var(--spacing))] xl:leading-39 xl:whitespace-pre-line ${introHidden}`}>
            {hero.description}
          </p>
          <Link
            href={hero.button.href}
            data-intro="up"
            data-intro-delay="450"
            className={`group mt-26 inline-flex h-54 items-center justify-center gap-14 rounded-[calc(3*var(--spacing))] border border-brand bg-brand px-28 font-heading text-[calc(18*var(--spacing))] font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-brand xl:mt-27 xl:h-83 xl:w-287 xl:gap-20 xl:px-0 xl:text-[calc(25*var(--spacing))] ${introHidden}`}
          >
            {hero.button.label}
            <Icon name="arrow-right" className="size-20 transition-transform group-hover:translate-x-4 xl:size-28" strokeWidth={2.2} />
          </Link>
        </div>
      </section>

      {/* Feature cards overlapping the hero */}
      <div className="relative z-10 -mt-80 grid gap-16 px-20 sm:px-40 md:grid-cols-3 md:gap-20 lg:px-64 xl:-mt-94 xl:gap-30 xl:pr-78 xl:pl-98">
        {hero.features.map((feature, index) => (
          <div
            key={feature.title}
            data-intro="up"
            data-intro-delay={600 + index * 150}
            className={`group flex items-center gap-18 rounded-[calc(8*var(--spacing))] bg-white px-20 py-22 shadow-[0_18px_50px_rgba(10,40,50,0.1)] transition-[translate,box-shadow] duration-300 hover:-translate-y-8 hover:shadow-[0_26px_60px_rgba(10,40,50,0.16)] md:flex-col md:items-start lg:flex-row lg:items-center xl:h-196 xl:gap-43 xl:px-44 xl:py-0 xl:pt-10 ${introHidden}`}
          >
            <span className="flex size-64 shrink-0 items-center justify-center rounded-[calc(10*var(--spacing))] bg-brand text-white transition-[rotate,scale] duration-300 group-hover:-rotate-6 group-hover:scale-110 xl:h-114 xl:w-118">
              <Icon name={feature.icon} className="size-34 xl:size-62" strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="font-heading text-[calc(19*var(--spacing))] leading-26 font-bold tracking-[-0.03em] text-heading xl:text-[calc(27*var(--spacing))] xl:leading-34">
                {feature.title}
              </h3>
              <p className="mt-6 font-heading text-[calc(15*var(--spacing))] leading-23 font-medium text-muted xl:mt-10 xl:text-[calc(22*var(--spacing))] xl:leading-32 xl:whitespace-pre-line">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
