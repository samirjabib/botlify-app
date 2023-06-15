import { LandingPageRecord } from "sanity/types/schema";
import HeroImageBox from "./HeroImageBox";
import HeroTextBox from "./HeroTextBox";

type LandingHeroProps = {
  content: LandingPageRecord;
};

const LandingHero = ({ content }: LandingHeroProps) => {

  // const { titleHeroBox, textHeroBox } = content.landingHero;
  return (
    <div className="w-full pt-72 pb-44">
      <div className=" wrapper grid grid-cols-1 md:grid-cols-2 justify-center ">
        <HeroTextBox  />
        <HeroImageBox />
      </div>
    </div>
  );
};

export default LandingHero;
