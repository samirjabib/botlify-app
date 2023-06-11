import { Title } from "@/design-system/index";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  return (
    <div>
      <Title as="h1" intent={"primary"} size={"mainTitle"}>
        Im a blog page
      </Title>
    </div>
  );
}
