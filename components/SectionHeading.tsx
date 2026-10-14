// Shared heading pieces: the "—— LABEL" eyebrow and titles with a coloured highlight.

interface LabelProps {
  text: string;
  align?: "center" | "left";
  lineClass?: string;
  className?: string;
}

export function SectionLabel({ text, align = "center", lineClass = "w-55 h-5 bg-crimson", className = "" }: LabelProps) {
  return (
    <p
      className={`flex items-center gap-14 uppercase xl:gap-23 ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      <span className={`shrink-0 ${lineClass}`} />
      <span>{text}</span>
    </p>
  );
}

interface HighlightProps {
  text: string;
  highlight?: string;
  highlightClass?: string;
}

// Renders `text` with its `highlight` part coloured; "\n" in the text becomes a line break.
export function Highlight({ text, highlight, highlightClass = "text-crimson" }: HighlightProps) {
  const index = highlight ? text.indexOf(highlight) : -1;
  if (!highlight || index < 0) return <span className="whitespace-pre-line">{text}</span>;
  return (
    <span className="whitespace-pre-line">
      {text.slice(0, index)}
      <span className={highlightClass}>{highlight}</span>
      {text.slice(index + highlight.length)}
    </span>
  );
}
