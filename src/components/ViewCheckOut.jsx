import React from 'react';
import { useAuth } from '../context/Auth';
import { fetchPagos } from '../services/Pagos';
import { createCart } from '../services/Carrito';

//images
import mp from '../assets/logo-mp.png';
import paypal from '../assets/LogosPaypal.png';
import cards from '../assets/cards.png';
import pagofacil from '../assets/pago_facil.png';
import rapipago from '../assets/rapipagoo.png';
export const ViewCheckOut = () => {
  const { dataLogin } = useAuth();
  const handlePago = async (metodoId) => {
    try {
      const pagoData = await fetchPagos(metodoId, dataLogin.payload.carritoId);
      if (pagoData) {
        let link = document.createElement('a');
        link.href = pagoData.urlPago;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        const createCarrito = await createCart({
          usuarioId: dataLogin.payload.userId,
        }).then((res) => {
          localStorage.setItem(
            'dataLogin',
            JSON.stringify({
              ...dataLogin,
              payload: { ...dataLogin.payload, carritoId: res.data.id },
            })
          );
        });
        setShowModal(false);
      }
    } catch (error) {
      console.error('Error fetching Pago:', error);
    }
  };
  return (
    <section className="containerWidth w-full flex justify-between flex-col md:flex-row h-[100vh]">
      <div className="mt-10 flex flex-col gap-8 w-full">
        <h1 className="text-2xl font-bold">¿Como queres pagar?</h1>
        <h2 className="text-lg font-bold">Metodos de Pago</h2>
        <div className="bg-white w-[90%] flex flex-col gap-4 rounded-lg">
          <div
            className="w-full h-[100px] flex items-center gap-5 border-[#00000019] border-b cursor-pointer"
            onClick={() => {
              handlePago(1);
            }}
          >
            <div className=" pl-10">
              <img src={mp} alt="Mercado Pago" className="w-[100px]" />
            </div>
            <p className="font-bold">MERCADO PAGO</p>
          </div>
          <div
            className="w-full h-[100px] flex items-center gap-12 border-[#00000019] border-b cursor-pointer"
            onClick={() => {
              handlePago(2);
            }}
          >
            <div className=" pl-14">
              <img src={paypal} alt="Paypal" className="w-[60px]" />
            </div>
            <p className="font-bold">PAYPAL</p>
          </div>
          {/* <div className="w-full h-[100px] flex items-center gap-10 border-gray-500 border-b cursor-pointer">
            <div className=" pl-10">
              <img src={cards} alt="tarjetas" className="w-[80px]" />
            </div>
            <p className="font-bold">AGREGAR TARJETA</p>
          </div> */}
        </div>
        <div className="mt-10 flex flex-col gap-8 w-full">
          <h1 className="text-2xl font-bold">Otras formas de pago</h1>

          <div className="bg-white w-[90%] flex flex-col gap-4 rounded-lg">
            <div className="w-full h-[100px] flex items-center gap-5 border-[#00000019] border-b cursor-pointer">
              <div className=" pl-10">
                <img src={rapipago} alt="Mercado Pago" className="w-[100px]" />
              </div>
              <p className="font-bold">RAPIPAGO</p>
            </div>
            <div className="w-full h-[100px] flex items-center gap-12 border-[#00000019] border-b cursor-pointer">
              <div className=" pl-14">
                <img src={pagofacil} alt="Paypal" className="w-[60px]" />
              </div>
              <p className="font-bold">Pago facil</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="bg-[#295F93] p-3 rounded-lg w-[200px]  mr-[120px]">
            <p className="text-center text-white ">CONTINUAR</p>
          </div>
        </div>
      </div>
      <div className="bg-[#E7E7E7] md:w-[500px] ">
        <h1 className="mt-10 font-bold text-xl text-center">
          Resumen de Compra
        </h1>
        <div className="w-full flex justify-center my-5">
          <div className="bg-[#00000020]  w-[90%] h-[0.5px]"></div>
        </div>
        <div className="w-full px-8">
          <div className="flex flex-row justify-between mb-5">
            <p>Producto </p>
            <p>$9000</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Instalacion</p>
            <p className="text-yellow-400">Gratis</p>
          </div>
        </div>
        <div className="w-full flex justify-center my-5">
          <div className="bg-[#00000019]  w-[90%] h-[0.5px]"></div>
        </div>
        <div className="px-8 flex flex-row justify-between">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">$9000</p>
        </div>
      </div>
    </section>
  );
};
