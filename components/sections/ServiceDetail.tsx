import type { CompanyData, ServiceDetailData, ServiceItem } from "@/types/templates.types";
import { ServiceBenefits } from "@/components/sections/ServiceBenefits";
import { ServiceOverview } from "@/components/sections/ServiceOverview";
import { ServiceSidebar } from "@/components/sections/ServiceSidebar";

/** One service: the service list and contact box beside its overview and key benefits. */
export const ServiceDetail = ({
  data,
  service,
  services,
  company,
}: {
  data?: ServiceDetailData;
  service?: ServiceItem;
  services: ServiceItem[];
  company: CompanyData;
}) => {
  if (!data || !service) return null;
  return (
    <section data-white-section className="bg-[var(--color-white)] px-20 py-64 sm:px-40 sm:py-80 lg:px-48 xl:px-88 xl:py-120 [[data-white-section]+&]:!pt-0">
      <div className="flex flex-col-reverse gap-48 lg:flex-row lg:items-start lg:gap-40 xl:gap-52">
        <ServiceSidebar active={service} services={services} detail={data} company={company} />
        <div className="min-w-0 flex-1">
          <ServiceOverview service={service} detail={data} />
          <ServiceBenefits benefits={service.benefits} label={data.benefitsLabel} />
        </div>
      </div>
    </section>
  );
};
