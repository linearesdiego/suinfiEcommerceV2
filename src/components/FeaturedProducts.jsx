import React from 'react';

export const FeaturedProducts = () => {
  return (
    <>
      <div className="">
        <h1 className="text-white text-center font-bold text-xl mt-24 mb-9">
          FEATURED PRODUCTS
        </h1>
      </div>

      <div className="containerWidth  w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full justify-between items-center relative mb-4">
        <div className="group card h-[360px] rounded-xl shadow-2xl overflow-hidden relative text-center">
          <img src="/ap2025.png" alt="Imagen 3" className="mx-auto" />
          <div className="p-4">
            <h1 className="text-white text-xl font-bold mb-2">
              ADOBE PHOTOSHOP 2023
            </h1>
            <h2 className="text-white text-xl mb-2">Photoshop cc</h2>
            <p className="text-white text-xl mb-2">$0000</p>
          </div>
          <div className="hidden group-hover:flex justify-center space-x-4 absolute bottom-4 left-0 right-0">
            <button className="w-[120px] h-[45px] bg-black text-white font-bold rounded-full">
              COMPRAR
            </button>
            <button className="w-[120px] h-[45px] bg-[#8f8690] text-black font-bold rounded-full">
              VER
            </button>
          </div>
        </div>

        <div className="group card h-[360px] rounded-xl shadow-2xl overflow-hidden relative text-center">
          <img src="/ap2025.png" alt="Imagen 3" className="mx-auto" />
          <div className="p-4">
            <h1 className="text-white text-xl font-bold mb-2">
              ADOBE PHOTOSHOP 2023
            </h1>
            <h2 className="text-white text-xl mb-2">Photoshop cc</h2>
            <p className="text-white text-xl mb-2">$0000</p>
          </div>
          <div className="hidden group-hover:flex justify-center space-x-4 absolute bottom-4 left-0 right-0">
            <button className="w-[120px] h-[45px] bg-black text-white font-bold rounded-full">
              COMPRAR
            </button>
            <button className="w-[120px] h-[45px] bg-[#8f8690] text-black font-bold rounded-full">
              VER
            </button>
          </div>
        </div>

        <div className="group card h-[360px] rounded-xl shadow-2xl overflow-hidden relative text-center">
          <img src="/ap2025.png" alt="Imagen 3" className="mx-auto" />
          <div className="p-4">
            <h1 className="text-white text-xl font-bold mb-2">
              ADOBE PHOTOSHOP 2023
            </h1>
            <h2 className="text-white text-xl mb-2">Photoshop cc</h2>
            <p className="text-white text-xl mb-2">$0000</p>
          </div>
          <div className="hidden group-hover:flex justify-center space-x-4 absolute bottom-4 left-0 right-0">
            <button className="w-[120px] h-[45px] bg-black text-white font-bold rounded-full">
              COMPRAR
            </button>
            <button className="w-[120px] h-[45px] bg-[#8f8690] text-black font-bold rounded-full">
              VER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
