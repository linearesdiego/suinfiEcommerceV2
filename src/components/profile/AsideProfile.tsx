'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/Auth';
//Images
import customerPic from '../../../public/Customer.png';
import securityPic from '../../../public/Security Shield.png';
import magneticCardPic from '../../../public/Magnetic Card.png';
import logoutPic from '../../../public/logout.png';
//Components
import { Account } from '@/components/profile/Account';
import { Security } from '@/components/profile/Security';
import { Cards } from '@/components/profile/Cards';

export const AsideProfile = () => {
  const router = useRouter();
  const currentRoute = usePathname();
  const isActive = (path: any) => currentRoute === path;
  const { logout } = useAuth();
  //function to edit hover:buttons on paths
  const buttonClasses = (path: any) => `
  flex items-center mx-0 my-0 rounded-md p-4 transition duration-300
  ${
    isActive(path) ? 'bg-[#7637839C] ' : 'bg-[#37133E]'
  } hover:bg-[#7637839C] cursor-pointer gap-2
`;

  const handleLogout = () => {
    logout();
    router.push('/auth#login');
  };

  //function to render the components depending on paths
  const renderProfileContent = () => {
    switch (currentRoute) {
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
      <div className="container-profile overflow-auto flex justify-between bg-gradient-to-b from-[#EFD0EC] to-[#F8F8F8] min-h-screen">
        <aside className="bg-[#37133E] lg:text-base md:text-sm sm:text-xs  lg:w-1/4 my-0 text-[#D1C0D4] lg:flex lg:flex-col gap-1 text-center">
          <button
            type="button"
            onClick={() => router.push('/profile/account')}
            className={buttonClasses('/profile/account') + 'mt-2'}
          >
            <Image
              src={customerPic}
              alt="Info de la cuenta"
              className="w-4 h-4 mr-4 ml-2"
            />
            INFORMACION DE TU CUENTA
          </button>

          <button
            type="button"
            onClick={() => router.push('/profile/security')}
            className={buttonClasses('/profile/security')}
          >
            <Image
              src={securityPic}
              alt="Seguridad"
              className="w-4 h-4 mr-4 ml-2"
            />
            SEGURIDAD
          </button>
          {/* routerLink="/ecommerce/profile/cards" routerLinkActive="bg-[#7637839C]" */}
          <button
            type="button"
            onClick={() => router.push('/profile/cards')}
            className={buttonClasses('/profile/cards')}
          >
            <Image
              src={magneticCardPic}
              alt="Seguridad"
              className="w-4 h-4 mr-4 ml-2"
            />
            TARJETAS
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className={buttonClasses('/profile/cards')}
          >
            <Image
              src={logoutPic}
              alt="cerrar-sesion"
              className="w-7 h-7 mr-2 ml-2 invert"
            />
            CERRAR SESIÓN
          </button>
        </aside>

        <div className="w-9/12 m-4 ">{renderProfileContent()}</div>
      </div>
    </>
  );
};
