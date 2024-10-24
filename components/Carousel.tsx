"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { PlayIcon, PauseIcon } from "@heroicons/react/24/outline";

import ProjectCard from "./ProjectCard";
import { PROJECT_DATA } from "@/app/data/projectData";
import { useState } from "react";

const Carousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="mb-2">
      <div className="w-full flex justify-center">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={isPaused ? false : {
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            stopOnLastSlide: false,
            reverseDirection: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
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
      </div>
      <div className="relative flex justify-center items-center mt-1 space-x-1 md:space-x-2">
        <div className="swiper-button-prev"></div>
        <button
          onClick={handlePause}
          className="px-3 py-1 bg-blue-600 text-white hover:text-black rounded-full"
        >
          {isPaused ? <PlayIcon className='h-5 w-5' /> : <PauseIcon className='h-5 w-5' />}
        </button>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default Carousel;