import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import fetchArticles from '../services/Articles';
import { getImageUrl } from '../services/Articles';
import { useNavigate } from 'react-router-dom';
import { Loader } from './Loader';
import imgInstalacion from '../assets/etiquetaInstalacion.png';
export const Products = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchArticles();
        setArticles(data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
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
          {articles.slice(86, 89).map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex items-center justify-center"
            >
              <div className="w-[300px] h-[600px] flex flex-col justify-center items-center gap-2 hover:border hover:border-opacity-50 hover:border-gray-800 hover:bg-[#DAD8DB] rounded-lg group/item py-7 px-5">
                <a
                  onClick={() => handleClickById(item.id)}
                  className="cursor-pointer"
                >
                  <div className="">
                    <img
                      src={getImageUrl(item.imagen1)}
                      alt="article img"
                      className=""
                    />
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
          {articles.slice(86, 89).map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex items-center justify-center"
            >
              <div className="w-[300px] h-[600px] flex flex-col justify-center items-center gap-2 hover:border hover:border-opacity-50 hover:border-gray-800 hover:bg-[#DAD8DB] rounded-lg group/item py-7 px-5">
                <a
                  onClick={() => handleClickById(item.id)}
                  className="cursor-pointer"
                >
                  <div className="">
                    <img
                      src={getImageUrl(item.imagen1)}
                      alt="article img"
                      className=""
                    />
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
          {articles.slice(86, 89).map((item) => (
            <SwiperSlide
              key={item.id}
              className="flex items-center justify-center"
            >
              <div className="w-[300px] h-[600px] flex flex-col justify-center items-center gap-2 hover:border hover:border-opacity-50 hover:border-gray-800 hover:bg-[#DAD8DB] rounded-lg group/item py-7 px-5">
                <a
                  onClick={() => handleClickById(item.id)}
                  className="cursor-pointer"
                >
                  <div className="">
                    <img
                      src={getImageUrl(item.imagen1)}
                      alt="article img"
                      className=""
                    />
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
