import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Poppins, Roboto } from "next/font/google";
import rawData from "@/data/templates.json";
import type { LogisticsTemplateData } from "@/types/templates.types";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], style: ["normal", "italic"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-plus-jakarta-sans" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-poppins" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-roboto" });
const inter = Inter({ subsets: ["latin"], weight: ["800", "900"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-inter" });
const fontClasses = [plusJakartaSans, poppins, roboto, inter].map((font) => font.variable).join(" ");

const templateData: LogisticsTemplateData = rawData;
const sectionData = templateData.categories.Logistics.sections;
const commonData = templateData.common;

const { fonts } = commonData.theme;
const fontVariables = {
  "--font-primary": fonts.primary,
  "--font-heading": fonts.heading,
  "--font-body": fonts.body,
  "--font-nav": fonts.nav,
  "--font-display": fonts.display,
} as CSSProperties;

export const metadata: Metadata = {
  title: {
    default: commonData.metadata.title,
    template: `%s | ${commonData.metadata.siteName}`,
  },
  description: commonData.metadata.description,
  icons: {
    icon: commonData.metadata.icon,
    shortcut: commonData.metadata.icon,
    apple: commonData.metadata.icon,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={commonData.metadata.lang}
      style={fontVariables}
      data-scroll-behavior="smooth"
      // Root font size: 16px, and from 1024px up it follows the 1920px design (1 design px = 1/1920 of the screen).
      // Everything clickable gets the pointer; with reduced motion turned on nothing scrolls smoothly.
      className={`${fontClasses} scroll-smooth antialiased text-[16px] xl:text-[length:min(16px,calc(100vw/120))] [&_:where(a[href],button:not(:disabled),select,[role=button])]:cursor-pointer motion-reduce:scroll-auto`}
    >
      <body>
        <ScrollReveal />
        {/*
          The site never grows wider than the 1920px design (120rem = 1920px once the root
          font size stops growing), so on wide screens or when zoomed out it stays centred
          instead of stretching. Up to 1920px it is simply the full width.
        */}
        <div className="mx-auto flex min-h-screen w-full max-w-[120rem] flex-col overflow-x-clip bg-[var(--color-white)]">
          <Header data={sectionData.Header?.variants?.LogisticsHeader1} company={commonData.company} ui={commonData.globalUI} />
          <ScrollToTop>{children}</ScrollToTop>
          <Footer data={commonData.Footer} company={commonData.company} services={sectionData.Services?.variants?.LogisticsServices1?.items} />
        </div>
      </body>
    </html>
  );
}
