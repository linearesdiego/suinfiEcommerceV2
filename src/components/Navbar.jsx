import React, { useState } from 'react';
import { ModalCarrito } from './ModalCarrito';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Auth';

//images
import logoSuinfi from '../assets/suinfiIconNavbar.png'
import searchLogin from '../assets/searchIcon.png'
import shopping from '../assets/ShoppingCart.png'
import userLogin from '../assets/userIconNavBar.png'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dataLogin, showModal, setShowModal } = useAuth();
  const [search, setSearch] = useState('');


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
      navigate(`/search/${search}`);
    }
  };
  return (
    <header className="w-full z-10 bg-[#2F0F35] border-[1px] border-[#855E98] overflow-hidden">
      <nav className="containerWidth flex flex-wrap justify-between items-center py-4 lg:py-0 text-lg h-20 text-[#d8d8d8] ">
        <div className="text-base text-[#d8d8d8] lg:text-lg font-semibold flex flex-row  w-full md:justify-between md:items-center">
          <div className="lg:flex gap-20 items-center hidden">
            <Link to="/" className="lg:text-base lg:font-semibold">
              <img
                src={logoSuinfi}
                alt=""
                className="min-w-7 ml-7"
              />
            </Link>

            <a className="block hover:text-[#9468a9] text-nowrap" href="#">
              Categorías
            </a>
            <a className="block hover:text-[#9468a9] text-nowrap" href="#">
              SECCIÓN 2
            </a>
            <a className="block hover:text-[#9468a9] text-nowrap" href="#">
              SECCIÓN 3
            </a>
            <a className="block hover:text-[#9468a9] text-nowrap" href="#">
              Vender
            </a>
          </div>
          {/* <div className="md:hidden">
            <button onClick={toggleNavbar}>{isOpen ? 'x' : 'Menu'}</button>
          </div>
          {isOpen && (
            <div className="flex flex-col items-center basis-full">
              <ul className="font-bold w-full h-auto text-black fixed top-[82px] flex-col items-center justify-center gap-10 left-0 z-[100] bg-white lg:hidden border border-black">
                <li className="border border-black">
                  <a
                    className="hover:text-white transition-opacity duration-700 ease-in-out hover:opacity-80 block w-full text-center border border-black border-opacity-50"
                    href="#"
                  >
                    Categorías
                  </a>
                  <a
                    className="hover:text-white transition-opacity duration-700 ease-in-out hover:opacity-80 block w-full text-center border border-black border-opacity-50"
                    href="#"
                  >
                    SECCIÓN 2
                  </a>
                  <a
                    className="hover:text-white transition-opacity duration-700 ease-in-out hover:opacity-80 block w-full text-center border border-black border-opacity-50"
                    href="#"
                  >
                    SECCIÓN 3
                  </a>
                  <a
                    className="hover:text-white transition-opacity duration-700 ease-in-out hover:opacity-80 block w-full text-center border-t border-black border-opacity-50"
                    href="#"
                  >
                    Vender
                  </a>
                </li>
              </ul>
            </div>
          )} */}

          <div className="lg:flex lg:gap-10 lg:mr-10 lg:ml-10 flex flex-row gap-20 items-center justify-between md:flex md:flex-row md:justify-between  ">
            {/* reponsive nav */}
            {isOpen && (
              <div className="flex flex-col items-center ">
                <ul className="font-bold w-full h-auto text-black fixed top-[82px] flex-col items-center justify-center gap-10 left-0 z-[100] bg-white lg:hidden border border-black">
                  <li className="border border-black">
                    <a
                      className="hover:text-white transition-opacity duration-700 ease-in-out hover:opacity-80 block w-full text-center border border-black border-opacity-50"
                      href="#"
                    >
                      Categorías
                    </a>
                    <a
                      className="hover:text-white transition-opacity duration-700 ease-in-out hover:opacity-80 block w-full text-center border border-black border-opacity-50"
                      href="#"
                    >
                      SECCIÓN 2
                    </a>
                    <a
                      className="hover:text-white transition-opacity duration-700 ease-in-out hover:opacity-80 block w-full text-center border border-black border-opacity-50"
                      href="#"
                    >
                      SECCIÓN 3
                    </a>
                    <a
                      className="hover:text-white transition-opacity duration-700 ease-in-out hover:opacity-80 block w-full text-center border-t border-black border-opacity-50"
                      href="#"
                    >
                      Vender
                    </a>
                  </li>
                </ul>
              </div>
            )}

            <form
              className="relative items-center  flex gap-3 md:flex md:justify-end"
              onSubmit={handleSubmit}
            >
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                value={search}
                className="block relative lg:flex w-[200px] h-7 lg:h-9 lg:w-[400px] rounded-full border-none bg-gradient-to-r from-[#4f1f57] to-[#2f0f35] pl-5 pr-12 text-[#d8d8d8] outline-none focus:cursor-text font-normal searchValue"
              />
              <img
                src={searchLogin}
                alt=""
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer min-w-7"
              />
            </form>

            <Link
              to={dataLogin.userLogin ? '/profile/account' : '/auth#login'}
            >
              <img
                src={userLogin}
                alt=""
                className="hover:cursor-pointer  min-w-7"
              />
            </Link>

            <a onClick={() => handleShowModal()} className="carrito relative">
              <img
                src={shopping}
                alt=""
                className="hover:cursor-pointer min-w-10"
              />
            </a>
            <div className="absolute right-[5%] top-[70px] z-[9999]">
              {showModal && <ModalCarrito />}
            </div>
          </div>
          {/*Button menu nav responsive */}
          <div className="lg:hidden w-full flex justify-end">
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
        </div>
      </nav>
    </header>
  );
};
