import { LandingPageRecord } from "sanity/types/schema";
import LandingBenefits from "./LandingBenefits/LandingBenefits";
import LandingContact from "./LandingContact/LandingContact";
import LandingHero from "./LandingHero/LandingHero";
import LandingServices from "./LandingServices";
import LandingTestimonials from "./LandingTestimonials/LandingTestimonials";

type LandingPageProps = {
  content: LandingPageRecord;
};

const LandingPage = ({ content }: LandingPageProps) => {
  return (
    <div className="w-full">
      <LandingHero content={content} />
      <LandingServices />
      <LandingBenefits />
      <LandingTestimonials />
      <LandingContact />
    </div>
  );
};

export default LandingPage;
