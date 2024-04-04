import React from 'react';
//images
// import suinfiHero from '../assets/suinfiHero.png';
// import phone from '../assets/Phone.png';
// import place from '../assets/Place Marker.png';
export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#344A65] to-[#396691] mx-auto overflow-hidden h-auto lg:h-80">
      <div className="containerWidth w-full h-full mt-8 text-white flex flex-wrap">
        <div className="my-0 lg:my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 relative justify-center gap-1 md:gap-5 w-full h-full ">
          <div className="flex flex-col gap-2 md:gap-8 lg:gap-8 w-full ml-1 m-2">
            <h2 className="font-semibold m-2 mx-2 ">Redes Sociales</h2>
            <div className="flex flex-col gap-1 mx-2 my-0">
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
          <div className="flex flex-col gap-2 md:gap-8 lg:gap-8 m-2 w-full">
            <h2 className="font-semibold m-2">Acerca de</h2>
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
          <div className="flex flex-col gap-2 md:gap-8 lg:gap-8 m-2 w-full">
            <h2 className="font-semibold m-2">Otros Sitios</h2>
            <div className="flex flex-col gap-1 mx-2 my-0">
              <a href="#" className="hover:underline">
                Software Factory
              </a>
              <a href="#" className="hover:underline">
                Ecommerce
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-8 lg:gap-8 m-2 w-full">
            <h2 className="font-semibold m-2">Contacto en Argentina</h2>
            <div className="flex flex-col gap-1 mx-2 my-0">
              <a href="#" className="hover:underline">
                Teléfono:+54 9 264 4585555
              </a>
              <a href="#" className="hover:underline">
                Visitanos: Rivadavia 524 (E) San Juan-Argentina
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-8 lg:gap-8 m-2 w-full">
            <h2 className="font-semibold m-2">Contacto en UAE</h2>
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
          <div className="flex flex-col gap-2 md:gap-8 lg:gap-8 m-2 w-full">
            <a href='/policies' className="font-semibold m-2">Ayuda</a>
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
