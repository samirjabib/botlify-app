"use client";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import { MoveLeft, MoveRight } from "lucide-react";
import TestimonialItem from "./TestimonialItem";
import SwiperButton from "./SwiperButton";

export const TestimonialSwiper = () => {
  return (
    <div className="w-full  flex flex-col items-center max-w-4xl">
      {/* {Array.from({ length: 3 }).map((_, i) => (
        <swiper-slide className=" w-full " key={i}>
        </swiper-slide>
      ))} */}
      <TestimonialItem />

      <div className="flex flex-row gap-x-4 justify-center items-center mt-8">
        <SwiperButton>
          <MoveLeft className="text-white/60 text-base transition-all hover:text-white cursor-pointer" />
        </SwiperButton>
        <SwiperButton>
          <MoveRight className="text-white/60 text-base transition-all hover:text-white cursor-pointer" />
        </SwiperButton>
      </div>
    </div>
  );
};

export default TestimonialSwiper;
