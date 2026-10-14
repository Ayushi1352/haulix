import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Cta from "@/components/Cta";
import Testimonials from "@/components/Testimonials";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <WhyChoose />
      <Cta />
      <Testimonials />
      <Blogs />
    </>
  );
}
