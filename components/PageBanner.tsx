import Image from "next/image";
import Link from "next/link";
import { label, site as data } from "@/data";

export interface Crumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  crumbs?: Crumb[];
}

export default function PageBanner({ title, crumbs }: PageBannerProps) {
  const items = crumbs && crumbs.length > 0 ? crumbs : [{ label: title }];

  return (
    <section className="relative flex h-200 items-center overflow-hidden bg-deep sm:h-260 lg:h-320 xl:h-400">
      <Image
        src={data.pageBanner.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center motion-safe:animate-kenburns"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-deep)_35%,transparent)_0%,color-mix(in_srgb,var(--color-deep)_12%,transparent)_45%,transparent_70%)]" />
      <div className="relative w-full px-20 pt-6 sm:px-40 lg:px-80 xl:px-156 xl:pt-30">
        <h1 className="motion-safe:animate-intro-up font-heading fs-24 leading-30 font-bold tracking-[-0.02em] text-white sm:fs-52 sm:leading-62 lg:fs-68 lg:leading-80 xl:fs-94 xl:leading-108">
          {title}
        </h1>
        <nav
          aria-label={label("breadcrumb")}
          className="mt-8 flex flex-nowrap items-center motion-safe:animate-intro-up motion-safe:[animation-delay:200ms] gap-8 whitespace-nowrap font-heading fs-12 font-bold text-white sm:gap-12 sm:fs-18 xl:mt-10 xl:gap-22 xl:fs-23 xl:tracking-[0.06em]"
        >
          <Link href="/" className="transition-colors hover:text-brand">
            {data.pageBanner.homeLabel}
          </Link>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <span key={index} className={`flex items-center gap-8 sm:gap-12 xl:gap-22 ${isLast ? "min-w-0" : "shrink-0"}`}>
                <span className="h-2 w-12 shrink-0 bg-brand sm:w-16 xl:h-3 xl:w-22" />
                {item.href && !isLast ? (
                  <Link href={item.href} className="transition-colors hover:text-brand">
                    {item.label}
                  </Link>
                ) : (
                  <span className="truncate text-white/70">{item.label}</span>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
