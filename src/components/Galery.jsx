import React from 'react';
//images 
import online from '../assets/onlineShopping.png'
export const Galery = () => {
  return (
    <section className="container-width-ecommerce py-24">
      <h1 className="text-2xl lg:text-3xl font-bold text-purple-500 text-center">
        Suinfi
      </h1>
      <p className="text-gray-300 text-center">
        Software en prouctos digitales
      </p>
      <div className="bg-transparent">
        <div className=" lg:col-span-2 w-full bg-transparent rounded-xl lg:rounded-none">
          <img src={online} alt="" className="mx-auto my-auto" />
        </div>
      </div>
    </section>
  );
};
