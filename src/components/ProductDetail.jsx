import { useEffect, useState } from 'react';
import { Loader } from './Loader';
import { Navbar } from './Navbar';
import { useAuth } from '../context/Auth';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { addProductToCart } from '../services/Carrito';
import { fetchProductById } from '../services/Articles';



const ProductDetail = () => {
  const { dataLogin, setCartResponse, setShowModal } = useAuth();
  const { id } = useParams()

  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [cantidad, setCantidad] = useState(1);


  const navigate = useNavigate()
  const handleIncrement = () => {
    setCantidad(cantidad + 1);
  };

  const handleDecrement = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAddToCart = () => {
    if (dataLogin?.userLogin) {
      addProductToCart({
        articuloId: product?.id,
        precio: product?.precio,
        cantidad: cantidad,
        carritoId: dataLogin.payload.carritoId,
      }).then((response) => {
        if (response) {
          setCartResponse(true);
          setShowModal(true);
        }
      });
    } else {
      navigate('/auth#login');
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const productData = await fetchProductById(id);

        if (productData) {
          // Procesamiento de imágenes (igual al código anterior)
          const arrayBuffer = new Uint8Array(productData?.imagen1?.data).buffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          let binaryString = '';
          uint8Array.forEach((byte) => {
            binaryString += String.fromCharCode(byte);
          });
          const base64Data = btoa(binaryString);
          const dataUrl = `data:image/png;base64,${base64Data}`;

          const data = { ...productData, imagenNew: dataUrl };
          setProduct(data);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
      setIsLoading(false);
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gradient-to-tr from-[#9378a5] to-[#f6eef9] w-full h-[100vh] flex items-center justify-center">
        <div className="container-width-ecommerce flex flex-row justify-between items-center">
          {isLoading && <Loader />}
          {!isLoading && (
            <div className="flex justify-center items-center gap-5">
              <div className="">
                <div className="w-[500px] h-[500px]">
                  <img
                    src={product?.imagenNew}
                    alt="article img"
                    className="rounded-lg "
                  />
                </div>
              </div>
              <div className="w-[50%] flex flex-col gap-9">
                <h2 className="text-4xl font-bold">{product?.nombre}</h2>
                <p className="-mt-8">
                  {product?.descripcion}Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum dictum laoreet ipsum, ac efficitur
                  erat tempus ut. Nam ut aliquet metus, sit amet.
                </p>
                <h2 className="text-4xl font-bold">${product?.precio}</h2>
                <div className="flex flex-row">
                  <div className="flex flex-row mr-7 bg-[#f6eef9] gap-3 items-center px-4 rounded-xl font-semibold">
                    <button onClick={handleDecrement}>-</button>

                    <p className="w-4">{cantidad}</p>
                    <button onClick={handleIncrement}>+</button>

                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="bg-black text-white px-10 py-2 rounded-full focus:shadow-2xl"
                  >
                    AGREGAR AL CARRITO
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
