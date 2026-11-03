"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Paginated } from "@/components/ui/Pagination";
import { Highlight, SectionLabel } from "@/components/ui/SectionHeading";
import type { GalleryData, GlobalUIData } from "@/types/templates.types";
import { fill } from "@/components/ui/text";

// Two rows of four per page.

// Row heights from the design (desktop); the pattern restarts on every page.
const rowHeights = ["xl:h-268", "xl:h-248", "xl:h-251"];

export const Gallery = ({ data: gallery, ui }: { data: GalleryData; ui: GlobalUIData }) => {
  const [open, setOpen] = useState<number | null>(null);
  const images = gallery.images;
  const count = images.length;

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

  // The lightbox fades in when it opens, and every image pops in as it is shown.
  const overlay = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const isOpen = open !== null;
  useEffect(() => {
    if (isOpen) overlay.current?.animate([{ opacity: 0 }, {}], { duration: 300, easing: "ease-out" });
  }, [isOpen]);
  useEffect(() => {
    if (open === null || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    frame.current?.animate([{ opacity: 0, transform: "scale(0.92)" }, {}], { duration: 350, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
  }, [open]);

  return (
    <section data-white-section className="py-64 sm:py-80 xl:py-120 bg-[var(--color-white)] px-20 sm:px-40 lg:px-64 xl:pr-93 xl:pl-82 [[data-white-section]+&]:!pt-0">
      <div className="text-center">
        <SectionLabel
          text={gallery.label}
          lineClass="h-2 w-44 bg-brand xl:h-3 xl:w-55"
          className="font-heading text-[0.875rem] font-bold tracking-[0.08em] text-ink xl:text-[1rem]"
        />
        <h2 data-reveal="up" data-reveal-delay="100" className="mt-12 font-heading text-[2.125rem] leading-42 font-extrabold tracking-[-0.025em] text-ink sm:text-[2.875rem] sm:leading-54 xl:mt-14 xl:text-[4.0625rem] xl:leading-72">
          <Highlight text={gallery.title} highlight={gallery.titleHighlight} highlightClass="text-brand" />
        </h2>
        <p data-reveal="up" data-reveal-delay="200" className="mx-auto mt-10 max-w-760 font-heading text-[0.9375rem] leading-25 font-medium text-steel xl:mt-12 xl:max-w-none xl:text-[1.25rem] xl:leading-29 xl:whitespace-pre-line">
          {gallery.description}
        </p>
      </div>

      <Paginated perPage={gallery.perPage} ui={ui} className="mt-32 grid grid-cols-2 gap-10 sm:gap-16 lg:grid-cols-4 xl:mt-34 xl:gap-x-17 xl:gap-y-19">
        {images.map((image, index) => (
          <li key={image.id}>
            <button
              type="button"
              onClick={() => setOpen(index)}
              aria-label={fill(ui.openImage, { name: image.label })}
              className={`group relative block h-140 w-full overflow-hidden rounded-[0.25rem] sm:h-220 lg:h-200 ${rowHeights[Math.floor((index % gallery.perPage) / 4) % rowHeights.length]}`}
            >
              <Image
                src={image.image}
                alt={image.label}
                fill
                sizes="(min-width: 1024px) 23vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,var(--color-ocean-55))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
          </li>
        ))}
      </Paginated>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[open].label}
          ref={overlay}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-deep-90)] p-16 sm:p-48"
        >
          <div key={open} ref={frame} className="relative h-full max-h-[80vh] w-full max-w-1300" onClick={(event) => event.stopPropagation()}>
            <Image src={images[open].image} alt={images[open].label} fill sizes="90vw" className="object-contain" />
          </div>
          <button
            type="button"
            aria-label={ui.close}
            onClick={() => setOpen(null)}
            className="absolute top-16 right-16 flex size-48 items-center justify-center rounded-full bg-[var(--color-white-10)] text-[var(--color-white)] transition-colors hover:bg-brand"
          >
            <Icon name="LuX" className="size-24" strokeWidth={2.2} />
          </button>
          <button
            type="button"
            aria-label={ui.previousImage}
            onClick={(event) => {
              event.stopPropagation();
              setOpen((open - 1 + count) % count);
            }}
            className="absolute left-12 flex size-48 items-center justify-center rounded-full bg-[var(--color-white-10)] text-[var(--color-white)] transition-colors hover:bg-brand sm:left-24"
          >
            <Icon name="LuChevronLeft" className="size-26" strokeWidth={2.4} />
          </button>
          <button
            type="button"
            aria-label={ui.nextImage}
            onClick={(event) => {
              event.stopPropagation();
              setOpen((open + 1) % count);
            }}
            className="absolute right-12 flex size-48 items-center justify-center rounded-full bg-[var(--color-white-10)] text-[var(--color-white)] transition-colors hover:bg-brand sm:right-24"
          >
            <Icon name="LuChevronRight" className="size-26" strokeWidth={2.4} />
          </button>
        </div>
      )}
    </section>
  );
};
