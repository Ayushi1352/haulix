import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { site as data, formatDate, latestPosts } from "@/data";

const { detail } = data.blog;

// Latest posts are listed by slug; title, date and thumbnail come from the post itself.
const latest = latestPosts(detail.latestCount);

export default function BlogSidebar() {
  return (
    <aside className="flex w-full flex-col gap-40 lg:w-380 lg:shrink-0 xl:w-517 xl:gap-74">
      <div className="overflow-hidden rd-4 bg-white shadow-[0_8px_30px_rgba(10,40,50,0.09)]">
        <h2 className="flex h-64 items-center bg-ink/90 px-24 font-heading fs-21 font-extrabold text-white xl:h-81 xl:px-37 xl:fs-31">
          {detail.latestTitle}
        </h2>
        <ul className="px-20 pb-10 xl:pr-26 xl:pl-36 xl:pb-14">
          {latest.map((post) => (
            <li key={post.slug} className="border-b border-line last:border-b-0">
              <Link href={`/blogs/${post.slug}`} className="group flex items-start gap-16 py-18 xl:gap-30 xl:py-22">
                <span className="relative h-80 w-104 shrink-0 overflow-hidden rd-4 xl:h-128 xl:w-163">
                  <Image
                    src={post.thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 9vw, 120px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span>
                  <span className="block font-heading fs-16 leading-22 font-extrabold text-ink transition-colors group-hover:text-brand xl:mt-6 xl:fs-24 xl:leading-33">
                    {post.title.replace(/\n/g, " ")}
                  </span>
                  <span className="mt-6 block font-heading fs-14 text-steel xl:mt-16 xl:fs-22">{formatDate(post.date, "long")}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative overflow-hidden rd-4 bg-[linear-gradient(100deg,color-mix(in_srgb,var(--color-brand)_80%,black)_0%,var(--color-brand)_55%,var(--color-brand-hover)_100%)] px-26 pt-30 pb-34 text-white shadow-[0_12px_30px_color-mix(in_srgb,var(--color-brand)_25%,transparent)] xl:h-345 xl:px-39 xl:pt-41 xl:pb-0">
        {/* Diagonal light stripes */}
        <span className="pointer-events-none absolute top-0 -right-40 h-full w-150 skew-x-[-32deg] bg-brand-hover/60 xl:-right-30 xl:w-190" />
        <span className="pointer-events-none absolute top-0 right-70 h-full w-36 skew-x-[-32deg] bg-brand-hover/50 xl:right-110 xl:w-48" />
        <p className="relative font-body fs-13 font-semibold tracking-[0.25em] text-white/90 xl:fs-19">{detail.advice.label}</p>
        <h2 className="relative mt-12 font-heading fs-26 leading-34 font-extrabold whitespace-pre-line xl:mt-10 xl:fs-40 xl:leading-57">
          {detail.advice.title}
        </h2>
        <Link
          href={detail.advice.button.href}
          className="relative mt-22 inline-flex h-58 items-center justify-center gap-16 rd-4 border border-white bg-white px-28 font-heading fs-17 font-extrabold text-brand transition-colors hover:bg-brand hover:text-white xl:mt-22 xl:h-92 xl:w-327 xl:gap-26 xl:px-0 xl:fs-25"
        >
          {detail.advice.button.label}
          <Icon name="arrow-right" className="size-22 xl:size-32" strokeWidth={2.2} />
        </Link>
      </div>
    </aside>
  );
}
