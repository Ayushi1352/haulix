"use client";

import { Children, useRef, useState, type ReactNode } from "react";
import Icon from "./Icon";
import { label } from "@/data";

interface PaginatedProps {
  children: ReactNode;
  /** Cards per page: two rows of the desktop grid. */
  perPage: number;
  /** Grid classes for the list. */
  className: string;
  as?: "ul" | "div";
}

// Shows `perPage` of its children at a time with numbered page buttons below.
export default function Paginated({ children, perPage, className, as: List = "ul" }: PaginatedProps) {
  const items = Children.toArray(children);
  const pageCount = Math.max(1, Math.ceil(items.length / perPage));
  const [page, setPage] = useState(0);
  const top = useRef<HTMLDivElement>(null);
  const current = Math.min(page, pageCount - 1);

  const go = (next: number) => {
    setPage(next);
    // Bring the top of the grid back into view, clear of the sticky navbar.
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={top} className="scroll-mt-100 sm:scroll-mt-112 xl:scroll-mt-176">
      <List className={className}>{items.slice(current * perPage, (current + 1) * perPage)}</List>
      {pageCount > 1 && <Pagination page={current} pageCount={pageCount} onChange={go} />}
    </div>
  );
}

interface PaginationProps {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
}

function Pagination({ page, pageCount, onChange }: PaginationProps) {
  const button =
    "flex size-42 items-center justify-center rounded-full border font-heading fs-16 font-bold transition-colors xl:size-54 xl:fs-19";
  const idle = "border-line bg-white text-ink hover:border-brand hover:text-brand";
  const arrow = `${button} ${idle} disabled:pointer-events-none disabled:opacity-40`;

  return (
    <nav aria-label={label("pagination")} className="mt-36 flex items-center justify-center gap-8 xl:mt-56 xl:gap-12">
      <button type="button" aria-label={label("previousPage")} disabled={page === 0} onClick={() => onChange(page - 1)} className={arrow}>
        <Icon name="chevron-left" className="size-18 xl:size-22" strokeWidth={2.4} />
      </button>
      {Array.from({ length: pageCount }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={label("page", { n: index + 1 })}
          aria-current={index === page ? "page" : undefined}
          onClick={() => onChange(index)}
          className={`${button} ${index === page ? "border-brand bg-brand text-white" : idle}`}
        >
          {index + 1}
        </button>
      ))}
      <button
        type="button"
        aria-label={label("nextPage")}
        disabled={page === pageCount - 1}
        onClick={() => onChange(page + 1)}
        className={arrow}
      >
        <Icon name="chevron-right" className="size-18 xl:size-22" strokeWidth={2.4} />
      </button>
    </nav>
  );
}
