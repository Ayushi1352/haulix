import { Highlight, SectionLabel } from "./SectionHeading";

interface PageIntroProps {
  label: string;
  title: string;
  highlight: string;
  description: string;
}

// Centered "—— LABEL / Title / description" block used on the contact and quote pages.
export default function PageIntro({ label, title, highlight, description }: PageIntroProps) {
  return (
    <div className="text-center">
      <SectionLabel
        text={label}
        lineClass="h-2 w-44 bg-scarlet xl:h-3 xl:w-55"
        className="font-jakarta fs-14 font-bold tracking-[0.08em] text-ink xl:fs-16"
      />
      <h2 className="mt-10 font-jakarta fs-36 leading-44 font-extrabold tracking-[-0.03em] text-ink sm:fs-50 sm:leading-58 xl:mt-10 xl:fs-68 xl:leading-80">
        <Highlight text={title} highlight={highlight} highlightClass="text-scarlet" />
      </h2>
      <p className="mx-auto mt-10 max-w-760 font-jakarta fs-15 leading-25 font-medium text-[#5b6770] xl:mt-8 xl:max-w-none xl:fs-20 xl:leading-30 xl:whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
