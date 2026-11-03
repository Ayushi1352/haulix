"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CompanyData, GlobalUIData, HeaderData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { oneLineAddress, socialLinks } from "@/components/ui/text";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export const Header = ({ data, company, ui }: { data?: HeaderData; company: CompanyData; ui: GlobalUIData }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [menuTop, setMenuTop] = useState(0);

  // While the mobile menu is open it fills the screen below the header and the page behind it is locked.
  useEffect(() => {
    if (!open) return;
    const place = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
      else setMenuTop(headerRef.current?.getBoundingClientRect().bottom ?? 0);
    };
    place();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("resize", place);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("resize", place);
    };
  }, [open]);

  if (!data) return null;
  const { nav } = data;
  const companyAddress = oneLineAddress(company);
  const topbarSocials = socialLinks(data.topbarSocials, company);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 md:-top-44 xl:-top-66">
      {/* Top bar */}
      <div className="hidden bg-brand font-nav text-[var(--color-white)] md:block">
        <div className="flex h-44 items-center justify-between gap-16 px-24 text-[0.875rem] lg:px-40 xl:h-66 xl:pr-88 xl:pl-83 xl:text-[1.3125rem] xl:tracking-[0.005em]">
          <p className="group flex min-w-0 items-center gap-10 xl:gap-17">
            <Icon name="FaMapMarkerAlt" className="size-18 shrink-0 transition-transform duration-300 group-hover:-translate-y-3 xl:size-32" />
            <span className="truncate">{companyAddress}</span>
          </p>
          <div className="flex shrink-0 items-center">
            <span className="hidden h-24 w-px bg-[var(--color-white-45)] lg:block xl:h-30 xl:w-2" />
            <ul className="hidden items-center gap-22 px-28 lg:flex xl:gap-39 xl:px-52">
              {topbarSocials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="-m-6 block rounded-full p-6 transition-colors hover:bg-[var(--color-white)] hover:text-brand"
                  >
                    <Icon name={social.icon} className="size-16 xl:size-26" strokeWidth={2.2} />
                  </a>
                </li>
              ))}
            </ul>
            <span className="hidden h-24 w-px bg-[var(--color-white-45)] lg:block xl:h-30 xl:w-2" />
            <a
              href={`mailto:${company.email}`}
              className="group flex items-center gap-10 underline-offset-4 transition-colors hover:underline lg:pl-28 xl:gap-28 xl:pl-54"
            >
              <Icon name="LuMail" className="size-18 transition-[transform] duration-300 group-hover:-rotate-12 group-hover:scale-125 xl:size-30" strokeWidth={1.6} />
              {company.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-[var(--color-white)] shadow-[0_1px_0_var(--color-shadow-teal-6)]">
        <div className="flex h-76 items-center justify-between gap-16 px-16 sm:h-88 sm:px-24 lg:px-40 xl:h-146 xl:pr-56 xl:pl-72">
          <Link href="/" aria-label={company.name} className="block w-176 shrink-0 sm:w-220 xl:w-428" onClick={() => setOpen(false)}>
            <Image
              src={company.logo}
              alt={company.name}
              width={company.logoWidth}
              height={company.logoHeight}
              priority
              sizes="(min-width: 1024px) 22vw, 240px"
              className="h-auto w-full"
            />
          </Link>

          <nav aria-label={ui.mainNav} className="hidden xl:ml-74 xl:mr-auto xl:block">
            <ul className="flex items-center gap-43">
              {nav.map((link) => {
                const active = isActive(pathname, link.url);
                return (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      aria-current={active ? "page" : undefined}
                      className={`relative block font-nav text-[1.5rem] leading-34 font-medium transition-colors hover:text-brand ${
                        active
                          ? "text-brand"
                          : "text-ink after:absolute after:inset-x-0 after:top-full after:mt-11 after:h-6 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100"
                      }`}
                    >
                      {link.label}
                      {active && <span className="absolute inset-x-0 top-full mt-11 h-6 bg-brand" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-12 xl:gap-0">
            <span className="hidden h-86 w-2 bg-line xl:mr-38 xl:block" />
            <Link
              href={data.buttonUrl}
              className="group hidden h-44 items-center justify-center gap-10 rounded-full border border-brand bg-brand px-22 font-nav text-[0.9375rem] font-medium text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-brand sm:inline-flex xl:mt-6 xl:h-82 xl:w-252 xl:gap-16 xl:px-0 xl:text-[1.5625rem]"
            >
              {data.buttonText}
              <Icon name="LuArrowRight" className="size-16 transition-transform group-hover:translate-x-4 xl:size-26" strokeWidth={2} />
            </Link>
            <button
              type="button"
              aria-label={open ? ui.closeMenu : ui.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="flex size-44 items-center justify-center rounded-full border border-brand bg-brand text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-brand xl:hidden"
            >
              <Icon name={open ? "LuX" : "LuMenu"} className="size-22" strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{ top: menuTop }}
          className="fixed inset-x-0 bottom-0 overflow-y-auto overscroll-contain border-t border-line bg-[var(--color-white)] xl:hidden"
        >
          <ul className="flex flex-col px-16 py-12 sm:px-24 lg:px-40">
            {nav.map((link) => {
              const active = isActive(pathname, link.url);
              return (
                <li key={link.id} className="border-b border-line last:border-b-0">
                  <Link
                    href={link.url}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between py-14 font-nav text-[1.0625rem] font-medium ${
                      active ? "text-brand" : "text-ink transition-colors hover:text-brand"
                    }`}
                  >
                    {link.label}
                    <Icon name="LuChevronRight" className="size-18" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-12 border-t border-line px-16 py-18 font-nav text-[0.9375rem] text-ink sm:px-24 lg:px-40">
            <Link
              href={data.buttonUrl}
              onClick={() => setOpen(false)}
              className="inline-flex h-48 items-center justify-center gap-10 rounded-full border border-brand bg-brand text-[1rem] font-medium text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-brand sm:hidden"
            >
              {data.buttonText}
              <Icon name="LuArrowRight" className="size-18" strokeWidth={2} />
            </Link>
            <a href={`mailto:${company.email}`} className="group flex items-center gap-10 transition-colors hover:text-brand">
              <Icon name="FaEnvelope" className="size-18 text-brand transition-[transform] duration-300 group-hover:-rotate-12 group-hover:scale-125" />
              {company.email}
            </a>
            <p className="group flex items-start gap-10">
              <Icon name="FaMapMarkerAlt" className="mt-1 size-18 shrink-0 text-brand transition-transform duration-300 group-hover:-translate-y-3" />
              {companyAddress}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
