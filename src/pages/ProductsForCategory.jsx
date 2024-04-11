import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchArticles from '../services/Articles';
import { Navbar } from '../components/Navbar';
import fetchCategories from '../services/Categories';

export const ProductsForCategory = () => {
  const [categories, setCategories] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        // Manejo de errores
        console.error('Error al obtener las categorías:', error);
      }
    };

    fetchCategoriesData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setIsLoading(true);
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
      //setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div>CATEGORIA</div>
    </>
  );
};
