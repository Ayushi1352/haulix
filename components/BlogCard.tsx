import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { site as data, type BlogPost } from "@/data";

export default function BlogCard({ post }: { post: BlogPost }) {
  const href = `/blogs/${post.slug}`;
  return (
    <article className="group flex h-full flex-col overflow-hidden rd-6 bg-white shadow-[0_6px_26px_rgba(10,40,50,0.08)] xl:h-564">
      <Link href={href} className="relative block h-210 shrink-0 overflow-hidden xl:h-227" tabIndex={-1} aria-hidden="true">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 21vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col px-22 pt-20 pb-24 xl:pr-14 xl:pl-31 xl:pt-18 xl:pb-30">
        <p className="flex items-center font-poppins fs-14 text-[#6f7b83] xl:fs-18">
          <Icon name="calendar" className="mr-8 size-16 text-[#c0272d] xl:mr-10 xl:size-19" />
          {post.date}
          <span className="mx-18 h-18 w-2 bg-[#c9cfd3] xl:mx-30 xl:h-24" />
          <Icon name="message" className="mr-8 size-16 text-[#c0272d] xl:mr-10 xl:size-19" />
          <span className="font-semibold text-[#c0272d]">{post.comments}</span>
        </p>
        <h3 className="mt-14 font-jakarta fs-19 leading-26 font-bold tracking-[-0.01em] text-ink xl:mt-18 xl:fs-26 xl:leading-34">
          <Link href={href} className="transition-colors hover:text-crimson xl:whitespace-pre-line">
            {post.title}
          </Link>
        </h3>
        <p className="mt-12 font-jakarta fs-15 leading-24 font-medium text-muted xl:mt-13 xl:fs-22 xl:leading-29 xl:tracking-[-0.005em] xl:whitespace-pre-line">
          {post.excerpt}
        </p>
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-12 pt-16 font-jakarta fs-17 font-bold text-crimson xl:gap-16 xl:pt-20 xl:fs-23"
        >
          {data.blog.readMore}
          <Icon name="arrow-right" className="size-18 transition-transform group-hover:translate-x-4 xl:size-24" strokeWidth={2.4} />
        </Link>
      </div>
    </article>
  );
}
