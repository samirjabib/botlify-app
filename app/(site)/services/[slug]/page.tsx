import { Title } from "@/design-system/index";

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <Title as="h1" intent={"primary"} size={"mainTitle"}>
        Service slug {params.slug}
      </Title>
    </div>
  );
}
