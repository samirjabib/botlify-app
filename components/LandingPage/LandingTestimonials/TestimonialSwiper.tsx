"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useRef } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

export const TestimonialSwiper = () => {
  const swiperRef = useRef(null);

  const swiper = useSwiper();

  const handleSlideNext = () => {
    if (swiper && swiper.slideNext) {
      console.log("click preview");

      swiper.slideNext();
    }
  };

  const handleSlidePrev = () => {
    if (swiper && swiper.slidePrev) {
      console.log("click next");
      swiper.slidePrev();
    }
  };

  return (
    <Swiper
      className="w-full  flex flex-col items-center "
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      ref={swiperRef}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <SwiperSlide className=" w-full ">
          <div className="w-full justify-center flex flex-col items-center">
            <p className="text-white text-center mb-4 max-w-3xl ">
              "Compré un bot para mi tienda de comercio electrónico y ha sido un
              cambio radical. El bot ha mejorado considerablemente la
              interacción con los clientes y ha impulsado las ventas. Es una
              herramienta poderosa que automatiza diversas tareas y brinda
              soporte personalizado a los compradores. Lo recomiendo ampliamente
              a cualquiera que busque mejorar su negocio de comercio
              electrónico."
            </p>
            <div className="flex flex-row gap-x-2   justify-center items-center">
              <div className="h-8 w-8 bg-yellow-500 rounded-full" />
              <h3 className="text-white/80">Samir Jabib</h3>
              <div className="h-3  border border-white/60" />
              <p className=" text-white/60 text-sm">
                Propietario de E-commerce
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="flex flex-row gap-x-4 justify-center items-center mt-8">
        <button>
          <MoveLeft className="text-white/60 text-base transition-all hover:text-white cursor-pointer" />
        </button>
        <button>
          <MoveRight className="text-white/60 text-base transition-all hover:text-white cursor-pointer" />
        </button>
      </div>
    </Swiper>
  );
};

export default TestimonialSwiper;
