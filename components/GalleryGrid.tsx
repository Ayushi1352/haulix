"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import { Highlight, SectionLabel } from "@/components/SectionHeading";
import { site as data } from "@/data";

const { gallery } = data;

// Row heights from the design (desktop); the pattern repeats for extra rows.
const rowHeights = ["xl:h-268", "xl:h-248", "xl:h-251"];

export default function GalleryGrid() {
  const [open, setOpen] = useState<number | null>(null);
  const count = gallery.images.length;

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") setOpen((value) => (value === null ? value : (value + 1) % count));
      if (event.key === "ArrowLeft") setOpen((value) => (value === null ? value : (value - 1 + count) % count));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, count]);

  return (
    <section className="bg-white px-20 pt-64 pb-80 sm:px-40 sm:pt-80 lg:px-64 xl:px-82 xl:pt-132 xl:pb-194">
      <div className="text-center">
        <SectionLabel
          text={gallery.label}
          lineClass="h-2 w-44 bg-scarlet xl:h-3 xl:w-55"
          className="font-jakarta fs-14 font-bold tracking-[0.08em] text-ink xl:fs-16"
        />
        <h2 className="mt-12 font-jakarta fs-34 leading-42 font-extrabold tracking-[-0.025em] text-ink sm:fs-46 sm:leading-54 xl:mt-14 xl:fs-61 xl:leading-70">
          <Highlight text={gallery.title} highlight={gallery.titleHighlight} highlightClass="text-[#cc1a1f]" />
        </h2>
        <p className="mx-auto mt-10 max-w-760 font-jakarta fs-15 leading-25 font-medium text-[#5f6b78] xl:mt-14 xl:max-w-none xl:fs-19 xl:leading-29 xl:whitespace-pre-line">
          {gallery.description}
        </p>
      </div>

      <ul className="mt-32 grid grid-cols-2 gap-10 sm:gap-16 lg:grid-cols-4 xl:mt-40 xl:gap-x-17 xl:gap-y-19">
        {gallery.images.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setOpen(index)}
              aria-label={`Open image: ${image.alt}`}
              className={`group relative block h-140 w-full overflow-hidden rd-4 sm:h-220 lg:h-200 ${rowHeights[Math.floor(index / 4) % 3]}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 23vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={gallery.images[open].alt}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(3,20,26,0.9)] p-16 sm:p-48"
        >
          <div className="relative h-full max-h-[80vh] w-full max-w-1300" onClick={(event) => event.stopPropagation()}>
            <Image src={gallery.images[open].src} alt={gallery.images[open].alt} fill sizes="90vw" className="object-contain" />
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(null)}
            className="absolute top-16 right-16 flex size-48 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <Icon name="close" className="size-24" strokeWidth={2.2} />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              setOpen((open - 1 + count) % count);
            }}
            className="absolute left-12 flex size-48 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-24"
          >
            <Icon name="chevron-left" className="size-26" strokeWidth={2.4} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              setOpen((open + 1) % count);
            }}
            className="absolute right-12 flex size-48 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-24"
          >
            <Icon name="chevron-right" className="size-26" strokeWidth={2.4} />
          </button>
        </div>
      )}
    </section>
  );
}
