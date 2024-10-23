"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

import ProjectCard from "./ProjectCard";
import { PROJECT_DATA } from "@/app/data/projectData";

const Carousel: React.FC = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        // maybe 2 slides on lg screen? 1 on sm?
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'progressbar',
        }}
        className="progress-slide-carousel"
      >
        {PROJECT_DATA.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
    </div>
  );
};

export default Carousel;