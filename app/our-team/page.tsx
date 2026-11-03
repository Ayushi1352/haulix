import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { LogisticsTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Team } from "@/components/sections/Team";

const templateData: LogisticsTemplateData = rawData;
const sectionData = templateData.categories.Logistics.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.teamBreadcrumb?.seo };

export default function OurTeamPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.teamBreadcrumb} ui={commonData.globalUI} />
      <Team data={sectionData.Team?.variants?.LogisticsTeam1} ui={commonData.globalUI} />
    </main>
  );
}
