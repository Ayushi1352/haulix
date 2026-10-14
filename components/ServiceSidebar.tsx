import Link from "next/link";
import Icon from "@/components/Icon";
import { contactHref, site as data } from "@/data";

const { services } = data;
const { detail } = services;

// Service list (active one first, as in the design) and the contact box.
export default function ServiceSidebar({ activeSlug }: { activeSlug: string }) {
  const active = services.items.find((item) => item.slug === activeSlug);
  const ordered = active ? [active, ...services.items.filter((item) => item !== active)] : services.items;

  return (
    <aside className="flex w-full flex-col gap-28 lg:w-360 lg:shrink-0 xl:w-479 xl:gap-36">
      <div className="overflow-hidden rd-6 bg-white shadow-[0_6px_24px_rgba(10,40,50,0.08)]">
        <h2 className="flex h-64 items-center bg-deep px-24 font-jakarta fs-20 font-extrabold text-white xl:h-91 xl:px-33 xl:fs-28">
          {detail.sidebarTitle}
        </h2>
        <ul className="px-6 pt-6 pb-6">
          {ordered.map((item) => {
            const isActive = item.slug === activeSlug;
            return (
              <li key={item.slug} className={isActive ? "" : "border-b border-[#e8ebee] last:border-b-0"}>
                <Link
                  href={`/services/${item.slug}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex h-56 items-center justify-between px-20 fs-16 transition-colors xl:h-82 xl:px-30 xl:fs-24 ${
                    isActive
                      ? "rd-4 bg-[#a01a22] font-jakarta font-semibold text-white shadow-[0_6px_14px_rgba(160,26,34,0.3)]"
                      : "font-poppins text-[#4a5560] hover:text-[#a01a22]"
                  }`}
                >
                  {item.navLabel}
                  <Icon name="chevron-right" className="size-18 xl:size-26" strokeWidth={2} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="overflow-hidden rd-6 bg-deep text-white shadow-[0_6px_24px_rgba(10,40,50,0.12)]">
        <h2 className="flex h-68 items-center border-b border-white/25 px-24 font-jakarta fs-20 font-extrabold xl:h-97 xl:px-33 xl:fs-28">
          {detail.contactTitle}
        </h2>
        <ul className="flex flex-col gap-24 px-24 pt-28 pb-32 xl:gap-34 xl:px-33 xl:pt-40 xl:pb-46">
          {detail.contact.map((item) => (
            <li key={item.label} className="flex items-start gap-18 xl:gap-28">
              <span className="flex size-60 shrink-0 items-center justify-center rounded-full bg-[#c0222a] xl:size-85">
                <Icon name={item.icon} className="size-26 xl:size-38" />
              </span>
              <div>
                <h3 className="font-jakarta fs-17 font-bold xl:fs-24 xl:leading-32">{item.label}</h3>
                <p className="mt-2 flex flex-col font-poppins fs-15 leading-23 text-white/90 xl:mt-4 xl:fs-21 xl:leading-32">
                  {item.lines.map((line) => {
                    const href = contactHref(item.type, line);
                    return href ? (
                      <a key={line} href={href} className="break-words transition-colors hover:text-white">
                        {line}
                      </a>
                    ) : (
                      <span key={line}>{line}</span>
                    );
                  })}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
