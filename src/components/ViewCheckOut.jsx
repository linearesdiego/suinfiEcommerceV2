import React from 'react';
import { useAuth } from '../context/Auth';
import { fetchPagos } from '../services/Pagos';
import { createCart } from '../services/Carrito';

//images
import mp from '../assets/logo-mp.png';
import paypal from '../assets/LogosPaypal.png';
import cards from '../assets/cards.png';

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
    <section className="containerWidth w-full flex justify-between flex-col md:flex-row h-[90vh]">
      <div className="mt-10 flex flex-col md:w-[700px] gap-8">
        <h1 className="text-2xl font-bold">¿Como queres pagar?</h1>
        <h2 className="text-lg font-bold">Metodos de Pago</h2>
        <div className="bg-white w-full">
          <div
            className="w-full h-[100px] flex items-center gap-5 border-gray-500 border-b cursor-pointer"
            onClick={() => {
              handlePago(1);
            }}
          >
            <div className=" pl-3">
              <img src={mp} alt="Mercado Pago" className="w-[100px]" />
            </div>
            <p className="font-bold">MERCADO PAGO</p>
          </div>
          <div
            className="w-full h-[100px] flex items-center gap-12 border-gray-500 border-b cursor-pointer"
            onClick={() => {
              handlePago(2);
            }}
          >
            <div className=" pl-7">
              <img src={paypal} alt="Paypal" className="w-[60px]" />
            </div>
            <p className="font-bold">PAYPAL</p>
          </div>
          <div className="w-full h-[100px] flex items-center gap-10 border-gray-500 border-b cursor-pointer">
            <div className=" pl-4">
              <img src={cards} alt="tarjetas" className="w-[80px]" />
            </div>
            <p className="font-bold">AGREGAR TARJETA</p>
          </div>
        </div>
      </div>
      <div className="bg-[#E7E7E7] md:w-[500px]">
        <h1 className="mt-10 font-bold text-xl">Resumen de Compra</h1>
      </div>
    </section>
  );
};
