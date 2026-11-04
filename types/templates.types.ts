export interface ThemeFonts {
  primary: string;
  heading: string;
  body: string;
  nav: string;
  display: string;
}

export interface ThemeData {
  fonts: ThemeFonts;
}

export interface SeoData {
  title: string;
  description: string;
}

export interface SiteMetadataData {
  title: string;
  siteName: string;
  description: string;
  icon: string;
  lang: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface SocialLink extends LinkItem {
  icon: string;
}

/** Name, logos and contact details: shared by the header, footer, contact page and sidebars. */
export interface CompanyData {
  name: string;
  logo: string;
  logoWhite: string;
  logoWidth: number;
  logoHeight: number;
  phone: string;
  email: string;
  /** "\n" splits the address over two lines */
  address: string;
  /** "Mon - Sat : 08:00 AM - 07:00 PM": days and hours split at " : " */
  timing: string;
  socialLinks: SocialLink[];
  /** "{query}" is filled with the address */
  mapEmbedUrl: string;
  mapOpenUrl: string;
}

/** Screen-reader labels and small shared texts; "{n}" / "{name}" are filled in by the components. */
export interface GlobalUIData {
  mainNav: string;
  openMenu: string;
  closeMenu: string;
  breadcrumb: string;
  previous: string;
  next: string;
  goToSlide: string;
  pagination: string;
  previousPage: string;
  nextPage: string;
  page: string;
  openImage: string;
  close: string;
  previousImage: string;
  nextImage: string;
  closeMessage: string;
  socialProfile: string;
  breadcrumbImage: string;
  months: string[];
}

/** Select lists and messages shared by the contact and quote forms. */
export interface FormOptionsData {
  cities: string[];
  shipmentTypes: string[];
  requiredError: string;
  emailError: string;
  phoneError: string;
  sending: string;
  /** added after the placeholder of required fields */
  requiredMark: string;
}

export interface BreadcrumbData {
  title: string;
  seo?: SeoData;
  paths: LinkItem[];
}

export interface ButtonData {
  buttonText: string;
  buttonUrl: string;
}

export interface NotFoundData extends ButtonData {
  seo: SeoData;
  code: string;
  title: string;
  description: string;
}

/** A company field shown with an icon: "address", "phone", "email" (or "emails") or "timing". */
export type ContactField = string;

export interface ContactItem {
  icon: string;
  field: ContactField;
}

export interface FooterData {
  description: string;
  /** ids from company.socialLinks */
  socials: string[];
  quickLinksTitle: string;
  quickLinks: LinkItem[];
  servicesTitle: string;
  /** how many services are linked */
  servicesCount: number;
  contactTitle: string;
  contact: ContactItem[];
  /** "{year}" is replaced with the current year */
  copyrightText: string;
}

export interface CommonData {
  theme: ThemeData;
  metadata: SiteMetadataData;
  company: CompanyData;
  globalUI: GlobalUIData;
  formOptions: FormOptionsData;
  aboutBreadcrumb: BreadcrumbData;
  servicesBreadcrumb: BreadcrumbData;
  serviceDetailBreadcrumb: BreadcrumbData;
  blogsBreadcrumb: BreadcrumbData;
  blogDetailBreadcrumb: BreadcrumbData;
  teamBreadcrumb: BreadcrumbData;
  testimonialsBreadcrumb: BreadcrumbData;
  galleryBreadcrumb: BreadcrumbData;
  quoteBreadcrumb: BreadcrumbData;
  contactBreadcrumb: BreadcrumbData;
  notFound: NotFoundData;
  Footer: FooterData;
}

// ── Sections ──

/** "—— LABEL" eyebrow, a title with a coloured part and the text under it. */
export interface SectionIntroData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface HeaderData extends ButtonData {
  /** ids from company.socialLinks */
  topbarSocials: string[];
  nav: LinkItem[];
}

export interface IconCard {
  icon: string;
  title: string;
  description: string;
}

export interface HeroData extends SectionIntroData, ButtonData {
  image: string;
  features: IconCard[];
}

export interface ImagePair {
  main: string;
  secondary: string;
  mainAlt: string;
  secondaryAlt: string;
}

export interface AboutUsData extends ButtonData {
  label: string;
  title: string;
  titleHighlight: string;
  paragraphs: string[];
  images: ImagePair;
  experience: { value: string; label: string; icon: string };
  features: IconCard[];
  help: { label: string; icon: string };
}

export interface StatsData {
  background: string;
  items: { icon: string; value: string; label: string }[];
}

export interface ServiceCard {
  url: string;
  title: string;
  description: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  url: string;
  title: string;
  /** overview title on the detail page, when it differs from the title */
  detailTitle?: string;
  navLabel: string;
  icon: string;
  excerpt: string;
  image: string;
  paragraphs: string[];
  features: IconCard[];
  benefits: {
    title: string;
    titleHighlight: string;
    description: string;
    items: { title: string; description: string }[];
  };
}

export interface ServicesData extends SectionIntroData {
  readMore: string;
  perPage: number;
  /** the four image cards on the home page */
  cards: ServiceCard[];
  /** text under the title on the services page */
  pageDescription: string;
  items: ServiceItem[];
}

export interface ServiceDetailData {
  sidebarTitle: string;
  contactTitle: string;
  contact: (ContactItem & { label: string })[];
  overviewLabel: string;
  benefitsLabel: string;
}

export interface WhyChooseUsData extends SectionIntroData {
  images: ImagePair;
  items: IconCard[];
}

export interface CtaData extends SectionIntroData, ButtonData {
  background: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface TestimonialsData extends SectionIntroData {
  perPage: number;
  items: TestimonialItem[];
}

export interface BlogPost {
  id: string;
  url: string;
  title: string;
  /** "YYYY-MM-DD" */
  date: string;
  comments: number;
  author: string;
  excerpt: string;
  image: string;
  thumbnail: string;
  cover: string;
  intro: string[];
  quote: { text: string; author: string };
  body: string[];
  gallery: string[];
  conclusion: string[];
}

export interface BlogsData extends SectionIntroData {
  readMore: string;
  perPage: number;
  posts: BlogPost[];
}

export interface BlogDetailData {
  commentsLabel: string;
  latestTitle: string;
  latestCount: number;
  /** wraps the pull quote, e.g. "“{quote}”" */
  quoteFormat: string;
  /** line under the pull quote, e.g. "— {author}" */
  quoteAuthorFormat: string;
  advice: ButtonData & { label: string; title: string };
}

export interface TeamData extends SectionIntroData {
  perPage: number;
  members: { name: string; role: string; image: string }[];
  socials: SocialLink[];
}

export interface GalleryData extends SectionIntroData {
  perPage: number;
  images: { id: string; label: string; image: string }[];
}

export interface FormField {
  name: string;
  type: string;
  placeholder: string;
  icon: string;
  required?: boolean;
  /** select lists: "services", "cities" or "shipmentTypes" */
  options?: string;
  /** spans both columns */
  full?: boolean;
}

export interface FormData {
  title: string;
  titleHighlight: string;
  description: string;
  button: string;
  successTitle: string;
  success: string;
  fields: FormField[];
}

export interface InfoCard extends ContactItem {
  title: string;
  /** shows the opening hours under the lines */
  showTiming?: boolean;
  note?: string;
}

export interface ContactData extends SectionIntroData {
  form: FormData;
  infoCards: InfoCard[];
  image: string;
  imageAlt: string;
  map: { label: string; alt: string };
  highlights: IconCard[];
}

export interface QuoteData extends SectionIntroData {
  form: FormData;
  image: string;
  imageAlt: string;
  imagePoints: IconCard[];
  assistance: {
    title: string;
    titleHighlight: string;
    description: string;
    cards: InfoCard[];
  };
  highlights: IconCard[];
}

type Variants<T> = { variants: Record<string, T> };

export interface LogisticsSections {
  Header: Variants<HeaderData>;
  Hero: Variants<HeroData>;
  AboutUs: Variants<AboutUsData>;
  Stats: Variants<StatsData>;
  Services: Variants<ServicesData>;
  ServiceDetail: Variants<ServiceDetailData>;
  WhyChooseUs: Variants<WhyChooseUsData>;
  Cta: Variants<CtaData>;
  Testimonials: Variants<TestimonialsData>;
  Blogs: Variants<BlogsData>;
  BlogDetail: Variants<BlogDetailData>;
  Team: Variants<TeamData>;
  Gallery: Variants<GalleryData>;
  Contact: Variants<ContactData>;
  Quote: Variants<QuoteData>;
}

export interface TemplateComponentEntry {
  key: string;
  component: string;
}

export interface TemplateComponentsData {
  shared: {
    Header: string;
    Footer: string;
  };
  pages: Record<string, { components: TemplateComponentEntry[] }>;
}

export interface LogisticsTemplateData {
  common: CommonData;
  categories: {
    Logistics: {
      sections: LogisticsSections;
      templateComponents: TemplateComponentsData;
    };
  };
}
