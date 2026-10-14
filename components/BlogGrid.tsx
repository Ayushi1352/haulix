import BlogCard from "@/components/BlogCard";
import BlogsHeading from "@/components/BlogsHeading";
import { site as data } from "@/data";

const { blog } = data;

export default function BlogGrid() {
  // `page.order` lists which post goes in each slot of the grid.
  const posts = blog.page.order.map((index) => blog.posts[index]).filter(Boolean);

  return (
    <section className="bg-white pt-64 pb-72 sm:pt-80 xl:pt-85 xl:pb-121">
      <BlogsHeading />
      <div className="mt-32 grid gap-24 px-20 sm:px-40 md:grid-cols-2 lg:px-64 xl:mt-43 xl:grid-cols-4 xl:gap-x-27 xl:gap-y-45 xl:pr-96 xl:pl-118">
        {posts.map((post, index) => (
          <BlogCard key={`${post.slug}-${index}`} post={post} />
        ))}
      </div>
    </section>
  );
}
