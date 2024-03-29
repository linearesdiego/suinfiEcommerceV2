import React from 'react';
import { Carousel } from '../components/Carousel';
import { Products } from '../components/Products';
import { Galery } from '../components/Galery';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WtspButton } from '../components/WtspButton';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Items } from '../components/Items';

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-ecommerce">
        <Carousel />
        <FeaturedProducts />
        <Items />
        <Products />
        <Galery />
        <WtspButton />
        <Footer />
      </div>
    </>
  );
};
