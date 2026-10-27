import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site as data, pageTitle } from "@/data";
import BlogArticle from "@/components/BlogArticle";
import BlogSidebar from "@/components/BlogSidebar";

const { pages, blog } = data;

// One common detail page for every blog post: all blog links point here and it shows the first post.
// The banner and breadcrumb carry the common page title from site.json, not the post title.
const post = blog.posts[0];
const { title } = pages.blogDetail;

export const metadata: Metadata = { title: pageTitle(title) };

export default function BlogDetailPage() {
  return (
    <>
      <PageBanner title={title} crumbs={[{ label: pages.blogs.title, href: "/blogs" }, { label: title }]} />
      <section data-white-section className="bg-white px-20 py-64 sm:px-40 sm:py-80 lg:px-48 xl:pr-84 xl:pl-94 xl:py-120 [[data-white-section]+&]:pt-0!">
        <div className="flex flex-col gap-48 lg:flex-row lg:items-start lg:gap-40 xl:gap-54">
          <BlogArticle post={post} />
          <BlogSidebar />
        </div>
      </section>
    </>
  );
}
