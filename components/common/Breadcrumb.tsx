import Image from "next/image";
import Link from "next/link";
import type { BreadcrumbData, GlobalUIData } from "@/types/templates.types";
import { introHidden, kenburnsStart } from "@/components/ui/motion";

/** Page banner: the page title over the banner image, with the breadcrumb trail under it. */
export const Breadcrumb = ({ data, ui }: { data?: BreadcrumbData; ui: GlobalUIData }) => {
  if (!data) return null;
  const [home, ...crumbs] = data.paths;

  return (
    <section className="relative flex h-200 items-center overflow-hidden bg-deep sm:h-260 lg:h-320 xl:h-400">
      <Image
        src={ui.breadcrumbImage}
        alt=""
        fill
        priority
        sizes="100vw"
        data-intro="kenburns"
        className={`object-cover object-center ${kenburnsStart}`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-deep-35)_0%,var(--color-deep-12)_45%,transparent_70%)]" />
      <div className="relative w-full px-20 pt-6 sm:px-40 lg:px-80 xl:px-156 xl:pt-30">
        <h1 data-intro="up" className={`font-heading text-[1.5rem] leading-30 font-bold tracking-[-0.02em] text-[var(--color-white)] sm:text-[3.25rem] sm:leading-62 lg:text-[4.25rem] lg:leading-80 xl:text-[5.875rem] xl:leading-108 ${introHidden}`}>
          {data.title}
        </h1>
        <nav
          aria-label={ui.breadcrumb}
          data-intro="up"
          data-intro-delay="200"
          className={`mt-8 flex flex-nowrap items-center gap-8 whitespace-nowrap font-heading text-[0.75rem] font-bold text-[var(--color-white)] sm:gap-12 sm:text-[1.125rem] xl:mt-10 xl:gap-22 xl:text-[1.4375rem] xl:tracking-[0.06em] ${introHidden}`}
        >
          <Link href={home.url} className="transition-colors hover:text-brand">
            {home.label}
          </Link>
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <span key={crumb.id} className={`flex items-center gap-8 sm:gap-12 xl:gap-22 ${isLast ? "min-w-0" : "shrink-0"}`}>
                <span className="h-2 w-12 shrink-0 bg-brand sm:w-16 xl:h-3 xl:w-22" />
                {crumb.url && !isLast ? (
                  <Link href={crumb.url} className="transition-colors hover:text-brand">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="truncate text-[var(--color-white-70)]">{crumb.label}</span>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </section>
  );
};
