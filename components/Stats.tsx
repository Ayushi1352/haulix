import Image from "next/image";
import CountUp from "@/components/CountUp";
import Icon from "@/components/Icon";
import { site as data } from "@/data";

const { stats } = data;

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-deep">
      <Image src={stats.background} alt="" fill sizes="100vw" className="object-cover motion-safe:animate-slow-zoom" />
      <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--color-deep)_30%,transparent)]" />
      <ul data-reveal-stagger className="relative grid grid-cols-2 gap-y-40 section-y px-16 sm:px-40 lg:grid-cols-4 lg:px-48 xl:pr-49 xl:pl-87">
        {stats.items.map((item, index) => (
          <li key={item.label} className="group relative flex flex-col items-center text-center text-white">
            {index > 0 && (
              <span className="absolute top-[30%] left-0 hidden h-[62%] w-2 bg-white/55 lg:block xl:top-33 xl:h-172" />
            )}
            <span className="pulse-ring flex size-76 items-center justify-center rounded-full bg-brand transition-[scale] duration-300 group-hover:scale-110 shadow-[0_8px_24px_rgba(0,0,0,0.25)] sm:size-96 xl:size-124">
              <Icon name={item.icon} className="size-38 sm:size-48 xl:size-72" strokeWidth={1.5} />
            </span>
            <p className="mt-12 font-heading fs-40 leading-44 font-extrabold tracking-[-0.02em] sm:fs-56 sm:leading-60 xl:mt-18 xl:fs-82 xl:leading-86">
              <CountUp value={item.value} />
            </p>
            <p className="mt-4 font-body fs-15 font-medium sm:fs-20 xl:mt-10 xl:fs-28 xl:leading-36">{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
