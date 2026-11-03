import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { LogisticsTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Gallery } from "@/components/sections/Gallery";

const templateData: LogisticsTemplateData = rawData;
const sectionData = templateData.categories.Logistics.sections;
const commonData = templateData.common;
const gallery = sectionData.Gallery?.variants?.LogisticsGallery1;

export const metadata: Metadata = { ...commonData.galleryBreadcrumb?.seo };

export default function GalleryPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.galleryBreadcrumb} ui={commonData.globalUI} />
      {gallery && <Gallery data={gallery} ui={commonData.globalUI} />}
    </main>
  );
}
