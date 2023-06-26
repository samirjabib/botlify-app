"use client";

import { Title } from "@/design-system/index";

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <Title as="h1" intent={"primary"} size={"mainTitle"}>
        Im a blog page
      </Title>
    </div>
  );
}
