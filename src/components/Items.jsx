import React from 'react';

//Images
import audit from '../assets/Audit.png';
import bag from '../assets/Money Bag.png';
import support from '../assets/Online Support.png';

export const Items = () => {
  return (
    <div className="containerWidth flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-0 lg:justify-between w-full mt-20">
      <div className="flex">
        <div className="flex justify-center items-center">
          <img className="invert" src={audit} alt="audit-img" />
        </div>
        <div className="leading-none flex flex-col items-center justify-center px-2">
          <h1 className="font-bold">LICENCIAS PERMANENTES</h1>
          <p className="text-left w-full">en todos nuestros productos</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex justify-center items-center">
          <img className="invert" src={support} alt="bag-img" />
        </div>
        <div className="leading-none flex flex-col items-center justify-center px-2">
          <h1 className="font-bold">ATENCION PERSONALIZADA</h1>
          <p className="text-left w-full">en nuestras redes</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex justify-center items-center">
          <img className="invert" src={bag} alt="bag-img" />
        </div>
        <div className="leading-none flex flex-col items-center justify-center px-2">
          <h1 className="font-bold">LICENCIAS PERMANENTES</h1>
          <p>en todos nuestros productos</p>
        </div>
      </div>
    </div>
  );
};
