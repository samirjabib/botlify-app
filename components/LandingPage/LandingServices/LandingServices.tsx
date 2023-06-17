import { Title } from "@/design-system/index";
import ServicesItem from "./ServicesItem";

const LandingServices = () => {
  return (
    <div className="w-full  pt-12 pb-20  bg-gray">
      <Title
        as="h3"
        size={"sectionSubtitle"}
        className="text-white/60 text-center font-bold  mx-auto  mb-2"
      >
        Explora Nuestros Servicios
      </Title>
      <Title
        as="h2"
        size={"sectionTitle"}
        className="text-white text-center  mb-12 mx-auto max-w-3xl"
      >
        Descubre Nuestros Servicios Innovadores
      </Title>
      <div className="flex flex-col md:flex-row w-full wrapper gap-12">
        {Array.from({ length: 3 }).map((_, i) => (
          <div className="w-full  px-4 py-12 bg-darkGray rounded-md shadow-lg cursor-pointer">
            <ServicesItem />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingServices;
