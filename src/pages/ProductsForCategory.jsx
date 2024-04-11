import React from 'react';
import { useParams } from 'react-router-dom';

//Components
import { Navbar } from '../components/Navbar';
import { ProductsPorCategory } from '../components/ProductsPorCategory';

export const ProductsForCategory = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar></Navbar>
      <ProductsPorCategory categoria={id}></ProductsPorCategory>
    </>
  );
};
