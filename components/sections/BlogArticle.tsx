import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { BlogDetailData, BlogPost } from "@/types/templates.types";
import { fill, formatDate } from "@/components/ui/text";

const paragraph = "font-heading text-[1rem] leading-28 text-steel xl:text-[1.625rem] xl:leading-41 xl:tracking-[0.012em]";

export const BlogArticle = ({ post, data, months }: { post: BlogPost; data: BlogDetailData; months: string[] }) => {
  const { commentsLabel, quoteFormat, quoteAuthorFormat } = data;
  const title = post.title.replace(/\n/g, " ");

  return (
    <article className="min-w-0 flex-1">
      <div data-reveal="zoom" className="relative h-220 overflow-hidden rounded-[0.25rem] sm:h-360 xl:h-540">
        <Image src={post.cover} alt={title} fill priority sizes="(min-width: 1024px) 61vw, 100vw" className="object-cover" />
      </div>

      <h2 className="sr-only">{title}</h2>
      <ul data-reveal="up" className="mt-24 flex flex-wrap items-center gap-x-28 gap-y-10 border-b border-line pb-20 font-body text-[0.9375rem] text-slate xl:mt-45 xl:gap-x-52 xl:pb-28 xl:text-[1.5rem]">
        <li className="group flex items-center gap-10 xl:gap-14">
          <Icon name="LuUser" className="size-20 text-brand transition-[transform] duration-300 group-hover:-rotate-12 group-hover:scale-125 xl:size-30" />
          {post.author}
        </li>
        <li className="group flex items-center gap-10 xl:gap-14">
          <Icon name="LuCalendar" className="size-20 text-brand transition-[transform] duration-300 group-hover:-rotate-12 group-hover:scale-125 xl:size-30" />
          {formatDate(post.date, months, "long")}
        </li>
        <li className="group flex items-center gap-10 xl:gap-14">
          <Icon name="LuMessageSquare" className="size-20 text-brand transition-[transform] duration-300 group-hover:-rotate-12 group-hover:scale-125 xl:size-30" />
          {String(post.comments).padStart(2, "0")} {commentsLabel}
        </li>
      </ul>

      <div data-reveal="up" className="mt-24 flex flex-col gap-18 xl:mt-38 xl:gap-28">
        {post.intro.map((text, index) => (
          <p key={index} className={paragraph}>
            {text}
          </p>
        ))}
      </div>

      <blockquote data-reveal="left" className="group mt-28 border-l-6 border-brand bg-cloud px-24 py-24 xl:mt-38 xl:border-l-9 xl:px-46 xl:pt-38 xl:pb-40">
        <Icon name="FaQuoteLeft" className="h-36 w-44 origin-bottom-left text-brand transition-[transform] duration-300 group-hover:-rotate-6 group-hover:scale-110 xl:h-58 xl:w-66" />
        <p className="mt-10 font-heading text-[1.0625rem] leading-28 font-extrabold italic text-graphite xl:mt-12 xl:text-[1.6875rem] xl:leading-45 xl:whitespace-pre-line">
          {fill(quoteFormat, { quote: post.quote.text })}
        </p>
        <footer className="mt-12 font-heading text-[1rem] font-bold text-ink xl:mt-18 xl:text-[1.5625rem]">{fill(quoteAuthorFormat, { author: post.quote.author })}</footer>
      </blockquote>

      <div data-reveal="up" className="mt-28 flex flex-col gap-18 xl:mt-40 xl:gap-28">
        {post.body.map((text, index) => (
          <p key={index} className={paragraph}>
            {text}
          </p>
        ))}
      </div>

      <div data-reveal-stagger className="mt-28 grid grid-cols-3 gap-10 sm:gap-20 xl:mt-48 xl:gap-34">
        {post.gallery.map((src) => (
          <div key={src} className="relative h-90 overflow-hidden rounded-[0.125rem] sm:h-170 xl:h-254">
            <Image src={src} alt="" fill sizes="(min-width: 1024px) 20vw, 33vw" className="object-cover transition-transform duration-700 hover:scale-110" />
          </div>
        ))}
      </div>

      <div data-reveal="up" className="mt-28 flex flex-col gap-18 xl:mt-48 xl:gap-28">
        {post.conclusion.map((text, index) => (
          <p key={index} className={paragraph}>
            {text}
          </p>
        ))}
      </div>
    </article>
  );
};
