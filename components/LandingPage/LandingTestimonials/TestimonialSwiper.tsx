"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useRef } from "react";

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
      className="w-full max-w-lg flex flex-col items-center "
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      ref={swiperRef}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <SwiperSlide className=" w-full justify-center flex">
          <div className="w-full">
            <p className="text-white text-center mb-4">
              "Flowbite has code in one place and I'm not joking when I say it
              took me a matter of minutes to copy the code, customise it and
              integrate within a Laravel + Vue application."
            </p>
            <div className="flex flex-row gap-x-2   justify-center items-center">
              <div className="h-8 w-8 bg-yellow-500 rounded-full" />
              <h3 className="text-white">Samir Jabib</h3>
              <div className="h-3 text-white/60" />
              <p className=" text-white/60"> SEO de Botify</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="flex- flex-row gap-x-2">
        <button onClick={handleSlideNext}>Next</button>
        <button onClick={handleSlidePrev}>Prev</button>
      </div>
    </Swiper>
  );
};

export default TestimonialSwiper;
