import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { site as data, pageTitle } from "@/data";
import ServiceSidebar from "@/components/ServiceSidebar";
import ServiceOverview from "@/components/ServiceOverview";
import ServiceBenefits from "@/components/ServiceBenefits";

const { pages, services } = data;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.items.find((item) => item.slug === slug);
  return { title: pageTitle(service ? service.title : pages.serviceDetail.title) };
}

export function generateStaticParams() {
  return services.items.map((item) => ({ slug: item.slug }));
}

async function ServiceContent({ params }: Params) {
  const { slug } = await params;
  const service = services.items.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <section className="bg-white px-20 pt-48 pb-72 sm:px-40 lg:px-48 xl:px-88 xl:pt-83 xl:pb-96">
      <div className="flex flex-col-reverse gap-48 lg:flex-row lg:items-start lg:gap-40 xl:gap-52">
        <ServiceSidebar activeSlug={service.slug} />
        <div className="min-w-0 flex-1">
          <ServiceOverview service={service} />
          <ServiceBenefits benefits={service.benefits} />
        </div>
      </div>
    </section>
  );
}

export default function ServiceDetailPage({ params }: Params) {
  return (
    <>
      <PageBanner title={pages.serviceDetail.title} />
      <Suspense fallback={<div className="min-h-600 bg-white" />}>
        <ServiceContent params={params} />
      </Suspense>
    </>
  );
}
