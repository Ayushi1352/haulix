import { Carousel } from "@/components/ui/Carousel";
import type { BlogsData, GlobalUIData } from "@/types/templates.types";
import { BlogCard } from "@/components/sections/BlogCard";
import { BlogsHeading } from "@/components/sections/BlogsHeading";

// On phones the arrows sit inside the card, centred on its image, so they never cover the text.
const arrow =
  "absolute top-105 z-10 flex size-40 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-white)] text-brand shadow-[0_6px_20px_var(--color-shadow-ink-14)] transition-colors hover:bg-brand hover:text-[var(--color-white)] md:top-1/2 md:size-52 xl:-mt-43 xl:size-68";

export const Blogs = ({ data: blog, ui }: { data?: BlogsData; ui: GlobalUIData }) => {
  if (!blog) return null;
  return (
    <section data-white-section className="py-64 sm:py-80 xl:py-120 bg-[var(--color-white)] [[data-white-section]+&]:!pt-0">
      <BlogsHeading data={blog} />
      <div data-reveal="up" data-reveal-delay="250" className="mx-auto mt-32 px-20 sm:px-40 md:px-84 xl:mt-43 xl:pr-96 xl:pl-118">
        <Carousel
          label={blog.label}
          ui={ui}
          trackClass="[--n:1] md:[--n:2] xl:[--n:4] [--gap:1.5rem] xl:[--gap:1.6875rem]"
          prevClass={`${arrow} left-12 md:-left-64 xl:-left-86`}
          nextClass={`${arrow} right-12 md:-right-64 xl:-right-85`}
          arrowIconClass="size-18 md:size-22 xl:size-28"
        >
          {blog.posts.map((post) => (
            <BlogCard key={post.title} post={post} readMore={blog.readMore} months={ui.months} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
