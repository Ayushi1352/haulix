import Image from "next/image";
import Link from "next/link";
import type { CompanyData, FooterData, ServiceItem } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { contactField, contactHref, fill, oneLineAddress, socialLinks } from "@/components/ui/text";

/** Fills `{year}` in the copyright line; cached so the footer can still be prerendered. */
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

const LinkColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => {
  return (
    <div>
      <h3 className="font-body text-[1.375rem] leading-30 font-semibold tracking-[-0.01em] text-[var(--color-white)] xl:text-[1.625rem] xl:leading-36">{title}</h3>
      <span className="mt-10 block h-3 w-44 bg-brand xl:mt-14 xl:h-4 xl:w-53" />
      <ul className="mt-22 flex flex-col gap-12 xl:mt-30 xl:gap-17">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group flex items-center gap-14 font-body text-[1rem] leading-26 text-[var(--color-white-85)] transition-colors hover:text-brand xl:gap-17 xl:text-[1.1875rem] xl:leading-27"
            >
              <Icon
                name="LuChevronRight"
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
};

export const Footer = async ({ data: footer, company, services = [] }: { data?: FooterData; company: CompanyData; services?: ServiceItem[] }) => {
  if (!footer) return null;
  const socials = socialLinks(footer.socials, company);
  // The first few services, linked to their detail pages.
  const serviceLinks = services.slice(0, footer.servicesCount).map((item) => ({ label: item.navLabel, href: item.url }));
  const quickLinks = footer.quickLinks.map((link) => ({ label: link.label, href: link.url }));
  // Company contact details in the order templates.json lists them; the address sits on one line.
  const contactItems = footer.contact.map(({ icon, field }) => {
    const { lines, type } = contactField(field, company);
    return { icon, type, lines: field === "address" ? [oneLineAddress(company)] : lines };
  });
  const copyright = fill(footer.copyrightText, { year: await currentYear() });

  return (
    <footer className="bg-deep text-[var(--color-white)]">
      <div data-reveal-stagger className="grid gap-40 px-16 pt-56 pb-44 sm:grid-cols-2 sm:gap-x-48 sm:px-24 lg:px-40 xl:grid-cols-[37.75rem_20.375rem_25.25rem_1fr] xl:gap-0 xl:pr-40 xl:pl-72 xl:pt-54 xl:pb-49">
        <div>
          {/* Same size and left edge as the header logo. */}
          <Link href="/" aria-label={company.name} className="block w-176 sm:w-220 xl:mt-8 xl:w-428">
            <Image
              src={company.logoWhite}
              alt={company.name}
              width={company.logoWidth}
              height={company.logoHeight}
              sizes="(min-width: 1024px) 25vw, 300px"
              className="h-auto w-full"
            />
          </Link>
          <p className="mt-22 max-w-440 font-body xl:max-w-none text-[1rem] leading-26 text-[var(--color-white-90)] xl:mt-31 xl:text-[1.3125rem] xl:leading-30 xl:whitespace-pre-line">
            {footer.description}
          </p>
          <ul className="mt-24 flex items-center gap-16 xl:mt-26 xl:gap-24">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-44 items-center justify-center rounded-full border-2 border-[var(--color-white-85)] transition-[background-color,border-color,transform] duration-300 hover:-translate-y-4 hover:border-brand hover:bg-brand xl:size-55"
                >
                  <Icon name={social.icon} className="size-18 xl:size-24" strokeWidth={2} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <LinkColumn title={footer.quickLinksTitle} links={quickLinks} />
        <LinkColumn title={footer.servicesTitle} links={serviceLinks} />

        <div>
          <h3 className="font-body text-[1.375rem] leading-30 font-semibold tracking-[-0.01em] text-[var(--color-white)] xl:text-[1.625rem] xl:leading-36">
            {footer.contactTitle}
          </h3>
          <span className="mt-10 block h-3 w-44 bg-brand xl:mt-14 xl:h-4 xl:w-53" />
          <ul className="mt-24 flex flex-col gap-22 xl:mt-32 xl:gap-31">
            {contactItems.map(({ icon, lines, type }) => {
              return (
                <li key={icon} className="group flex items-center gap-18 xl:gap-31">
                  <span className="flex size-50 shrink-0 items-center justify-center rounded-full bg-brand transition-[transform] duration-300 group-hover:-rotate-6 group-hover:scale-110 xl:size-62">
                    <Icon name={icon} className="size-22 xl:size-27" />
                  </span>
                  <span className="flex flex-col font-body text-[0.9375rem] leading-24 text-[var(--color-white-90)] xl:text-[1.1875rem] xl:leading-29">
                    {lines.map((line) => {
                      const href = contactHref(type, line);
                      return href ? (
                        <a key={line} href={href} className="transition-colors hover:text-brand">
                          {line}
                        </a>
                      ) : (
                        <span key={line}>{line}</span>
                      );
                    })}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-white-15)]">
        <p className="px-20 py-22 text-center font-body text-[0.875rem] text-[var(--color-white-85)] xl:py-26 xl:text-[1.1875rem]">{copyright}</p>
      </div>
    </footer>
  );
};
