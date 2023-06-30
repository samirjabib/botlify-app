import { Title } from "@/design-system/index";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import AvatarProfile from "../ui/avatar";

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
    <Link href={`/article/${slug}`}>
      <div className="bg-gray shadow-lg rounded-2xl">
        <div className="h-48 w-full  overflow-hidden rounded-t-lg relative">
          <Image
            fill
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="px-4 pt-4 pb-6">
          <div className="text-white/60 mb-2 inline-block  text-xs font-bold rounded-full bg-green-500 px-2 py-1 ">
            Category
          </div>
          <Title
            as="h3"
            size={"textTitle"}
            className="text-white font-bold text-lg"
          >
            {title}
          </Title>
          <p className="text-white/80 text-base ">
            {description.slice(0, 200)}...
          </p>
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-white/60 ">By {author.name}</p>
              {/* <AvatarProfile image={image} name={author.name} /> */}
            </div>
            <p className="text-white/60">{formatDate(date)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
