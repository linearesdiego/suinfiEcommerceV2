import React, { useState } from 'react';
import { useAuth } from '../../context/Auth';
import { useForm } from 'react-hook-form';


//images
import userIcon from '../../assets/userIconLogin.png'
import password from '../../assets/passwordIconLogin.png'
import googleIcon from '../../assets/googleIcon.png'
import facebookIcon from '../../assets/facebookIcon.png'
import { useNavigate } from 'react-router-dom';
export const Login = () => {

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();
  const handleLoginSubmit = async (data) => {
    try {
      await login({ username: data.username, password: data.password });
      navigate(-1)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[442px] flex justify-center items-center relative">
      <h1 className="absolute top-[20%] font-bold text-4xl md:hidden">LOGIN</h1>
      <div className="w-full h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(handleLoginSubmit)}
          className="flex flex-col items-center w-full md:w-[75%] gap-7 md:gap-6"
        >
          <div className="relative flex items-center gap-2 border-black border-b-[1px]">
            <img
              src={userIcon}
              alt="user-icon"
              className="w-[13px] h-[14px]"
            />
            {/* username */}
            <input
              {...register('username', { required: true })}
              type="text"
              placeholder="Username"
              className=" outline-none w-[250px] sm:w-[400px] md:w-[300px]"
              autoComplete="off"
            />
            {errors.username && (
              <span className="absolute text-red-500 text-xs bottom-0 right-0">
                Username is required
              </span>
            )}
          </div>
          <div className="relative flex items-center gap-2 border-black border-b-[1px]">
            <img
              src={password}
              alt="password-icon"
              className="w-[13px] h-[14px]"
            />
            {/* password */}
            <input
              {...register('password', { required: true })}
              type="password"
              placeholder="Password"
              className=" outline-none w-[250px] sm:w-[400px] md:w-[300px]"
              autoComplete="off"
            />
            {errors.password && (
              <span className="absolute text-red-500 text-xs bottom-0 right-0">
                Password is required
              </span>
            )}
          </div>
          <div className="flex justify-between items-center w-full">
            <a className="mr-4 font-bold text-xs cursor-pointer">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="text-white rounded-full bg-black w-24 h-8 shadow-md hover:shadow-xl font-semibold"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
      <div className="absolute bottom-5 w-full md:w-[75%] flex justify-between text-gray-400 text-xs">
        <div className="flex justify-center items-center font-semibold">
          <p>Or connect with</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <a href="" className="flex items-center gap-2">
            <img
              src={googleIcon}
              alt="google-icon"
              className="w-[12px] h-[12px]"
            />
            <p>Google</p>
          </a>
          <a href="" className="flex items-center gap-2">
            <img
              src={facebookIcon}
              alt="facebook-icon"
              className="w-[12px] h-[12px]"
            />
            <p>Facebook</p>
          </a>
        </div>
      </div>
    </div>
  );
};
