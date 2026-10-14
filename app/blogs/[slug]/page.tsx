import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { site as data, pageTitle } from "@/data";
import BlogArticle from "@/components/BlogArticle";
import BlogSidebar from "@/components/BlogSidebar";

const { pages, blog } = data;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.posts.find((item) => item.slug === slug);
  return {
    title: pageTitle(
      post ? post.title.replace(/\n/g, " ") : pages.blogDetail.title,
    ),
  };
}

export function generateStaticParams() {
  return blog.posts.map((post) => ({ slug: post.slug }));
}

// Breadcrumb follows the URL: Home — Blogs — <post title>.
const blogsCrumb = { label: pages.blogs.title, href: "/blogs" };

async function BlogContent({ params }: Params) {
  const { slug } = await params;
  const post = blog.posts.find((item) => item.slug === slug);
  if (!post) notFound();
  const title = post.title.replace(/\n/g, " ");

  return (
    <>
      <PageBanner title={title} crumbs={[blogsCrumb, { label: title }]} />
      <section className="section-y bg-white px-20 sm:px-40 lg:px-48 xl:pr-84 xl:pl-94">
        <div className="flex flex-col gap-48 lg:flex-row lg:items-start lg:gap-40 xl:gap-54">
          <BlogArticle post={post} />
          <BlogSidebar />
        </div>
      </section>
    </>
  );
}

export default function BlogDetailPage({ params }: Params) {
  return (
    <Suspense
      fallback={
        <>
          <PageBanner title={pages.blogDetail.title} crumbs={[blogsCrumb]} />
          <div className="min-h-600 bg-white" />
        </>
      }
    >
      <BlogContent params={params} />
    </Suspense>
  );
}
