import HeroImageBox from "./HeroImageBox";
import HeroTextBox from "./HeroTextBox";

const LandingHero = () => {
  return (
    <div className="w-full pt-72 pb-44">
      <div className=" wrapper grid grid-cols-1 md:grid-cols-2 justify-center ">
        <HeroTextBox />
        <HeroImageBox />
      </div>
    </div>
  );
};

export default LandingHero;
