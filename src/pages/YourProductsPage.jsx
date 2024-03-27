import React from 'react';
//Components imports
import { YourProductsComp } from '../components/yourProducts/YourProductsComp';
import { Navbar } from '../components/Navbar';

export const YourProductsPage = () => {
  return (
    <div>
      <Navbar />
      <YourProductsComp />
    </div>
  );
};
