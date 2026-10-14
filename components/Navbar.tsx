"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import { site as data } from "@/data";

const { site, header } = data;
const { topbar, nav, button } = header;

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);


  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="hidden bg-maroon font-roboto text-white md:block">
        <div className="flex h-44 items-center justify-between gap-16 px-24 fs-14 lg:px-40 xl:h-66 xl:pr-88 xl:pl-83 xl:fs-21 xl:tracking-[0.005em]">
          <p className="flex min-w-0 items-center gap-10 xl:gap-17">
            <Icon name="pin" className="size-18 shrink-0 xl:size-32" />
            <span className="truncate">{topbar.address}</span>
          </p>
          <div className="flex shrink-0 items-center">
            <span className="hidden h-24 w-px bg-white/45 lg:block xl:h-30 xl:w-2" />
            <ul className="hidden items-center gap-22 px-28 lg:flex xl:gap-39 xl:px-52">
              {topbar.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="block transition-opacity hover:opacity-75"
                  >
                    <Icon name={social.icon} className="size-16 xl:size-26" strokeWidth={2.2} />
                  </a>
                </li>
              ))}
            </ul>
            <span className="hidden h-24 w-px bg-white/45 lg:block xl:h-30 xl:w-2" />
            <a
              href={`mailto:${topbar.email}`}
              className="flex items-center gap-10 transition-opacity hover:opacity-80 lg:pl-28 xl:gap-28 xl:pl-54"
            >
              <Icon name="mail-line" className="size-18 xl:size-30" strokeWidth={1.6} />
              {topbar.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white shadow-[0_1px_0_rgba(10,50,60,0.06)]">
        <div className="flex h-76 items-center justify-between gap-16 px-16 sm:h-88 sm:px-24 lg:px-40 xl:h-146 xl:pr-56 xl:pl-72">
          <Link href="/" aria-label={site.name} className="block w-176 shrink-0 sm:w-220 xl:w-428" onClick={() => setOpen(false)}>
            <Image
              src={site.logo}
              alt={site.name}
              width={1972}
              height={404}
              priority
              sizes="(min-width: 1280px) 22vw, 240px"
              className="h-auto w-full"
            />
          </Link>

          <nav aria-label="Main" className="hidden xl:ml-74 xl:mr-auto xl:block">
            <ul className="flex items-center gap-43">
              {nav.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative block font-roboto fs-24 leading-34 font-medium transition-colors hover:text-brand ${
                        active ? "text-brand" : "text-[#0e2e3a]"
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
            <span className="hidden h-86 w-2 bg-[#e6e8ea] xl:mr-38 xl:block" />
            <Link
              href={button.href}
              className="hidden h-44 items-center justify-center gap-10 rounded-full bg-maroon px-22 font-roboto fs-15 font-medium text-white transition-colors hover:bg-brand sm:inline-flex xl:mt-6 xl:h-82 xl:w-252 xl:gap-16 xl:px-0 xl:fs-25"
            >
              {button.label}
              <Icon name="arrow-right" className="size-16 xl:size-26" strokeWidth={2} />
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="flex size-44 items-center justify-center rounded-full bg-maroon text-white xl:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="size-22" strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute inset-x-0 top-full border-t border-line bg-white shadow-[0_18px_40px_rgba(10,50,60,0.14)] xl:hidden">
          <ul className="flex flex-col px-16 py-12 sm:px-24 lg:px-40">
            {nav.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href} className="border-b border-line last:border-b-0">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between py-14 font-roboto fs-17 font-medium ${
                      active ? "text-brand" : "text-[#0e2e3a]"
                    }`}
                  >
                    {link.label}
                    <Icon name="chevron-right" className="size-18" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-12 border-t border-line px-16 py-18 font-roboto fs-15 text-[#0e2e3a] sm:px-24 lg:px-40">
            <Link
              href={button.href}
              onClick={() => setOpen(false)}
              className="inline-flex h-48 items-center justify-center gap-10 rounded-full bg-maroon fs-16 font-medium text-white sm:hidden"
            >
              {button.label}
              <Icon name="arrow-right" className="size-18" strokeWidth={2} />
            </Link>
            <a href={`mailto:${topbar.email}`} className="flex items-center gap-10">
              <Icon name="mail" className="size-18 text-brand" />
              {topbar.email}
            </a>
            <p className="flex items-start gap-10">
              <Icon name="pin" className="mt-1 size-18 shrink-0 text-brand" />
              {topbar.address}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
