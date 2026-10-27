import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site as data, pageTitle } from "@/data";
import ServiceSidebar from "@/components/ServiceSidebar";
import ServiceOverview from "@/components/ServiceOverview";
import ServiceBenefits from "@/components/ServiceBenefits";

const { pages, services } = data;

// One common detail page for every service: all service links point here and it shows the first service.
// The banner and breadcrumb carry the common page title from site.json, not the service title.
const service = services.items[0];
const { title } = pages.serviceDetail;

export const metadata: Metadata = { title: pageTitle(title) };

export default function ServiceDetailPage() {
  return (
    <>
      <PageBanner title={title} crumbs={[{ label: pages.services.title, href: "/services" }, { label: title }]} />
      <section data-white-section className="bg-white px-20 py-64 sm:px-40 sm:py-80 lg:px-48 xl:px-88 xl:py-120 [[data-white-section]+&]:pt-0!">
        <div className="flex flex-col-reverse gap-48 lg:flex-row lg:items-start lg:gap-40 xl:gap-52">
          <ServiceSidebar active={service} />
          <div className="min-w-0 flex-1">
            <ServiceOverview service={service} />
            <ServiceBenefits benefits={service.benefits} />
          </div>
        </div>
      </section>
    </>
  );
}
