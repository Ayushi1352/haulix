import type { CompanyData, ContactData, FormOptionsData, GlobalUIData } from "@/types/templates.types";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { HighlightStrip } from "@/components/sections/HighlightStrip";
import { PageIntro } from "@/components/sections/PageIntro";

type Props = {
  data?: ContactData;
  company: CompanyData;
  formOptions: FormOptionsData;
  services: string[];
  ui: GlobalUIData;
};

/** Contact page: the message form beside the info cards, office photo and map. */
export const Contact = ({ data: contact, company, formOptions, services, ui }: Props) => {
  if (!contact) return null;
  return (
    <section data-white-section className="py-64 sm:py-80 xl:py-120 bg-[var(--color-white)] px-20 sm:px-40 lg:px-48 xl:px-95 [[data-white-section]+&]:!pt-0">
      <PageIntro label={contact.label} title={contact.title} highlight={contact.titleHighlight} description={contact.description} />
      <div className="mt-36 flex flex-col gap-24 lg:flex-row lg:items-start xl:mt-40 xl:gap-22">
        <div className="lg:w-[52%] xl:w-855 xl:shrink-0">
          <EnquiryForm form={contact.form} formOptions={formOptions} services={services} ui={ui} />
        </div>
        <ContactDetails data={contact} company={company} />
      </div>
      <div className="mt-28 xl:mt-32">
        <HighlightStrip items={contact.highlights} />
      </div>
    </section>
  );
};
