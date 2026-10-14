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
      <section className="bg-white px-20 pt-64 pb-72 sm:px-40 sm:pt-80 lg:px-48 xl:px-95 xl:pt-92 xl:pb-103">
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
