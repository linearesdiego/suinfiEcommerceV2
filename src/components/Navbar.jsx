import React, { useState, useEffect } from 'react';
import { ModalCarrito } from './ModalCarrito';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/Auth';
import fetchCategories from '../services/Categories';

//images
import logoSuinfi from '../assets/suinfiIconNavbar.png';
import logoSuinfi2 from '../assets/logo-suinfi2.png';
import searchLogin from '../assets/searchIcon.png';
import shopping from '../assets/ShoppingCart.png';
import userLogin from '../assets/userIconNavBar.png';
import place from '../assets/PlaceMarker.png';
import argentina from '../assets/Argentina.png';
import usa from '../assets/USA.png';
//icons
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('ES');
  const [dropDown, setDropDown] = useState(false);
  const { dataLogin, showModal, setShowModal } = useAuth();
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showModalCategories, setShowModalCategories] = useState(false);

  const goToProductsForCategory = (categoryId) => {
    navigate(`/productsForCategory/${categoryId}`);
  };

  const categoriasFiltradas = categories.filter(
    (category) => !category.codigo.includes('.')
  );

  const handleShowModalCategories = () => {
    setShowModalCategories(!showModalCategories);
  };
  // *************************************************
  // Obtener categorias
  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        // Manejo de errores
        console.error('Error al obtener las categorías:', error);
      }
    };

    fetchCategoriesData();
  }, []);
  const handleShowCategories = () => {
    setShowCategories(!showCategories);
  };
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
      <nav className="containerWidth flex flex-col h-full w-full">
        <div className="w-full flex justify-between">
          <div className="flex h-full py-[30px]">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoSuinfi}
                alt="suinfi-logo"
                className="h-[24px] min-w-[19px]"
              />
              <img
                src={logoSuinfi2}
                alt="suinfi-logo"
                className="hidden md:block"
              />
            </Link>
          </div>
          <div className="justify-center items-center hidden md:flex">
            <div>
              <img src={place} alt="place-logo" className="w-[25px]" />
            </div>
            <div className="">
              <h1 className="text-xs leading-none text-white">Ubicación</h1>
              <h2 className="text-sm leading-none text-white">Argentina</h2>
            </div>
          </div>
          <div className="flex items-center w-[60%] sm:w-[50%] lg:w-[60%] min-w-[170px]">
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
                className="block py-2 w-full rounded-md outline-none focus:cursor-text searchValue pl-3"
              />
              <div className="bg-[#D9D9D9] absolute right-0 w-10 md:w-20 h-full rounded-r-md flex items-center justify-center">
                <img
                  src={searchLogin}
                  alt="search-logo"
                  className="cursor-pointer invert min-w-5"
                />
              </div>
            </form>
          </div>
          <div className="justify-center items-center hidden sm:flex relative">
            <div
              className="flex gap-2 hover:cursor-pointer "
              onMouseEnter={() => setDropDown(true)}
              onMouseLeave={() => setDropDown(false)}
            >
              <img src={language === 'ES' ? argentina : usa} alt="lang-flag" />
              <div className="flex items-center">
                <p className="text-white">{language}</p>
                <FiChevronDown className="text-white w-4 h-4 hover:cursor-pointer" />
              </div>
              {/* {dropDown && (
                <div className="w-[150px] h-[135px] bg-white absolute top-[55px] -left-[50px] rounded-md">
                  <h1 className="text-xs w-full p-2">Cambiar Idioma</h1>
                  <ul className="w-full h-full flex flex-col justify-start items-start">
                    <li class="flex py-3 gap-2 px-3 items-center w-full">
                      <div class="flex gap-[2px]">
                        <input
                          type="radio"
                          id="language-es"
                          name="language"
                          value="es"
                          onClick={() => setLanguage('ES')}
                          {...(language === 'ES' && { checked: true })}
                        />
                        <label
                          for="language-es"
                          class="text-base hover:cursor-pointer"
                        >
                          Español - ES
                        </label>
                      </div>
                      <img src={argentina} alt="arg-flag" class="w-4 h-4" />
                    </li>
                    <li class="flex py-3 gap-2 px-3 items-center w-full">
                      <div class="flex gap-[2px]">
                        <input
                          type="radio"
                          id="language-en"
                          name="language"
                          value="en"
                          onClick={() => setLanguage('EN')}
                          {...(language === 'EN' && { checked: true })}
                        />
                        <label
                          for="language-en"
                          class="text-base hover:cursor-pointer"
                        >
                          English - EN
                        </label>
                      </div>
                      <img src={usa} alt="arg-flag" class="w-4 h-4" />
                    </li>
                  </ul>
                </div>
              )} */}
            </div>
          </div>
          <div className="flex xl:gap-10 2xl:gap-14 gap-3">
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
                <p className="text-white hidden text-sm uppercase font-semibold md:block">
                  {dataLogin.userLogin
                    ? `${dataLogin.payload.nombre}`
                    : 'Iniciar Sesión'}
                </p>
              </Link>
            </div>
            <div className="flex items-center justify-end">
              <a onClick={() => handleShowModal()} className="">
                <img src={shopping} alt="" className="hover:cursor-pointer" />
              </a>
              <div className="absolute w-full md:w-auto top-[74px] md:top-[120px] lg:top-[84px] right-0 md:right-9 z-[9999]">
                {showModal && <ModalCarrito />}
              </div>
            </div>
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
        </div>
        <div className="w-full h-[50px] hidden md:flex">
          <div className="flex gap-5 w-[100%]">
            <div className="hidden md:flex text-white">
              <Link
                onClick={handleShowCategories}
                className="hover:cursor-pointer text-lg flex px-1 text-nowrap"
              >
                Categorías
                {showCategories ? (
                  <FiChevronRight className="ml-2 mt-2 w-4 h-4" />
                ) : (
                  <FiChevronDown className="ml-2 mt-2 w-4 h-4" />
                )}
              </Link>
            </div>
            <div className="hidden md:flex text-white px-1 text-nowrap">
              <Link
                to={dataLogin.userLogin ? '/newProduct' : '/auth#login'}
                className="hover:cursor-pointer text-lg"
              >
                Vender
              </Link>
            </div>
            <div className="hidden md:flex text-white px-1 text-nowrap">
              <Link
                to={dataLogin.userLogin ? '/newProduct' : '/auth#login'}
                className="hover:cursor-pointer text-lg"
              >
                Mis Compras
              </Link>
            </div>
            <div className="hidden md:flex text-white px-1 text-nowrap">
              <Link
                to={dataLogin.userLogin ? '/' : '/auth#login'}
                className="hover:cursor-pointer text-lg"
              >
                Favoritos
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute bg-white w-full md:hidden">
          <ul>
            <li className="p-2 border-b">
              <Link className="flex" onClick={handleShowCategories}>
                Categorias
                {showCategories ? (
                  <FiChevronRight className="ml-1 md:ml-2 mt-1.5 w-4 h-4 " />
                ) : (
                  <FiChevronDown className=" ml-1 md:ml-2 mt-1.5 w-4 h-4" />
                )}
              </Link>

              {showCategories && (
                <div className="overflow-y-auto max-h-32">
                  <ul className="bg-gray-200 block">
                    {categoriasFiltradas.map((category, index) => (
                      <li
                        onClick={handleShowModalCategories}
                        key={index}
                        className="py-2 "
                      >
                        - {category.nombre}
                        {showModalCategories ? (
                          <FiChevronRight className="ml-2 mt-1 w-4 h-4" />
                        ) : (
                          <FiChevronDown className="ml-2 mt-1 w-4 h-4" />
                        )}
                        {showModalCategories && (
                          <li>
                            {categories.map((category, index) => {
                              if (category.codigo.includes('.')) {
                                return (
                                  <a
                                    key={index}
                                    onClick={() =>
                                      goToProductsForCategory(category.id)
                                    }
                                    className="block px-4 py-2 text-sm text-gray-700 bg-slate-300"
                                  >
                                    {category.nombre}
                                  </a>
                                );
                              }
                              return null;
                            })}
                          </li>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li className="p-2 border-b">
              <Link to={dataLogin.userLogin ? '/newProduct' : '/auth#login'}>
                Vender
              </Link>
            </li>
            <li className="p-2 border-b">
              <Link to={dataLogin.userLogin ? '/newProduct' : '/auth#login'}>
                Mis compras
              </Link>
            </li>
            <li className="p-2 border-b">
              <Link to={dataLogin.userLogin ? '/' : '/auth#login'}>
                Favoritos
              </Link>
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
      {showCategories && (
        <div className="absolute hidden md:block md:left-12 xl:left-18 2xl:left-24 z-10 mt-0 w-48 max-h-64 origin-top-right bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-scroll">
          {categoriasFiltradas.map((category, index) => (
            <a
              key={index}
              onClick={handleShowModalCategories}
              className="px-4 py-2 text-sm text-gray-700 flex cursor-pointer"
            >
              {category.nombre}
              {showModalCategories ? (
                <FiChevronRight className="ml-2 mt-2 w-4 h-4" />
              ) : (
                <FiChevronDown className="ml-2 mt-2 w-4 h-4" />
              )}
            </a>
          ))}
          {showModalCategories && (
            <div>
              {categories.map((category, index) => {
                if (category.codigo.includes('.')) {
                  return (
                    <a
                      key={index}
                      onClick={() => goToProductsForCategory(category.id)}
                      className="block px-4 py-2 text-sm text-gray-700 bg-slate-300 hover:bg-slate-400 cursor-pointer"
                    >
                      {category.nombre}
                    </a>
                  );
                }
                return null;
              })}
            </div>
          )}
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
