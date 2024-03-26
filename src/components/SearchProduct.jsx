//Imports
//Service import
import fetchArticles from '../services/Articles';
//Native imports
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//Components imports
import { Loader } from './Loader';
//img imports
import imgInstalacion from '../assets/etiquetaInstalacion.png';
import estrellaCalificacion from '../assets/estrellaCalificacion.png';

export const SearchProduct = () => {
  //Url with the searched query
  const searchParams = useLocation();
  const searchParamss = new URLSearchParams(searchParams.search);
  //query
  const searchText = searchParamss.get('q');
  //state to consume the api
  const [dataSearch, setDataSearch] = useState([]);
  //state to loader
  const [isLoading, setIsLoading] = useState(false); // Inicializar isLoading en false
  //Use navigate
  const navigate = useNavigate();

  // responsive sidebar
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Búsqueda por consulta

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const results = await fetchArticles(searchText);

        if (results) {
          const dataNew = results.map((img) => {
            // Procesamiento de imágenes (igual al código anterior)
            const arrayBuffer = new Uint8Array(img?.imagen1?.data).buffer;
            const uint8Array = new Uint8Array(arrayBuffer);
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
          const data = results.map((item) => {
            return {
              ...item,
              imagen: dataNew.map((itemImg) => {
                return itemImg;
              }),
            };
          });
          setDataSearch(data);
        }
      } catch (error) {
        console.error(error); // Manejar el error de forma adecuada
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchText]);

  const handleClickById = (productId) => {
    navigate(`/product-detail/${productId}`);
  };

  return (
    <>
      <div className="w-full h-full min-h-screen bgnewProduct relative">
        <div className="absolute transform left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 ">
          {isLoading && <Loader />}
        </div>
        <div className="lg:w-full lg:flex lg:flex-row h-full ">
          <div className="lg:hidden relative  text-white bg-[#37133E] border border-[#855E98]">
            <div className="flex justify-between items-center containerWidth">
              <p>resultados</p>
              <button onClick={toggleSidebar}>
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#ffffff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 6L6 18M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="#ffffff"
                      fill-rule="evenodd"
                      d="M7.5 3.1a.4.4 0 1 0 0 .8h7a.4.4 0 0 0 0-.8zm0 2a.4.4 0 1 0 0 .8h7a.4.4 0 0 0 0-.8zm-.4 2.4c0-.22.18-.4.4-.4h7a.4.4 0 0 1 0 .8h-7a.4.4 0 0 1-.4-.4m.4 1.6a.4.4 0 1 0 0 .8h7a.4.4 0 0 0 0-.8zm-.4 2.4c0-.22.18-.4.4-.4h7a.4.4 0 0 1 0 .8h-7a.4.4 0 0 1-.4-.4M2.5 9.25L5 6H0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="flex flex-col items-end mr-7 ">
              <ul className="font-bold w-[50%] h-auto text-black top-[82px] flex-col items-center justify-center gap-10 left-0 z-[100] bg-white lg:hidden border  border-[#855E98] ">
                <li className="border border-[#855E98]">
                  <div className="text-white bg-[#37133E] absolute  p-5">
                    <div className="py-10 px-7 h-full">
                      <h1 className="text-xl font-semibold">
                        BUSQUEDAS RELACIONADAS:
                      </h1>
                    </div>
                    <div className="h-full px-7">
                      <div className="flex flex-row gap-3">
                        {' '}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#ffffff"
                            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
                          />
                        </svg>
                        BUSQUEDA
                      </div>
                      <div className="lg:pt-10">
                        <div className="flex flex-row gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#ffffff"
                              d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
                            />
                          </svg>
                          FILTROS
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
          <div className="hidden lg:w-[30%] h-full lg:flex items-center ">
            {!isLoading && dataSearch.length >= 1 && (
              <div className="text-white bg-sidebar min-h-screen  h-full w-full my-auto">
                <div className="py-10 px-7 h-full">
                  <h1 className="text-xl font-semibold">
                    BUSQUEDAS RELACIONADAS:
                  </h1>
                </div>
                <div className="h-full px-7">
                  <div className="flex flex-row gap-3">
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#ffffff"
                        d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
                      />
                    </svg>
                    BUSQUEDA
                  </div>
                  <div className="lg:pt-10">
                    <div className="flex flex-row gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ffffff"
                          d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
                        />
                      </svg>
                      FILTROS
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-full h-full bgSearch p-7">
            {/* Map of products */}
            {!isLoading &&
              dataSearch.map((item) => (
                <div className="bg-white lg:p-0 p-5 lg:h-[300px]  lg:w-full rounded-lg shadow-[0px_4px_4px_0px_#00000040] border border-[#0000004D] mt-5 ">
                  <div className="lg:w-full lg:flex lg:flex-row lg:py-5">
                    <div className="lg:w-[25%] lg:px-5 lg:h-full">
                      <div className="">
                        {item.imagen.map(
                          (itemCard) =>
                            itemCard.id === item.id && (
                              <div className="">
                                <img
                                  src={itemCard.imagenNew}
                                  alt="article img"
                                  className="h-[250px] w-[250px]"
                                />
                              </div>
                            )
                        )}
                      </div>
                      {/* } } */}
                    </div>

                    <div className="lg:h-full lg:w-full lg:flex lg:flex-col max-w-[900px]">
                      <div className="flex flex-col gap-10 pt-10  ">
                        <div className="flex flex-row justify-between">
                          <p className="text-2xl font-semibold uppercase">
                            {item.nombre}
                          </p>

                          <span className="flex flex-row gap-1 items-center">
                            <img
                              src={estrellaCalificacion}
                              alt="calificacion"
                              className="w-[20px] h-[20px]"
                            />
                            <img
                              src={estrellaCalificacion}
                              alt="calificacion"
                              className="w-[20px] h-[20px]"
                            />
                            <img
                              src={estrellaCalificacion}
                              alt="calificacion"
                              className="w-[20px] h-[20px]"
                            />
                            <img
                              src={estrellaCalificacion}
                              alt="calificacion"
                              className="w-[20px] h-[20px]"
                            />
                            <img
                              src={estrellaCalificacion}
                              alt="calificacion"
                              className="w-[20px] h-[20px]"
                            />
                            <p>5.0</p>
                          </span>
                        </div>
                        <div className="flex flex-col lg:mt-[-30px] text-xl text-[#F4D240]">
                          <p>Mismo precio en 3 cuotas</p>
                          <p>500000</p>
                          <div className="flex flex-row gap-10">
                            <p>Instalacion gratuita</p>
                            <img src={imgInstalacion} alt="etiqueta" />
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex  justify-between">
                        <p className="text-2xl font-semibold flex flex-row text-start items-center ">
                          <td>$</td>
                          {item.precio}
                        </p>
                        <div className="flex items-end">
                          <button
                            onClick={() => handleClickById(item.id)}
                            className="w-[150px] z-10 text-center border-black border p-3 rounded-3xl font-bold block"
                          >
                            VER
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {!isLoading && (!dataSearch || dataSearch.length === 0) && (
          <div className="containerWidth lg:w-full text-center bg-white shadow-lg rounded-lg lg:flex lg:justify-between">
            <div className="lg:w-[100%] flex flex-row py-10 px-5">
              <div className="w-[30%]">
                <img
                  src="/noResultsEcommerce.jpg"
                  alt="No Results img"
                  className="w-[300px] h-[300px]"
                />
              </div>
              <div className="">
                <h1 className="lg:font-bold lg:text-2xl">
                  No hay publicaciones que coincidan con tu busqueda
                </h1>
                <p className="text-lg font-semibold">
                  * Revisá la ortografía de la palabra
                </p>
                <p className="text-lg font-semibold">
                  * Utilizá palabras más genéricas o menos palabras.
                </p>
              </div>

              <p></p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
