import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { PulseRing } from "@/components/ui/Loop";
import type { CompanyData, ServiceDetailData, ServiceItem } from "@/types/templates.types";
import { contactField, contactHref } from "@/components/ui/text";

// Service list (active one first, as in the design) and the contact box.
export const ServiceSidebar = ({ active, services, detail, company }: { active: ServiceItem; services: ServiceItem[]; detail: ServiceDetailData; company: CompanyData }) => {
  const ordered = [active, ...services.filter((item) => item !== active)];

  return (
    <aside className="flex w-full flex-col gap-28 lg:w-360 lg:shrink-0 xl:w-479 xl:gap-36">
      <div data-reveal="left" className="overflow-hidden rounded-[0.375rem] bg-[var(--color-white)] shadow-[0_6px_24px_var(--color-shadow-ink-8)]">
        <h2 className="flex h-64 items-center bg-deep px-24 font-heading text-[1.25rem] font-extrabold text-[var(--color-white)] xl:h-91 xl:px-33 xl:text-[1.75rem]">
          {detail.sidebarTitle}
        </h2>
        <ul className="px-6 pt-6 pb-6">
          {ordered.map((item) => {
            const isActive = item === active;
            return (
              <li key={item.title} className={isActive ? "" : "border-b border-line last:border-b-0"}>
                <Link
                  href={item.url}
                  aria-current={isActive ? "page" : undefined}
                  className={`group flex h-56 items-center justify-between px-20 text-[1rem] transition-colors xl:h-82 xl:px-30 xl:text-[1.5rem] ${
                    isActive
                      ? "rounded-[0.25rem] bg-brand font-heading font-semibold text-[var(--color-white)] shadow-[0_6px_14px_var(--color-brand-30)]"
                      : "font-body text-slate hover:text-brand"
                  }`}
                >
                  {item.navLabel}
                  <Icon name="LuChevronRight" className="size-18 transition-transform group-hover:translate-x-4 xl:size-26" strokeWidth={2} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div data-reveal="left" data-reveal-delay="200" className="overflow-hidden rounded-[0.375rem] bg-deep text-[var(--color-white)] shadow-[0_6px_24px_var(--color-shadow-ink-12)]">
        <h2 className="flex h-68 items-center border-b border-[var(--color-white-25)] px-24 font-heading text-[1.25rem] font-extrabold xl:h-97 xl:px-33 xl:text-[1.75rem]">
          {detail.contactTitle}
        </h2>
        <ul className="flex flex-col gap-24 px-24 pt-28 pb-32 xl:gap-40 xl:px-33 xl:pt-44 xl:pb-50">
          {detail.contact.map((item) => {
            const { lines, type } = contactField(item.field, company);
            return (
              <li key={item.label} className="group flex items-start gap-18 xl:gap-28">
                <span className="relative flex size-48 shrink-0 items-center justify-center rounded-full bg-brand transition-[transform] duration-300 group-hover:-rotate-6 group-hover:scale-110 xl:size-64">
                  <PulseRing />
                  <Icon name={item.icon} className="size-22 xl:size-28" />
                </span>
                <div>
                  <h3 className="font-heading text-[1.0625rem] font-bold xl:text-[1.5625rem] xl:leading-34">{item.label}</h3>
                  <p className="mt-2 flex flex-col font-body text-[0.9375rem] leading-23 text-[var(--color-white-90)] xl:mt-4 xl:text-[1.4375rem] xl:leading-35">
                    {lines.map((line) => {
                      const href = contactHref(type, line);
                      return href ? (
                        <a key={line} href={href} className={`break-words transition-colors hover:text-brand ${type === "mailto" ? "xl:text-[1.3125rem]" : ""}`}>
                          {line}
                        </a>
                      ) : (
                        <span key={line}>{line}</span>
                      );
                    })}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
