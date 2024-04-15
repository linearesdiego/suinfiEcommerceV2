import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/Auth';

import { useNavigate } from 'react-router-dom';

//imports services
import { fetchArticlesByUserId } from '../../services/Articles';
import { fetchOneProfile } from '../../services/Perfil';
//Imgs imports
import ExplorarImg from '../../assets/Explorar.png';
import ComprarImg from '../../assets/Comprar.png';
import TusComprasImg from '../../assets/Tuscompras.png';
import FiltrosImg from '../../assets/filtros.png';
import productType from '../../assets/productType.png';

export const YourProductsComp = () => {
  const [usuarioId, setUsuarioId] = useState();
  const [articles, setArticles] = useState([]);
  const [modal, setModal] = useState(false);
  const { dataLogin } = useAuth();
  const navigate = useNavigate();
  // Estado local para controlar la sección activa
  const [activeSection, setActiveSection] = useState(''); // Por defecto, la sección 'explorar' está activa

  // Función para cambiar la sección activa cuando se hace clic en un ícono del aside
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  const openModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await fetchOneProfile(dataLogin?.payload?.userId);
        setUsuarioId(profileData.id);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleClickById = (productId) => {
    navigate(`/product-detail/${productId}`);
  };

  useEffect(() => {
    if (usuarioId && activeSection === 'tus ventas') {
      const fetchUserArticles = async () => {
        try {
          const fetchedArticles = await fetchArticlesByUserId(usuarioId);

          const articlesWithImages = await Promise.all(
            fetchedArticles.map(async (article) => {
              if (article.imagen1?.data) {
                const arrayBuffer = new Uint8Array(article.imagen1.data).buffer;
                const uint8Array = new Uint8Array(arrayBuffer);
                let binaryString = '';
                uint8Array.forEach((byte) => {
                  binaryString += String.fromCharCode(byte);
                });
                const base64Data = btoa(binaryString);
                const dataUrl = `data:image/png;base64,${base64Data}`;
                return { ...article, imagen1Url: dataUrl };
              } else {
                return article;
              }
            })
          );

          setArticles(articlesWithImages);
        } catch (error) {
          console.error('Error fetching articles:', error);
        }
      };
      fetchUserArticles();
    }
  }, [usuarioId, activeSection]);

  return (
    <div className="lg:w-full flex flex-row lg:h-full min-h-screen bg-slate-200">
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
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white w-full h-[350px] rounded-lg shadow-lg p-9 border grid grid-cols-3 "
              >
                <div className="sm:col-span-1p-2 flex items-center justify-center">
                  <img
                    src={article.imagen1Url}
                    alt={article.nombre}
                    height={120}
                    width={180}
                  ></img>
                </div>

                <div className="grid grid-rows-3">
                  <div>
                    <h2 className="font-semibold text-xl">{article.nombre}</h2>
                    <h2 className="font-bold text-xl">$ {article.precio}</h2>
                  </div>
                  <div>
                    <h2>Publicado el 20/20/20</h2>
                    <h2>
                      estado <span className="font-bold">activo</span>{' '}
                    </h2>
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => handleClickById(article.id)}
                      className="rounded-xl border border-slate-400 hover:bg-[#0000004F] h-10 w-auto p-2 m-2 ml-0"
                    >
                      VER PUBLICACION
                    </button>
                    <button className="rounded-xl border border-slate-400 hover:bg-[#0000004F] h-10 w-auto p-2 m-2">
                      EDITAR
                    </button>
                  </div>
                </div>
                <div className="flex justify-end items-start p-2 m-3">
                  <div className="flex flex-col items-end">
                    <button className="font-bold text-3xl" onClick={openModal}>
                      ...
                    </button>
                    {modal && (
                      <div className="border border-black rounded-xl p-2 hover:bg-[#0000004F] hover:cursor-pointer mt-2">
                        ELIMINAR PUBLICACION
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
