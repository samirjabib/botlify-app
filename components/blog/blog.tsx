import { Title } from "@/design-system/index";
import BlogCard from "./blog-card";
import BlogHero from "./blog-hero";
import BlogList from "./blog-list";

const Blog = () => {
  return (
    <section className="">
      <Title
        as="h1"
        size={"mainTitle"}
        className="wrapper-mobile sm:wrapper mt-12"
      >
        Blog
      </Title>
      <BlogHero />
      <BlogList />
      <div></div>
    </section>
  );
};

export default Blog;
