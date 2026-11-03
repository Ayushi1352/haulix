import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { LogisticsTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogDetail } from "@/components/sections/BlogDetail";

const templateData: LogisticsTemplateData = rawData;
const sectionData = templateData.categories.Logistics.sections;
const commonData = templateData.common;
const posts = sectionData.Blogs?.variants?.LogisticsBlogs1?.posts ?? [];
// One common detail page for every blog post: all blog links point here and it shows the first post.
// The banner and breadcrumb carry the common page title from templates.json, not the post title.
const post = posts[0];

export const metadata: Metadata = { ...commonData.blogDetailBreadcrumb?.seo };

export default function BlogDetailsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogDetailBreadcrumb} ui={commonData.globalUI} />
      <BlogDetail data={sectionData.BlogDetail?.variants?.LogisticsBlogDetail1} post={post} posts={posts} months={commonData.globalUI.months} />
    </main>
  );
}
