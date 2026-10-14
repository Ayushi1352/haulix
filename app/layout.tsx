import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Poppins, Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--ff-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--ff-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--ff-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--ff-inter",
  subsets: ["latin"],
  weight: ["800", "900"],
});

export const metadata: Metadata = {
  title: site.site.title,
  description: site.site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${poppins.variable} ${roboto.variable} ${inter.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
