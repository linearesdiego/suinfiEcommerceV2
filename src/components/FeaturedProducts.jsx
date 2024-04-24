import React, { useState, useEffect } from 'react';

import { fetchFeaturedArticles } from '../services/Articles';
import { getImageUrl } from '../services/Articles';
export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchFeaturedArticles(); // Llama al nuevo servicio
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <section className="containerWidth w-full flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-5 lg:gap-0">
        <div className="w-[85%] sm:w-[50%] lg:w-[25%] h-[450px] rounded-lg bg-[#e7e7e7] flex flex-col">
          <h1 className="text-black text-xl lg:text-2xl font-bold p-4 h-[15%]">
            OFERTA DEL DÍA
          </h1>
          <div className="h-full flex justify-center items-center py-3 lg:py-0">
            <div className="w-[220px] flex flex-col justify-center items-center hover:bg-white rounded-2xl hover:shadow-2xl cursor-pointer">
              <img src="/acad.png" alt="img-3" />
              <div className="w-[95%]">
                <p className="text-white bg-yellow-500 font-bold text-sm text-center w-[90%]">
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
        <div className="w-[85%] sm:w-[50%] lg:w-[74%] lg:h-[450px] rounded-lg bg-[#e7e7e7] flex flex-col">
          <h1 className="text-black text-xl lg:text-2xl font-bold p-4 h-[15%] w-full">
            PRODUCTOS DESTACADOS
          </h1>
          <div className="w-full h-full flex flex-col lg:flex-row justify-between xl:px-20">
            {products.slice(86, 89).map((product) => (
              <div
                key={product.id}
                className="h-full flex justify-center items-center py-3 lg:py-0"
              >
                <div className="w-[220px] flex flex-col justify-center items-center hover:bg-white rounded-2xl hover:shadow-2xl  cursor-pointer">
                  <img
                    src={getImageUrl(product.imagen1)}
                    alt={product.nombre}
                  />
                  <div className="w-[95%]">
                    <p className="text-white bg-yellow-500 font-bold text-center w-[90%] text-sm">
                      PRODUCTO DESTACADO
                    </p>
                    <h2 className="text-black text-3xl font-semibold ">
                      ${product.precio.toFixed(2)}{' '}
                      <span className="text-yellow-500 font-semibold text-sm">
                        21% OFF
                      </span>
                    </h2>
                    <p className="text-yellow-500">
                      Mismo precio en 3 cuotas de $
                      {(product.precio / 3).toFixed(2)}
                    </p>
                    <h1 className="text-lg font-semibold">{product.nombre}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
