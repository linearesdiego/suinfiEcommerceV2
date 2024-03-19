import React from 'react';
import Image from 'next/image';

//Images
import Group232Pic from '../../../public/Group 225.png';
import pinkCard from '../../../public/pink bank card.png';
export const Cards = () => {
  return (
    <>
      <div className="pl-4 w-11/12 ml-10 mr-4 h-5/6">
        <div>
          <h2>Tus tarjetas</h2>
        </div>
        <div className="bg-white border border-opacity-30 border-black shadow-lg py-4 rounded-xl mt-8 mr-4 h-full">
          <div className="bg-white border-b border-opacity-30 border-black p-4 flex items-center mt-0 mr-full h-2/6">
            <div className="relative w-auto h-auto p-0 my-6 ml-10 mr-12">
              <Image
                src={Group232Pic}
                className="w-full h-full object-cover"
                alt="Group-img"
              />

              <div className="absolute bottom-8 left-0 w-full">
                <Image src={pinkCard} alt="Superpuesta" className="px-6 py-0" />
              </div>
            </div>

            <div className="p-0">
              <div className="mb-0 ml-6">
                <h2 className="text-xl font-bold mb-0">Terminada en 0890</h2>
              </div>
              <div className="mt-0 ml-6">
                <p className="p-0 text-[#5D5D5D]">Mastercard</p>
              </div>
              <div className="mt-0 ml-6">
                <p className="p-0 text-[#5D5D5D]">Vencimiento 5/25</p>
              </div>
            </div>
          </div>
          <div className="bg-white border-b border-opacity-30 border-black p-4 flex items-center mt-0 mr-full h-2/6">
            <div className="relative w-auto h-auto p-0 my-6 ml-10 mr-12">
              <Image
                src={Group232Pic}
                alt="Fondo-img"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-8 left-0 w-full">
                <Image src={pinkCard} alt="Superpuesta" className="px-6 py-0" />
              </div>
            </div>

            <div className="p-0">
              <div className="mb-0 ml-6">
                <h2 className="text-xl font-bold mb-0">Terminada en 0890</h2>
              </div>
              <div className="mt-0 ml-6">
                <p className="p-0 text-[#5D5D5D]">Mastercard</p>
              </div>
              <div className="mt-0 ml-6">
                <p className="p-0 text-[#5D5D5D]">Vencimiento 5/25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
