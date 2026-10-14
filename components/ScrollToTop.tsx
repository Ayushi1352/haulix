"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Next.js scrolls a new page to its first element (the banner), which leaves the
// navbar in the layout above the viewport. Start every new page at the very top
// instead, except for #anchor links and back/forward navigation.
let poppedState = false;

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const onPop = () => {
      poppedState = true;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (poppedState) {
      poppedState = false;
      return;
    }
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
