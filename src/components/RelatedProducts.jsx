import React from 'react';
import { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import imgs

import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import fetchArticles from '../services/Articles';
import { useNavigate } from 'react-router-dom';
import { Loader } from './Loader';

export const RelatedProducts = ({ categoria }) => {
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
      } catch (error) {}
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleClickById = (productId) => {
    navigate(`/product-detail/${productId}`);
    window.location.reload();
  };

  const cantidadElementos = articles.filter(
    (item) => item.categoria.id === categoria
  ).length;
  console.log('catidad', cantidadElementos);
  return (
    <>
      <section className="containerWidth pl-1 pr-5 sm:px-10 py-10 lg:py-10 bg-white rounded-2xl mt-20 mb-20">
        <div className="bg-white w-fit rounded-t-3xl p-6 ml-6">
          <h1 className="text-3xl font-bold text-center sm:text-start  text-black">
            Productos Relacionados
          </h1>
        </div>
        <div className="w-full flex items-center justify-center">
          {isLoading && <Loader />}
        </div>
        {cantidadElementos == 0 ? (
          <p className="text-start mt-3 mb-1 mx-12 p-2 ">
            No hay productos relacionados
          </p>
        ) : (
          <Swiper
            slidesPerView={3}
            spaceBetween={290}
            navigation={true}
            modules={[Navigation]}
            className="w-full mr-0 ml-0"
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              '@0.75': {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              '@1.00': {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              '@1.50': {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              '@2': {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
          >
            {articles
              .filter((item) => item.categoria.id === categoria)
              .map((item) => (
                <div className="bg-black">
                  <SwiperSlide
                    key={item.id}
                    className="flex items-center justify-center "
                  >
                    <div className="w-[275px] h-[450px] sm:w-[310px] sm:h-[500px] mb-3.5 mt-auto flex flex-col justify-center items-center gap-2 border border-gray-300 shadow-lg shadow-gray-500  hover:border-b-black rounded-lg group/item ml-8 mr-5 sm:mx-14">
                      <a
                        onClick={() => handleClickById(item.id)}
                        className="cursor-pointer"
                      >
                        <div className=" w-auto h-auto p-8">
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

                        <div className="text-start mx-8">
                          <span className="font-bold text-2xl">
                            ${item.precio}
                          </span>
                          <span className="font-semibold text-sm lg:w-[100%] text-black">
                            {item.nombre}
                          </span>
                          <div className="w-full h-full flex flex-col justify-between items-center pt-4 pb-auto">
                            <button className="text-black  py-2 px-14 border border-gray-400 rounded-full text-lg bg-transparent font-bold mt-auto">
                              VER
                            </button>
                          </div>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
          </Swiper>
        )}
      </section>
    </>
  );
};
