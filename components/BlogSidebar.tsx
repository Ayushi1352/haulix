import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { site as data } from "@/data";

const { detail } = data.blog;

export default function BlogSidebar() {
  return (
    <aside className="flex w-full flex-col gap-40 lg:w-380 lg:shrink-0 xl:w-517 xl:gap-74">
      <div className="overflow-hidden rd-4 bg-white shadow-[0_8px_30px_rgba(10,40,50,0.09)]">
        <h2 className="flex h-64 items-center bg-[#1a3a46] px-24 font-jakarta fs-21 font-extrabold text-white xl:h-86 xl:px-37 xl:fs-31">
          {detail.latestTitle}
        </h2>
        <ul className="px-20 pb-10 xl:px-36 xl:pb-14">
          {detail.latestPosts.map((post) => (
            <li key={post.title} className="border-b border-[#e8ebee] last:border-b-0">
              <Link href={post.href} className="group flex items-center gap-16 py-18 xl:gap-30 xl:py-27">
                <span className="relative h-80 w-104 shrink-0 overflow-hidden rd-4 xl:h-128 xl:w-163">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 9vw, 120px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span>
                  <span className="block font-jakarta fs-16 leading-22 font-bold text-ink transition-colors group-hover:text-crimson xl:fs-23 xl:leading-31 xl:whitespace-pre-line">
                    {post.title}
                  </span>
                  <span className="mt-6 block font-poppins fs-14 text-[#6b7680] xl:mt-12 xl:fs-21">{post.date}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative overflow-hidden rd-4 bg-[linear-gradient(100deg,#9c0d15_0%,#b3121a_55%,#c4161c_100%)] px-26 pt-30 pb-34 text-white shadow-[0_12px_30px_rgba(160,14,22,0.25)] xl:h-372 xl:px-39 xl:pt-43 xl:pb-0">
        {/* Diagonal light stripes */}
        <span className="pointer-events-none absolute top-0 -right-40 h-full w-150 skew-x-[-32deg] bg-white/6 xl:-right-30 xl:w-190" />
        <span className="pointer-events-none absolute top-0 right-70 h-full w-36 skew-x-[-32deg] bg-white/5 xl:right-110 xl:w-48" />
        <p className="relative font-poppins fs-13 font-semibold tracking-[0.25em] text-white/90 xl:fs-17">{detail.advice.label}</p>
        <h2 className="relative mt-12 font-jakarta fs-26 leading-34 font-extrabold whitespace-pre-line xl:mt-18 xl:fs-38 xl:leading-50">
          {detail.advice.title}
        </h2>
        <Link
          href={detail.advice.button.href}
          className="relative mt-22 inline-flex h-58 items-center justify-center gap-16 rd-4 bg-white px-28 font-jakarta fs-17 font-extrabold text-[#c0141c] transition-colors hover:bg-[#fbe9ea] xl:mt-26 xl:h-93 xl:w-327 xl:gap-26 xl:px-0 xl:fs-25"
        >
          {detail.advice.button.label}
          <Icon name="arrow-right" className="size-22 xl:size-32" strokeWidth={2.2} />
        </Link>
      </div>
    </aside>
  );
}
