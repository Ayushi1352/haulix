import type { IconCard } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

// Grey strip of four icon + text items (bottom of the contact and quote pages).
export const HighlightStrip = ({ items }: { items: IconCard[] }) => {
  return (
    <ul data-reveal-stagger className="grid gap-24 rounded-[0.375rem] bg-cloud px-20 py-28 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:px-0 xl:h-167 xl:py-0">
      {items.map((item, index) => (
        <li
          key={item.title}
          className={`group flex items-center gap-18 lg:px-24 xl:gap-26 xl:px-30 ${index > 0 ? "lg:border-l lg:border-line" : ""}`}
        >
          <span className="flex size-72 shrink-0 items-center justify-center rounded-full border border-line bg-[var(--color-white)] text-ink transition-[color,background-color,border-color] duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-[var(--color-white)] xl:size-90">
            <Icon name={item.icon} className="size-32 xl:size-44" strokeWidth={1.5} />
          </span>
          <span>
            <span className="block font-heading text-[1rem] font-bold text-ink xl:text-[1.1875rem]">{item.title}</span>
            <span className="mt-4 block font-body text-[0.875rem] leading-22 text-steel xl:mt-8 xl:text-[1rem] xl:leading-25 xl:whitespace-pre-line">
              {item.description}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
};
