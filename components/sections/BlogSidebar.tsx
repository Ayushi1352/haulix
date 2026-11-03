import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Loop } from "@/components/ui/Loop";
import type { BlogDetailData, BlogPost } from "@/types/templates.types";
import { formatDate, latestPosts } from "@/components/ui/text";

export const BlogSidebar = ({ data: detail, posts, months }: { data: BlogDetailData; posts: BlogPost[]; months: string[] }) => {
  // Latest posts by date; title, date and thumbnail come from the post itself.
  const latest = latestPosts(posts, detail.latestCount);

  return (
    <aside className="flex w-full flex-col gap-40 lg:w-380 lg:shrink-0 xl:w-517 xl:gap-74">
      <div data-reveal="right" className="overflow-hidden rounded-[0.25rem] bg-[var(--color-white)] shadow-[0_8px_30px_var(--color-shadow-ink-9)]">
        <h2 className="flex h-64 items-center bg-[var(--color-ink-90)] px-24 font-heading text-[1.3125rem] font-extrabold text-[var(--color-white)] xl:h-81 xl:px-37 xl:text-[1.9375rem]">
          {detail.latestTitle}
        </h2>
        <ul className="px-20 pb-10 xl:pr-26 xl:pl-36 xl:pb-14">
          {latest.map((post) => (
            <li key={post.title} className="border-b border-line last:border-b-0">
              <Link href={post.url} className="group flex items-start gap-16 py-18 xl:gap-30 xl:py-22">
                <span className="relative h-80 w-104 shrink-0 overflow-hidden rounded-[0.25rem] xl:h-128 xl:w-163">
                  <Image
                    src={post.thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 9vw, 120px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span>
                  <span className="block font-heading text-[1rem] leading-22 font-extrabold text-ink transition-colors group-hover:text-brand xl:mt-6 xl:text-[1.5rem] xl:leading-33">
                    {post.title.replace(/\n/g, " ")}
                  </span>
                  <span className="mt-6 block font-heading text-[0.875rem] text-steel xl:mt-16 xl:text-[1.375rem]">{formatDate(post.date, months, "long")}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div data-reveal="right" data-reveal-delay="200" className="relative overflow-hidden rounded-[0.25rem] bg-[linear-gradient(100deg,var(--color-brand-dark)_0%,var(--color-brand)_55%,var(--color-brand-hover)_100%)] px-26 pt-30 pb-34 text-[var(--color-white)] shadow-[0_12px_30px_var(--color-brand-25)] xl:h-345 xl:px-39 xl:pt-41 xl:pb-0">
        {/* Diagonal light stripes */}
        <Loop effect="stripes">
          <span className="pointer-events-none absolute top-0 -right-40 h-full w-150 skew-x-[-32deg] bg-[var(--color-brand-hover-60)] xl:-right-30 xl:w-190" />
        </Loop>
        <Loop effect="stripes" delay={-3000}>
          <span className="pointer-events-none absolute top-0 right-70 h-full w-36 skew-x-[-32deg] bg-[var(--color-brand-hover-50)] xl:right-110 xl:w-48" />
        </Loop>
        <p className="relative font-body text-[0.8125rem] font-semibold tracking-[0.25em] text-[var(--color-white-90)] xl:text-[1.1875rem]">{detail.advice.label}</p>
        <h2 className="relative mt-12 font-heading text-[1.625rem] leading-34 font-extrabold whitespace-pre-line xl:mt-10 xl:text-[2.5rem] xl:leading-57">
          {detail.advice.title}
        </h2>
        <Link
          href={detail.advice.buttonUrl}
          className="group relative mt-22 inline-flex h-58 items-center justify-center gap-16 rounded-[0.25rem] border border-[var(--color-white)] bg-[var(--color-white)] px-28 font-heading text-[1.0625rem] font-extrabold text-brand transition-colors hover:bg-brand hover:text-[var(--color-white)] xl:mt-22 xl:h-92 xl:w-327 xl:gap-26 xl:px-0 xl:text-[1.5625rem]"
        >
          {detail.advice.buttonText}
          <Icon name="LuArrowRight" className="size-22 transition-transform group-hover:translate-x-4 xl:size-32" strokeWidth={2.2} />
        </Link>
      </div>
    </aside>
  );
};
