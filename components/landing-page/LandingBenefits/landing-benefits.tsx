import FirstRowBenefits from "./first-row-benefits";
import SecondRowBenefits from "./second-row-benefits";

const LandingBenefits = () => {
  return (
    <div className="bg-darkGray text-white wrapper-mobile md:wrapper">
      <FirstRowBenefits />
      <SecondRowBenefits />
    </div>
  );
};

export default LandingBenefits;
