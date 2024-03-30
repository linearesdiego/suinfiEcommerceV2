import React from 'react';
//Images
import customerPic from '../../assets/Customer.png';
import securityPic from '../../assets/Security Shield.png';
import magneticCardPic from '../../assets/Magnetic Card.png';
import logoutPic from '../../assets/logout.png';
//Components

import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import { Account } from './Account';
import { Cards } from './Cards';
import { Security } from './Security';

export const AsideProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;
  const { logout } = useAuth();
  //function to edit hover:buttons on paths
  const buttonClasses = (path) => `
  flex items-center mx-0 my-0 rounded-md p-4 transition duration-300
  ${
    isActive(path) ? 'bg-[#2D5682]' : ''
  } hover:bg-[#2D5682] cursor-pointer gap-2
`;

  const handleLogout = () => {
    logout();
    navigate('/auth#login');
  };

  //function to render the components depending on paths
  const renderProfileContent = () => {
    switch (location.pathname) {
      case '/profile/account':
        return <Account />;
      case '/profile/security':
        return <Security />;
      case '/profile/cards':
        return <Cards />;
    }
  };

  return (
    <>
      <div className="container-profile overflow-hidden flex justify-start bg-[#E1E1E1] min-h-screen">
        <aside className="bg-gradient-to-r from-[#38516F] to-[#3583CC] lg:text-base md:text-sm sm:text-xs  lg:w-1/4 my-0 text-[#ffffff] lg:flex lg:flex-col gap-1 text-center ">
          <button
            type="button"
            onClick={() => navigate('/profile/account')}
            className={buttonClasses('/profile/account') + 'mt-2'}
          >
            <img
              src={customerPic}
              alt="Info de la cuenta"
              className="w-4 h-4 mr-4 ml-3"
            />
            <p className="hidden md:block text-start">
              INFORMACION DE TU CUENTA
            </p>
          </button>

          <button
            type="button"
            onClick={() => navigate('/profile/security')}
            className={buttonClasses('/profile/security') + 'w-full'}
          >
            <img
              src={securityPic}
              alt="Seguridad"
              className="w-4 h-4 mr-2 ml-3"
            />
            <p className="hidden md:block">SEGURIDAD</p>
          </button>
          {/* routerLink="/ecommerce/profile/cards" routerLinkActive="bg-[#7637839C]" */}
          <button
            type="button"
            onClick={() => navigate('/profile/cards')}
            className={buttonClasses('/profile/cards') + 'w-full'}
          >
            <img
              src={magneticCardPic}
              alt="Seguridad"
              className="w-4 h-4 mr-2 ml-3"
            />
            <p className="hidden md:block">TARJETAS</p>
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center mx-0 my-0 w-full rounded-md p-4 transition duration-300 hover:bg-[#2D5682]"
          >
            <img
              src={logoutPic}
              alt="cerrar-sesion"
              className="w-7 h-7 mr-2 ml-2 invert"
            />
            <p className="hidden md:block">CERRRAR SESION</p>
          </button>
        </aside>

        <div className="w-9/12 m-4">{renderProfileContent()}</div>
      </div>
    </>
  );
};
