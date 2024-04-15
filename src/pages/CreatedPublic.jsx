import React from 'react';
import { useLocation } from 'react-router-dom';
//Imports Components
import { Navbar } from '../components/Navbar';
import { NewPublic } from '../components/NewPublic';

export const CreatedPublic = () => {
  const location = useLocation();
  const { productId } = location.state || {};
  console.log('traer id', productId);
  return (
    <>
      <Navbar />
      <NewPublic id={productId} />
    </>
  );
};
