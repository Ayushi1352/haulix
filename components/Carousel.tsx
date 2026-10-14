"use client";

import { Children, useEffect, useState, type ReactNode } from "react";
import Icon from "./Icon";

interface CarouselProps {
  children: ReactNode;
  /** Grid classes for the visible row, e.g. "grid gap-24 md:grid-cols-2 xl:grid-cols-3". */
  gridClass: string;
  /** Visibility class per position (e.g. ["", "hidden md:block"]); later positions are hidden. */
  slots: string[];
  prevClass: string;
  nextClass: string;
  arrowIconClass?: string;
  dots?: boolean;
  dotsClass?: string;
  autoplay?: number;
  label: string;
}

// Rotates its items one step at a time and shows as many as fit the screen.
export default function Carousel({
  children,
  gridClass,
  slots,
  prevClass,
  nextClass,
  arrowIconClass = "size-28",
  dots = false,
  dotsClass = "",
  autoplay = 0,
  label,
}: CarouselProps) {
  const items = Children.toArray(children);
  const count = items.length;
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (step: number) => setStart((value) => (value + step + count) % count);

  useEffect(() => {
    if (!autoplay || paused || count < 2) return;
    const timer = setInterval(() => setStart((value) => (value + 1) % count), autoplay);
    return () => clearInterval(timer);
  }, [autoplay, paused, count]);

  const ordered = items.map((_, position) => items[(start + position) % count]);

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={gridClass}>
        {ordered.map((item, position) => (
          <div key={(start + position) % count} className={`animate-[fade_0.45s_ease] ${position < slots.length ? slots[position] : "hidden"}`}>
            {item}
          </div>
        ))}
      </div>

      <button type="button" aria-label="Previous" onClick={() => go(-1)} className={prevClass}>
        <Icon name="chevron-left" className={arrowIconClass} strokeWidth={2.6} />
      </button>
      <button type="button" aria-label="Next" onClick={() => go(1)} className={nextClass}>
        <Icon name="chevron-right" className={arrowIconClass} strokeWidth={2.6} />
      </button>

      {dots && (
        <div className={`flex items-center justify-center gap-12 xl:gap-16 ${dotsClass}`}>
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === start}
              onClick={() => setStart(index)}
              className={`rounded-full transition-colors ${
                index === start ? "size-14 bg-crimson xl:size-18" : "size-12 bg-[#d6dadd] hover:bg-[#b9bfc3] xl:size-16"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
