import BlogCard from "@/components/BlogCard";
import BlogsHeading from "@/components/BlogsHeading";
import Paginated from "@/components/Paginated";
import { site as data } from "@/data";

const { blog } = data;

export default function BlogGrid() {
  const { posts } = blog;

  return (
    <section data-white-section className="py-64 sm:py-80 xl:py-120 bg-white [[data-white-section]+&]:pt-0!">
      <BlogsHeading />
      <Paginated as="div" perPage={blog.perPage} className="mt-32 grid gap-24 px-20 sm:px-40 md:grid-cols-2 lg:px-64 xl:mt-43 xl:grid-cols-4 xl:gap-x-27 xl:gap-y-45 xl:pr-96 xl:pl-118">
        {posts.map((post, index) => (
          <BlogCard key={`${post.title}-${index}`} post={post} />
        ))}
      </Paginated>
    </section>
  );
}
