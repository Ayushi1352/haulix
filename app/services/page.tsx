import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Cta from "@/components/Cta";
import { site as data, pageTitle } from "@/data";
import ServiceGrid from "@/components/ServiceGrid";

const { title } = data.pages.services;

export const metadata: Metadata = { title: pageTitle(title) };

export default function ServicesPage() {
  return (
    <>
      <PageBanner title={title} />
      <ServiceGrid />
      <Cta />
    </>
  );
}
