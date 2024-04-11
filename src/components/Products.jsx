import React from 'react';
import { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import imgs
import imgInstalacion from '../assets/etiquetaInstalacion.png';

import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import fetchArticles from '../services/Articles';
import { useNavigate } from 'react-router-dom';
import { Loader } from './Loader';

export const Products = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchArticles();
        const dataImg = data.map((img) => {
          const arrayBuffer = new Uint8Array(img?.imagen1?.data).buffer;

          // Convertir el ArrayBuffer a Uint8Array
          const uint8Array = new Uint8Array(arrayBuffer);

          // Convertir los datos binarios en una cadena base64
          let binaryString = '';
          uint8Array.forEach((byte) => {
            binaryString += String.fromCharCode(byte);
          });
          const base64Data = btoa(binaryString);

          const dataUrl = `data:image/png;base64,${base64Data}`;

          return {
            id: img.id,
            imagenNew: dataUrl,
          };
        });
        const dataNew = data.map((item) => {
          return {
            ...item,
            imagen: dataImg.map((itemImg) => {
              return itemImg;
            }),
          };
        });
        setArticles(dataNew);
      } catch (error) {
        // Manejar el error si es necesario
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleClickById = (productId) => {
    navigate(`/product-detail/${productId}`);
  };

  return (
    <>
      <section className="containerWidth px-10 py-10 lg:py-10 bg-white  rounded-2xl mt-20">
        <div className="bg-white  w-fit mx-auto rounded-t-3xl py-2 ">
          <h1 className="text-2xl lg:text-2xl font-bold text-center text-black">
            Productos
          </h1>
        </div>
        <div className="w-full flex items-center justify-center">
          {isLoading && <Loader />}
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={280}
          navigation={true}
          modules={[Navigation]}
          className="w-full mr-0 ml-0"
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            '@0.75': {
              slidesPerView: 1,
            },
            '@1.00': {
              slidesPerView: 2,
            },
            '@1.50': {
              slidesPerView: 3,
            },
            '@2': {
              slidesPerView: 3,
            },
          }}
        >
          {articles.slice(0, 9).map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex items-center justify-center"
            >
              <div className="w-[300px] h-[600px] flex flex-col justify-center items-center gap-2 hover:border hover:border-opacity-50 hover:border-gray-800 hover:bg-[#DAD8DB]        rounded-lg group/item py-7 px-5">
                <a
                  onClick={() => handleClickById(item.id)}
                  className="cursor-pointer"
                >
                  <div className="">
                    {item.imagen.map(
                      (itemCard) =>
                        itemCard.id === item.id && (
                          <div className="">
                            <img
                              src={itemCard.imagenNew}
                              alt="article img"
                              className=" "
                            />
                          </div>
                        )
                    )}
                  </div>

                  <div className="text-center ">
                    <p className="font-semibold text-sm lg:w-[100%] text-black">
                      {item.nombre}
                    </p>
                    <div>
                      <div className="font-semibold text-lg lg:w-[100%] text-black text-start ml-5">
                        <div className="flex gap-10 ">
                          <p className="text-2xl">$ {item.precio} </p>
                          <p className="text-[#F4D240] text-2xl">21% OFF</p>
                        </div>
                        <div className="text-[#F4D240] w-full">
                          <p>Mismo precio en 3 cuotas de $50000</p>
                        </div>
                        <div className="flex flex-row gap-10">
                          <p className="text-[#F4D240]">Instalacion gratuita</p>
                          <img src={imgInstalacion} alt="etiqueta" />
                        </div>
                      </div>
                    </div>
                    <div className="group/edit invisible group-hover/item:visible w-full h-full flex justify-evenly py-5 pb-5">
                      <button className="text-white group-hover/edit: py-2 px-5 border border-gray-400 rounded-full text-lg bg-zinc-700 font-bold">
                        COMPRAR
                      </button>
                      <button className="text-black group-hover/edit:  py-2 px-10 border border-gray-400 rounded-full text-lg bg-transparent font-bold">
                        VER
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={3}
          spaceBetween={280}
          navigation={true}
          modules={[Navigation]}
          className="w-full mr-0 ml-0"
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            '@0.75': {
              slidesPerView: 1,
            },
            '@1.00': {
              slidesPerView: 2,
            },
            '@1.50': {
              slidesPerView: 3,
            },
            '@2': {
              slidesPerView: 3,
            },
          }}
        >
          {articles.slice(10, 20).map((item) => (
            <SwiperSlide
              className="flex items-center justify-center"
              key={item.id}
            >
              <div className="w-[300px] h-[600px] flex flex-col justify-center items-center gap-2 hover:border hover:border-opacity-50 hover:border-gray-800 hover:bg-[#DAD8DB]        rounded-lg group/item py-7 px-5">
                <a
                  onClick={() => handleClickById(item.id)}
                  className="cursor-pointer"
                >
                  <div className="">
                    {item.imagen.map(
                      (itemCard) =>
                        itemCard.id === item.id && (
                          <div className="">
                            <img
                              src={itemCard.imagenNew}
                              alt="article img"
                              className=" "
                            />
                          </div>
                        )
                    )}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-sm lg:w-[100%] text-black">
                      {item.nombre}
                    </p>
                    <div>
                      <div className="font-semibold text-lg lg:w-[100%] text-black text-start ml-5">
                        <div className="flex gap-10 ">
                          <p className="text-2xl">$ {item.precio} </p>
                          <p className="text-[#F4D240] text-2xl">21% OFF</p>
                        </div>
                        <div className="text-[#F4D240] w-full">
                          <p>Mismo precio en 3 cuotas de $50000</p>
                        </div>
                        <div className="flex flex-row gap-10">
                          <p className="text-[#F4D240]">Instalacion gratuita</p>
                          <img src={imgInstalacion} alt="etiqueta" />
                        </div>
                      </div>
                    </div>
                    <div className="group/edit invisible group-hover/item:visible w-full h-full flex justify-evenly py-5 pb-5">
                      <button className="text-white group-hover/edit: py-2 px-5 border border-gray-400 rounded-full text-lg bg-zinc-700 font-bold">
                        COMPRAR
                      </button>
                      <button className="text-black group-hover/edit:  py-2 px-10 border border-gray-400 rounded-full text-lg bg-transparent font-bold">
                        VER
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={3}
          spaceBetween={280}
          navigation={true}
          modules={[Navigation]}
          className="w-full mr-0 ml-0"
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            '@0.75': {
              slidesPerView: 1,
            },
            '@1.00': {
              slidesPerView: 2,
            },
            '@1.50': {
              slidesPerView: 3,
            },
            '@2': {
              slidesPerView: 3,
            },
          }}
        >
          {articles.slice(21, 31).map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex items-center justify-center"
            >
              <div className="w-[300px] h-[600px] flex flex-col justify-center items-center gap-2 hover:border hover:border-opacity-50 hover:border-gray-800 hover:bg-[#DAD8DB]        rounded-lg group/item py-7 px-5">
                <a
                  onClick={() => handleClickById(item.id)}
                  className="cursor-pointer"
                >
                  <div className="">
                    {item.imagen.map(
                      (itemCard) =>
                        itemCard.id === item.id && (
                          <div className="">
                            <img
                              src={itemCard.imagenNew}
                              alt="article img"
                              className=""
                            />
                          </div>
                        )
                    )}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-sm lg:w-[100%] text-black">
                      {item.nombre}
                    </p>
                    <div>
                      <div className="font-semibold text-lg lg:w-[100%] text-black text-start ml-5">
                        <div className="flex gap-10 ">
                          <p className="text-2xl">$ {item.precio} </p>
                          <p className="text-[#F4D240] text-2xl">21% OFF</p>
                        </div>
                        <div className="text-[#F4D240] w-full">
                          <p>Mismo precio en 3 cuotas de $50000</p>
                        </div>
                        <div className="flex flex-row gap-10">
                          <p className="text-[#F4D240]">Instalacion gratuita</p>
                          <img src={imgInstalacion} alt="etiqueta" />
                        </div>
                      </div>
                    </div>
                    <div className="group/edit invisible group-hover/item:visible w-full h-full flex justify-evenly py-5 pb-5">
                      <button className="text-white group-hover/edit: py-2 px-5 border border-gray-400 rounded-full text-lg bg-zinc-700 font-bold">
                        COMPRAR
                      </button>
                      <button className="text-black group-hover/edit:  py-2 px-10 border border-gray-400 rounded-full text-lg bg-transparent font-bold">
                        VER
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={3}
          spaceBetween={320}
          navigation={true}
          modules={[Navigation]}
          className="w-full mr-0 ml-0"
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            '@0.75': {
              slidesPerView: 1,
            },
            '@1.00': {
              slidesPerView: 2,
            },
            '@1.50': {
              slidesPerView: 3,
            },
            '@2': {
              slidesPerView: 3,
            },
          }}
        >
          {articles.slice(32, 42).map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex items-center justify-center"
            >
              <div className="w-[300px] h-[600px] flex flex-col justify-center items-center gap-2 hover:border hover:border-opacity-50 hover:border-gray-800 hover:bg-[#DAD8DB]        rounded-lg group/item py-7 px-5">
                <a
                  onClick={() => handleClickById(item.id)}
                  className="cursor-pointer"
                >
                  <div className="">
                    {item.imagen.map(
                      (itemCard) =>
                        itemCard.id === item.id && (
                          <div className="">
                            <img
                              src={itemCard.imagenNew}
                              alt="article img"
                              className=""
                            />
                          </div>
                        )
                    )}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-sm lg:w-[100%] text-black">
                      {item.nombre}
                    </p>
                    <div>
                      <div className="font-semibold text-lg lg:w-[100%] text-black text-start ml-5">
                        <div className="flex gap-10 ">
                          <p className="text-2xl">$ {item.precio} </p>
                          <p className="text-[#F4D240] text-2xl">21% OFF</p>
                        </div>
                        <div className="text-[#F4D240] w-full">
                          <p>Mismo precio en 3 cuotas de $50000</p>
                        </div>
                        <div className="flex flex-row gap-10">
                          <p className="text-[#F4D240]">Instalacion gratuita</p>
                          <img src={imgInstalacion} alt="etiqueta" />
                        </div>
                      </div>
                    </div>
                    <div className="group/edit invisible group-hover/item:visible w-full h-full flex justify-evenly py-5 pb-5">
                      <button className="text-white group-hover/edit: py-2 px-5 border border-gray-400 rounded-full text-lg bg-zinc-700 font-bold">
                        COMPRAR
                      </button>
                      <button className="text-black group-hover/edit:  py-2 px-10 border border-gray-400 rounded-full text-lg bg-transparent font-bold">
                        VER
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};
