import TestimonialSwiper from "./TestimonialSwiper";
import TestimonialsMarquee from "./TestimonialsMarquee";
import { Title } from "@/design-system/index";

const LandingTestimonials = () => {
  return (
    <div className="bg-gray w-full py-16 sm:py-32 ">
      <Title
        as="h3"
        size={"sectionSubtitle"}
        className="text-white/60 text-center font-bold  mx-auto  mb-2"
      >
        Que dicen de botlify
      </Title>
      <Title
        as="h2"
        size={"sectionTitle"}
        className="text-white  text-center font-bold mb-12 mx-auto max-w-3xl wrapper-mobile md:wrapper"
      >
        ¡Descubre los testimonios de nuestros clientes satisfechos y únete a
        ellos!
      </Title>

      <div className="w-full  ">
        <TestimonialSwiper />
      </div>
    </div>
  );
};

export default LandingTestimonials;
