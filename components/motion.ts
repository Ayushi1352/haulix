// Start states for the page-load animations played by components/ScrollReveal.tsx
// (data-intro). They apply only before the animation starts (no data-played yet),
// with JavaScript on and reduced motion off, so without scripts nothing stays hidden.
export const introHidden = "motion-safe:not-noscript:not-data-played:opacity-0";
export const kenburnsStart = "motion-safe:not-noscript:not-data-played:scale-112";
