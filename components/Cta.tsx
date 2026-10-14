import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { cta } = data;

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-deep">
      <Image src={cta.background} alt="" fill sizes="100vw" className="object-cover object-[62%_center]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,24,30,0.45)_0%,rgba(6,24,30,0.2)_60%,rgba(6,24,30,0.05)_100%)]" />
      <div className="relative px-20 py-72 text-center sm:px-40 sm:py-96 xl:h-694 xl:px-0 xl:pt-118 xl:pb-0">
        <SectionLabel
          text={cta.label}
          lineClass="h-2 w-44 bg-[#c0272d] xl:h-3 xl:w-65"
          className="font-poppins fs-14 tracking-[0.2em] text-white xl:fs-19"
        />
        <h2 className="mt-18 font-jakarta fs-36 leading-40 font-extrabold tracking-[-0.03em] text-white sm:fs-56 sm:leading-58 xl:mt-22 xl:fs-93 xl:leading-82">
          <Highlight text={cta.title} highlight={cta.titleHighlight} highlightClass="text-[#a3202c]" />
        </h2>
        <p className="mx-auto mt-16 max-w-720 font-poppins fs-16 leading-26 text-white xl:mt-32 xl:max-w-none xl:fs-24 xl:leading-35 xl:whitespace-pre-line">
          {cta.description}
        </p>
        <Link
          href={cta.button.href}
          className="mt-28 inline-flex h-54 items-center justify-center gap-14 bg-[#8a1a26] px-30 font-jakarta fs-16 font-bold tracking-[0.07em] text-white transition-colors hover:bg-[#a3202c] xl:mt-31 xl:h-72 xl:w-269 xl:gap-20 xl:px-0 xl:fs-21"
        >
          {cta.button.label}
          <Icon name="arrow-right" className="size-18 xl:size-24" strokeWidth={2.4} />
        </Link>
      </div>
    </section>
  );
}
