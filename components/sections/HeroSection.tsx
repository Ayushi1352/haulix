import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Highlight } from "@/components/ui/SectionHeading";
import { introHidden, kenburnsStart } from "@/components/ui/motion";
import type { HeroData } from "@/types/templates.types";

export const HeroSection = ({ data: hero }: { data?: HeroData }) => {
  if (!hero) return null;
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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-deep-85)_0%,var(--color-deep-60)_50%,var(--color-deep-15)_85%)] sm:bg-[linear-gradient(90deg,var(--color-deep-80)_0%,var(--color-deep-55)_45%,var(--color-deep-10)_75%)] xl:bg-[linear-gradient(90deg,var(--color-deep-60)_0%,var(--color-deep-40)_35%,transparent_58%)]" />

        <div className="relative px-20 pt-64 pb-120 sm:px-40 sm:pt-90 sm:pb-150 lg:px-64 xl:h-764 xl:px-96 xl:pt-92 xl:pb-0">
          <p data-intro="up" className={`flex items-center gap-14 font-body text-[0.8125rem] tracking-[0.3em] text-[var(--color-white-90)] uppercase sm:text-[0.9375rem] xl:gap-22 xl:text-[1.1875rem] xl:tracking-[0.275em] ${introHidden}`}>
            <span data-intro="line" data-intro-delay="400" className={`h-4 w-36 shrink-0 origin-left bg-brand xl:h-7 xl:w-55 ${introHidden}`} />
            {hero.label}
          </p>
          <h1 data-intro="up" data-intro-delay="150" className={`mt-18 font-heading text-[2.5rem] leading-48 font-extrabold tracking-[-0.03em] text-[var(--color-white)] sm:text-[3.625rem] sm:leading-68 lg:text-[5rem] lg:leading-92 xl:mt-28 xl:text-[6.25rem] xl:leading-112 ${introHidden}`}>
            <Highlight text={hero.title} highlight={hero.titleHighlight} highlightClass="text-brand tracking-[-0.085em]" />
          </h1>
          <p data-intro="up" data-intro-delay="300" className={`mt-18 max-w-560 font-body text-[1.0625rem] leading-27 tracking-[0.01em] text-[var(--color-white-95)] sm:text-[1.25rem] sm:leading-31 xl:mt-31 xl:max-w-none xl:text-[1.625rem] xl:leading-39 xl:whitespace-pre-line ${introHidden}`}>
            {hero.description}
          </p>
          <Link
            href={hero.buttonUrl}
            data-intro="up"
            data-intro-delay="450"
            className={`group mt-26 inline-flex h-54 items-center justify-center gap-14 rounded-[0.1875rem] border border-brand bg-brand px-28 font-heading text-[1.125rem] font-bold text-[var(--color-white)] transition-colors hover:border-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-brand xl:mt-27 xl:h-83 xl:w-287 xl:gap-20 xl:px-0 xl:text-[1.5625rem] ${introHidden}`}
          >
            {hero.buttonText}
            <Icon name="LuArrowRight" className="size-20 transition-transform group-hover:translate-x-4 xl:size-28" strokeWidth={2.2} />
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
            className={`group flex items-center gap-18 rounded-[0.5rem] bg-[var(--color-white)] px-20 py-22 shadow-[0_18px_50px_var(--color-shadow-ink-10)] transition-[transform,box-shadow] duration-300 hover:-translate-y-8 hover:shadow-[0_26px_60px_var(--color-shadow-ink-16)] md:flex-col md:items-start lg:flex-row lg:items-center xl:h-196 xl:gap-43 xl:px-44 xl:py-0 xl:pt-10 ${introHidden}`}
          >
            <span className="flex size-64 shrink-0 items-center justify-center rounded-[0.625rem] bg-brand text-[var(--color-white)] transition-[transform] duration-300 group-hover:-rotate-6 group-hover:scale-110 xl:h-114 xl:w-118">
              <Icon name={feature.icon} className="size-34 xl:size-62" strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="font-heading text-[1.1875rem] leading-26 font-bold tracking-[-0.03em] text-heading xl:text-[1.6875rem] xl:leading-34">
                {feature.title}
              </h3>
              <p className="mt-6 font-heading text-[0.9375rem] leading-23 font-medium text-muted xl:mt-10 xl:text-[1.375rem] xl:leading-32 xl:whitespace-pre-line">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
