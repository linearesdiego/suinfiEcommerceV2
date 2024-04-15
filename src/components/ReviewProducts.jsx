import { useState } from 'react';

import yellowStar from '../assets/yellow-star.png';
import blackStar from '../assets/black-star.png';
import emptyStar from '../assets/empty-star.png';
import dropdown from '../assets/icon-dropdown.png';
import like from '../assets/icon-like.png';
import dislike from '../assets/icon-dislike.png';

export const ReviewProducts = ({idProduct}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCategorie, setIsOpenCategorie] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownCategorie = () => {
    setIsOpenCategorie(!isOpenCategorie);
  };

  return (
    <div className="flex lg:flex-row flex-col justify-evenly gap-5 containerWidth mb-20">
      <div className="flex flex-col gap-10">
        <h1 className="font-semibold text-3xl text-center lg:text-left text-nowrap">Opiniones de productos</h1>
        <div className="flex flex-row items-center justify-center lg:justify-normal">
          <h1 className="text-6xl font-bold items-center pr-5">4.3</h1>
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center justify-between gap-1">
              <img src={yellowStar} alt="yellow star" className="w-8" />
              <img src={yellowStar} alt="yellow star" className="w-8" />
              <img src={yellowStar} alt="yellow star" className="w-8" />
              <img src={yellowStar} alt="yellow star" className="w-8" />
              <img src={yellowStar} alt="yellow star" className="w-8" />
            </div>
            <h2 className="text-[#595959] text-lg">10 calificaciones</h2>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <div className="bg-[#d0d0d0] h-[6px] rounded-sm overflow-hidden w-full">
              <div className="bg-[#f4d240] h-full w-[70%]"></div>
            </div>
            <p className="ml-2 text-right text-[#d0d0d0]">5</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="bg-[#d0d0d0] h-[6px] rounded-sm overflow-hidden w-full">
              <div className="bg-[#f4d240] h-full w-[10%]"></div>
            </div>
            <p className="ml-2 text-right text-[#d0d0d0]">4</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="bg-[#d0d0d0] h-[6px] rounded-sm overflow-hidden w-full">
              <div className="bg-[#f4d240] h-full w-[0%]"></div>
            </div>
            <p className="ml-2 text-right text-[#d0d0d0]">3</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="bg-[#d0d0d0] h-[6px] rounded-sm overflow-hidden w-full">
              <div className="bg-[#f4d240] h-full w-[0%]"></div>
            </div>
            <p className="ml-2 text-right text-[#d0d0d0]">2</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="bg-[#d0d0d0] h-[6px] rounded-sm overflow-hidden w-full">
              <div className="bg-[#f4d240] h-full w-[0%]"></div>
            </div>
            <p className="ml-2 text-right text-[#d0d0d0]">1</p>
          </div>
        </div>

        <div>
          <h2 className="font-medium text-2xl lg:text-3xl text-center lg:text-left text-nowrap">
            Calificación de caracteristicas
          </h2>
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl text-center lg:text-left">Relación precio calidad</h3>
            <div className="flex flex-row items-center gap-4 justify-center lg:justify-normal">
              <img src={blackStar} alt="yellow star" className="w-8" />
              <img src={blackStar} alt="yellow star" className="w-8" />
              <img src={blackStar} alt="yellow star" className="w-8" />
              <img src={blackStar} alt="yellow star" className="w-8" />
              <img src={emptyStar} alt="yellow star" className="w-8 min-w-8" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-2xl text-center lg:text-left">Instalación</h3>
            <div className="flex flex-row items-center gap-4 justify-center lg:justify-normal">
              <img src={blackStar} alt="yellow star" className="w-8" />
              <img src={blackStar} alt="yellow star" className="w-8" />
              <img src={blackStar} alt="yellow star" className="w-8" />
              <img src={blackStar} alt="yellow star" className="w-8" />
              <img src={blackStar} alt="yellow star" className="w-8" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-2xl text-center lg:text-left">Calidad del producto</h3>
            <div className="flex flex-row items-center gap-4 justify-center lg:justify-normal">
              <img src={blackStar} alt="yellow star" className="w-8" />
              <img src={blackStar} alt="yellow star" className="w-8" />
              <img src={blackStar} alt="yellow star" className="w-8" />
              <img src={blackStar} alt="yellow star" className="w-8" />
              <img src={blackStar} alt="yellow star" className="w-8" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 ml-0 lg:ml-10 mt-7 lg:mt-0 justify-center lg:justify-normal">
        <div className="flex flex-row gap-10 justify-center lg:justify-normal">
          <div className="relative" id="dropdownButton">
            <div
              id="button"
              onClick={toggleDropdown}
              className="border-solid px-5 py-2 rounded-full cursor-pointer font-bold flex justify-between w-[130px] bg-gray-900 items-center"
            >
              <h2 className="text-gray-200 text-lg">Ordenar</h2>
              <img src={dropdown} alt="" className="h-[10px]" />
            </div>
            <div
              id="dropdown"
              className={`rounded border-[1px] border-gray-300 bg-white absolute top-[50px] w-[180px] -left-7 shadow-md ${
                isOpen ? '' : 'hidden'
              }`} // Conditional class for visibility
            >
              <div className="cursor-pointer hover:bg-gray-200 py-4 text-center">
                Más valoradas
              </div>
              <div className="cursor-pointer hover:bg-gray-200 py-4 text-center">
                Más recientes
              </div>
            </div>
          </div>

          <div className="relative" id="dropdownButton">
            <div
              id="button"
              onClick={toggleDropdownCategorie}
              className="border-solid px-5 py-2 rounded-full cursor-pointer font-bold flex justify-between w-[160px] bg-gray-900 items-center"
            >
              <h2 className="text-gray-200 text-lg">Calificación</h2>
              <img src={dropdown} alt="" className="h-[10px]" />
            </div>
            <div
              id="dropdown"
              className={`rounded border-[1px] border-gray-300 bg-white absolute top-[50px] w-[180px] -left-3 shadow-md ${
                isOpenCategorie ? '' : 'hidden'
              }`} // Conditional class for visibility
            >
              <div className="cursor-pointer hover:bg-gray-200 py-4 text-center">
                Todas
              </div>
              <div className="cursor-pointer hover:bg-gray-200 py-4 text-center flex justify-center items-center gap-[6px]">
                1
                <img
                  src={blackStar}
                  alt="yellow star"
                  className="w-[15px] h-[14px]"
                />
              </div>
              <div className="cursor-pointer hover:bg-gray-200 py-4 text-center flex justify-center items-center gap-[6px]">
                2
                <img
                  src={blackStar}
                  alt="yellow star"
                  className="w-[15px] h-[14px]"
                />
              </div>
              <div className="cursor-pointer hover:bg-gray-200 py-4 text-center flex justify-center items-center gap-[6px]">
                3
                <img
                  src={blackStar}
                  alt="yellow star"
                  className="w-[15px] h-[14px]"
                />
              </div>
              <div className="cursor-pointer hover:bg-gray-200 py-4 text-center flex justify-center items-center gap-[6px]">
                4
                <img
                  src={blackStar}
                  alt="yellow star"
                  className="w-[15px] h-[14px]"
                />
              </div>
              <div className="cursor-pointer hover:bg-gray-200 py-4 text-center flex justify-center items-center gap-[6px]">
                5
                <img
                  src={blackStar}
                  alt="yellow star"
                  className="w-[15px] h-[14px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-2xl font-bold">Comentarios destacados</h2>

          <div className="flex flex-col gap-5 mb-6">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-[6px]">
                <img src={blackStar} alt="yellow star" className="w-6" />
                <img src={blackStar} alt="yellow star" className="w-6" />
                <img src={blackStar} alt="yellow star" className="w-6" />
                <img src={blackStar} alt="yellow star" className="w-6" />
                <img src={blackStar} alt="yellow star" className="w-6" />
              </div>
              <p className="text-[#595959] text-lg">27 agosto 2022</p>
            </div>
            <p className="lg:text-2xl text-xl max-w-[22em]">
              Buena interfaz, el programa es muy intuitivo y ademas la descarga
              fue rapida
            </p>
            <div className="flex flex-row gap-3">
              <img src={like} alt="" className="h-12 w-12 cursor-pointer" />
              <img src={dislike} alt="" className="h-12 w-12 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
