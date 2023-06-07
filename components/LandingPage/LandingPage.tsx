import LandingBenefits from "./LandingBenefits/LandingBenefits";
import LandingHero from "./LandingHero/LandingHero";
import LandingServices from "./LandingServices";
import LandingTestimonials from "./LandingTestimonials/LandingTestimonials";

const LandingPage = () => {
  return (
    <div className="w-full">
      <LandingHero />
      <LandingServices />
      <LandingBenefits />
      <LandingTestimonials />
    </div>
  );
};

export default LandingPage;
