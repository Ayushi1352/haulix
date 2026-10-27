import Carousel from "@/components/Carousel";
import { site as data } from "@/data";
import BlogCard from "./BlogCard";
import BlogsHeading from "./BlogsHeading";

const { blog } = data;

// On phones the arrows sit inside the card, centred on its image, so they never cover the text.
const arrow =
  "absolute top-105 z-10 flex size-40 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-[0_6px_20px_rgba(10,40,50,0.14)] transition-colors hover:bg-brand hover:text-white md:top-1/2 md:size-52 xl:-mt-43 xl:size-68";

export default function Blogs() {
  return (
    <section data-white-section className="py-64 sm:py-80 xl:py-120 bg-white [[data-white-section]+&]:pt-0!">
      <BlogsHeading />
      <div data-reveal="up" data-reveal-delay="250" className="mx-auto mt-32 px-20 sm:px-40 md:px-84 xl:mt-43 xl:pr-96 xl:pl-118">
        <Carousel
          label={blog.label}
          trackClass="[--n:1] md:[--n:2] xl:[--n:4] [--gap:calc(var(--spacing)*24)] xl:[--gap:calc(var(--spacing)*27)]"
          prevClass={`${arrow} left-12 md:-left-64 xl:-left-86`}
          nextClass={`${arrow} right-12 md:-right-64 xl:-right-85`}
          arrowIconClass="size-18 md:size-22 xl:size-28"
        >
          {blog.posts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
