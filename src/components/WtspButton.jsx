import React from 'react';
//images
import imageWtsp from '../assets/whatsapp.svg';
export const WtspButton = () => {
  return (
    <section class="w-[100px]">
      <div class="w-[60px] h-[60px]  right-3 bottom-4 fixed bg-green-500 rounded-full p-2 z-[9999] hover:bg-green-700">
        <a href="https://wa.me/542644585555" target="_blank">
          <img src={imageWtsp} alt="wtsp image" />
        </a>
      </div>
    </section>
  );
};
