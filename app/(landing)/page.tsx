import { LandingPage } from "@/components/LandingPage";
import { landingPageQuery } from "@/lib/sanity/querys/landing-page";
import clientFetch from "@/lib/sanity/sanity";
import sanityClient from "@/lib/sanity/sanity";
import { groq } from "next-sanity";
import { LandingPageRecord } from "sanity/types/schema";

export const revalidate = 60;

export default async function Page() {
  const landingPage: LandingPageRecord = await clientFetch(
    groq`*[_type == "landingPage"][0]`
  );

  console.log(landingPage, " this is a landing page");

  return (
    <>
      <LandingPage />
    </>
  );
}
