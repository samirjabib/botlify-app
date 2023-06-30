import { Title } from "@/design-system/index";
import BlogCard from "./blog-card";
import BlogHero from "./blog-hero";

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
      <div>
        {Array.from({ length: 10 }).map(() => (
          <BlogCard
            author={{
              name: "John Doe",
              image:
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            }}
            date="2021-08-01"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            slug="blog-post"
            title="Blog Post"
          />
        ))}
      </div>
      <div></div>
    </section>
  );
};

export default Blog;
