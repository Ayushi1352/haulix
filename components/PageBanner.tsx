import Image from "next/image";
import Link from "next/link";
import { introHidden, kenburnsStart } from "@/components/motion";
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
        data-intro="kenburns"
        className={`object-cover object-center ${kenburnsStart}`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-deep)_35%,transparent)_0%,color-mix(in_srgb,var(--color-deep)_12%,transparent)_45%,transparent_70%)]" />
      <div className="relative w-full px-20 pt-6 sm:px-40 lg:px-80 xl:px-156 xl:pt-30">
        <h1 data-intro="up" className={`font-heading text-[calc(24*var(--spacing))] leading-30 font-bold tracking-[-0.02em] text-white sm:text-[calc(52*var(--spacing))] sm:leading-62 lg:text-[calc(68*var(--spacing))] lg:leading-80 xl:text-[calc(94*var(--spacing))] xl:leading-108 ${introHidden}`}>
          {title}
        </h1>
        <nav
          aria-label={label("breadcrumb")}
          data-intro="up"
          data-intro-delay="200"
          className={`mt-8 flex flex-nowrap items-center gap-8 whitespace-nowrap font-heading text-[calc(12*var(--spacing))] font-bold text-white sm:gap-12 sm:text-[calc(18*var(--spacing))] xl:mt-10 xl:gap-22 xl:text-[calc(23*var(--spacing))] xl:tracking-[0.06em] ${introHidden}`}
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
