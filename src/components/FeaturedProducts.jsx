import React, { useState, useEffect } from 'react';
import fetchArticles from '../services/Articles'; // Reemplaza 'tuarchivo' con la ruta correcta

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchArticles();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <section className="containerWidth w-full flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-0">
        <div className="w-full lg:w-[25%] lg:h-[450px] rounded-lg bg-[#e7e7e7] flex flex-col">
          <h1 className="text-black text-2xl font-bold p-4 h-[15%]">
            OFERTA DEL DÍA
          </h1>
          <div className="h-full flex justify-center items-center py-3 lg:py-0">
            <div className="w-[70%] lg:w-[60%] flex flex-col justify-center items-center hover:bg-white rounded-2xl hover:shadow-2xl px-4 cursor-pointer">
              <img src="/acad.png" alt="img-3" />
              <div className="w-[95%]">
                <p className="text-white bg-yellow-500 font-bold text-center w-[70%]">
                  OFERTA DEL DÍA
                </p>
                <h2 className="text-black text-3xl font-semibold ">
                  $0000,00{' '}
                  <span className="text-yellow-500 font-semibold text-sm">
                    21% OFF
                  </span>
                </h2>
                <p className="text-yellow-500">
                  Mismo precio en 3 cuotas de $0000,00
                </p>
                <h1 className="text-lg font-semibold">AutoCAD 2023</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[70%] lg:h-[450px] rounded-lg bg-[#e7e7e7] flex flex-col">
          <h1 className="text-black text-2xl font-bold p-4 h-[15%] w-full">
            PRODUCTOS DESTACADOS
          </h1>
          <div className="w-full h-full flex flex-col justify-between items-center px-20 lg:flex-row gap-3 py-3 lg:py-0">
            <div className="w-[240px] h-[85%] justify-center items-center flex flex-col hover:bg-white rounded-2xl hover:shadow-2xl cursor-pointer px-4">
              <img src="/acad.png" alt="img-3" />
              <div className="w-[95%] ">
                <p className="text-white bg-yellow-500 font-bold text-center w-full">
                  PRODUCTO DESTACADO
                </p>
                <h2 className="text-black text-3xl font-semibold">
                  $0000,00{' '}
                  <span className="text-yellow-500 font-semibold text-sm">
                    21% OFF
                  </span>
                </h2>
                <p className="text-yellow-500">
                  Mismo precio en 3 cuotas de $0000,00
                </p>
                <h1 className="text-lg font-semibold">AutoCAD 2023</h1>
              </div>
            </div>
            <div className="w-[240px] h-[85%] justify-center items-center flex flex-col hover:bg-white rounded-2xl hover:shadow-2xl cursor-pointer px-4">
              <img src="/acad.png" alt="img-3" />
              <div className="w-[95%]">
                <p className="text-white bg-yellow-500 font-bold text-center w-full">
                  PRODUCTO DESTACADO
                </p>
                <h2 className="text-black text-3xl font-semibold">
                  $0000,00{' '}
                  <span className="text-yellow-500 font-semibold text-sm">
                    21% OFF
                  </span>
                </h2>
                <p className="text-yellow-500">
                  Mismo precio en 3 cuotas de $0000,00
                </p>
                <h1 className="text-lg font-semibold">AutoCAD 2023</h1>
              </div>
            </div>
            <div className="w-[240px] h-[85%] justify-center items-center flex flex-col hover:bg-white rounded-2xl hover:shadow-2xl cursor-pointer px-4">
              <img src="/acad.png" alt="img-3" />
              <div className="w-[95%]">
                <p className="text-white bg-yellow-500 font-bold text-center w-full">
                  PRODUCTO DESTACADO
                </p>
                <h2 className="text-black text-3xl font-semibold">
                  $0000,00{' '}
                  <span className="text-yellow-500 font-semibold text-sm">
                    21% OFF
                  </span>
                </h2>
                <p className="text-yellow-500">
                  Mismo precio en 3 cuotas de $0000,00
                </p>
                <h1 className="text-lg font-semibold">AutoCAD 2023</h1>
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" w-full md:w-[500px] md:h-[480px] rounded-xl shadow-2xl overflow-hidden mb-4 md:mb-0 bg-[#efefef]">
          <h1 className="text-black text-2xl font-bold mb-2 self-start pl-4">
            OFERTA DEL DIA
          </h1>
          <div className="flex relative items-center justify-center flex-grow">
            <div className="card h-[416px] w-[280px] rounded-sm overflow-hidden relative items-center justify-center ">
              <img src="/acad.png" alt="Imagen 3" className="mx-auto" />
              <div className="p-2 flex items-center">
                <h2 className="text-black font-bold text-3xl mb-2 ">$0000</h2>
                <p className="text-black font-bold text-xl mr-4">21% OFF </p>
              </div>
              <div className="p-2 ">
                <p className="text-black font-bold ">
                  Mismo precio en 3 cuotas de $000000
                </p>
                <h2 className="">Autocad 2023</h2>
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
        </div>
        <div className=" w-full md:w-[500px] md:h-[480px] lg:w-[900px] rounded-xl shadow-2xl overflow-hidden mb-4 md:mb-0 bg-[#efefef]">
          <h1 className="text-black text-2xl font-bold mb-2 self-start pl-4">
            PRODUCTOS DESTACADOS
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
            <div className="card h-[416px] w-[280px] rounded-sm overflow-hidden relative items-center justify-center p-2">
              <img src="/acad.png" alt="Imagen 3" className="mx-auto" />
              <div className="p-3 flex items-center">
                <h2 className="text-black font-bold text-3xl mb-2 ">$0000</h2>
              </div>
              <div className="p-3">
                <p className="text-black font-bold ">
                  Mismo precio en 3 cuotas de $000000
                </p>
                <h2 className="">Autocad 2023</h2>
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

            <div className="card h-[416px] w-[280px] rounded-sm overflow-hidden relative items-center justify-center p-2">
              <img src="/acad.png" alt="Imagen 3" className="mx-auto" />
              <div className="p-3 flex items-center">
                <h2 className="text-black font-bold text-3xl mb-2 ">$0000</h2>
              </div>
              <div className="p-3 ">
                <p className="text-black font-bold ">
                  Mismo precio en 3 cuotas de $000000
                </p>
                <h2 className="">Autocad 2023</h2>
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

            <div className="card h-[416px] w-[280px] rounded-sm overflow-hidden relative items-center justify-center ">
              <img src="/acad.png" alt="Imagen 3" className="mx-auto" />
              <div className="p-3 flex items-center">
                <h2 className="text-black font-bold text-3xl mb-2 ">$0000</h2>
              </div>
              <div className="p-3 ">
                <p className="text-black font-bold ">
                  Mismo precio en 3 cuotas de $000000
                </p>
                <h2 className="">Autocad 2023</h2>
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
        </div> */}
      </section>
    </>
  );
};
