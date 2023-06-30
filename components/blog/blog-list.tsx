import BlogCard from "./blog-card";
import BlogCategoryTab from "./blog-category-tab";

const BlogList = () => {
  return (
    <div className="wrapper-mobile sm:wrapper">
      <BlogCategoryTab />
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4   gap-6">
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
            slug="1"
            title="Blog Post"
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
