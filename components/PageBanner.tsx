import Image from "next/image";
import Link from "next/link";
import { site as data } from "@/data";

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
    <section className="relative flex h-240 items-center overflow-hidden bg-deep sm:h-320 lg:h-400 xl:h-498">
      <Image
        src={data.pageBanner.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,42,51,0.35)_0%,rgba(3,42,51,0.12)_45%,rgba(3,42,51,0)_70%)]" />
      <div className="relative w-full px-20 pt-6 sm:px-40 lg:px-80 xl:px-156 xl:pt-30">
        <h1 className="font-jakarta fs-38 leading-46 font-bold tracking-[-0.02em] text-white sm:fs-52 sm:leading-62 lg:fs-68 lg:leading-80 xl:fs-94 xl:leading-108">
          {title}
        </h1>
        <nav
          aria-label="Breadcrumb"
          className="mt-8 flex flex-wrap items-center gap-12 font-jakarta fs-16 font-bold text-white sm:fs-18 xl:mt-10 xl:gap-22 xl:fs-23 xl:tracking-[0.06em]"
        >
          <Link href="/" className="transition-colors hover:text-ember">
            {data.pageBanner.homeLabel}
          </Link>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <span key={index} className="flex items-center gap-12 xl:gap-22">
                <span className="h-2 w-16 bg-[#e0353b] xl:h-3 xl:w-22" />
                {item.href && !isLast ? (
                  <Link href={item.href} className="transition-colors hover:text-ember">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{item.label}</span>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
