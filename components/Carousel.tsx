"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

import ProjectCard from "./ProjectCard";
import { PROJECT_DATA } from "@/app/data/projectData";

const Carousel: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        // maybe 2 slides on lg screen? 1 on sm?
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2400,
          disableOnInteraction: true,
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'progressbar',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        className="progress-slide-carousel"
      >
        {PROJECT_DATA.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-purple-100"></div>
    </div>
  );
};

export default Carousel;