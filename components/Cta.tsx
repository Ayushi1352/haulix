import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { cta } = data;

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-deep">
      <Image src={cta.background} alt="" fill sizes="100vw" className="object-cover object-[62%_25%] motion-safe:animate-slow-zoom" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,24,30,0.6),rgba(6,24,30,0.5))]" />
      <div className="section-y relative px-20 text-center sm:px-40 xl:px-0">
        <SectionLabel
          text={cta.label}
          lineClass="h-2 w-44 bg-brand xl:h-3 xl:w-65"
          className="font-body fs-14 tracking-[0.2em] text-white xl:fs-19"
        />
        <h2 data-reveal="up" className="mt-18 [--delay:100ms] font-heading fs-36 leading-40 font-extrabold tracking-[-0.03em] text-white sm:fs-56 sm:leading-58 xl:mt-22 xl:fs-93 xl:leading-82">
          <Highlight text={cta.title} highlight={cta.titleHighlight} highlightClass="text-brand" />
        </h2>
        <p data-reveal="up" className="mx-auto mt-16 max-w-720 [--delay:200ms] font-body fs-16 leading-26 text-white xl:mt-32 xl:max-w-none xl:fs-24 xl:leading-35 xl:whitespace-pre-line">
          {cta.description}
        </p>
        <Link
          href={cta.button.href}
          data-reveal="zoom"
          className="group mt-28 inline-flex h-54 [--delay:300ms] items-center justify-center gap-14 border border-brand bg-brand px-30 font-heading fs-16 font-bold tracking-[0.07em] text-white transition-colors hover:border-white hover:bg-white hover:text-brand xl:mt-31 xl:h-72 xl:w-269 xl:gap-20 xl:px-0 xl:fs-21"
        >
          {cta.button.label}
          <Icon name="arrow-right" className="size-18 transition-transform group-hover:translate-x-4 xl:size-24" strokeWidth={2.4} />
        </Link>
      </div>
    </section>
  );
}
