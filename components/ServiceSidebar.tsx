import Link from "next/link";
import Icon from "@/components/Icon";
import { PulseRing } from "@/components/Loop";
import { contactField, contactHref, site as data, type ServiceItem } from "@/data";

const { services } = data;
const { detail } = services;

// Service list (active one first, as in the design) and the contact box.
export default function ServiceSidebar({ active }: { active: ServiceItem }) {
  const ordered = [active, ...services.items.filter((item) => item !== active)];

  return (
    <aside className="flex w-full flex-col gap-28 lg:w-360 lg:shrink-0 xl:w-479 xl:gap-36">
      <div data-reveal="left" className="overflow-hidden rounded-[calc(6*var(--spacing))] bg-white shadow-[0_6px_24px_rgba(10,40,50,0.08)]">
        <h2 className="flex h-64 items-center bg-deep px-24 font-heading text-[calc(20*var(--spacing))] font-extrabold text-white xl:h-91 xl:px-33 xl:text-[calc(28*var(--spacing))]">
          {detail.sidebarTitle}
        </h2>
        <ul className="px-6 pt-6 pb-6">
          {ordered.map((item) => {
            const isActive = item === active;
            return (
              <li key={item.title} className={isActive ? "" : "border-b border-line last:border-b-0"}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group flex h-56 items-center justify-between px-20 text-[calc(16*var(--spacing))] transition-colors xl:h-82 xl:px-30 xl:text-[calc(24*var(--spacing))] ${
                    isActive
                      ? "rounded-[calc(4*var(--spacing))] bg-brand font-heading font-semibold text-white shadow-[0_6px_14px_color-mix(in_srgb,var(--color-brand)_30%,transparent)]"
                      : "font-body text-slate hover:text-brand"
                  }`}
                >
                  {item.navLabel}
                  <Icon name="chevron-right" className="size-18 transition-transform group-hover:translate-x-4 xl:size-26" strokeWidth={2} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div data-reveal="left" data-reveal-delay="200" className="overflow-hidden rounded-[calc(6*var(--spacing))] bg-deep text-white shadow-[0_6px_24px_rgba(10,40,50,0.12)]">
        <h2 className="flex h-68 items-center border-b border-white/25 px-24 font-heading text-[calc(20*var(--spacing))] font-extrabold xl:h-97 xl:px-33 xl:text-[calc(28*var(--spacing))]">
          {detail.contactTitle}
        </h2>
        <ul className="flex flex-col gap-24 px-24 pt-28 pb-32 xl:gap-40 xl:px-33 xl:pt-44 xl:pb-50">
          {detail.contact.map((item) => {
            const { lines, type } = contactField(item.field);
            return (
              <li key={item.label} className="group flex items-start gap-18 xl:gap-28">
                <span className="relative flex size-48 shrink-0 items-center justify-center rounded-full bg-brand transition-[rotate,scale] duration-300 group-hover:-rotate-6 group-hover:scale-110 xl:size-64">
                  <PulseRing />
                  <Icon name={item.icon} className="size-22 xl:size-28" />
                </span>
                <div>
                  <h3 className="font-heading text-[calc(17*var(--spacing))] font-bold xl:text-[calc(25*var(--spacing))] xl:leading-34">{item.label}</h3>
                  <p className="mt-2 flex flex-col font-body text-[calc(15*var(--spacing))] leading-23 text-white/90 xl:mt-4 xl:text-[calc(23*var(--spacing))] xl:leading-35">
                    {lines.map((line) => {
                      const href = contactHref(type, line);
                      return href ? (
                        <a key={line} href={href} className={`break-words transition-colors hover:text-brand ${type === "mailto" ? "xl:text-[calc(21*var(--spacing))]" : ""}`}>
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
}
