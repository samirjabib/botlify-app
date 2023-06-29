import { Title } from "@/design-system/index";
import { LandingPageRecord } from "../../../../sanity/types/schema";

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <Title as="h1" intent={"primary"} size={"mainTitle"}>
        Services LandingPageRecord
      </Title>
    </div>
  );
}
