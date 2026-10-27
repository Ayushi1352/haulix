import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PageIntro from "@/components/PageIntro";
import EnquiryForm from "@/components/EnquiryForm";
import HighlightStrip from "@/components/HighlightStrip";
import { site as data, pageTitle } from "@/data";
import QuoteAside from "@/components/QuoteAside";

const { pages, quote } = data;
const { title } = pages.getAQuote;

export const metadata: Metadata = { title: pageTitle(title) };

export default function GetAQuotePage() {
  return (
    <>
      <PageBanner title={title} />
      <section data-white-section className="py-64 sm:py-80 xl:py-120 bg-white px-20 sm:px-40 lg:px-48 xl:px-95 [[data-white-section]+&]:pt-0!">
        <PageIntro label={quote.label} title={quote.title} highlight={quote.titleHighlight} description={quote.description} />
        <div className="mt-36 flex flex-col gap-24 lg:flex-row lg:items-start xl:mt-40 xl:gap-34">
          <div className="lg:w-[52%] xl:w-861 xl:shrink-0">
            <EnquiryForm form={quote.form} size="quote" />
          </div>
          <QuoteAside />
        </div>
        <div className="mt-28 xl:mt-32">
          <HighlightStrip items={quote.highlights} />
        </div>
      </section>
    </>
  );
}
