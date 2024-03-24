import { use, useEffect, useState } from 'react';
import { useAuth } from '../../context/Auth';
import { Link, useNavigate } from 'react-router-dom';

// Components
import { Login } from '../../components/auth/Login';
import { Register } from '../../components/auth/Register';

//images
import logoLogin from '../../assets/logo-login.png';
import arrow from '../../assets/arrow.png';
import logo from '../../assets/login.png';
export default function AuthLogin() {
  const { isLogin, setIsLogin, dataLogin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (dataLogin.userLogin) {
      navigate('/');
    }
  }, [dataLogin.userLogin, navigate]);

  return (
    <section className="w-full h-[100vh] bg-gradient-to-r from-[#56245F] to-[#000000] flex justify-center items-center">
      <div className="bg-white w-[85%] md:w-[95%] md:max-w-[800px] rounded-3xl flex shadow-2xl justify-center items-center relative">
        <Link to="/" className="absolute top-5 left-9 md:hidden cursor-pointer">
          <img
            src={logoLogin}
            width={19}
            height={26}
            alt="logo-login"
            className="invert"
          />
        </Link>
        <a
          onClick={() => setIsLogin(!isLogin)}
          className="font-bold absolute top-5 right-5 md:hidden flex gap-1"
        >
          {isLogin ? 'SIGN IN' : 'LOGIN'}
          <img src={arrow} width={17} height={16} alt="icon-arrow-right" />
        </a>
        <div className="relative">
          <Link to="/" className="absolute top-5 left-9">
            <img src={logoLogin} width={19} height={26} alt="logo-login" />
          </Link>
          <img
            src={logo}
            alt="login-img"
            className="hidden md:block w-full h-full md:min-w-[370px]"
          />
          <div className="menu absolute top-[35%] right-0 flex flex-col gap-4">
            <a
              href="#login"
              id="login"
              onClick={() => setIsLogin(true)}
              className="cursor-pointer hidden md:block a-button"
            >
              LOGIN
            </a>
            <a
              href="#register"
              id="register"
              onClick={() => setIsLogin(false)}
              className="cursor-pointer hidden md:block b-button"
            >
              SIGN IN
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center w-[54%]">
          {isLogin ? <Login /> : <Register />}
        </div>
      </div>
    </section>
  );
}
