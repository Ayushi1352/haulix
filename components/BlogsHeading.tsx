import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { blog } = data;

export default function BlogsHeading() {
  return (
    <div className="px-20 text-center sm:px-40">
      <SectionLabel
        text={blog.label}
        lineClass="h-4 w-60 bg-brand xl:h-5 xl:w-89"
        className="font-body fs-15 font-semibold tracking-[0.25em] text-heading/85 xl:fs-21"
      />
      <h2 className="mt-14 font-heading fs-34 leading-42 font-extrabold tracking-[-0.02em] text-ink sm:fs-48 sm:leading-56 xl:mt-9 xl:fs-74 xl:leading-82">
        <Highlight text={blog.title} highlight={blog.titleHighlight} />
      </h2>
      <p className="mx-auto mt-12 max-w-760 font-heading fs-15 leading-25 font-medium text-steel xl:mt-18 xl:max-w-none xl:fs-23 xl:leading-29 xl:whitespace-pre-line">
        {blog.description}
      </p>
    </div>
  );
}
