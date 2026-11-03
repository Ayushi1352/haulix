import type { BlogPost, CompanyData, SocialLink } from "@/types/templates.types";

/** Fills "{key}" placeholders from templates.json, e.g. fill("Go to slide {n}", { n: 2 }) */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}

/** Post dates are stored once as "YYYY-MM-DD"; "short" gives "24 Apr 2025", "long" gives "April 24, 2025". */
export function formatDate(iso: string, months: string[], style: "short" | "long" = "short") {
  const [year, month, day] = iso.split("-").map(Number);
  const name = months[month - 1];
  return style === "long" ? `${name} ${day}, ${year}` : `${day} ${name.slice(0, 3)} ${year}`;
}

/** Phone numbers and emails become tel: / mailto: links. */
export function contactHref(type: string | undefined, value: string) {
  return type === "tel" ? `tel:${value.replace(/[^\d+]/g, "")}` : type === "mailto" ? `mailto:${value}` : undefined;
}

/** The address on one line, as in the top bar and the footer. */
export function oneLineAddress(company: CompanyData) {
  return company.address.replace(/\s*\n\s*/g, " ");
}

/** The lines (and link type) of a company field that a section names in templates.json. */
export function contactField(field: string, company: CompanyData): { lines: string[]; type?: "tel" | "mailto" } {
  if (field === "phone") return { lines: [company.phone], type: "tel" };
  if (field === "email" || field === "emails") return { lines: [company.email], type: "mailto" };
  // "Mon - Sat : 08:00 AM - 07:00 PM" → days on one line, hours on the next.
  if (field === "timing") return { lines: company.timing.split(/\s+:\s+/) };
  return { lines: company.address.split("\n") };
}

/** Social links by id, in the order a section lists them. */
export function socialLinks(ids: string[], company: CompanyData): SocialLink[] {
  return ids.flatMap((id) => company.socialLinks.filter((social) => social.id === id));
}

/** Map links for the company address ("{query}" in the URL templates). */
export function mapUrl(template: string, company: CompanyData) {
  return fill(template, { query: encodeURIComponent(oneLineAddress(company)) });
}

/** Blog posts, newest first. */
export function latestPosts(posts: BlogPost[], count: number) {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, count);
}

/** Cards alternate red / teal as a checkerboard in a grid of `columns`. */
export function isRedTile(index: number, columns: number) {
  return (Math.floor(index / columns) + (index % columns)) % 2 === 0;
}
