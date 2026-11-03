import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { LogisticsTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Quote } from "@/components/sections/Quote";

const templateData: LogisticsTemplateData = rawData;
const sectionData = templateData.categories.Logistics.sections;
const commonData = templateData.common;
const services = (sectionData.Services?.variants?.LogisticsServices1?.items ?? []).map((item) => item.title);

export const metadata: Metadata = { ...commonData.quoteBreadcrumb?.seo };

export default function GetAQuotePage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.quoteBreadcrumb} ui={commonData.globalUI} />
      <Quote
        data={sectionData.Quote?.variants?.LogisticsQuote1}
        company={commonData.company}
        formOptions={commonData.formOptions}
        services={services}
        ui={commonData.globalUI}
      />
    </main>
  );
}
