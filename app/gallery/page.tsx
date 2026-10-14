import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site as data, pageTitle } from "@/data";
import GalleryGrid from "@/components/GalleryGrid";

const { title } = data.pages.gallery;

export const metadata: Metadata = { title: pageTitle(title) };

export default function GalleryPage() {
  return (
    <>
      <PageBanner title={title} />
      <GalleryGrid />
    </>
  );
}
