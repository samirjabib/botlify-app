"use client";


import { MoveLeft, MoveRight } from "lucide-react";
import TestimonialItem from "./TestimonialItem";
import SwiperButton from "./SwiperButton";

export const TestimonialSwiper = () => {
  const handleSlideNext = () => {};

  const handleSlidePrev = () => {
    console.log("click");
  };

  return (
    <div className="w-full  flex flex-col items-center max-w-4xl">
      {Array.from({ length: 3 }).map((_, i) => (
        <div className=" w-full " key={i}>
          <TestimonialItem />
        </div>
      ))}
      <div className="flex flex-row gap-x-4 justify-center items-center mt-8">
        <SwiperButton onClick={handleSlideNext}>
          <MoveLeft className="text-white/60 text-base transition-all hover:text-white cursor-pointer" />
        </SwiperButton>
        <SwiperButton onClick={handleSlidePrev}>
          <MoveRight className="text-white/60 text-base transition-all hover:text-white cursor-pointer" />
        </SwiperButton>
      </div>
    </div>
  );
};

export default TestimonialSwiper;
