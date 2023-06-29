import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Author = {
  name: string;
  image: string;
};

type BlogCardProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  author: Author;
  slug: string;
};

const BlogCard: FC<BlogCardProps> = ({
  author,
  date,
  description,
  image,
  slug,
  title,
}) => {
  const formatDate = (date: string) => {
    const newDate = new Date(date);
    const formattedDate = `${newDate.getDate()}-${
      newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;
    return formattedDate;
  };

  return (
    <Link href={`/blog/${slug}`}>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="h-48 w-full mb-6 overflow-hidden">
          <Image
            width={200}
            height={200}
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-500 mb-4">{description.slice(0, 200)}...</p>
          <div className="flex justify-between">
            <p className="text-gray-500">By {author.name}</p>
            <p className="text-gray-500">{formatDate(date)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
