import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { LogisticsTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

const templateData: LogisticsTemplateData = rawData;
const sectionData = templateData.categories.Logistics.sections;
const commonData = templateData.common;
const services = sectionData.Services?.variants?.LogisticsServices1?.items ?? [];
// One common detail page for every service: all service links point here and it shows the first service.
// The banner and breadcrumb carry the common page title from templates.json, not the service title.
const service = services[0];

export const metadata: Metadata = { ...commonData.serviceDetailBreadcrumb?.seo };

export default function ServiceDetailsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.serviceDetailBreadcrumb} ui={commonData.globalUI} />
      <ServiceDetail data={sectionData.ServiceDetail?.variants?.LogisticsServiceDetail1} service={service} services={services} company={commonData.company} />
    </main>
  );
}
