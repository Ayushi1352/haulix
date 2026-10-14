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
  site: sec.Header.variants.HaulixHeader1.site,
  header: sec.Header.variants.HaulixHeader1,
  footer: sec.Footer.variants.HaulixFooter1,
  hero: sec.Banner.variants.HaulixBanner1,
  pageBanner: sec.PageBanner.variants.HaulixPageBanner1,
  pages: sec.PageBanner.variants.HaulixPageBanner1.pages,
  about: sec.About.variants.HaulixAbout1,
  stats: sec.Stats.variants.HaulixStats1,
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

// Browser tab title: "<page> | <site name>"
export const pageTitle = (title: string) => `${title} | ${site.site.name}`;

// Phone numbers and emails become tel: / mailto: links.
export const contactHref = (type: string | undefined, value: string) =>
  type === "tel" ? `tel:${value.replace(/[^\d+]/g, "")}` : type === "mailto" ? `mailto:${value}` : undefined;

export type SiteData = typeof site;
export { site };
export default siteData;
