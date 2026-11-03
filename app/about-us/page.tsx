import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { LogisticsTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AboutUs } from "@/components/sections/AboutUs";
import { Stats } from "@/components/sections/Stats";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Cta } from "@/components/sections/Cta";
import { Testimonials } from "@/components/sections/Testimonials";

const templateData: LogisticsTemplateData = rawData;
const sectionData = templateData.categories.Logistics.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.aboutBreadcrumb?.seo };

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      <AboutUs data={sectionData.AboutUs?.variants?.LogisticsAboutUs1} company={commonData.company} detailed />
      <Stats data={sectionData.Stats?.variants?.LogisticsStats1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.LogisticsWhyChooseUs1} />
      <Cta data={sectionData.Cta?.variants?.LogisticsCta1} />
      <Testimonials data={sectionData.Testimonials?.variants?.LogisticsTestimonials1} ui={commonData.globalUI} />
    </main>
  );
}
