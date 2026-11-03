import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Loop } from "@/components/ui/Loop";
import { Highlight, SectionLabel } from "@/components/ui/SectionHeading";
import type { CtaData } from "@/types/templates.types";

export const Cta = ({ data: cta }: { data?: CtaData }) => {
  if (!cta) return null;
  return (
    <section className="relative overflow-hidden bg-deep">
      <Loop effect="slow-zoom">
        <Image src={cta.background} alt="" fill sizes="100vw" className="object-cover object-[62%_25%]" />
      </Loop>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-overlay-60),var(--color-overlay-50))]" />
      <div className="py-64 sm:py-80 xl:py-120 relative px-20 text-center sm:px-40 xl:px-0">
        <SectionLabel
          text={cta.label}
          lineClass="h-2 w-44 bg-brand xl:h-3 xl:w-65"
          className="font-body text-[0.875rem] tracking-[0.2em] text-[var(--color-white)] xl:text-[1.1875rem]"
        />
        <h2 data-reveal="up" data-reveal-delay="100" className="mt-18 font-heading text-[2.25rem] leading-44 font-extrabold tracking-[-0.03em] text-[var(--color-white)] sm:text-[3.5rem] sm:leading-66 xl:mt-22 xl:text-[5.8125rem] xl:leading-106">
          <Highlight text={cta.title} highlight={cta.titleHighlight} highlightClass="text-brand" />
        </h2>
        <p data-reveal="up" data-reveal-delay="200" className="mx-auto mt-16 max-w-720 font-body text-[1rem] leading-26 text-[var(--color-white)] xl:mt-32 xl:max-w-none xl:text-[1.5rem] xl:leading-35 xl:whitespace-pre-line">
          {cta.description}
        </p>
        <Link
          href={cta.buttonUrl}
          data-reveal="zoom" data-reveal-delay="300"
          className="group mt-28 inline-flex h-54 items-center justify-center gap-14 border border-brand bg-brand px-30 font-heading text-[1rem] font-bold tracking-[0.07em] text-[var(--color-white)] transition-colors hover:border-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-brand xl:mt-31 xl:h-72 xl:w-269 xl:gap-20 xl:px-0 xl:text-[1.3125rem]"
        >
          {cta.buttonText}
          <Icon name="LuArrowRight" className="size-18 transition-transform group-hover:translate-x-4 xl:size-24" strokeWidth={2.4} />
        </Link>
      </div>
    </section>
  );
};
