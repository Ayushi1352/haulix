import { BlogCard } from "@/components/sections/BlogCard";
import { BlogsHeading } from "@/components/sections/BlogsHeading";
import { Paginated } from "@/components/ui/Pagination";
import type { BlogsData, GlobalUIData } from "@/types/templates.types";

export const BlogGrid = ({ data: blog, ui }: { data?: BlogsData; ui: GlobalUIData }) => {
  if (!blog) return null;
  const { posts } = blog;

  return (
    <section data-white-section className="py-64 sm:py-80 xl:py-120 bg-[var(--color-white)] [[data-white-section]+&]:!pt-0">
      <BlogsHeading data={blog} />
      <Paginated as="div" perPage={blog.perPage} ui={ui} className="mt-32 grid gap-24 px-20 sm:px-40 md:grid-cols-2 lg:px-64 xl:mt-43 xl:grid-cols-4 xl:gap-x-27 xl:gap-y-45 xl:pr-96 xl:pl-118">
        {posts.map((post, index) => (
          <BlogCard key={`${post.title}-${index}`} post={post} readMore={blog.readMore} months={ui.months} />
        ))}
      </Paginated>
    </section>
  );
};
