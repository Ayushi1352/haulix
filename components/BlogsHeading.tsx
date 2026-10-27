import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { blog } = data;

export default function BlogsHeading() {
  return (
    <div className="px-20 text-center sm:px-40">
      <SectionLabel
        text={blog.label}
        lineClass="h-4 w-60 bg-brand xl:h-5 xl:w-89"
        className="font-body text-[calc(15*var(--spacing))] font-semibold tracking-[0.25em] text-heading/85 xl:text-[calc(21*var(--spacing))]"
      />
      <h2 data-reveal="up" data-reveal-delay="100" className="mt-14 font-heading text-[calc(34*var(--spacing))] leading-42 font-extrabold tracking-[-0.02em] text-ink sm:text-[calc(48*var(--spacing))] sm:leading-56 xl:mt-9 xl:text-[calc(74*var(--spacing))] xl:leading-82">
        <Highlight text={blog.title} highlight={blog.titleHighlight} />
      </h2>
      <p data-reveal="up" data-reveal-delay="200" className="mx-auto mt-12 max-w-760 font-heading text-[calc(15*var(--spacing))] leading-25 font-medium text-steel xl:mt-18 xl:max-w-none xl:text-[calc(23*var(--spacing))] xl:leading-29 xl:whitespace-pre-line">
        {blog.description}
      </p>
    </div>
  );
}
