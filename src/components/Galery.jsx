import React from 'react';
//images 
import online from '../assets/Component15.png';
import Component16 from '../assets/Component16.png';
import Component17 from '../assets/Component17.png';

export const Galery = () => {
  // Definir un objeto que contenga todas las imágenes
  const images = {
    online: online,
    Component16: Component16,
    Component17: Component17
  };

  return (
    <section className=" containerWidth w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full justify-between items-center relative gap-12 my-14">
      <div>
        {/* Accede a las imágenes a través del objeto */}
        <img src={images.online} alt="" className="mx-auto my-auto" />
      </div>
      
      <div>
        <img src={images.Component16} alt="" className="mx-auto my-auto" />
      </div>

      <div>
        <img src={images.Component17} alt="" className="mx-auto my-auto" />
      </div>
    </section>
  );
};

