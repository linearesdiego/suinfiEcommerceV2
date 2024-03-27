import React from 'react';

//Imgs imports
import ExplorarImg from '../../assets/Explorar.png';
import ComprarImg from '../../assets/Comprar.png';
import TusComprasImg from '../../assets/Tuscompras.png';
import FiltrosImg from '../../assets/filtros.png';

export const YourProductsComp = () => {
  return (
    <div className="lg:w-full lg:flex lg:flex-row lg:h-full min-h-screen bgnewProduct">
      <div className="lg:w-[25%] lg:h-full lg:flex lg:items-center ">
        <aside className="text-white bg-sidebar lg:min-h-screen  lg:h-full lg:w-full lg:my-auto">
          <div className="max-w-[90%] mx-auto pt-7">
            <input
              type="text"
              name=""
              id=""
              placeholder="BUSCAR EN SUINFI"
              className="w-full h-7 rounded-lg text-center"
            />
          </div>
          <div className="flex flex-col gap-3 pt-5">
            <div className="flex flex-row items-center px-5">
              <img src={ExplorarImg} alt="" className="w-[17px] h-[17px]" />
              <p className="px-5 py-3">EXPLORAR</p>
            </div>
            <div className="flex flex-row items-center px-5">
              <img src={ComprarImg} alt="" className="w-[17px] h-[17px]" />
              <p className="px-5 py-3">COMPRAR</p>
            </div>
            <div className="flex flex-row items-center px-5">
              <img src={TusComprasImg} alt="" className="w-[17px] h-[17px]" />
              <p className="px-5 py-3">TUS VENTAS</p>
            </div>
            <div className="flex flex-row items-center px-5">
              <img src={FiltrosImg} alt="" className="w-[17px] h-[17px]" />
              <p className="px-5 py-3">FILTROS</p>
            </div>
          </div>
          <div className="mt-7 max-w-[90%] mx-auto bg-[#27425E] rounded-lg py-1">
            <button className="w-full">+ CREAR NUEVO PRODUCTO</button>
          </div>
          <div className="mt-7 p-5">
            <p className="text-lg font-semibold">CATEGORIAS</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="px-5 py-3">PRODUCTO 1</p>
            <p className="px-5 py-3">PRODUCTO 2</p>
            <p className="px-5 py-3">PRODUCTO 3</p>
          </div>
        </aside>
      </div>

      <div className="lg:w-full lg:h-full  lg:p-5 lg:flex lg:flex-row ">
        <section className="lg:w-full lg:h-full  ">
          <div className="lg:max-w-[1300px] lg:mx-auto lg:my-5 flex flex-row justify-evenly ">
            <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
            <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
            <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
            <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
          </div>
          <div className="lg:max-w-[1300px] lg:mx-auto lg:my-5 flex flex-row justify-evenly ">
            <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
            <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
            <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
            <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
          </div>
        </section>
      </div>
    </div>
  );
};
