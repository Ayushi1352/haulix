import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { LogisticsTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Contact } from "@/components/sections/Contact";

const templateData: LogisticsTemplateData = rawData;
const sectionData = templateData.categories.Logistics.sections;
const commonData = templateData.common;
const services = (sectionData.Services?.variants?.LogisticsServices1?.items ?? []).map((item) => item.title);

export const metadata: Metadata = { ...commonData.contactBreadcrumb?.seo };

export default function ContactUsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.contactBreadcrumb} ui={commonData.globalUI} />
      <Contact
        data={sectionData.Contact?.variants?.LogisticsContact1}
        company={commonData.company}
        formOptions={commonData.formOptions}
        services={services}
        ui={commonData.globalUI}
      />
    </main>
  );
}
