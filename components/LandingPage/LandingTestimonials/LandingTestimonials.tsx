import TestimonialsMarquee from "./TestimonialsMarquee";

const LandingTestimonials = () => {
  return (
    <div className="bg-gray w-full pt-12 pb-20 ">
      <h2 className="text-white text-4xl text-center font-bold mb-12 mx-auto max-w-3xl">
        ¡Descubre los testimonios de nuestros clientes satisfechos y únete a
        ellos!
      </h2>

      <div className="w-full  ">
        <TestimonialsMarquee />
      </div>
    </div>
  );
};

export default LandingTestimonials;
