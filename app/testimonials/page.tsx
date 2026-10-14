import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site as data, pageTitle } from "@/data";
import ReviewGrid from "@/components/ReviewGrid";

const { title } = data.pages.testimonials;

export const metadata: Metadata = { title: pageTitle(title) };

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner title={title} />
      <ReviewGrid />
    </>
  );
}
