import React, { useState } from 'react';
import { ModalCarrito } from './ModalCarrito';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/Auth';

//images
import logoSuinfi from '../assets/suinfiIconNavbar.png';
import searchLogin from '../assets/searchIcon.png';
import shopping from '../assets/ShoppingCart.png';
import userLogin from '../assets/userIconNavBar.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dataLogin, showModal, setShowModal } = useAuth();
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleShowModal = () => {
    if (dataLogin.userLogin) {
      setShowModal(!showModal);
    } else {
      navigate('/auth#login');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      navigate(`/SearchProduct?q=${search}`);
    }
  };
  return (
    <header className="w-full z-10 nav-bg relative">
      <nav className="containerWidth flex h-full w-full gap-3 justify-between ">
        <div className="flex h-full py-[25px] gap-1">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoSuinfi}
              alt="suinfi-logo"
              className="h-[24px] w-[19px]"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center text-white">
          <Link to="/" className="hover:cursor-pointer text-lg">
            Categorias
          </Link>
        </div>
        <div className="hidden md:flex items-center text-white">
          {dataLogin.userLogin && (
            <Link to="/newProduct" className="hover:cursor-pointer text-lg">
              Vender
            </Link>
          )}
        </div>
        <div className="hidden md:flex items-center text-white">
          {dataLogin.userLogin && (
            <Link to="/newProduct" className="hover:cursor-pointer text-lg">
              Favoritos
            </Link>
          )}
        </div>
        <div className="flex items-center w-[60%] min-w-[155px] max-w-[800px]">
          <form
            className="relative items-center w-full flex gap-3 md:flex md:justify-end"
            onSubmit={handleSubmit}
          >
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              name="searchInput"
              value={search}
              placeholder="Buscar en Suinfi"
              className="block py-1 w-full rounded-lg outline-none focus:cursor-text searchValue pl-3"
            />
            <div className="bg-[#D9D9D9] absolute right-0 w-7 h-full rounded-r-lg flex items-center justify-center">
              <img
                src={searchLogin}
                alt="search-logo"
                className="cursor-pointer invert min-w-5"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center">
          <a onClick={() => handleShowModal()} className="">
            <img
              src={shopping}
              alt=""
              className="hover:cursor-pointer min-w-10"
            />
          </a>
          <div className="absolute w-full md:w-auto top-[74px] right-0 md:right-[10%] z-[9999]">
            {showModal && <ModalCarrito />}
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <Link
            to={dataLogin.userLogin ? '/profile/account' : '/auth#login'}
            className="flex gap-3 items-center justify-center"
          >
            <img
              src={userLogin}
              alt=""
              className="hover:cursor-pointer  min-w-7"
            />
            <p className="text-white hidden text-sm uppercase font-semibold lg:block">
              {dataLogin.userLogin
                ? `${dataLogin.payload.nombre}`
                : 'Iniciar Sesión'}
            </p>
          </Link>
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 6L6 18M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                _ngcontent-ng-c918816587=""
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  _ngcontent-ng-c918816587=""
                  d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
                  fill="white"
                ></path>
                <path
                  _ngcontent-ng-c918816587=""
                  d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z"
                  fill="white"
                ></path>
                <path
                  _ngcontent-ng-c918816587=""
                  d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z"
                  fill="white"
                ></path>
                <path
                  _ngcontent-ng-c918816587=""
                  d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
                  fill="white"
                ></path>
                <path
                  _ngcontent-ng-c918816587=""
                  d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                  fill="white"
                ></path>
                <path
                  _ngcontent-ng-c918816587=""
                  d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
                  fill="white"
                ></path>
                <path
                  _ngcontent-ng-c918816587=""
                  d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z"
                  fill="white"
                ></path>
                <path
                  _ngcontent-ng-c918816587=""
                  d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
                  fill="white"
                ></path>
                <path
                  _ngcontent-ng-c918816587=""
                  d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z"
                  fill="white"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute bg-white w-full md:hidden">
          <ul>
            <li className="p-2 border-b">
              <Link to="/">Categorias</Link>
            </li>
            <li className="p-2 border-b">
              <Link to="/newProduct">Vender</Link>
            </li>
            <li className="p-2 border-b">
              <Link to="/">Favoritos</Link>
            </li>
            <li className="p-2">
              <Link
                to={dataLogin.userLogin ? '/profile/account' : '/auth#login'}
              >
                {dataLogin.userLogin ? 'Perfil' : 'Iniciar Sesión'}
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      )}
    </header>

    // <header className="w-full z-10 bg-[#2F0F35] border-[1px] border-[#855E98] overflow-hidden">
    //   <nav className="containerWidth flex flex-wrap justify-between items-center py-4 lg:py-0 text-lg h-20 text-[#d8d8d8] ">
    //     <div className="text-base text-[#d8d8d8] lg:text-lg font-semibold flex flex-row  w-full md:justify-between md:items-center">
    //       <div className="lg:flex gap-20 items-center hidden">
    //         <Link to="/" className="lg:text-base lg:font-semibold">
    //           <img src={logoSuinfi} alt="" className="min-w-7 ml-7" />
    //         </Link>

    //         <a className="block hover:text-[#9468a9] text-nowrap" href="#">
    //           Categorías
    //         </a>

    //         {dataLogin.userLogin && (
    //           <Link
    //             className="hover:text-white transition-opacity duration-700 ease-in-out hover:opacity-80 block w-full text-center"
    //             to="/newProduct"
    //           >
    //             Vender
    //           </Link>
    //         )}
    //       </div>

    //       <div className="lg:flex lg:gap-10 lg:mr-10 lg:ml-10 flex flex-row gap-20 items-center justify-between md:flex md:flex-row md:justify-between  ">
    //         {/* reponsive nav */}
    //         {isOpen && (
    //           <div className="flex flex-col items-center ">
    //             <ul className="font-bold w-full h-auto text-black fixed top-[82px] flex-col items-center justify-center gap-10 left-0 z-[100] bg-white lg:hidden border border-black">
    //               <li className="border border-black">
    //                 <a
    //                   className="hover:text-white transition-opacity duration-700 ease-in-out hover:opacity-80 block w-full text-center border border-black border-opacity-50"
    //                   href="#"
    //                 >
    //                   Categorías
    //                 </a>
    //                 {/* <a
    //                   className="hover:text-white transition-opacity duration-700 ease-in-out hover:opacity-80 block w-full text-center border border-black border-opacity-50"
    //                   href="#"
    //                 >
    //                   SECCIÓN 2
    //                 </a>
    //                 <a
    //                   className="hover:text-white transition-opacity duration-700 ease-in-out hover:opacity-80 block w-full text-center border border-black border-opacity-50"
    //                   href="#"
    //                 >
    //                   SECCIÓN 3
    //                 </a> */}
    //                 {dataLogin.userLogin && (
    //                   <a
    //                     className="hover:text-white transition-opacity duration-700 ease-in-out hover:opacity-80 block w-full text-center border-t border-black border-opacity-50"
    //                     href="#"
    //                   >
    //                     Vender
    //                   </a>
    //                 )}
    //               </li>
    //             </ul>
    //           </div>
    //         )}

    //
    //       </div>
    //       {/*Button menu nav responsive */}
    //       <div className="lg:hidden w-full flex justify-end">
    //
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
};
