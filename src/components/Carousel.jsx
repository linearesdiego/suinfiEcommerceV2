import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

//imagenes
//import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.png';
import logoSuinfi from '../assets/suinfiHero.png';
import ofertSlider from '../assets/ofert slider.png';

export const Carousel = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Autoplay]}
        className="mb-10"
      >
        <SwiperSlide className="relative">
          <img
            src={ofertSlider}
            alt="banner-1"
            className="w-full h-[42 0px] lg:h-[500px] "
          />
          {/* tenia 560px */}
          {/* <div className="containerWidth">
            <img
              src={logoSuinfi}
              alt="banner-1"
              className="w-[100px] bottom-10 object-cover absolute lg:bottom-20 lg:w-[250px]"
            />
          </div> */}
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slider2}
            alt="banner-1"
            className="w-full h-[420px] lg:h-[500px] object-cover"
          />
          <div className="containerWidth">
            <img
              src={logoSuinfi}
              alt="banner-1"
              className="w-[100px] bottom-10 object-cover absolute lg:bottom-20 lg:w-[250px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src={slider3}
            alt="banner-1"
            className="w-full h-[420px] lg:h-[500px] object-cover"
          />
          <div className="containerWidth">
            <img
              src={logoSuinfi}
              alt="banner-1"
              className="w-[100px] bottom-10 object-cover absolute lg:bottom-20 lg:w-[250px]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
