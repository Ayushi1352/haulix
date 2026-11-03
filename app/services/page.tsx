import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { LogisticsTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Cta } from "@/components/sections/Cta";

const templateData: LogisticsTemplateData = rawData;
const sectionData = templateData.categories.Logistics.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.servicesBreadcrumb?.seo };

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.servicesBreadcrumb} ui={commonData.globalUI} />
      <ServiceGrid data={sectionData.Services?.variants?.LogisticsServices1} ui={commonData.globalUI} />
      <Cta data={sectionData.Cta?.variants?.LogisticsCta1} />
    </main>
  );
}
