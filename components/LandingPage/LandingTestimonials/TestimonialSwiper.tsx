"use client";
"use client";
import { SwiperOptions } from "swiper/types/swiper-options";
import { A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { MoveLeft, MoveRight } from "lucide-react";
import TestimonialItem from "./TestimonialItem";
import SwiperButton from "./SwiperButton";
import mockData from "./mockData";

import "swiper/css";

export const TestimonialSwiper = () => {
  const swiper = useSwiper();

  //Settings configure swiper
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, A11y, Autoplay],
    spaceBetween: 10,
    slidesPerView: "auto",
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };
  return (
    <Swiper
      {...sliderSettings}
      className="w-full  flex flex-col items-center max-w-4xl "
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
        <SwiperButton onClick={() => swiper.slidePrev()}>
          <MoveLeft className="text-white/60 text-base transition-all hover:text-white cursor-pointer" />
        </SwiperButton>
        <SwiperButton onClick={() => swiper.slideNext()}>
          <MoveRight className="text-white/60 text-base transition-all hover:text-white cursor-pointer" />
        </SwiperButton>
      </div>
    </Swiper>
  );
};

export default TestimonialSwiper;
