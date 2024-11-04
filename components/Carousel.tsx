"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import { PlayIcon, PauseIcon } from "@heroicons/react/24/outline";

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
        {/* <div className="swiper-pagination mt-4"></div> */}
        {/* <div className="relative flex justify-center items-center mt-1 space-x-1 md:space-x-2"> */}

        {/* </div> */}
      </div>
    </div>
  );
};

export default Carousel;
