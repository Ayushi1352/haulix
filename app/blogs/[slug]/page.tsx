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
  return { title: pageTitle(post ? post.title.replace(/\n/g, " ") : pages.blogDetail.title) };
}

export function generateStaticParams() {
  return blog.posts.map((post) => ({ slug: post.slug }));
}

async function BlogContent({ params }: Params) {
  const { slug } = await params;
  const post = blog.posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <section className="bg-white px-20 pt-48 pb-72 sm:px-40 lg:px-48 xl:pr-84 xl:pl-94 xl:pt-65 xl:pb-132">
      <div className="flex flex-col gap-48 lg:flex-row lg:items-start lg:gap-40 xl:gap-59">
        <BlogArticle post={post} />
        <BlogSidebar />
      </div>
    </section>
  );
}

export default function BlogDetailPage({ params }: Params) {
  return (
    <>
      <PageBanner title={pages.blogDetail.title} />
      <Suspense fallback={<div className="min-h-600 bg-white" />}>
        <BlogContent params={params} />
      </Suspense>
    </>
  );
}
