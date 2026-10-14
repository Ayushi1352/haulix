import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import PageIntro from "@/components/PageIntro";
import EnquiryForm from "@/components/EnquiryForm";
import HighlightStrip from "@/components/HighlightStrip";
import { site as data, pageTitle } from "@/data";
import ContactDetails from "@/components/ContactDetails";

const { pages, contact } = data;
const { title } = pages.contactUs;

export const metadata: Metadata = { title: pageTitle(title) };

export default function ContactUsPage() {
  return (
    <>
      <PageBanner title={title} />
      <section className="section-y bg-white px-20 sm:px-40 lg:px-48 xl:px-95">
        <PageIntro
          label={contact.label}
          title={contact.title}
          highlight={contact.titleHighlight}
          description={contact.description}
        />
        <div className="mt-36 flex flex-col gap-24 lg:flex-row lg:items-start xl:mt-40 xl:gap-22">
          <div className="lg:w-[52%] xl:w-855 xl:shrink-0">
            <EnquiryForm form={contact.form} />
          </div>
          <ContactDetails />
        </div>
        <div className="mt-28 xl:mt-32">
          <HighlightStrip items={contact.highlights} />
        </div>
      </section>
    </>
  );
}
