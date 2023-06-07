import LandingBenefits from "./LandingBenefits/LandingBenefits";
import LandingHero from "./LandingHero/LandingHero";
import LandingServices from "./LandingServices/LandingServices";

const LandingPage = () => {
  return (
    <div className="w-full">
      <LandingHero />
      <LandingServices />
      <LandingBenefits />
    </div>
  );
};

export default LandingPage;
