import React from 'react';
import { Navbar } from '../components/Navbar';
import { ViewCheckOut } from '../components/ViewCheckOut';

export const CheckOut = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#D8D8D8]">
        <ViewCheckOut />
      </div>
    </>
  );
};
