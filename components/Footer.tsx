import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { contactHref, site as data } from "@/data";

const { site, footer } = data;

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-poppins fs-22 leading-30 font-semibold tracking-[-0.01em] text-white xl:fs-26 xl:leading-36">{title}</h3>
      <span className="mt-10 block h-3 w-44 bg-[#b52a2e] xl:mt-14 xl:h-4 xl:w-53" />
      <ul className="mt-22 flex flex-col gap-12 xl:mt-30 xl:gap-17">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group flex items-center gap-14 font-poppins fs-16 leading-26 text-white/85 transition-colors hover:text-white xl:gap-17 xl:fs-19 xl:leading-27"
            >
              <Icon
                name="chevron-right"
                className="size-14 shrink-0 transition-transform group-hover:translate-x-2 xl:size-17"
                strokeWidth={2.4}
              />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="grid gap-40 px-20 pt-56 pb-44 sm:grid-cols-2 sm:gap-x-48 sm:px-40 lg:px-64 xl:grid-cols-[37.75rem_20.375rem_25.25rem_1fr] xl:gap-0 xl:pr-40 xl:pl-93 xl:pt-54 xl:pb-53">
        <div>
          <Link href="/" aria-label={site.name} className="block w-260 xl:mt-8 xl:w-465">
            <Image
              src={site.logoWhite}
              alt={site.name}
              width={1972}
              height={404}
              sizes="(min-width: 1280px) 25vw, 300px"
              className="h-auto w-full"
            />
          </Link>
          <p className="mt-22 max-w-440 font-poppins xl:max-w-none fs-16 leading-26 text-white/90 xl:mt-31 xl:fs-21 xl:leading-30 xl:whitespace-pre-line">
            {footer.description}
          </p>
          <ul className="mt-24 flex items-center gap-16 xl:mt-26 xl:gap-24">
            {footer.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex size-44 items-center justify-center rounded-full border-2 border-white/85 transition-colors hover:border-[#b52a2e] hover:bg-[#b52a2e] xl:size-55"
                >
                  <Icon name={social.icon} className="size-18 xl:size-24" strokeWidth={2} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <LinkColumn title={footer.quickLinks.title} links={footer.quickLinks.links} />
        <LinkColumn title={footer.serviceLinks.title} links={footer.serviceLinks.links} />

        <div>
          <h3 className="font-poppins fs-22 leading-30 font-semibold tracking-[-0.01em] text-white xl:fs-26 xl:leading-36">
            {footer.contact.title}
          </h3>
          <span className="mt-10 block h-3 w-44 bg-[#b52a2e] xl:mt-14 xl:h-4 xl:w-53" />
          <ul className="mt-24 flex flex-col gap-22 xl:mt-32 xl:gap-31">
            {footer.contact.items.map((item) => (
              <li key={item.icon} className="flex items-center gap-18 xl:gap-31">
                <span className="flex size-50 shrink-0 items-center justify-center rounded-full bg-[#7e2222] xl:size-62">
                  <Icon name={item.icon} className="size-22 xl:size-27" />
                </span>
                <span className="flex flex-col font-poppins fs-15 leading-24 text-white/90 xl:fs-19 xl:leading-29">
                  {item.lines.map((line) => {
                    const href = contactHref(item.type, line);
                    return href ? (
                      <a key={line} href={href} className="transition-colors hover:text-white">
                        {line}
                      </a>
                    ) : (
                      <span key={line}>{line}</span>
                    );
                  })}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="px-20 py-22 text-center font-poppins fs-14 text-white/85 xl:py-30 xl:fs-19">{footer.copyright}</p>
      </div>
    </footer>
  );
}
