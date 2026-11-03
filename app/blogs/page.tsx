import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { LogisticsTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogGrid } from "@/components/sections/BlogGrid";

const templateData: LogisticsTemplateData = rawData;
const sectionData = templateData.categories.Logistics.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.blogsBreadcrumb?.seo };

export default function BlogsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogsBreadcrumb} ui={commonData.globalUI} />
      <BlogGrid data={sectionData.Blogs?.variants?.LogisticsBlogs1} ui={commonData.globalUI} />
    </main>
  );
}
