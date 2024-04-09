import paypal from '../assets/paypal-icon.png';
import cabal from '../assets/cabal-icon.png';
import mastercardBlue from '../assets/mastercard-blue-icon.png';
import mastercard from '../assets/mastercard-icon.png';
import pagofacil from '../assets/pagofacil-icon.png';
import rapipago from '../assets/rapipago-icon.png';
import amex from '../assets/amex-icon.png';
import visa from '../assets/visa-icon.png';

export const Payments = () => {
  return (
    <div class="containerWidth mt-8 lg:mt-0">
      <h2 class="containerWidth font-medium text-center text-3xl lg:text-left">
        Medios de pago
      </h2>
      <div class="containerWidth lg:flex lg:justify-center lg:items-center">
        <div class=" lg:h-[180px] w-full flex flex-col lg:flex-row lg:justify-center items-center bg-[#ffffff] custom-shadow mt-6 py-4 lg:mt-10 lg:py-0 lg:ml-[0px] lg:mr-[0px] lg:min-w-[70rem] rounded-[30px] text-[#000000]">
          <div class="flex flex-col items-center justify-around my-5 lg:my-0 w-full lg:mx-16 lg:w-1/4">
            <h4 class="font-medium lg:text-3xl text-2xl text-center text-nowrap">
              Tarjetas de crédito
            </h4>

            <div class="flex flex-row justify-between items-center">
              <img src={amex} alt="" />

              <img src={visa} alt="" />

              <img src={mastercard} alt="" />
            </div>
          </div>
          <div class="border-t border-b lg:border-[1px] lg:border-b-0 lg:border-t-0 lg:h-28 lg:hidden block border-[#dddddd] w-[85%] lg:w-0 my-4"></div>
          <div class="flex flex-col items-center justify-center my-5 lg:my-0 w-full lg:mx-16 lg:w-1/4">
            <h4 class="font-medium lg:text-3xl text-2xl text-center mb-2 text-nowrap">
            Tarjetas de débito
            </h4>

            <div class="flex flex-row justify-between items-center">
              <img src={visa} alt="" />

              <img src={mastercardBlue} alt="" />

              <img src={mastercard} alt=""  />

              <img src={cabal} alt="" className='h-11' />
            </div>
          </div>
          <div class="border-t border-b lg:border-[1px] lg:border-b-0 lg:border-t-0 lg:h-28 lg:hidden block border-[#dddddd] w-[85%] lg:w-0 my-4"></div>
          <div class="flex flex-col items-center justify-center my-5 lg:my-0 w-full lg:mx-16 lg:w-1/4">
            <h4 class="font-medium lg:text-3xl text-2xl text-center mb-2 text-nowrap">
              Efectivo
            </h4>

            <div class="flex flex-row justify-between items-center">
              <img src={paypal} alt="" className="h-14" />

              <img src={pagofacil} alt="" className="h-12" />

              <img src={rapipago} alt="" className="h-14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
