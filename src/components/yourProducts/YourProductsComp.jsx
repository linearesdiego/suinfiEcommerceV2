import React, { useState } from 'react';

//Imgs imports
import ExplorarImg from '../../assets/Explorar.png';
import ComprarImg from '../../assets/Comprar.png';
import TusComprasImg from '../../assets/Tuscompras.png';
import FiltrosImg from '../../assets/filtros.png';
import productType from '../../assets/productType.png';

export const YourProductsComp = () => {
  // Estado local para controlar la sección activa
  const [activeSection, setActiveSection] = useState(''); // Por defecto, la sección 'explorar' está activa

  // Función para cambiar la sección activa cuando se hace clic en un ícono del aside
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="lg:w-full flex flex-row lg:h-full min-h-screen bgnewProduct">
      <div className="w-full lg:w-[25%] lg:h-full lg:flex lg:items-center ">
        <aside className="text-white w-full bg-sidebar lg:min-h-screen  lg:h-full lg:w-full lg:my-auto mr-10">
          <div className="max-w-[90%] mx-auto pt-7 ">
            <input
              type="text"
              name=""
              id=""
              placeholder="BUSCAR EN SUINFI"
              className="w-full h-7 rounded-lg text-center hidden lg:block"
            />
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:items-start items-center">
            <div
              className={`flex flex-row items-center lg:px-5 lg:p-0 py-4 cursor-pointer w-full hover:bg-[#243C5B80] ${
                activeSection === 'explorar' && 'bg-[#2D5682]'
              }`}
              onClick={() => handleSectionChange('explorar')}
            >
              <img
                src={ExplorarImg}
                alt=""
                className="lg:w-[17px] lg:h-[17px] w-[25px] h-[25px]"
              />
              <p className="px-5 py-3 hidden lg:block">EXPLORAR</p>
            </div>
            <div className="flex flex-row items-center lg:px-5 lg:p-0 py-4">
              <img
                src={ComprarImg}
                alt=""
                className="lg:w-[17px] lg:h-[17px] w-[25px] h-[25px]"
              />
              <p className="px-5 py-3 hidden lg:block">COMPRAR</p>
            </div>
            <div
              className={`flex flex-row items-center lg:px-5 lg:p-0 py-4 cursor-pointer w-full hover:bg-[#243C5B80] ${
                activeSection === 'tus ventas' && 'bg-[#2D5682]'
              }`}
              onClick={() => handleSectionChange('tus ventas')}
            >
              <img
                src={TusComprasImg}
                alt=""
                className="lg:w-[17px] lg:h-[17px] w-[25px] h-[25px] "
              />
              <p className="px-5 py-3 hidden lg:block">TUS VENTAS</p>
            </div>
            <div className="flex flex-row items-center lg:px-5 lg:p-0 py-4">
              <img
                src={FiltrosImg}
                alt=""
                className="lg:w-[17px] lg:h-[17px] w-[25px] h-[25px]"
              />
              <p className="px-5 py-3 hidden lg:block">FILTROS</p>
            </div>
          </div>
          <div className="mt-7 max-w-[90%] mx-auto bg-[#27425E] rounded-lg py-1 mb-5">
            <button className="w-full ">
              <p className="hidden lg:block">+ CREAR NUEVO PRODUCTO</p>
              <p className="lg:hidden">+</p>
            </button>
          </div>
          <div className="mt-7 p-5 hidden lg:block">
            <p className="text-lg font-semibold">CATEGORIAS</p>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:items-start  items-center">
            <div className="flex flex-row items-center lg:px-5 lg:p-0 py-4">
              <img
                src={productType}
                alt=""
                className=" w-[25px] h-[25px] lg:w-[17px] lg:h-[17px]"
              />

              <p className="px-5 py-3 hidden lg:block">PRODUCTO 1</p>
            </div>
            <div className="flex flex-row items-center lg:px-5 lg:p-0 py-4">
              <img
                src={productType}
                alt=""
                className=" w-[25px] h-[25px] lg:w-[17px]  lg:h-[17px] "
              />

              <p className="px-5 py-3 hidden lg:block">PRODUCTO 2</p>
            </div>
            <div className="flex flex-row items-center lg:px-5 lg:p-0 py-4">
              <img
                src={productType}
                alt=""
                className=" w-[25px] h-[25px] lg:w-[17px] lg:h-[17px] "
              />

              <p className="px-5 py-3 hidden lg:block">PRODUCTO 3</p>
            </div>
          </div>
        </aside>
      </div>

      <div className="lg:w-full lg:h-full  lg:p-5 lg:flex  ">
        {/* Explorar section */}
        {activeSection === 'explorar' && (
          <section className="lg:w-full lg:h-full w-full h-full  ">
            <div className="lg:max-w-[1300px] max-w-[600px] lg:mx-auto lg:my-5 lg:flex lg:flex-row lg:justify-evenly flex flex-col  mx-10 mt-10 gap-5">
              <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
              <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
              <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
              <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
            </div>
            <div className="lg:max-w-[1300px] max-w-[600px] lg:mx-auto lg:my-5 lg:flex lg:flex-row lg:justify-evenly flex flex-col  mx-10 mt-10 gap-5">
              <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
              <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
              <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
              <div className="w-[280px] h-[385px] bg-white border border-[#00000024] rounded-lg shadow-lg"></div>
            </div>
          </section>
        )}
        {/* Tus ventas section */}
        {activeSection === 'tus ventas' && (
          <div className="w-full flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-semibold">Tus Publicaciones</h1>
            </div>
            <div className="bg-white w-full h-[350px] rounded-lg shadow-lg">
              <div className="product-card">
                <img src="" alt="imagen producto" />
                <h2>nombre</h2>
                <p>descripcion</p>
                <p>Precio:</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
