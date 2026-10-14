import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import About from "@/components/About";
import Stats from "@/components/Stats";
import WhyChoose from "@/components/WhyChoose";
import Cta from "@/components/Cta";
import Testimonials from "@/components/Testimonials";
import { site as data, pageTitle } from "@/data";

const { title } = data.pages.aboutUs;

export const metadata: Metadata = { title: pageTitle(title) };

export default function AboutUsPage() {
  return (
    <>
      <PageBanner title={title} />
      <About detailed />
      <Stats />
      <WhyChoose />
      <Cta />
      <Testimonials />
    </>
  );
}
