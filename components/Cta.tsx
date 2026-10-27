import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Loop from "@/components/Loop";
import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { cta } = data;

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-deep">
      <Loop effect="slow-zoom">
        <Image src={cta.background} alt="" fill sizes="100vw" className="object-cover object-[62%_25%]" />
      </Loop>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,24,30,0.6),rgba(6,24,30,0.5))]" />
      <div className="py-64 sm:py-80 xl:py-120 relative px-20 text-center sm:px-40 xl:px-0">
        <SectionLabel
          text={cta.label}
          lineClass="h-2 w-44 bg-brand xl:h-3 xl:w-65"
          className="font-body text-[calc(14*var(--spacing))] tracking-[0.2em] text-white xl:text-[calc(19*var(--spacing))]"
        />
        <h2 data-reveal="up" data-reveal-delay="100" className="mt-18 font-heading text-[calc(36*var(--spacing))] leading-40 font-extrabold tracking-[-0.03em] text-white sm:text-[calc(56*var(--spacing))] sm:leading-58 xl:mt-22 xl:text-[calc(93*var(--spacing))] xl:leading-82">
          <Highlight text={cta.title} highlight={cta.titleHighlight} highlightClass="text-brand" />
        </h2>
        <p data-reveal="up" data-reveal-delay="200" className="mx-auto mt-16 max-w-720 font-body text-[calc(16*var(--spacing))] leading-26 text-white xl:mt-32 xl:max-w-none xl:text-[calc(24*var(--spacing))] xl:leading-35 xl:whitespace-pre-line">
          {cta.description}
        </p>
        <Link
          href={cta.button.href}
          data-reveal="zoom" data-reveal-delay="300"
          className="group mt-28 inline-flex h-54 items-center justify-center gap-14 border border-brand bg-brand px-30 font-heading text-[calc(16*var(--spacing))] font-bold tracking-[0.07em] text-white transition-colors hover:border-white hover:bg-white hover:text-brand xl:mt-31 xl:h-72 xl:w-269 xl:gap-20 xl:px-0 xl:text-[calc(21*var(--spacing))]"
        >
          {cta.button.label}
          <Icon name="arrow-right" className="size-18 transition-transform group-hover:translate-x-4 xl:size-24" strokeWidth={2.4} />
        </Link>
      </div>
    </section>
  );
}
