"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useRef } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import TestimonialItem from "./TestimonialItem";

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
      className="w-full  flex flex-col items-center max-w-4xl"
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      ref={swiperRef}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <SwiperSlide className=" w-full " key={i}>
          <TestimonialItem />
        </SwiperSlide>
      ))}
      <div className="flex flex-row gap-x-4 justify-center items-center mt-8">
        <button onClick={handleSlidePrev}>
          <MoveLeft className="text-white/60 text-base transition-all hover:text-white cursor-pointer" />
        </button>
        <button onClick={handleSlideNext}>
          <MoveRight className="text-white/60 text-base transition-all hover:text-white cursor-pointer" />
        </button>
      </div>
    </Swiper>
  );
};

export default TestimonialSwiper;
