import FirstRowBenefits from "./FirstRowBenefits";
import SecondRowBenefits from "./SecondRowBenefits";

const LandingBenefits = () => {
  return (
    <div className="bg-darkGray text-white wrapper-mobile md:wrapper">
      <FirstRowBenefits />
      <SecondRowBenefits />
    </div>
  );
};

export default LandingBenefits;
