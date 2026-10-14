import Link from "next/link";
import Icon from "@/components/Icon";
import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { services } = data;

export default function ServiceGrid() {
  return (
    <section className="bg-white px-20 pt-64 pb-72 sm:px-40 sm:pt-80 lg:px-64 xl:px-95 xl:pt-125 xl:pb-157">
      <div className="text-center">
        <SectionLabel
          text={services.label}
          lineClass="h-3 w-48 bg-crimson xl:h-4 xl:w-70"
          className="font-poppins fs-14 font-medium tracking-[0.2em] text-[#2c4650] xl:fs-19"
        />
        <h2 className="mt-12 font-jakarta fs-32 leading-40 font-extrabold tracking-[-0.025em] text-ink sm:fs-44 sm:leading-52 xl:mt-14 xl:fs-62 xl:leading-72">
          <Highlight text={services.title} highlight={services.titleHighlight} />
        </h2>
        <p className="mx-auto mt-12 max-w-900 font-poppins fs-15 leading-25 text-[#2f3f47] xl:mt-12 xl:max-w-none xl:fs-21 xl:leading-28 xl:whitespace-pre-line">
          {services.page.description}
        </p>
      </div>

      <ul className="mt-36 grid gap-20 sm:grid-cols-2 xl:mt-40 xl:grid-cols-4 xl:gap-x-27 xl:gap-y-24">
        {services.items.map((item, index) => {
          const red = item.tone === "red";
          return (
            <li key={item.slug}>
              <Link
                href={`/services/${item.slug}`}
                className="group relative flex h-full flex-col rd-6 border border-[#e6eaed] bg-[#f7f9fa] pt-18 pr-24 pb-22 pl-24 shadow-[0_6px_18px_rgba(10,40,50,0.05)] transition-shadow hover:shadow-[0_14px_34px_rgba(10,40,50,0.12)] xl:h-306 xl:pt-17 xl:pr-30 xl:pb-0 xl:pl-36"
              >
                <span
                  className={`slant-tag absolute top-0 right-8 flex h-36 w-58 items-center justify-center font-jakarta fs-15 font-bold text-white xl:h-44 xl:w-70 xl:fs-18 ${
                    red ? "bg-[#a3181f]" : "bg-ink"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex size-64 items-center justify-center rounded-full text-white xl:size-83 ${
                    red ? "bg-[#a3181f]" : "bg-ink"
                  }`}
                >
                  <Icon name={item.icon} className="size-32 xl:size-42" strokeWidth={1.5} />
                </span>
                <h3 className="mt-10 font-jakarta fs-20 leading-28 font-extrabold text-ink xl:mt-6 xl:fs-25 xl:leading-34">
                  {item.title}
                </h3>
                <p className="mt-6 font-poppins fs-15 leading-23 text-[#3c4a52] xl:mt-4 xl:fs-20 xl:leading-26 xl:whitespace-pre-line">
                  {item.excerpt}
                </p>
                <span className="mt-14 inline-flex items-center gap-12 font-jakarta fs-16 font-bold text-crimson xl:mt-auto xl:mb-28 xl:gap-16 xl:fs-19">
                  {services.readMore}
                  <Icon name="arrow-right" className="size-18 transition-transform group-hover:translate-x-4 xl:size-22" strokeWidth={2.4} />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
