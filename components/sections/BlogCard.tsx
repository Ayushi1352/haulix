import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { BlogPost } from "@/types/templates.types";
import { formatDate } from "@/components/ui/text";

export const BlogCard = ({ post, readMore, months }: { post: BlogPost; readMore: string; months: string[] }) => {
  const { url: href } = post;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[0.375rem] bg-[var(--color-white)] shadow-[0_6px_26px_var(--color-shadow-ink-8)] transition-[transform,box-shadow] duration-300 hover:-translate-y-6 hover:shadow-[0_20px_44px_var(--color-shadow-ink-14)] xl:h-564">
      <Link href={href} className="relative block h-210 shrink-0 overflow-hidden xl:h-227" tabIndex={-1} aria-hidden="true">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 21vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col px-22 pt-20 pb-24 xl:pr-14 xl:pl-31 xl:pt-18 xl:pb-30">
        <p className="flex items-center font-body text-[0.875rem] text-muted xl:text-[1.125rem]">
          <Icon name="LuCalendar" className="mr-8 size-16 text-brand transition-[transform] duration-300 group-hover:-rotate-12 group-hover:scale-125 xl:mr-10 xl:size-19" />
          {formatDate(post.date, months)}
          <span className="mx-18 h-18 w-2 bg-line-strong xl:mx-30 xl:h-24" />
          <Icon name="LuMessageSquare" className="mr-8 size-16 text-brand transition-[transform] duration-300 group-hover:-rotate-12 group-hover:scale-125 xl:mr-10 xl:size-19" />
          <span className="font-semibold text-brand">{String(post.comments).padStart(2, "0")}</span>
        </p>
        <h3 className="mt-14 font-heading text-[1.1875rem] leading-26 font-bold tracking-[-0.01em] text-ink xl:mt-18 xl:text-[1.625rem] xl:leading-34">
          <Link href={href} className="transition-colors hover:text-brand xl:whitespace-pre-line">
            {post.title}
          </Link>
        </h3>
        <p className="mt-12 font-heading text-[0.9375rem] leading-24 font-medium text-muted xl:mt-13 xl:text-[1.375rem] xl:leading-29 xl:tracking-[-0.005em] xl:whitespace-pre-line">
          {post.excerpt}
        </p>
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-12 pt-16 font-heading text-[1.0625rem] font-bold text-brand transition-colors hover:text-ink xl:gap-16 xl:pt-20 xl:text-[1.4375rem]"
        >
          {readMore}
          <Icon name="LuArrowRight" className="size-18 transition-transform group-hover:translate-x-4 xl:size-24" strokeWidth={2.4} />
        </Link>
      </div>
    </article>
  );
};
