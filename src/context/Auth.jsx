import axios from 'axios';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

const baseUrl = import.meta.env.VITE_API_URL;
const storedData = localStorage.getItem('dataLogin');
const dataLs = storedData ? JSON.parse(storedData) : {};
const AuthContext = createContext(undefined);

export const MyAuthProvider = ({
  children,
}) => {

  const [dataLogin, setDataLogin] = useState(dataLs);
  const [isLogin, setIsLogin] = useState(true);
  const [cartResponse, setCartResponse] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (dataLogin === false) {
      console.error('No hay datos de login');
    } else {
      localStorage.setItem('dataLogin', JSON.stringify(dataLogin));
    }
  }, [dataLogin]);

  const logout = () => {
    localStorage.removeItem('dataLogin');
    setDataLogin({ userLogin: false });
  };

  const login = async (data) => {
    const response = await axios.post(`${baseUrl}auth/login`, data);
    if (response.status) {
      localStorage.setItem('dataLogin', JSON.stringify(response.data));
      setDataLogin({ ...response.data, userLogin: true });
    }
  };

  const register = async (data) => {
    const response = await axios.post(`${baseUrl}auth/register`, data);
    if (response.status) {
      console.log(response.data);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        isLogin,
        setIsLogin,
        register,
        cartResponse,
        setCartResponse,
        dataLogin,
        showModal,
        setShowModal,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
