"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal]:not([data-in-view]), [data-reveal-stagger]:not([data-in-view])";

// Marks [data-reveal] and [data-reveal-stagger] elements with data-in-view as they
// scroll into view, which starts their entrance animation (see globals.css).
// Elements added later (page changes, paginated grids) are picked up too.
//
// Streamed <Suspense> content lands in the DOM before React hydrates it, and
// adding data-in-view then makes hydration report an attribute mismatch. So an
// element is only marked once React has attached its fiber to it (hydrated).
const isHydrated = (element: Element) =>
  Object.keys(element).some((key) => key.startsWith("__reactFiber$"));

const reveal = (element: Element) => {
  if (!element.isConnected) return;
  if (isHydrated(element)) element.setAttribute("data-in-view", "");
  else requestAnimationFrame(() => reveal(element));
};

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          reveal(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    const watch = (root: Element | Document) => {
      if (root instanceof Element && root.matches(SELECTOR)) observer.observe(root);
      root.querySelectorAll(SELECTOR).forEach((element) => observer.observe(element));
    };

    watch(document);
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) watch(node);
        });
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}
