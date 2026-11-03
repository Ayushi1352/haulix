import type { Config } from "tailwindcss";

/*
  The design is drawn on a 1920px wide canvas. Every spacing utility is one
  "design pixel" (w-552 = 552px in the design, leading-30 = 30px) and font sizes
  are written as text-[N/16 rem]. From 1024px up the root font size follows the
  viewport (set on <html> in app/layout.tsx), so the desktop layout keeps the
  design's exact proportions on every screen.
*/
const designPixels = Object.fromEntries(
  Array.from({ length: 2001 }, (_, n) => [n, n === 0 ? "0" : `${n / 16}rem`]),
);

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    // Desktop layout (xl:) starts at 1024px, so 1024 shows the same design as 1440.
    screens: {
      sm: "40rem",
      md: "48rem",
      lg: "64rem",
      xl: "64rem",
      "2xl": "96rem",
    },
    spacing: { px: "1px", ...designPixels },
    extend: {
      lineHeight: designPixels,
      borderWidth: { 3: "3px", 6: "6px", 9: "9px" },
      borderColor: {
        DEFAULT: "currentColor",
      },
      scale: { 112: "1.12" },
      transitionDuration: { 600: "600ms" },
      colors: {
        brand: "var(--color-brand)",
        "brand-hover": "var(--color-brand-hover)",
        ink: "var(--color-ink)",
        deep: "var(--color-deep)",
        ocean: "var(--color-ocean)",
        heading: "var(--color-heading)",
        graphite: "var(--color-graphite)",
        slate: "var(--color-slate)",
        steel: "var(--color-steel)",
        muted: "var(--color-muted)",
        "line-strong": "var(--color-line-strong)",
        cloud: "var(--color-cloud)",
        mist: "var(--color-mist)",
        line: "var(--color-line)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        nav: ["var(--font-nav)"],
        display: ["var(--font-display)"],
      },
    },
  },
  plugins: [],
};
export default config;
