import rawData from "@/data/templates.json";
import type { LogisticsTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutUs } from "@/components/sections/AboutUs";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Cta } from "@/components/sections/Cta";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blogs } from "@/components/sections/Blogs";

const templateData: LogisticsTemplateData = rawData;
const sectionData = templateData.categories.Logistics.sections;
const commonData = templateData.common;

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.LogisticsHero1} />
      <AboutUs data={sectionData.AboutUs?.variants?.LogisticsAboutUs1} company={commonData.company} />
      <Stats data={sectionData.Stats?.variants?.LogisticsStats1} />
      <Services data={sectionData.Services?.variants?.LogisticsServices1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.LogisticsWhyChooseUs1} />
      <Cta data={sectionData.Cta?.variants?.LogisticsCta1} />
      <Testimonials data={sectionData.Testimonials?.variants?.LogisticsTestimonials1} ui={commonData.globalUI} />
      <Blogs data={sectionData.Blogs?.variants?.LogisticsBlogs1} ui={commonData.globalUI} />
    </main>
  );
}
