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
import money from '../assets/Money Bag.png';
import online from '../assets/Online Support.png';
import audi from '../assets/Audit.png';
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
      <div className="containerWidth w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full justify-between items-center relative gap-12">
        <div className="flex gap-4 justify-start">
          <div className="flex items-center">
            <img className="w-[50px]" src={audi} alt="audit-icon" />
          </div>
          <div className="flex justify-center flex-col leading-none">
            <h1 className="text-white font-bold text-xl">PERMANENT LICENSES</h1>
            <p className="text-white text-lg">on all our products</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <div className="flex items-center">
            <img className="w-[50px]" src={online} alt="audit-icon" />
          </div>
          <div className="flex justify-center flex-col leading-none">
            <h1 className="text-white font-bold text-xl">
              PERSONALIZED ATTENTION
            </h1>
            <p className="text-white text-lg">on our social medias</p>
          </div>
        </div>
        <div className="flex gap-4 justify-start lg:justify-end">
          <div className="flex items-center">
            <img className="w-[50px]" src={money} alt="audit-icon" />
          </div>
          <div className="flex justify-center flex-col leading-none">
            <h1 className="text-white font-bold text-xl">EXCLUSIVE OFFERS</h1>
            <p className="text-white text-lg">every day</p>
          </div>
        </div>
      </div>
    </>
  );
};
