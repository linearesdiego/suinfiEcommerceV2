import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

//imagenes
import slider2 from '../assets/portada 2 op 2.jpg'
import slider3 from '../assets/portada 3 op 2.jpg';
import logoSuinfi from '../assets/suinfiHero.png';
import slider1 from '../assets/portada 1 op 2.jpg';

export const Carousel = () => {
  return (
    <>
      <Swiper
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Autoplay]}
        className="mb-10 relative"
      >
        <SwiperSlide>
          <img
            src={slider3}
            alt="banner-1"
            className="w-full h-[420px]  lg:h-[700px] object-top aspect-[4/3]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider1}
            alt="banner-1"
            className="w-full h-[420px] lg:h-[700px]"
          />
          
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider2}
            alt="banner-1"
            className="w-full h-[420px] lg:h-[650px] "
          />
          
        </SwiperSlide>
      </Swiper>
    </>
  );
};
