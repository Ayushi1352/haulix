import Carousel from "@/components/Carousel";
import { site as data } from "@/data";
import BlogCard from "./BlogCard";
import BlogsHeading from "./BlogsHeading";

const { blog } = data;

const arrow =
  "absolute top-1/2 z-10 hidden size-52 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-[0_6px_20px_rgba(10,40,50,0.14)] transition-colors hover:bg-brand hover:text-white md:flex xl:-mt-43 xl:size-68";

export default function Blogs() {
  return (
    <section className="section-y bg-white">
      <BlogsHeading />
      <div className="mx-auto mt-32 px-20 sm:px-40 md:px-84 xl:mt-43 xl:pr-96 xl:pl-118">
        <Carousel
          label={blog.label}
          gridClass="grid gap-24 md:grid-cols-2 xl:grid-cols-4 xl:gap-27"
          slots={["", "hidden md:block", "hidden xl:block", "hidden xl:block"]}
          prevClass={`${arrow} md:-left-64 xl:-left-86`}
          nextClass={`${arrow} md:-right-64 xl:-right-85`}
          arrowIconClass="size-22 xl:size-28"
        >
          {blog.posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
