"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";

import { MoveLeft, MoveRight } from "lucide-react";
import TestimonialItem from "./TestimonialItem";
import SwiperButton from "./SwiperButton";
import mockData from "./mockData";

export const TestimonialSwiper = () => {
  //useSwiper is bugged, so we wait for update to fix it in swiperV9
  const handleSlideNext = () => {};

  const handleSlidePrev = () => {
    console.log("click");
  };

  return (
    <Swiper
      className="w-full  flex flex-col items-center max-w-4xl"
      slidesPerView={1}
      grabCursor={false}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {mockData.map((testimonial, i) => (
        <SwiperSlide key={i}>
          <TestimonialItem
            id={testimonial.id}
            quote={testimonial.quote}
            author={testimonial.author}
            occupation={testimonial.occupation}
          />
        </SwiperSlide>
      ))}
      <div className="flex flex-row gap-x-4 justify-center items-center mt-8">
        <SwiperButton onClick={handleSlideNext}>
          <MoveLeft className="text-white/60 text-base transition-all hover:text-white cursor-pointer" />
        </SwiperButton>
        <SwiperButton onClick={handleSlidePrev}>
          <MoveRight className="text-white/60 text-base transition-all hover:text-white cursor-pointer" />
        </SwiperButton>
      </div>
    </Swiper>
  );
};

export default TestimonialSwiper;
