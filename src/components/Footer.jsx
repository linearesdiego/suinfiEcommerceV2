import React from 'react';
//images
// import suinfiHero from '../assets/suinfiHero.png';
// import phone from '../assets/Phone.png';
// import place from '../assets/Place Marker.png';
export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#344A65] to-[#396691] mx-auto overflow-hidden h-1/3 h-50 lg:h-80">
      <div className="w-full h-full mt-8 text-white flex flex-wrap text-[9px] sm:text-xs lg:text-base">
        <div className="lg:mx-14 lg:my-6 sm:mx-7 sm:my-3 flex justify-bettwen lg:gap-5 w-full h-auto">
          <div className="flex flex-col gap-5 w-1/4 m-0.5 ml-1 lg:m-2">
            <h2 className="font-semibold lg:m-2 lg:mx-2 my-0">
              Redes Sociales
            </h2>
            <div className="flex flex-col gap-1 lg:mx-2 my-0">
              <a href="#" className="hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:underline">
                Twitter
              </a>
              <a href="#" className="hover:underline">
                Facebook
              </a>
              <a href="#" className="hover:underline">
                Youtube
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8 sm:gap-8 md:gap-8 lg:gap-8 m-0.5 lg:m-2 w-1/4">
            <h2 className="font-semibold lg:m-2">Acerca de</h2>
            <div className="flex flex-col gap-1 mx-2 my-0">
              <a href="#" className="hover:underline">
                SUINFI
              </a>
              <a href="#" className="hover:underline">
                Tendencias
              </a>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </div>
          </div>
          <div className="flex flex-col md:gap-8 gap-8 lg:gap-8 m-0.5 lg:m-2 w-1/4">
            <h2 className="font-semibold lg:m-2">Otros Sitios</h2>
            <div className="flex flex-col gap-1 mx-2 my-0">
              <a href="#" className="hover:underline">
                Software Factory
              </a>
              <a href="#" className="hover:underline">
                Ecommerce
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5 sm:gap-8 md:gap-8 lg:gap-2 xl:gap-8 m-0.5 lg:m-2 w-1/3">
            <h2 className="font-semibold lg:m-2">Contacto en Argentina</h2>
            <div className="flex flex-col gap-1 mx-2 my-0">
              <a href="#" className="hover:underline">
                Teléfono:+54 9 264 4585555
              </a>
              <a href="#" className="hover:underline">
                Visitanos: Rivadavia 524 (E) San Juan-Argentina
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8 m-0.5 lg:m-2 w-1/3">
            <h2 className="font-semibold lg:m-2">Contacto en UAE</h2>
            <div className="flex flex-col gap-1 mx-2 my-0">
              <a href="#" className="hover:underline">
                Teléfono:+971 54 231 6393
              </a>
              <a href="#" className="hover:underline">
                Visitanos: Jumeirah Lake Towers, Arch Tower G - Dubai - United
                Arab Emirates
              </a>
            </div>
          </div>
          {/* <div className="flex flex-col gap-8 w-1/4 m-0.5 ml-1 lg:m-2">
            <h2 className="font-semibold lg:m-2 lg:mx-2 my-0">
              Redes Sociales */}
          <div className="flex flex-col gap-8 md:gap-8 lg:gap-8 m-0.5 mr-1 lg:m-2 w-1/3">
            <h2 className="font-semibold lg:m-2">Ayuda</h2>
            <div className="flex flex-col gap-1 mx-2 my-0">
              <a href="#" className="hover:underline">
                Comprar
              </a>
              <a href="#" className="hover:underline">
                Vender
              </a>
              <a href="#" className="hover:underline">
                Resolucion de problemas
              </a>
              <a href="#" className="hover:underline">
                Centro de seguridad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
