import { Title } from "@/design-system/index";

interface BlogPageByTagProps {
  params: {
    slug: string;
  };
}

export default async function BlogPageByTag({ params }: BlogPageByTagProps) {
  return (
    <div>
      <Title as="h1" intent={"primary"} size={"mainTitle"}>
        Im a blog page by tag
      </Title>
    </div>
  );
}
