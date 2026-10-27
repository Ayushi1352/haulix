import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Loop from "@/components/Loop";
import { site as data, formatDate, latestPosts } from "@/data";

const { detail } = data.blog;

// Latest posts by date; title, date and thumbnail come from the post itself.
const latest = latestPosts(detail.latestCount);

export default function BlogSidebar() {
  return (
    <aside className="flex w-full flex-col gap-40 lg:w-380 lg:shrink-0 xl:w-517 xl:gap-74">
      <div data-reveal="right" className="overflow-hidden rounded-[calc(4*var(--spacing))] bg-white shadow-[0_8px_30px_rgba(10,40,50,0.09)]">
        <h2 className="flex h-64 items-center bg-ink/90 px-24 font-heading text-[calc(21*var(--spacing))] font-extrabold text-white xl:h-81 xl:px-37 xl:text-[calc(31*var(--spacing))]">
          {detail.latestTitle}
        </h2>
        <ul className="px-20 pb-10 xl:pr-26 xl:pl-36 xl:pb-14">
          {latest.map((post) => (
            <li key={post.title} className="border-b border-line last:border-b-0">
              <Link href={post.href} className="group flex items-start gap-16 py-18 xl:gap-30 xl:py-22">
                <span className="relative h-80 w-104 shrink-0 overflow-hidden rounded-[calc(4*var(--spacing))] xl:h-128 xl:w-163">
                  <Image
                    src={post.thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 9vw, 120px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span>
                  <span className="block font-heading text-[calc(16*var(--spacing))] leading-22 font-extrabold text-ink transition-colors group-hover:text-brand xl:mt-6 xl:text-[calc(24*var(--spacing))] xl:leading-33">
                    {post.title.replace(/\n/g, " ")}
                  </span>
                  <span className="mt-6 block font-heading text-[calc(14*var(--spacing))] text-steel xl:mt-16 xl:text-[calc(22*var(--spacing))]">{formatDate(post.date, "long")}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div data-reveal="right" data-reveal-delay="200" className="relative overflow-hidden rounded-[calc(4*var(--spacing))] bg-[linear-gradient(100deg,color-mix(in_srgb,var(--color-brand)_80%,black)_0%,var(--color-brand)_55%,var(--color-brand-hover)_100%)] px-26 pt-30 pb-34 text-white shadow-[0_12px_30px_color-mix(in_srgb,var(--color-brand)_25%,transparent)] xl:h-345 xl:px-39 xl:pt-41 xl:pb-0">
        {/* Diagonal light stripes */}
        <Loop effect="stripes">
          <span className="pointer-events-none absolute top-0 -right-40 h-full w-150 skew-x-[-32deg] bg-brand-hover/60 xl:-right-30 xl:w-190" />
        </Loop>
        <Loop effect="stripes" delay={-3000}>
          <span className="pointer-events-none absolute top-0 right-70 h-full w-36 skew-x-[-32deg] bg-brand-hover/50 xl:right-110 xl:w-48" />
        </Loop>
        <p className="relative font-body text-[calc(13*var(--spacing))] font-semibold tracking-[0.25em] text-white/90 xl:text-[calc(19*var(--spacing))]">{detail.advice.label}</p>
        <h2 className="relative mt-12 font-heading text-[calc(26*var(--spacing))] leading-34 font-extrabold whitespace-pre-line xl:mt-10 xl:text-[calc(40*var(--spacing))] xl:leading-57">
          {detail.advice.title}
        </h2>
        <Link
          href={detail.advice.button.href}
          className="group relative mt-22 inline-flex h-58 items-center justify-center gap-16 rounded-[calc(4*var(--spacing))] border border-white bg-white px-28 font-heading text-[calc(17*var(--spacing))] font-extrabold text-brand transition-colors hover:bg-brand hover:text-white xl:mt-22 xl:h-92 xl:w-327 xl:gap-26 xl:px-0 xl:text-[calc(25*var(--spacing))]"
        >
          {detail.advice.button.label}
          <Icon name="arrow-right" className="size-22 transition-transform group-hover:translate-x-4 xl:size-32" strokeWidth={2.2} />
        </Link>
      </div>
    </aside>
  );
}
