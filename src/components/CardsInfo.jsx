import React from 'react';
import { useAuth } from '../context/Auth';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

//images
import userSignUpLogo from '../assets/userSignUpLogo.png';
import categoriesLogo from '../assets/categoriesLogo.png';
import paymentCardLogo from '../assets/paymentCardLogo.png';
import moneyLogo from '../assets/moneyLogo.png';
import keyLogo from '../assets/keyLogo.png';
import locationLogo from '../assets/locationLogo.png';
import { Link } from 'react-router-dom';

export const CardsInfo = () => {
  const { dataLogin } = useAuth();
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={20} // Espacio entre elementos
      navigation={true}
      modules={[Navigation]}
      className="containerWidth flex flex-row justify-between my-20 lg:mt-[-80px] mt-[-150px]"
      breakpoints={{
        1520: {
          slidesPerView: 6,
        },
        1300: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 4,
        },
        780: {
          slidesPerView: 3,
        },
        530: {
          slidesPerView: 2,
        },
        100: {
          slidesPerView: 1,
        },
      }}
    >
      <SwiperSlide>
        <div class="bg-[#f2f2f2] w-56 h-[20rem] flex flex-col justify-center text-center px-4 gap-5 rounded-lg mx-auto md:mx-0">
          <h2 class="font-bold">INGRESA A TU CUENTA</h2>
          <div class="flex items-center justify-center h-32">
            <img src={userSignUpLogo} alt="" class="w-[6em]" />
          </div>
          <p class="font-semibold text-lg">Ofertas y compras sin límites</p>
          <Link
            to={dataLogin.userLogin ? '/profile/account' : '/auth#login'}
            class="bg-[#e5e5e5] border-[1px] border-gray-500 rounded-full text-sm font-semibold py-[2px] w-[90%] mx-auto"
          >
            {dataLogin.userLogin ? 'Ir a mi cuenta' : 'Ingresar'}
          </Link>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="bg-[#f2f2f2] w-56 h-[20rem] flex flex-col justify-center text-center px-4 gap-5 rounded-lg mx-auto md:mx-0">
          <h2 class="font-bold">NUESTRAS CATEGORÍAS</h2>
          <div class="flex items-center justify-center h-32">
            <img src={categoriesLogo} alt="" class="w-[150px]" />
          </div>
          <p class="font-semibold text-lg">Encontrá todo lo que buscas</p>
          <a
            href="#"
            class="bg-[#e5e5e5] border-[1px] border-gray-500 rounded-full text-sm font-semibold py-[2px] w-[90%] mx-auto"
          >
            Ir a categorías
          </a>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="bg-[#f2f2f2] w-56 h-[20rem] flex flex-col justify-center text-center px-4 gap-5 rounded-lg mx-auto md:mx-0">
          <h2 class="font-bold">MEDIOS DE PAGO</h2>
          <div class="flex items-center justify-center h-32">
            <img src={paymentCardLogo} alt="" class="w-[120px]" />
          </div>
          <p class="font-semibold text-lg">
            Paga de la forma más rápida y segura
          </p>
          <a
            href="#"
            class="bg-[#e5e5e5] border-[1px] border-gray-500 rounded-full text-sm font-semibold py-[2px] w-[90%] mx-auto"
          >
            Conocer medios de pago
          </a>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="bg-[#f2f2f2] w-56 h-[20rem] flex flex-col justify-center text-center px-4 gap-5 rounded-lg mx-auto md:mx-0">
          <h2 class="font-bold">MAS VENDIDOS</h2>
          <div class="flex items-center justify-center h-32">
            <img src={moneyLogo} alt="" class="w-[90px]" />
          </div>
          <p class="font-semibold text-lg">Explora los más vendidos</p>
          <a
            href="#"
            class="bg-[#e5e5e5] border-[1px] border-gray-500 rounded-full text-sm font-semibold py-[2px] w-[90%] mx-auto"
          >
            Ir a mas vendidos
          </a>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="bg-[#f2f2f2] w-56 h-[20rem] flex flex-col justify-center text-center px-4 gap-5 rounded-lg mx-auto md:mx-0">
          <h2 class="font-bold">COMPRA PROTEGIDA</h2>
          <div class="flex items-center justify-center h-32">
            <img src={keyLogo} alt="" class="w-[95px]" />
          </div>
          <p class="font-semibold text-lg">Compra de la manera más segura</p>
          <a
            href="#"
            class="bg-[#e5e5e5] border-[1px] border-gray-500 rounded-full text-sm font-semibold py-[2px] w-[90%] mx-auto"
          >
            Cómo funciona
          </a>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="bg-[#f2f2f2] w-56 h-[20rem] flex flex-col justify-center text-center px-4 gap-5 rounded-lg mx-auto md:mx-0">
          <h2 class="font-bold">DESDE DONDE SEA</h2>
          <div class="flex items-center justify-center h-32">
            <img src={locationLogo} alt="" class="w-[70px]" />
          </div>
          <p class="font-semibold text-lg">Compra donde y cuando quieras</p>
          <a
            href="#"
            class="bg-[#e5e5e5] border-[1px] border-gray-500 rounded-full text-sm font-semibold py-[2px] w-[90%] mx-auto"
          >
            Ir a categorías
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
