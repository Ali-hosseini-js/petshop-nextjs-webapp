import BlogCard from "@/module/BlogCard";
import { blogs } from "@/data/blog";

function Blog() {
  return (
    <div className="flex flex-wrap justify-between py-14">
      {blogs.map((blog, index) => (
        <BlogCard key={index} data={blog} />
      ))}
    </div>
  );
}

export default Blog;
