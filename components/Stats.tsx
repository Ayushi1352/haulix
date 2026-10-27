import Image from "next/image";
import CountUp from "@/components/CountUp";
import Icon from "@/components/Icon";
import Loop, { PulseRing } from "@/components/Loop";
import { site as data } from "@/data";

const { stats } = data;

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-deep">
      <Loop effect="slow-zoom">
        <Image src={stats.background} alt="" fill sizes="100vw" className="object-cover" />
      </Loop>
      <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--color-deep)_30%,transparent)]" />
      <ul data-reveal-stagger className="relative grid grid-cols-2 gap-y-40 py-64 sm:py-80 xl:py-120 px-16 sm:px-40 lg:grid-cols-4 lg:px-48 xl:pr-49 xl:pl-87">
        {stats.items.map((item, index) => (
          <li key={item.label} className="group relative flex flex-col items-center text-center text-white">
            {index > 0 && (
              <span className="absolute top-[30%] left-0 hidden h-[62%] w-2 bg-white/55 lg:block xl:top-33 xl:h-172" />
            )}
            <span className="relative flex size-76 items-center justify-center rounded-full bg-brand transition-[scale] duration-300 group-hover:scale-110 shadow-[0_8px_24px_rgba(0,0,0,0.25)] sm:size-96 xl:size-124">
              <PulseRing />
              <Icon name={item.icon} className="size-38 sm:size-48 xl:size-72" strokeWidth={1.5} />
            </span>
            <p className="mt-12 font-heading text-[calc(40*var(--spacing))] leading-44 font-extrabold tracking-[-0.02em] sm:text-[calc(56*var(--spacing))] sm:leading-60 xl:mt-18 xl:text-[calc(82*var(--spacing))] xl:leading-86">
              <CountUp value={item.value} />
            </p>
            <p className="mt-4 font-body text-[calc(15*var(--spacing))] font-medium sm:text-[calc(20*var(--spacing))] xl:mt-10 xl:text-[calc(28*var(--spacing))] xl:leading-36">{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
