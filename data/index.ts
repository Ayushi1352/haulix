import siteData from "./site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type HaulixSchema = typeof siteData.Haulix;
export type HaulixSections = HaulixSchema["sections"];

// ── Section variant data models ──
export type HaulixHeaderData = HaulixSections["Header"]["variants"]["HaulixHeader1"];
export type HaulixFooterData = HaulixSections["Footer"]["variants"]["HaulixFooter1"];
export type HaulixBannerData = HaulixSections["Banner"]["variants"]["HaulixBanner1"];
export type HaulixAboutData = HaulixSections["About"]["variants"]["HaulixAbout1"];
export type HaulixServicesData = HaulixSections["Services"]["variants"]["HaulixServices1"];
export type HaulixBlogData = HaulixSections["Blog"]["variants"]["HaulixBlog1"];
export type HaulixTestimonialData = HaulixSections["Testimonial"]["variants"]["HaulixTestimonial1"];

// ── Item-level types ──
export type NavLink = HaulixHeaderData["nav"][number];
export type ServiceItem = HaulixServicesData["items"][number];
export type BlogPost = HaulixBlogData["posts"][number];
export type TestimonialItem = HaulixTestimonialData["items"][number];
const sec = siteData.Haulix.sections;

const site = {
  // Colours and fonts; app/layout.tsx and scripts/fonts.mjs read them.
  theme: siteData.Haulix.theme,
  site: sec.Header.variants.HaulixHeader1.site,
  company: sec.Topbar.variants.HaulixTopbar1,
  header: sec.Header.variants.HaulixHeader1,
  footer: sec.Footer.variants.HaulixFooter1,
  hero: sec.Banner.variants.HaulixBanner1,
  pageBanner: sec.PageBanner.variants.HaulixPageBanner1,
  pages: sec.PageBanner.variants.HaulixPageBanner1.pages,
  about: sec.About.variants.HaulixAbout1,
  stats: sec.CompanyStatistics.variants.HaulixStats1,
  services: sec.Services.variants.HaulixServices1,
  whyChoose: sec.WhyChooseUs.variants.HaulixWhyChooseUs1,
  cta: sec.Cta.variants.HaulixCta1,
  testimonials: sec.Testimonial.variants.HaulixTestimonial1,
  blog: sec.Blog.variants.HaulixBlog1,
  team: sec.Team.variants.HaulixTeam1,
  gallery: sec.Gallery.variants.HaulixGallery1,
  contact: sec.Contact.variants.HaulixContact1,
  quote: sec.Quote.variants.HaulixQuote1,
  formOptions: sec.FormOptions.variants.HaulixFormOptions1,
  Haulix: siteData.Haulix,
};

// ── Screen-reader labels from site.json; "{n}"-style slots are filled from `values`. ──
export type LabelKey = keyof typeof siteData.Haulix.labels;
export const label = (key: LabelKey, values: Record<string, string | number> = {}) =>
  siteData.Haulix.labels[key].replace(/\{(\w+)\}/g, (slot, name: string) => (name in values ? String(values[name]) : slot));

// Browser tab title: "<page> | <site name>"
export const pageTitle = (title: string) => `${title} | ${site.site.name}`;

// Post dates are stored once as "YYYY-MM-DD"; "short" gives "24 Apr 2025", "long" gives "April 24, 2025".
// Month names come from site.json (site.months).
const MONTHS = site.site.months;
export const formatDate = (iso: string, style: "short" | "long" = "short") => {
  const [year, month, day] = iso.split("-").map(Number);
  const name = MONTHS[month - 1];
  return style === "long" ? `${name} ${day}, ${year}` : `${day} ${name.slice(0, 3)} ${year}`;
};

// Phone numbers and emails become tel: / mailto: links.
export const contactHref = (type: string | undefined, value: string) =>
  type === "tel" ? `tel:${value.replace(/[^\d+]/g, "")}` : type === "mailto" ? `mailto:${value}` : undefined;

// ── Company contact details: kept once, in the Topbar section ──
const { company } = site;

// The lines (and link type) of a contact field; sections name the field in site.json.
export const contactField = (field: string): { lines: string[]; type?: "tel" | "mailto" } => {
  if (field === "phone") return { lines: [company.phone], type: "tel" };
  if (field === "email" || field === "emails") return { lines: [company.email], type: "mailto" };
  return { lines: company.address.split("\n") };
};

// The address on one line, as in the top bar.
export const companyAddress = company.address.replace(/\s*\n\s*/g, " ");

// Social links by icon name, in the order a section lists them.
export const socialLinks = (icons: string[]) =>
  icons.flatMap((icon) => company.social.filter((social) => social.icon === icon));

const mapQuery = encodeURIComponent(companyAddress);
export const companyMap = {
  href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  embed: `https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`,
};

// Blog posts, newest first.
export const latestPosts = (count: number) =>
  [...site.blog.posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, count);

// Cards alternate red / teal as a checkerboard in a grid of `columns`.
export const isRedTile = (index: number, columns: number) => (Math.floor(index / columns) + (index % columns)) % 2 === 0;

export type SiteData = typeof site;
export { site };
export default siteData;
