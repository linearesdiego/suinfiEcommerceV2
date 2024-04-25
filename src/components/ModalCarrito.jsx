import React, { useEffect, useState } from 'react';

import { useAuth } from '../context/Auth';
import { fetchOneCart, removeProductFromCart } from '../services/Carrito';
import { Link } from 'react-router-dom';
import remove from '../assets/Remove.png';

export const ModalCarrito = () => {
  const { cartResponse, dataLogin, showModal, setShowModal } = useAuth();
  const [cart, setCart] = useState();
  const [verMas, setVerMas] = useState(false);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState();

  const handleRemove = async (id, index) => {
    const token = dataLogin?.token;
    const removeProduct = cart?.filter((item) => item.id !== id);
    setCart(removeProduct);
    await removeProductFromCart(
      {
        carritoId: dataLogin.payload.carritoId,
        articuloId: id,
        cantidad: cart[index]?.CarritoArticulo.cantidad,
      },
      token
    ).then((res) => {
      if (res) {
        setCartResponse(true);
      }
    });
  };

  useEffect(() => {
    let newTotal = 0;
    let newCantidad = 0;
    for (let i = 0; i < cart?.length; i++) {
      newCantidad += cart[i]?.CarritoArticulo.cantidad;
      newTotal +=
        cart[i]?.CarritoArticulo.precio * cart[i]?.CarritoArticulo.cantidad;
    }
    setTotal(newTotal);
    setCantidad(newCantidad);
  }, [cart]);
  useEffect(() => {
    const fetchCarrito = async () => {
      try {
        const carritoData = await fetchOneCart(dataLogin.payload.userId).then(
          (res) => {
            const dataImg = res?.items?.map((img) => {
              const arrayBuffer = new Uint8Array(img?.imagen1?.data).buffer;

              // Convertir el ArrayBuffer a Uint8Array
              const uint8Array = new Uint8Array(arrayBuffer);

              // Convertir los datos binarios en una cadena base64
              let binaryString = '';
              uint8Array.forEach((byte) => {
                binaryString += String.fromCharCode(byte);
              });
              const base64Data = btoa(binaryString);

              const dataUrl = `data:image/png;base64,${base64Data}`;

              return {
                id: img.id,
                imagenNew: dataUrl,
              };
            });
            const dataNew = res.items.map((item) => {
              return {
                ...item,
                imagen: dataImg.map((itemImg) => {
                  return itemImg;
                }),
              };
            });
            setCart(dataNew);
          }
        );
      } catch (error) {
        console.error('Error fetching Cart:', error);
      }
    };
    fetchCarrito();
  }, [cartResponse]);
  return (
    <>
      <div
        className={`md:w-[500px] md:shadow-2xl ${
          verMas ? 'h-auto' : 'h-auto md:h-[230px]'
        } bg-white md:rounded-xl text-zinc-900 flex p-8 relative`}
      >
        <p
          onClick={() => {
            setShowModal(!showModal);
          }}
          className="absolute top-0 right-3 cursor-pointer text-2xl font-bold"
        >
          x
        </p>
        {cart && cart?.length === 0 && (
          <div className="flex w-full flex-col justify-center items-center">
            <svg
              className="state_container__icon"
              width="93"
              height="83"
              viewBox="0 0 93 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.3584 20.7288V8.89151C28.3584 4.53315 31.8915 0.999994 36.2499 0.999994H40.5667C44.9251 0.999994 48.4583 4.53315 48.4583 8.89151V20.7288"
                stroke="#9B9B9B"
                stroke-width="1.5"
              ></path>
              <mask id="path-2-inside-1_3426_80332" fill="white">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.2417 81.0112C1.2417 81.1842 1.3819 81.3244 1.55485 81.3244C1.55485 81.3244 23.9153 81.3699 24.0364 81.4797C24.0366 81.4809 24.0367 81.4813 24.0369 81.4809C24.037 81.4805 24.0369 81.4801 24.0364 81.4797C23.9995 81.134 25.2895 14.4657 25.2895 14.4657L14.432 14.5161C14.3854 14.4472 14.3132 14.3994 14.2311 14.3838C14.1033 14.3595 13.9789 14.4165 13.9113 14.5185L13.7961 14.5191C13.7701 14.5191 13.8197 14.5264 13.9014 14.5347C13.8842 14.5643 13.8717 14.5973 13.8649 14.6329L1.24722 80.9527C1.24355 80.972 1.2417 80.9916 1.2417 81.0112ZM13.9014 14.5347C14.0958 14.5545 14.4717 14.5801 14.4392 14.5273C14.4369 14.5235 14.4345 14.5198 14.432 14.5161L13.9113 14.5185C13.9079 14.5238 13.9045 14.5292 13.9014 14.5347ZM26.0243 14.5191C25.7525 14.5191 25.5305 14.7362 25.5245 15.0079L24.0483 80.9685C24.042 81.2494 24.2685 81.4804 24.5495 81.4796L83.9111 81.3272C84.2113 81.3264 84.4431 81.0632 84.406 80.7653L76.198 14.9572C76.1668 14.7069 75.954 14.5191 75.7018 14.5191H26.0243Z"
                ></path>
              </mask>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.2417 81.0112C1.2417 81.1842 1.3819 81.3244 1.55485 81.3244C1.55485 81.3244 23.9153 81.3699 24.0364 81.4797C24.0366 81.4809 24.0367 81.4813 24.0369 81.4809C24.037 81.4805 24.0369 81.4801 24.0364 81.4797C23.9995 81.134 25.2895 14.4657 25.2895 14.4657L14.432 14.5161C14.3854 14.4472 14.3132 14.3994 14.2311 14.3838C14.1033 14.3595 13.9789 14.4165 13.9113 14.5185L13.7961 14.5191C13.7701 14.5191 13.8197 14.5264 13.9014 14.5347C13.8842 14.5643 13.8717 14.5973 13.8649 14.6329L1.24722 80.9527C1.24355 80.972 1.2417 80.9916 1.2417 81.0112ZM13.9014 14.5347C14.0958 14.5545 14.4717 14.5801 14.4392 14.5273C14.4369 14.5235 14.4345 14.5198 14.432 14.5161L13.9113 14.5185C13.9079 14.5238 13.9045 14.5292 13.9014 14.5347ZM26.0243 14.5191C25.7525 14.5191 25.5305 14.7362 25.5245 15.0079L24.0483 80.9685C24.042 81.2494 24.2685 81.4804 24.5495 81.4796L83.9111 81.3272C84.2113 81.3264 84.4431 81.0632 84.406 80.7653L76.198 14.9572C76.1668 14.7069 75.954 14.5191 75.7018 14.5191H26.0243Z"
                fill="#EEEEEE"
              ></path>
              <path
                d="M1.55485 81.3244L1.56097 78.3244H1.55485V81.3244ZM24.0369 81.4809L21.2676 80.3271L21.266 80.331L24.0369 81.4809ZM25.2895 14.4657L28.2889 14.5237L28.3484 11.4514L25.2755 11.4657L25.2895 14.4657ZM14.2311 14.3838L14.7918 11.4367L14.7918 11.4367L14.2311 14.3838ZM13.7961 14.5191V17.5191L13.81 17.5191L13.7961 14.5191ZM13.8649 14.6329L10.9178 14.0722L10.9178 14.0722L13.8649 14.6329ZM1.24722 80.9527L-1.69992 80.392L-1.69992 80.392L1.24722 80.9527ZM14.4392 14.5273L11.8842 16.0996L11.8843 16.0996L14.4392 14.5273ZM25.5245 15.0079L28.5237 15.075V15.075L25.5245 15.0079ZM24.0483 80.9685L21.0491 80.9013V80.9013L24.0483 80.9685ZM24.5495 81.4796L24.5571 84.4796H24.5572L24.5495 81.4796ZM83.9111 81.3272L83.9034 78.3272H83.9034L83.9111 81.3272ZM84.406 80.7653L81.429 81.1366L81.429 81.1366L84.406 80.7653ZM76.198 14.9572L73.221 15.3285V15.3285L76.198 14.9572ZM1.55485 78.3244C3.03877 78.3244 4.2417 79.5273 4.2417 81.0112H-1.7583C-1.7583 82.841 -0.27496 84.3244 1.55485 84.3244V78.3244ZM26.0515 79.2573C25.6133 78.8599 25.1684 78.6996 25.0788 78.6663C24.9146 78.6053 24.7794 78.5716 24.7117 78.5558C24.5714 78.523 24.4577 78.5072 24.4127 78.5012C24.309 78.4873 24.2194 78.4805 24.177 78.4774C24.0783 78.4703 23.9706 78.4655 23.876 78.462C23.6771 78.4546 23.4083 78.448 23.0922 78.4421C22.4545 78.43 21.5595 78.4192 20.5006 78.4093C18.3797 78.3895 15.5674 78.3735 12.7637 78.3609C9.95884 78.3483 7.15824 78.3392 5.05913 78.3332C4.00951 78.3302 3.13511 78.328 2.52306 78.3266C2.21703 78.3258 1.97658 78.3253 1.81261 78.3249C1.73062 78.3247 1.66775 78.3246 1.62535 78.3245C1.60416 78.3245 1.58808 78.3244 1.57729 78.3244C1.5719 78.3244 1.56783 78.3244 1.5651 78.3244C1.56374 78.3244 1.56271 78.3244 1.56202 78.3244C1.56167 78.3244 1.56141 78.3244 1.56124 78.3244C1.56106 78.3244 1.56097 78.3244 1.55485 81.3244C1.54874 84.3244 1.54882 84.3244 1.54898 84.3244C1.54915 84.3244 1.5494 84.3244 1.54973 84.3244C1.5504 84.3244 1.55141 84.3244 1.55275 84.3244C1.55544 84.3244 1.55948 84.3244 1.56483 84.3244C1.57554 84.3244 1.59154 84.3245 1.61265 84.3245C1.65488 84.3246 1.71758 84.3247 1.7994 84.3249C1.96303 84.3253 2.2031 84.3258 2.50873 84.3265C3.11999 84.328 3.99345 84.3302 5.04201 84.3332C7.13928 84.3392 9.93637 84.3483 12.7368 84.3609C15.5383 84.3734 18.3388 84.3894 20.4446 84.409C21.499 84.4188 22.3708 84.4295 22.9791 84.441C23.286 84.4468 23.5101 84.4525 23.652 84.4578C23.7278 84.4606 23.7526 84.4624 23.7456 84.4619C23.7415 84.4616 23.7295 84.4607 23.7118 84.459C23.6962 84.4576 23.662 84.4542 23.6166 84.4481C23.5842 84.4438 23.4804 84.4296 23.3473 84.3986C23.2833 84.3836 23.1511 84.3508 22.9892 84.2906C22.9018 84.2582 22.4586 84.0987 22.0213 83.7022L26.0515 79.2573ZM21.0533 81.7973C21.057 81.832 21.0644 81.8967 21.0779 81.9773C21.0861 82.0257 21.119 82.2252 21.2038 82.4684C21.241 82.5751 21.3467 82.8661 21.5703 83.189C21.7331 83.4241 22.4163 84.3443 23.7611 84.4684C25.2118 84.6023 26.0841 83.7081 26.3343 83.4102C26.6228 83.0666 26.7621 82.7409 26.8077 82.6309L21.266 80.331C21.3116 80.2211 21.4508 79.8955 21.7393 79.5519C21.9895 79.254 22.8617 78.3599 24.3124 78.4938C25.6571 78.6179 26.3403 79.538 26.503 79.7731C26.7266 80.0959 26.8323 80.3868 26.8694 80.4934C26.9541 80.7364 26.987 80.9356 26.9951 80.9837C27.0086 81.0638 27.0159 81.128 27.0196 81.1622L21.0533 81.7973ZM26.8061 82.6348C27.0772 81.9841 27.126 81.2151 26.8642 80.4773C26.6372 79.8374 26.2544 79.4414 26.0526 79.2582L22.0203 83.7012C21.8189 83.5185 21.4364 83.1229 21.2095 82.4834C20.9479 81.746 20.9967 80.9773 21.2676 80.3271L26.8061 82.6348ZM25.2895 14.4657C22.29 14.4076 22.29 14.4079 22.29 14.4084C22.29 14.4089 22.29 14.4097 22.29 14.4107C22.2899 14.4127 22.2899 14.4158 22.2898 14.4198C22.2896 14.4279 22.2894 14.4399 22.2891 14.456C22.2885 14.488 22.2876 14.5358 22.2863 14.5989C22.2839 14.7251 22.2803 14.9123 22.2756 15.1565C22.2661 15.6449 22.2523 16.3613 22.2347 17.2731C22.1995 19.0968 22.1492 21.7024 22.0891 24.8303C21.9687 31.086 21.8086 39.4305 21.6497 47.786C21.4907 56.1413 21.3329 64.508 21.2172 70.8078C21.1593 73.9575 21.1119 76.5916 21.0801 78.4497C21.0642 79.3783 21.0522 80.1152 21.0447 80.6263C21.041 80.8812 21.0384 81.0838 21.0369 81.2272C21.0362 81.2979 21.0357 81.3607 21.0357 81.4105C21.0356 81.4343 21.0357 81.4646 21.036 81.4952C21.0362 81.5098 21.0366 81.5351 21.0375 81.5651C21.0375 81.5657 21.0398 81.6713 21.0534 81.7982L27.0195 81.1613C27.0411 81.3641 27.0354 81.5724 27.0357 81.4204C27.0357 81.3957 27.036 81.3525 27.0366 81.287C27.0379 81.1578 27.0404 80.9664 27.0441 80.714C27.0515 80.2106 27.0634 79.4797 27.0792 78.5523C27.1109 76.6982 27.1583 74.0671 27.2161 70.918C27.3319 64.6203 27.4896 56.2551 27.6486 47.9001C27.8075 39.5453 27.9676 31.2011 28.0879 24.9457C28.1481 21.818 28.1984 19.2125 28.2336 17.3889C28.2512 16.4771 28.265 15.7608 28.2744 15.2724C28.2792 15.0283 28.2828 14.8411 28.2852 14.7149C28.2864 14.6519 28.2874 14.6041 28.288 14.572C28.2883 14.556 28.2885 14.5439 28.2887 14.5358C28.2888 14.5318 28.2888 14.5288 28.2889 14.5267C28.2889 14.5257 28.2889 14.525 28.2889 14.5245C28.2889 14.524 28.2889 14.5237 25.2895 14.4657ZM14.446 17.5161L25.3034 17.4656L25.2755 11.4657L14.4181 11.5162L14.446 17.5161ZM13.6704 17.3309C12.9659 17.1969 12.3459 16.7873 11.9462 16.1956L16.9179 12.8367C16.425 12.1071 15.6605 11.602 14.7918 11.4367L13.6704 17.3309ZM16.4122 16.1755C15.8358 17.0455 14.7711 17.5404 13.6704 17.3309L14.7918 11.4367C13.4355 11.1786 12.1221 11.7875 11.4105 12.8616L16.4122 16.1755ZM13.81 17.5191L13.9253 17.5185L13.8974 11.5186L13.7822 11.5191L13.81 17.5191ZM14.2052 11.5501C14.1778 11.5473 14.1981 11.5488 14.2464 11.5559C14.2601 11.5579 14.2971 11.5635 14.3459 11.5726C14.3699 11.5771 14.4142 11.5856 14.4696 11.5984C14.5048 11.6066 14.6372 11.6372 14.801 11.6958C14.8722 11.7213 15.0652 11.7922 15.2921 11.9235C15.4059 11.9894 15.6101 12.1169 15.83 12.321C16.0289 12.5056 16.4261 12.9224 16.6443 13.5988C16.9031 14.401 16.8113 15.2702 16.4005 15.9965C16.0545 16.6084 15.5884 16.9351 15.3603 17.0753C14.9183 17.3471 14.5141 17.4318 14.4366 17.4489C14.1843 17.5046 13.9804 17.5134 13.9505 17.515C13.8794 17.5187 13.8235 17.5191 13.7961 17.5191V11.5191C13.7654 11.5191 13.7069 11.5195 13.6337 11.5234C13.6017 11.525 13.3963 11.534 13.143 11.59C13.065 11.6072 12.6605 11.692 12.2182 11.9638C11.99 12.1041 11.5239 12.4309 11.1778 13.0429C10.767 13.7693 10.6752 14.6385 10.934 15.4408C11.1522 16.1173 11.5495 16.5342 11.7485 16.7189C11.9685 16.9231 12.1728 17.0506 12.2868 17.1166C12.514 17.2481 12.7074 17.3192 12.7791 17.3449C12.9441 17.4039 13.0781 17.435 13.1154 17.4436C13.173 17.4569 13.2199 17.466 13.247 17.4711C13.3019 17.4813 13.3469 17.4882 13.3703 17.4916C13.4573 17.5044 13.5433 17.5137 13.5975 17.5192L14.2052 11.5501ZM16.812 15.1936C16.755 15.4935 16.6478 15.7781 16.4986 16.0361L11.3041 13.0332C11.1206 13.3506 10.9884 13.7012 10.9178 14.0722L16.812 15.1936ZM4.19435 81.5134L16.812 15.1936L10.9178 14.0722L-1.69992 80.392L4.19435 81.5134ZM4.2417 81.0112C4.2417 81.1798 4.22584 81.3479 4.19436 81.5134L-1.69992 80.392C-1.73874 80.5961 -1.7583 80.8034 -1.7583 81.0112H4.2417ZM11.8843 16.0996C11.5481 15.5533 11.2199 14.5804 11.6319 13.4823C11.9841 12.544 12.6736 12.0939 12.9454 11.9387C13.4739 11.6367 13.9603 11.5853 13.9811 11.5824C14.1143 11.5638 14.2127 11.5604 14.2433 11.5595C14.2841 11.5582 14.3101 11.5587 14.3155 11.5588C14.3161 11.5588 14.2633 11.556 14.2052 11.5501L13.5975 17.5192C13.7338 17.5331 13.9663 17.553 14.1953 17.5576C14.2741 17.5592 14.5261 17.5645 14.8113 17.5247C14.8659 17.517 15.3778 17.4591 15.9215 17.1485C16.2008 16.989 16.8953 16.5341 17.2494 15.5903C17.6636 14.4868 17.3345 13.508 16.9942 12.955L11.8843 16.0996ZM11.9461 16.1954C11.9249 16.164 11.9042 16.1321 11.8842 16.0996L16.9942 12.9551C16.9696 12.915 16.9441 12.8756 16.918 12.8369L11.9461 16.1954ZM13.9253 17.5185L14.446 17.5161L14.4181 11.5162L13.8974 11.5186L13.9253 17.5185ZM16.4986 16.0361C16.4712 16.0834 16.4424 16.13 16.4122 16.1756L11.4105 12.8615C11.3733 12.9176 11.3378 12.9749 11.3041 13.0332L16.4986 16.0361ZM28.5237 15.075C28.4933 16.4336 27.3833 17.5191 26.0243 17.5191V11.5191C24.1218 11.5191 22.5678 13.0388 22.5252 14.9408L28.5237 15.075ZM27.0476 81.0356L28.5237 15.075L22.5252 14.9408L21.0491 80.9013L27.0476 81.0356ZM24.5418 78.4796C25.9469 78.4761 27.079 79.6308 27.0476 81.0356L21.0491 80.9013C21.0051 82.868 22.59 84.4846 24.5571 84.4796L24.5418 78.4796ZM83.9034 78.3272L24.5418 78.4796L24.5572 84.4796L83.9188 84.3272L83.9034 78.3272ZM81.429 81.1366C81.2433 79.6473 82.4025 78.331 83.9034 78.3272L83.9188 84.3272C86.0201 84.3218 87.643 82.4791 87.3829 80.394L81.429 81.1366ZM73.221 15.3285L81.429 81.1366L87.3829 80.394L79.1749 14.5859L73.221 15.3285ZM75.7018 17.5191C74.4407 17.5191 73.3771 16.5798 73.221 15.3285L79.1749 14.5859C78.9564 12.834 77.4673 11.5191 75.7018 11.5191V17.5191ZM26.0243 17.5191H75.7018V11.5191H26.0243V17.5191Z"
                fill="white"
                mask="url(#path-2-inside-1_3426_80332)"
              ></path>
              <path
                d="M74.4601 80.8248C74.563 80.9637 74.5339 81.1599 74.3949 81.2628C74.341 81.3028 74.2756 81.3244 74.2085 81.3244H1.55485C1.3819 81.3244 1.2417 81.1842 1.2417 81.0112C1.2417 80.9916 1.24355 80.972 1.24722 80.9527L13.8649 14.6329C13.8972 14.463 14.0612 14.3515 14.2311 14.3838C14.3175 14.4003 14.3931 14.4524 14.4392 14.5273C14.4854 14.6023 13.7081 14.5191 13.7961 14.5191H31.2394"
                stroke="#9B9B9B"
                stroke-width="1.5"
              ></path>
              <path
                d="M13.79 14.7738C13.8224 14.6039 13.9863 14.4923 14.1562 14.5246C14.2427 14.5411 14.3182 14.5932 14.3644 14.6682L18.7232 21.7512C18.8138 21.8985 19.0067 21.9444 19.154 21.8538C19.1829 21.836 19.2087 21.8136 19.2304 21.7875L24.9596 14.9125C25.0703 14.7797 25.2678 14.7617 25.4006 14.8724C25.4198 14.8884 25.4369 14.9066 25.4518 14.9266"
                stroke="#9B9B9B"
                stroke-width="1.5"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.5245 15.0079C25.5305 14.7362 25.7526 14.5191 26.0243 14.5191H75.7018C75.954 14.5191 76.1668 14.7069 76.198 14.9572L84.406 80.7653C84.4431 81.0632 84.2113 81.3264 83.9111 81.3272L24.5495 81.4796C24.2685 81.4803 24.042 81.2494 24.0483 80.9684L25.5245 15.0079Z"
                stroke="#9B9B9B"
                stroke-width="1.5"
              ></path>
              <path
                d="M1.48975 81.4809L14.1725 74.5915L24.0369 81.4809"
                stroke="#9B9B9B"
                stroke-width="1.5"
              ></path>
              <path
                d="M14.0159 74.5915L19.2131 22.0467"
                stroke="#9B9B9B"
                stroke-width="1.5"
              ></path>
              <path
                d="M42.8262 20.7288V8.89151C42.8262 4.53315 46.3593 0.999994 50.7177 0.999994H55.0345C59.3929 0.999994 62.926 4.53315 62.926 8.89151V20.7288"
                stroke="#9B9B9B"
                stroke-width="1.5"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M74.6704 29.4972C74.8034 29.4972 74.931 29.5502 75.0248 29.6445L90.3305 45.0282C90.5249 45.2236 90.5245 45.5395 90.3296 45.7344L77.3276 58.7363C77.132 58.9319 76.8148 58.9315 76.6196 58.7354L61.3028 43.3404C61.2167 43.2539 61.1653 43.139 61.1581 43.0171L60.3939 30.0265C60.377 29.7393 60.6054 29.4972 60.8931 29.4972L74.6704 29.4972Z"
                fill="white"
                stroke="#9B9B9B"
                stroke-width="1.5"
              ></path>
              <circle
                cx="68.8612"
                cy="37.4003"
                r="2.79138"
                fill="white"
                stroke="#9B9B9B"
                stroke-width="1.5"
              ></circle>
              <path
                d="M58.1709 14.4657C61.3025 10.0815 65.9564 12.6869 67.6012 15.8059C70.0684 20.4845 70.6852 26.7226 68.8348 37.6392"
                stroke="#9B9B9B"
                stroke-width="1.5"
              ></path>
            </svg>
            <p>¡Empieza un carrito de compras!</p>
          </div>
        )}
        {cart && (
          <div className="flex flex-col">
            {cart?.slice(0, 1).map((item) => {
              return (
                <div key={item.id} className="flex gap-3 mb-3">
                  <div className="flex justify-center items-center">
                    <div className="">
                      {item.imagen.map(
                        (itemCard) =>
                          itemCard.id === item.id && (
                            <div className="">
                              <img
                                src={itemCard.imagenNew}
                                alt="article img"
                                width={100}
                                height={70}
                                className=" rounded-full"
                              />
                            </div>
                          )
                      )}
                    </div>
                  </div>
                  <div>
                    <p>{item.nombre}</p>
                    <div className="flex justify-between w-full">
                      <p className="">
                        {item.CarritoArticulo.cantidad} x ${item.precio}
                      </p>
                      <img
                        src={remove}
                        alt="remove"
                        className="cursor-pointer"
                        onClick={() => {
                          handleRemove(
                            item.CarritoArticulo.articuloId,
                            cart.findIndex(
                              (cartItem) => cartItem.id === item.id
                            )
                          );
                        }}
                      />
                    </div>

                    {!verMas && (
                      <p className="text-sm sm:text-lg font-extrabold">
                        ¡Agregado al carrito con éxito!
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
            {verMas &&
              cart.slice(1).map((item) => {
                return (
                  <div key={item.id} className="flex gap-3 mb-3">
                    <div className="flex justify-center items-center">
                      {item.imagen.map(
                        (itemCard) =>
                          itemCard.id === item.id && (
                            <div className="">
                              <img
                                src={itemCard.imagenNew}
                                alt="article img"
                                width={100}
                                height={70}
                                className=" rounded-full"
                              />
                            </div>
                          )
                      )}
                    </div>
                    <div>
                      <p>{item.nombre}</p>
                      <div className="flex justify-between w-full">
                        <p>
                          {item.CarritoArticulo.cantidad} x ${item.precio}
                        </p>
                        <img
                          src={remove}
                          alt="remove"
                          className="cursor-pointer"
                          onClick={() => {
                            handleRemove(
                              item.CarritoArticulo.articuloId,
                              cart.findIndex(
                                (cartItem) => cartItem.id === item.id
                              )
                            );
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            {verMas && cart.length > 0 && (
              <>
                <p className="font-bold">
                  Total: ${total} x {cantidad}{' '}
                  {cantidad > 1 ? 'artículos' : 'artículo'}
                </p>
                <Link
                  to="/checkout"
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="p-3 mt-1 bg-[#009ee3] rounded-xl text-white flex justify-center text-center items-center"
                >
                  ¡CheckOut!
                </Link>
                <button
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                  className="p-3 mt-1 bg-black text-white rounded-xl"
                >
                  Cancelar
                </button>
              </>
            )}
            {cart?.length > 0 && !verMas && (
              <>
                <button
                  onClick={() => setVerMas(true)}
                  className="mt-4 p-3 bg-black text-white rounded-xl"
                >
                  ¡Ver Mas!
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};
