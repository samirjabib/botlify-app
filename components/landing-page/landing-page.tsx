import { LandingPageRecord } from "sanity/types/schema";
import LandingBenefits from "./LandingBenefits/landing-benefits";
import LandingContact from "./LandingContact/landing-contact";
import LandingHero from "./LandingHero/landing-hero";
import LandingServices from "./LandingServices";
import LandingTestimonials from "./LandingTestimonials/landing-testimonial";

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
