import React from 'react';
import { Link } from 'react-router-dom';
import { fetchProductById } from '../services/Articles';
import { useState } from 'react';
//Imports images
import okImage from '../assets/Ok.png';
import { useEffect } from 'react';

export const NewPublic = ({ id }) => {
  const [product, setProduct] = useState(id);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await fetchProductById(id);

        if (productData) {
          // Procesamiento de imágenes (igual al código anterior)
          const arrayBuffer = new Uint8Array(productData?.imagen1?.data).buffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          let binaryString = '';
          uint8Array.forEach((byte) => {
            binaryString += String.fromCharCode(byte);
          });
          const base64Data = btoa(binaryString);
          const dataUrl = `data:image/png;base64,${base64Data}`;

          const data = { ...productData, imagenNew: dataUrl };
          setProduct(data);
          setCategoria(productData.categoriaId);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);
  console.log('PRODUCT', product);
  return (
    <div className="bg-gradient-to-b from-[#CFEBD1B2] to-[#E1E1E1B2] h-full w-full min-h-screen flex justify-center gap-10">
      <div className=" m-5 px-4 pt-3 pb-5 lg:m-10 lg:px-9 lg:pt-5 lg:pb-8 5/6 lg:w-4/6">
        {/* SECTION CHECK GREEN */}
        <div
          className="p-2 m-2 mb-8 md:h-44 bg-[#FFFFFF] border border-solid flex"
          style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.4)' }}
        >
          <div className="w-3/4 h-full px-1 py-7 sm:p-7">
            <p className="m-2 pl-6 text-xl">¡Listo!</p>
            <p className="hidden sm:block m-2 pl-6 font-bold text-2xl">
              Creaste tu publicación con éxito
            </p>
          </div>
          <div className="w-1/4 pt-4 sm:pt-10 md:pt-0 h-full flex items-center justify-center">
            <img src={okImage} alt="ok image" height={10} width={70} />
          </div>
        </div>

        {/* SECTION VIEW CREATED PUBLIC */}
        <div
          className="py-7 px-14 m-2 h-auto bg-[#FFFFFF] border border-solid shadow-md"
          style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.4)' }}
        >
          <div className="sm:grid sm:grid-cols-3 gap-2 h-5/6">
            <div className="sm:col-span-1p-2 flex items-center justify-center">
              <img
                src={product?.imagenNew}
                alt="Imagen de nueva publicacion"
                height={120}
                width={180}
              />
            </div>
            <div className="block sm:col-span-1 p-4 pt-8 text-center text-xl font-semibold">
              {product?.nombre}
            </div>
            <div className="block sm:col-span-1 p-4 pt-8 text-center sm:text-end text-2xl font-bold">
              ${product?.precio}
            </div>
          </div>
          <div>
            <p className="hidden sm:block my-4 p-4 pl-8">
              Tené en cuenta que en unos minutos vas a poder ver la publicacion
              desde tus canales de venta.
            </p>
          </div>
        </div>
        {/* SECTION BUTTONS */}
        <div className="py-2 m-2 text-center md:text-right">
          {/* IMPORTANTE LINKEAR A CREAR NUEVO PRODUCTO/PUBLICACION */}
          <Link to="/newProduct">
            <button className="py-2.5 px-9 m-2 text-xl hover:rounded-lg hover:bg-[#295F93] hover:text-white">
              Volver a publicar
            </button>
          </Link>
          <Link to="/yourProducts">
            <button className="py-2.5 px-9 m-2 text-xl hover:rounded-lg hover:bg-[#295F93] hover:text-white">
              Ir a publicaciones
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
