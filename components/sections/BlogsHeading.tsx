import { Highlight, SectionLabel } from "@/components/ui/SectionHeading";
import type { SectionIntroData } from "@/types/templates.types";

export const BlogsHeading = ({ data: blog }: { data: SectionIntroData }) => {
  return (
    <div className="px-20 text-center sm:px-40">
      <SectionLabel
        text={blog.label}
        lineClass="h-4 w-60 bg-brand xl:h-5 xl:w-89"
        className="font-body text-[0.9375rem] font-semibold tracking-[0.25em] text-[var(--color-heading-85)] xl:text-[1.3125rem]"
      />
      <h2 data-reveal="up" data-reveal-delay="100" className="mt-14 font-heading text-[2.125rem] leading-42 font-extrabold tracking-[-0.02em] text-ink sm:text-[3rem] sm:leading-56 xl:mt-9 xl:text-[4.625rem] xl:leading-82">
        <Highlight text={blog.title} highlight={blog.titleHighlight} />
      </h2>
      <p data-reveal="up" data-reveal-delay="200" className="mx-auto mt-12 max-w-760 font-heading text-[0.9375rem] leading-25 font-medium text-steel xl:mt-18 xl:max-w-none xl:text-[1.4375rem] xl:leading-29 xl:whitespace-pre-line">
        {blog.description}
      </p>
    </div>
  );
};
