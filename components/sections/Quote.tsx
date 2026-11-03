import type { CompanyData, FormOptionsData, GlobalUIData, QuoteData } from "@/types/templates.types";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { HighlightStrip } from "@/components/sections/HighlightStrip";
import { PageIntro } from "@/components/sections/PageIntro";
import { QuoteAside } from "@/components/sections/QuoteAside";

type Props = {
  data?: QuoteData;
  company: CompanyData;
  formOptions: FormOptionsData;
  services: string[];
  ui: GlobalUIData;
};

/** Get a Quote page: the quote form beside the photo and the "Need Immediate Assistance?" panel. */
export const Quote = ({ data: quote, company, formOptions, services, ui }: Props) => {
  if (!quote) return null;
  return (
    <section data-white-section className="py-64 sm:py-80 xl:py-120 bg-[var(--color-white)] px-20 sm:px-40 lg:px-48 xl:px-95 [[data-white-section]+&]:!pt-0">
      <PageIntro label={quote.label} title={quote.title} highlight={quote.titleHighlight} description={quote.description} />
      <div className="mt-36 flex flex-col gap-24 lg:flex-row lg:items-start xl:mt-40 xl:gap-34">
        <div className="lg:w-[52%] xl:w-861 xl:shrink-0">
          <EnquiryForm form={quote.form} formOptions={formOptions} services={services} ui={ui} size="quote" />
        </div>
        <QuoteAside data={quote} company={company} />
      </div>
      <div className="mt-28 xl:mt-32">
        <HighlightStrip items={quote.highlights} />
      </div>
    </section>
  );
};
