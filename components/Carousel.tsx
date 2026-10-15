"use client";

import { Children, useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Icon from "./Icon";
import { label as uiLabel } from "@/data";

interface CarouselProps {
  children: ReactNode;
  /**
   * Sets --n (cards in view) and --gap per breakpoint, e.g.
   * "[--n:1] md:[--n:2] xl:[--n:3] [--gap:calc(var(--spacing)*24)]".
   */
  trackClass: string;
  prevClass: string;
  nextClass: string;
  arrowIconClass?: string;
  dots?: boolean;
  dotsClass?: string;
  autoplay?: number;
  label: string;
}

// Keep in sync with the track's duration-600 class.
const SLIDE_MS = 600;

// Slides its items one card at a time and loops around endlessly. The items are
// rendered three times so there is always a card coming in from either side;
// after each slide the track quietly jumps back to the middle copy.
export default function Carousel({
  children,
  trackClass,
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
  const [index, setIndex] = useState(count);
  const [jump, setJump] = useState(false);
  const [paused, setPaused] = useState(false);
  const moving = useRef(false);
  const settle = useRef<ReturnType<typeof setTimeout>>(undefined);

  const slideTo = useCallback(
    (target: number) => {
      if (moving.current || count < 2) return;
      moving.current = true;
      setJump(false);
      setIndex(target);
      settle.current = setTimeout(() => {
        moving.current = false;
        setJump(true);
        setIndex((count + (target % count)) % count + count);
      }, SLIDE_MS);
    },
    [count],
  );

  useEffect(() => () => clearTimeout(settle.current), []);

  useEffect(() => {
    if (!autoplay || paused || count < 2) return;
    const timer = setInterval(() => slideTo(index + 1), autoplay);
    return () => clearInterval(timer);
  }, [autoplay, paused, count, index, slideTo]);

  const active = index % count;
  const looped = [...items, ...items, ...items];

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`overflow-x-clip ${trackClass}`}>
        <div
          style={{ "--i": index } as CSSProperties}
          className={`carousel-track ${jump ? "" : "transition-transform duration-600 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none"}`}
        >
          {looped.map((item, position) => (
            <div key={position} className="carousel-item" aria-hidden={position < count || position >= 2 * count || undefined}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <button type="button" aria-label={uiLabel("previous")} onClick={() => slideTo(index - 1)} className={prevClass}>
        <Icon name="chevron-left" className={arrowIconClass} strokeWidth={2.6} />
      </button>
      <button type="button" aria-label={uiLabel("next")} onClick={() => slideTo(index + 1)} className={nextClass}>
        <Icon name="chevron-right" className={arrowIconClass} strokeWidth={2.6} />
      </button>

      {dots && (
        <div className={`flex items-center justify-center gap-12 xl:gap-16 ${dotsClass}`}>
          {items.map((_, dot) => (
            <button
              key={dot}
              type="button"
              aria-label={uiLabel("goToSlide", { n: dot + 1 })}
              aria-current={dot === active}
              onClick={() => dot !== active && slideTo(count + dot)}
              className={`rounded-full transition-colors ${
                dot === active ? "size-14 bg-brand xl:size-18" : "size-12 bg-line-strong hover:bg-brand/50 xl:size-16"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
