import React from 'react';

//Images
import img1 from '../../assets/Group 225.png';
import pinkCard from '../../assets/pink bank card.png';
import mastercard from '../../assets/mastercard.png';
export const Cards = () => {
  return (
    <>
      <div className=" ml-2 mr-2 pl-2 md:pl-4 w-11/12 md:ml-10 md:mr-4">
        <div className="p-2 mt-2 font-bold text-2xl md:text-3xl">
          <h4 className="">Tus tarjetas</h4>
        </div>
        <div className="bg-white border border-stone-400 shadow-lg p-4 rounded-xl block  md:mt-8 mr-4 ml-2 mb-2 h-full">
          <div className="bg-white border-b border-opacity-30 border-black p-1 md:p-4 block md:flex md:items-center mt-0 h-2/6 hover:cursor-pointer hover:bg-slate-200 transition duration-300">
            <div className="w-auto h-auto m-1 rounded-full flex justify-center items-center">
              <img
                width={110}
                height={100}
                src={mastercard}
                alt="Superpuesta"
              />
            </div>

            <div className="p-0 text-center md:text-start">
              <div className="my-2 md:mb-0 md:ml-6">
                <h2 className="text-xl font-bold mb-0">Terminada en 0890</h2>
              </div>
              <div className="my-2 md:mt-0 md:ml-6">
                <p className="p-0 text-[#5D5D5D]">Mastercard</p>
              </div>
              <div className="my-2  md:mt-0 md:ml-6">
                <p className="p-0 text-[#5D5D5D]">Vencimiento 5/25</p>
              </div>
            </div>
          </div>
          <div className="bg-white border-b border-opacity-30 border-black p-1 md:p-4 block md:flex md:items-center mt-0 h-2/6 hover:cursor-pointer hover:bg-slate-200 transition duration-300">
            <div className="w-auto h-auto m-1 rounded-full flex justify-center items-center">
              <img
                width={110}
                height={100}
                src={mastercard}
                alt="Superpuesta"
              />
            </div>

            <div className="p-0 text-center md:text-start">
              <div className="my-2 md:mb-0 md:ml-6">
                <h2 className="text-xl font-bold mb-0">Terminada en 0890</h2>
              </div>
              <div className="my-2 md:mt-0 md:ml-6">
                <p className="p-0 text-[#5D5D5D]">Mastercard</p>
              </div>
              <div className="my-2  md:mt-0 md:ml-6">
                <p className="p-0 text-[#5D5D5D]">Vencimiento 5/25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
