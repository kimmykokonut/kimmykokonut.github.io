"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectCard from "./ProjectCard";
import { PROJECT_DATA } from "@/app/data/projectData";

const Carousel: React.FC = () => {
  return (
    <div className="mb-2">
      <div className="w-full flex justify-center">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
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
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
      <div className="relative mt-5">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Carousel;
