import React from 'react';
//images
import suinfiHero from '../assets/suinfiHero.png';
import phone from '../assets/Phone.png';
import place from '../assets/Place Marker.png';
export const Footer = () => {
  return (
    <footer className="bg-[#342b53] containerWidth rounded-bl-none rounded-br-none mx-auto rounded-[80px] overflow-hidden h-[600px] lg:h-[300px]">
      <div className="h-full">
        <div className="w-full h-full items-center text-white flex flex-wrap justify-between mx-auto lg:mx-0">
          <div className="ml-5 flex gap-5 justify-center relative items-center ">
            <div className="flex flex-col justify-center items-center mt-4">
              <div className="w-[150px] mb-2 mt-[-20px]">
                <img src={suinfiHero} alt="SUINFI" className="" />
              </div>
              <div className="bl-2 w-[200px] text-xl text-center">
                <h2>e c o m m e r c e</h2>
              </div>
            </div>
          </div>

          <div className="ml-5 flex flex-col gap-0.25 items-center">
            <div className="w-[250px] mb-0 flex items-center">
              <img src={phone} alt="telefono" className="w-4 h-4 mr-2" />
              <b className="">Teléfono</b>
            </div>
            <div className="w-[250px] mb-0 flex items-center">
              <p className="ml-6">+54 9 2644585555</p>
            </div>
            <div className="w-[250px] mb-0 flex items-center">
              <img src={place} alt="visit" className="w-4 h-4 mr-2" />
              <b className="">Visitanos</b>
            </div>
            <div className="w-[250px] mb-0 flex items-center">
              <p className="ml-6">Rivadavia 524 (E) San Juan</p>
            </div>
          </div>
          <div className="ml-5 flex flex-col gap-0.25 items-center">
            <div className="w-[250px] mb-0 flex items-center">
              <img src={phone} alt="telefono" className="w-4 h-4 mr-2" />
              <b className="">Dubai Phone</b>
            </div>
            <div className="w-[250px] mb-0 flex items-center">
              <p className="ml-6">+971 54 231 6393</p>
            </div>
            <div className="w-[250px] mb-0 flex items-center">
              <img src={place} alt="visit" className="w-4 h-4 mr-2" />
              <b className="">Visit us</b>
            </div>
            <div className="w-[250px] mb-0 flex items-center">
              <p className="ml-6">
                Jumeirah Lake Towers, Arch Tower G - Dubái - United Arab
                Emirates
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
