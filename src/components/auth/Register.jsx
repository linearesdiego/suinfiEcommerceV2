import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { useAuth } from '../../context/Auth';
import { useNavigate } from 'react-router-dom';
//images
import arrowIcon from '../../assets/arrowIconSignUp.png';
import password from '../../assets/passwordIconLogin.png';
import googleIcon from '../../assets/googleIcon.png';
import facebookIcon from '../../assets/facebookIcon.png';
import { Alerts } from '../Alerts';
export const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [condition, setCondition] = useState(false);
  //Use form para validar los datos
  const {
    register: registerValidator,
    handleSubmit: handleSubmitValidator,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const onSubmit = async (userData) => {
    try {
      console.log('user', userData);
      await register(userData);
      setShowAlert(true);
      setCondition(true);
      setTimeout(() => {
        setShowAlert(false);
        reset();
        window.location.reload();
        navigate('/auth#login');
      }, 4000);
    } catch (error) {
      setShowAlert(true);
      setCondition(false);
      setTimeout(() => {
        setShowAlert(false);
      }, 4000);

      console.log('AXIOS ERROR', error);
    }
  };

  // Estado para controlar el paso anterior
  let [prevStep, setPrevStep] = useState(0);
  // Estado para controlar el paso actual
  const [step, setStep] = useState(1);
  // Cambia entre los pasos
  let ChangeStep = () => {
    setPrevStep(step);
    setStep((prevStep) => (prevStep === 3 ? 1 : prevStep + 1));
  };

  return (
    <>
      {showAlert && (
        <Alerts
          condition={condition}
          parrafo={'Something went wrong with your registration.'}
        />
      )}
      <div className="w-full h-[442px] flex justify-center items-center relative">
        <h1 className="absolute top-[12%] font-bold text-4xl md:hidden">
          SIGN IN
        </h1>
        <div className="w-full h-full flex justify-center items-center">
          <form
            onSubmit={handleSubmitValidator(onSubmit)}
            className="flex flex-col items-center w-full md:w-[75%] mx-auto"
          >
            {/* -- PASO 1 -- */}
            <h2 className="font-bold text-xl">STEP {step}</h2>
            {step === 1 && (
              <>
                {/* username */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={arrowIcon}
                      alt=""
                      className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      {...registerValidator('username', {
                        required: true,
                        minLength: 3,
                        maxLength: 15,
                      })}
                      type="text"
                      placeholder="Username"
                      name="username"
                      className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                      /*                     onChange={handleChange}
                       */ aria-invalid={errors.username ? 'true' : 'false'}
                    />
                    {errors.username && errors.username.type === 'required' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Username is required
                      </span>
                    )}
                    {errors.username &&
                      errors.username.type === 'minLength' && (
                        <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                          Username min 3
                        </span>
                      )}
                    {errors.username &&
                      errors.username.type === 'maxLength' && (
                        <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                          Username max 15
                        </span>
                      )}
                  </div>
                </div>

                {/* name*/}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={arrowIcon}
                      alt=""
                      className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      {...registerValidator('nombre', {
                        required: true,
                        pattern: /^[A-Za-zÁÉÍÓÚáéíóú]+$/,
                        minLength: 3,
                        maxLength: 15,
                      })}
                      type="text"
                      placeholder="Name"
                      className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                      name="nombre"
                      /*  value={userData.nombre}
                     onChange={handleChange} */
                      aria-invalid={errors.nombre ? 'true' : 'false'}
                    />
                    {errors.nombre && errors.nombre.type === 'required' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Name is required
                      </span>
                    )}
                    {errors.nombre && errors.nombre.type === 'pattern' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Only letters and no spaces
                      </span>
                    )}
                    {errors.nombre && errors.nombre.type === 'minLength' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Name min 3
                      </span>
                    )}
                    {errors.nombre && errors.nombre.type === 'maxLength' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Name max 15
                      </span>
                    )}
                  </div>
                </div>
                {/* lastname */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={arrowIcon}
                      alt=""
                      className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      {...registerValidator('apellido', {
                        required: true,
                        pattern: /^[A-Za-zÁÉÍÓÚáéíóú]+$/,
                        minLength: 3,
                        maxLength: 15,
                      })}
                      type="text"
                      placeholder="Lastname"
                      name="apellido"
                      className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                      /*  value={userData.apellido}
                     onChange={handleChange} */
                      aria-invalid={errors.apellido ? 'true' : 'false'}
                    />
                    {errors.apellido && errors.apellido.type === 'required' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Lastname is required
                      </span>
                    )}
                    {errors.apellido && errors.apellido.type === 'pattern' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Only letters and no spaces
                      </span>
                    )}
                    {errors.apellido &&
                      errors.apellido.type === 'minLength' && (
                        <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                          Name min 3
                        </span>
                      )}
                    {errors.apellido &&
                      errors.apellido.type === 'maxLength' && (
                        <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                          Name max 15
                        </span>
                      )}
                  </div>
                </div>
                {/* email */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={arrowIcon}
                      alt=""
                      className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      {...registerValidator('email', {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        minLength: 3,
                        maxLength: 25,
                      })}
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                      /*   value={userData.email}
                      onChange={handleChange} */
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && errors.email.type === 'required' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Email is required
                      </span>
                    )}
                    {errors.email && errors.email.type === 'pattern' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Enter a valid email address
                      </span>
                    )}
                    {errors.email && errors.email.type === 'minLength' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Email min 3
                      </span>
                    )}
                    {errors.email && errors.email.type === 'maxLength' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Email max 15
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-row justify-end items-center w-full">
                  <button
                    type="button"
                    onClick={handleSubmitValidator((data) => {
                      ChangeStep();
                    })}
                    className="text-white rounded-full bg-black w-32 h-8 shadow-md hover:shadow-xl font-semibold"
                  >
                    Siguiente
                  </button>
                </div>
              </>
            )}
            {/* --PASO 2 */}
            {step === 2 && (
              <>
                {/* tipCedula */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={arrowIcon}
                      alt=""
                      className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    />
                    <select
                      {...registerValidator('tipCedula', { required: true })}
                      name="tipCedula"
                      className="text-gray-400 border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                      defaultValue="" // Establecer el valor predeterminado aquí
                    >
                      <option value="" disabled hidden>
                        Type of cedula
                      </option>
                      <option value="dni">DNI</option>
                      <option value="add">add</option>
                    </select>

                    {errors.tipCedula &&
                      errors.tipCedula.type === 'required' && (
                        <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                          Type of cedula is required
                        </span>
                      )}
                  </div>
                </div>
                {/* cedula */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={arrowIcon}
                      alt=""
                      className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      {...registerValidator('cedula', {
                        required: true,
                        validate: (value) => !isNaN(value),
                        minLength: 3,
                        maxLength: 15,
                      })}
                      type="text"
                      placeholder="Cedula"
                      name="cedula"
                      className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                      /*  value={userData.cedula}
                     onChange={handleChange} */
                      aria-invalid={errors.cedula ? 'true' : 'false'}
                    />
                    {errors.cedula && errors.cedula.type === 'required' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Cedula is required
                      </span>
                    )}
                    {errors.cedula && errors.cedula.type === 'validate' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Enter a valid cedula
                      </span>
                    )}
                    {errors.cedula && errors.cedula.type === 'minLength' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Cedula min 3
                      </span>
                    )}
                    {errors.cedula && errors.cedula.type === 'maxLength' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Cedula max 15
                      </span>
                    )}
                  </div>
                </div>
                {/* cellphone */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={arrowIcon}
                      alt=""
                      className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      {...registerValidator('celular', {
                        required: true,
                        validate: (value) => !isNaN(value),
                        minLength: 3,
                        maxLength: 16,
                      })}
                      type="text"
                      placeholder="Cellphone"
                      name="celular"
                      className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                      /*   value={userData.celular}
                      onChange={handleChange} */
                      aria-invalid={errors.celular ? 'true' : 'false'}
                    />
                    {errors.celular && errors.celular.type === 'required' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Cellphone is required
                      </span>
                    )}
                    {errors.celular && errors.celular.type === 'validate' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Enter a valid phone number
                      </span>
                    )}
                    {errors.celular && errors.celular.type === 'minLength' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Cellphone min 3
                      </span>
                    )}
                    {errors.celular && errors.celular.type === 'maxLength' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Cellphone max 15
                      </span>
                    )}
                  </div>
                </div>
                {/* Direccion */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={arrowIcon}
                      alt=""
                      className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      {...registerValidator('direccion', {
                        required: true,
                        minLength: 3,
                        maxLength: 20,
                      })}
                      type="text"
                      placeholder="Adress"
                      className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                      name="direccion"
                      /*  value={userData.direccion}
                     onChange={handleChange} */
                      aria-invalid={errors.direccion ? 'true' : 'false'}
                    />
                    {errors.direccion &&
                      errors.direccion.type === 'required' && (
                        <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                          Adress is required
                        </span>
                      )}
                    {errors.direccion &&
                      errors.direccion.type === 'minLength' && (
                        <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                          Adress min 3
                        </span>
                      )}
                    {errors.direccion &&
                      errors.direccion.type === 'maxLength' && (
                        <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                          Adress max 20
                        </span>
                      )}
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setStep((prevStep = 1));
                    }}
                    className="text-white rounded-full bg-black w-32 h-8 shadow-md hover:shadow-xl font-semibold"
                  >
                    Volver
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmitValidator((data) => {
                      console.log('SE HAN VALIDADO LOS DATOS', data);
                      ChangeStep();
                    })}
                    className="text-white rounded-full bg-black w-32 h-8 shadow-md hover:shadow-xl font-semibold"
                  >
                    Siguiente
                  </button>
                </div>
              </>
            )}
            {/* -- PASO 3 -- */}
            {step === 3 && (
              <>
                {/* password */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={arrowIcon}
                      alt=""
                      className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      {...registerValidator('password', {
                        required: true,
                        minLength: 5,
                        maxLength: 20,
                      })}
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                      /*  value={userData.password}
                     onChange={handleChange} */
                      aria-invalid={errors.password ? 'true' : 'false'}
                    />
                    {errors.password && errors.password.type === 'required' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Password is required
                      </span>
                    )}
                    {errors.password &&
                      errors.password.type === 'minLength' && (
                        <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                          Password min 3
                        </span>
                      )}
                    {errors.password &&
                      errors.password.type === 'maxLength' && (
                        <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                          Password max 20
                        </span>
                      )}
                  </div>
                </div>
                {/* confirm password */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={arrowIcon}
                      alt=""
                      className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                      {...registerValidator('confirmPassword', {
                        required: true,
                        validate: (value) => value === getValues('password'),
                      })}
                      type="password"
                      placeholder="Confirm Password"
                      className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                      /* alue={userData.confirmPassword}
                    onChange={handleChange} */
                      name="confirmPassword"
                      aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                    />
                    {errors.confirmPassword &&
                      errors.confirmPassword.type === 'required' && (
                        <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                          Confirm Password is required
                        </span>
                      )}
                    {errors.confirmPassword &&
                      errors.confirmPassword.type !== 'required' && (
                        <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                          Passwords don't match
                        </span>
                      )}
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center w-full gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setStep(prevStep); // Vuelve al paso anterior
                    }}
                    className="text-white rounded-full bg-black w-32 h-8 shadow-md hover:shadow-xl font-semibold"
                  >
                    Volver
                  </button>
                  <button
                    type="submit"
                    className="text-white rounded-full bg-black w-32 h-8 shadow-md hover:shadow-xl font-semibold"
                  >
                    SIGN IN
                  </button>
                </div>
              </>
            )}
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
    </>
  );
};
