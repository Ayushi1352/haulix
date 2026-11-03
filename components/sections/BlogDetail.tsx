import type { BlogDetailData, BlogPost } from "@/types/templates.types";
import { BlogArticle } from "@/components/sections/BlogArticle";
import { BlogSidebar } from "@/components/sections/BlogSidebar";

/** One blog post with the latest posts and the advice box beside it. */
export const BlogDetail = ({ data, post, posts, months }: { data?: BlogDetailData; post?: BlogPost; posts: BlogPost[]; months: string[] }) => {
  if (!data || !post) return null;
  return (
    <section data-white-section className="bg-[var(--color-white)] px-20 py-64 sm:px-40 sm:py-80 lg:px-48 xl:pr-84 xl:pl-94 xl:py-120 [[data-white-section]+&]:!pt-0">
      <div className="flex flex-col gap-48 lg:flex-row lg:items-start lg:gap-40 xl:gap-54">
        <BlogArticle post={post} data={data} months={months} />
        <BlogSidebar data={data} posts={posts} months={months} />
      </div>
    </section>
  );
};
