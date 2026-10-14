"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1800;

// Shows a stat like "500+" and counts its number up from 0 once it scrolls into view.
// The server renders the final value, so it reads correctly without JavaScript.
export default function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const target = match ? Number(match[2]) : 0;
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!match || !element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    setCurrent(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION_MS, 1);
          // Ease out so the count slows down near the end.
          setCurrent(Math.round(target * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!match || current === null) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {match[1]}
      {current}
      {match[3]}
    </span>
  );
}
