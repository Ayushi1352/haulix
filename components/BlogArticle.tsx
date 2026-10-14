import Image from "next/image";
import Icon from "@/components/Icon";
import { site as data, formatDate, type BlogPost } from "@/data";

const paragraph = "font-heading fs-16 leading-28 text-steel xl:fs-26 xl:leading-41 xl:tracking-[0.012em]";

export default function BlogArticle({ post }: { post: BlogPost }) {
  const title = post.title.replace(/\n/g, " ");

  return (
    <article className="min-w-0 flex-1">
      <div data-reveal="zoom" className="relative h-220 overflow-hidden rd-4 sm:h-360 xl:h-540">
        <Image src={post.cover} alt={title} fill priority sizes="(min-width: 1024px) 61vw, 100vw" className="object-cover" />
      </div>

      <h2 className="sr-only">{title}</h2>
      <ul data-reveal="up" className="mt-24 flex flex-wrap items-center gap-x-28 gap-y-10 border-b border-line pb-20 font-body fs-15 text-slate xl:mt-45 xl:gap-x-52 xl:pb-28 xl:fs-24">
        <li className="flex items-center gap-10 xl:gap-14">
          <Icon name="user" className="size-20 text-brand xl:size-30" />
          {post.author}
        </li>
        <li className="flex items-center gap-10 xl:gap-14">
          <Icon name="calendar" className="size-20 text-brand xl:size-30" />
          {formatDate(post.date, "long")}
        </li>
        <li className="flex items-center gap-10 xl:gap-14">
          <Icon name="message" className="size-20 text-brand xl:size-30" />
          {String(post.comments).padStart(2, "0")} {data.blog.detail.commentsLabel}
        </li>
      </ul>

      <div data-reveal="up" className="mt-24 flex flex-col gap-18 xl:mt-38 xl:gap-28">
        {post.intro.map((text, index) => (
          <p key={index} className={paragraph}>
            {text}
          </p>
        ))}
      </div>

      <blockquote data-reveal="left" className="mt-28 border-l-6 border-brand bg-cloud px-24 py-24 xl:mt-38 xl:border-l-9 xl:px-46 xl:pt-38 xl:pb-40">
        <Icon name="quote" className="h-36 w-44 text-brand xl:h-58 xl:w-66" />
        <p className="mt-10 font-heading fs-17 leading-28 font-extrabold italic text-graphite xl:mt-12 xl:fs-27 xl:leading-45 xl:whitespace-pre-line">
          “{post.quote.text}”
        </p>
        <footer className="mt-12 font-heading fs-16 font-bold text-ink xl:mt-18 xl:fs-25">— {post.quote.author}</footer>
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
          <div key={src} className="relative h-90 overflow-hidden rd-2 sm:h-170 xl:h-254">
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
}
