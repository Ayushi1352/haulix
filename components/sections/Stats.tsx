import Image from "next/image";
import { CountUp } from "@/components/ui/CountUp";
import { Icon } from "@/components/ui/Icon";
import { Loop, PulseRing } from "@/components/ui/Loop";
import type { StatsData } from "@/types/templates.types";

export const Stats = ({ data: stats }: { data?: StatsData }) => {
  if (!stats) return null;
  return (
    <section className="relative overflow-hidden bg-deep">
      <Loop effect="slow-zoom">
        <Image src={stats.background} alt="" fill sizes="100vw" className="object-cover" />
      </Loop>
      <div className="absolute inset-0 bg-[var(--color-deep-30)]" />
      <ul data-reveal-stagger className="relative grid grid-cols-2 gap-y-40 py-64 sm:py-80 xl:py-120 px-16 sm:px-40 lg:grid-cols-4 lg:px-48 xl:pr-49 xl:pl-87">
        {stats.items.map((item, index) => (
          <li key={item.label} className="group relative flex flex-col items-center text-center text-[var(--color-white)]">
            {index > 0 && (
              <span className="absolute top-[30%] left-0 hidden h-[62%] w-2 bg-[var(--color-white-55)] lg:block xl:top-33 xl:h-172" />
            )}
            <span className="relative flex size-76 items-center justify-center rounded-full bg-brand transition-[transform] duration-300 group-hover:scale-110 shadow-[0_8px_24px_var(--color-shadow-black-25)] sm:size-96 xl:size-124">
              <PulseRing />
              <Icon name={item.icon} className="size-38 sm:size-48 xl:size-72" strokeWidth={1.5} />
            </span>
            <p className="mt-12 font-heading text-[2.5rem] leading-44 font-extrabold tracking-[-0.02em] sm:text-[3.5rem] sm:leading-60 xl:mt-18 xl:text-[5.125rem] xl:leading-86">
              <CountUp value={item.value} />
            </p>
            <p className="mt-4 font-body text-[0.9375rem] font-medium sm:text-[1.25rem] xl:mt-10 xl:text-[1.75rem] xl:leading-36">{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
