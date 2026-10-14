import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site as data, pageTitle } from "@/data";
import BlogGrid from "@/components/BlogGrid";

const { title } = data.pages.blogs;

export const metadata: Metadata = { title: pageTitle(title) };

export default function BlogsPage() {
  return (
    <>
      <PageBanner title={title} />
      <BlogGrid />
    </>
  );
}
