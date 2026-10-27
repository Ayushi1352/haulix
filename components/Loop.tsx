"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Endless decorative motion for the element passed as the only child. Tailwind classes can't declare
// keyframes, so these run through the Web Animations API; every step keeps the easing a CSS keyframe would.
const effects = {
  // Background photos that slowly zoom in and out.
  "slow-zoom": { duration: 18000, easing: "ease-in-out", direction: "alternate", frames: [{ transform: "none" }, { transform: "scale(1.08)" }] },
  // A truck rolling back and forth on the spot.
  drive: { duration: 1600, easing: "ease-in-out", direction: "alternate", frames: [{ transform: "translateX(-0.25rem)" }, { transform: "translateX(0.35rem)" }] },
  // Uses translate, not transform, so the stripes keep their skew.
  stripes: { duration: 6000, easing: "ease-in-out", direction: "alternate", frames: [{ translate: "0 0" }, { translate: "-2.5rem 0" }] },
  // A phone that rings now and then.
  ring: {
    duration: 2600,
    easing: "ease-in-out",
    direction: "normal",
    frames: [
      { offset: 0, transform: "none" },
      { offset: 0.6, transform: "none" },
      { offset: 0.64, transform: "rotate(-14deg)" },
      { offset: 0.68, transform: "rotate(14deg)" },
      { offset: 0.72, transform: "rotate(-14deg)" },
      { offset: 0.76, transform: "rotate(14deg)" },
      { offset: 0.8, transform: "rotate(-14deg)" },
      { offset: 0.84, transform: "rotate(14deg)" },
      { offset: 1, transform: "none" },
    ],
  },
  // A ring that spreads out from a round badge and fades.
  "pulse-ring": {
    duration: 2200,
    easing: "ease-out",
    direction: "normal",
    frames: [
      { opacity: 0.7, transform: "scale(1)" },
      { opacity: 0, transform: "scale(1.45)" },
    ],
  },
} satisfies Record<string, { duration: number; easing: string; direction: PlaybackDirection; frames: Keyframe[] }>;

type Props = {
  effect: keyof typeof effects;
  // Milliseconds; a negative value starts partway through the cycle
  delay?: number;
  children: ReactNode;
};

export default function Loop({ effect, delay = 0, children }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current?.firstElementChild;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const { duration, easing, direction, frames } = effects[effect];
    const animation = el.animate(
      frames.map((f) => ({ easing, ...f })),
      { duration, delay, direction, iterations: Infinity },
    );
    return () => animation.cancel();
  }, [effect, delay]);

  // `contents` keeps the wrapper out of layout, so the child sits exactly where it would without it.
  return (
    <span ref={ref} className="contents">
      {children}
    </span>
  );
}

// Expanding ring around a round icon badge; the badge needs `relative`.
export function PulseRing() {
  return (
    <Loop effect="pulse-ring">
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] border-2 border-brand opacity-0" />
    </Loop>
  );
}
