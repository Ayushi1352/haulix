"use client";

import { useEffect } from "react";

const REVEAL = "[data-reveal], [data-reveal-stagger] > *";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const STAGGER_MS = 100;
const MAX_STAGGER_STEPS = 7;

/** Starting point of each scroll animation. */
const FROM: Record<string, Keyframe> = {
  up: { opacity: 0, transform: "translateY(3rem)" },
  left: { opacity: 0, transform: "translateX(-4rem)" },
  right: { opacity: 0, transform: "translateX(4rem)" },
  zoom: { opacity: 0, transform: "scale(0.88)" },
  fade: { opacity: 0 },
};

/** Starting point and length of each page-load animation (hero and page banner). */
const INTRO: Record<string, { from: Keyframe; duration: number }> = {
  up: { from: { opacity: 0, transform: "translateY(2.5rem)" }, duration: 900 },
  line: { from: { transform: "scaleX(0)" }, duration: 800 },
  kenburns: { from: { transform: "scale(1.12)" }, duration: 2400 },
};

// Streamed <Suspense> content lands in the DOM before React hydrates it, and
// changing it then makes hydration report a mismatch. So an element is only
// touched once React has attached its fiber to it (hydrated).
const isHydrated = (element: Element) => Object.keys(element).some((key) => key.startsWith("__reactFiber$"));

/**
 * Plays the animations of the whole site.
 *
 * Scroll: data-reveal="up | left | right | zoom | fade" animates an element when it
 * scrolls into view (data-reveal-delay="<ms>" waits a little first);
 * data-reveal-stagger on a parent animates its children one after another. A
 * [data-reveal-line] inside a revealed element draws itself in from the left.
 *
 * Page load: data-intro="up | line | kenburns" (data-intro-delay="<ms>") plays
 * once as soon as the page opens. Those elements start hidden with the classes in
 * components/motion.ts, so they never flash before the script runs.
 *
 * Everything runs through the Web Animations API, so no CSS is needed. Without
 * JavaScript, or with reduced motion turned on, every element is simply visible
 * and nothing moves.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const seen = new WeakSet<Element>();

    const reveal = (el: HTMLElement) => {
      const group = el.parentElement?.hasAttribute("data-reveal-stagger") && !el.hasAttribute("data-reveal");
      const step = group ? Math.min([...el.parentElement!.children].indexOf(el), MAX_STAGGER_STEPS) : 0;
      const delay = step * STAGGER_MS + Number(el.dataset.revealDelay ?? 0);
      el.style.opacity = "";
      el.animate([FROM[el.dataset.reveal ?? ""] ?? FROM.up, {}], { duration: 900, easing: EASE, delay, fill: "backwards" });
      el.querySelectorAll("[data-reveal-line]").forEach((line) => {
        line.animate([{ transform: "scaleX(0)" }, {}], { duration: 800, easing: EASE, delay: delay + 250, fill: "backwards" });
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Already scrolled past (page opened half way down): show it without waiting.
          const passed = entry.boundingClientRect.bottom < 0;
          if (!entry.isIntersecting && !passed) continue;
          io.unobserve(entry.target);
          if (passed) (entry.target as HTMLElement).style.opacity = "";
          else reveal(entry.target as HTMLElement);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    // On the first scan the page is already painted, so whatever is on screen
    // stays as it is. Everything below the fold is hidden until it scrolls in.
    // Later scans (another page opened, a grid paged) run before the browser
    // paints the new elements, so those can all be hidden and animated.
    let firstScan = true;
    let frame = 0;
    const scan = () => {
      let pending = false;
      document.querySelectorAll<HTMLElement>("[data-intro]").forEach((el) => {
        if (seen.has(el)) return;
        if (!isHydrated(el)) return void (pending = true);
        seen.add(el);
        const { from, duration } = INTRO[el.dataset.intro ?? ""] ?? INTRO.up;
        el.setAttribute("data-played", "");
        el.animate([from, {}], { duration, easing: EASE, delay: Number(el.dataset.introDelay ?? 0), fill: "backwards" });
      });
      document.querySelectorAll<HTMLElement>(REVEAL).forEach((el) => {
        if (seen.has(el)) return;
        if (!isHydrated(el)) return void (pending = true);
        seen.add(el);
        if (firstScan && el.getBoundingClientRect().top < window.innerHeight) return;
        el.style.opacity = "0";
        io.observe(el);
      });
      firstScan = false;
      if (pending) frame = requestAnimationFrame(scan);
    };

    const mo = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });

    scan();
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}
