import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { LogisticsTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { TestimonialGrid } from "@/components/sections/TestimonialGrid";

const templateData: LogisticsTemplateData = rawData;
const sectionData = templateData.categories.Logistics.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.testimonialsBreadcrumb?.seo };

export default function TestimonialsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.testimonialsBreadcrumb} ui={commonData.globalUI} />
      <TestimonialGrid data={sectionData.Testimonials?.variants?.LogisticsTestimonials1} ui={commonData.globalUI} />
    </main>
  );
}
