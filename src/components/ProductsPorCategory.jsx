import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Import servicios
import fetchArticles from '../services/Articles';
import fetchCategories from '../services/Categories';
// Import Images
import estrellaCalificacion from '../assets/estrellaCalificacion.png';
import imgInstalacion from '../assets/etiquetaInstalacion.png';

export const ProductsPorCategory = ({ categoria }) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickById = (productId) => {
    navigate(`/product-detail/${productId}`);
  };

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        setIsLoading(true);
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoriesData();
  }, []);

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
  }, [categoria]);
  return (
    <>
      <div className="w-full h-full  p-10 lg:py-14 lg:px-28">
        <div className="mt-2 p-2 text-center lg:flex lg:justify-center ">
          <h2 className="font-semibold mr-2 text-xl">
            Busqueda en la categoria:
          </h2>
          {categories
            .filter((cat) => cat.id.toString() === categoria)
            .map((cat) => (
              <div className="font-bold text-xl" key={cat.id}>
                {cat.nombre}
              </div>
            ))}
        </div>
        {!isLoading &&
          articles
            .filter(
              (item) =>
                item.categoria && item.categoria.id === parseInt(categoria, 10)
            )
            .map((item) => (
              <div
                key={item.id}
                className="bg-white lg:p-0 p-5 lg:h-[300px] lg:w-full rounded-lg shadow-[0px_4px_4px_0px_#00000040] border border-[#0000004D] mt-10 "
              >
                <div className="lg:w-full lg:flex lg:flex-row lg:py-5 lg:px-8">
                  <div className="lg:w-[25%] lg:px-5 lg:h-full">
                    <div className="">
                      {item.imagen.map(
                        (itemCard) =>
                          itemCard.id === item.id && (
                            <div key={item.id} className="">
                              <img
                                src={itemCard.imagenNew}
                                alt="article img"
                                className="h-[250px] w-[250px]"
                              />
                            </div>
                          )
                      )}
                    </div>
                  </div>

                  <div className="lg:h-full lg:w-full lg:flex lg:flex-col max-w-[900px]">
                    <div className="flex flex-col gap-10 pt-10  ">
                      <div className="flex flex-row justify-between">
                        <p className="lg:text-2xl text-xl font-semibold uppercase">
                          {item.nombre}
                        </p>

                        <span className="flex lg:flex-row gap-1 items-center flex-col">
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
                      <div className="flex flex-col lg:mt-[-30px] mt-[-100px] pb-5  text-xl text-[#F4D240]">
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
                        <span>$</span>
                        {item.precio}
                      </p>
                      <div className="flex items-end">
                        <button
                          onClick={() => handleClickById(item.id)}
                          className="w-[150px] z-10 text-center border-black border p-3 rounded-3xl font-bold block hover:bg-slate-300"
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
    </>
  );
};

// <div className="min-h-screen bg-black text-white">
//   {isLoading ? (
//     <p>Cargando...</p>
//   ) : (
//     <div>
//       <h2>Busqueda en la categoria: {categoria} </h2>
//       {categories
//         .filter((cat) => cat.id.toString() === categoria)
//         .map((cat) => (
//           <div key={cat.id}>{cat.nombre} </div>
//         ))}
//       {articles
//         .filter(
//           (article) =>
//             article.categoria &&
//             article.categoria.id === parseInt(categoria, 10)
//         )
//         .map((article) => (
//           <div key={article.id}>
//             <h3>{article.nombre}</h3>
//             <p>Precio: {article.precio}</p>
//           </div>
//         ))}
//     </div>
//   )}
// </div>
