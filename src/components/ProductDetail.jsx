import { useEffect, useState } from 'react';
import { Loader } from './Loader';
import { Navbar } from './Navbar';
import { useAuth } from '../context/Auth';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { addProductToCart } from '../services/Carrito';
import { fetchProductById } from '../services/Articles';
import { ProductsFeatures } from './ProductsFeatures';
import { RelatedProducts } from './RelatedProducts';
import { ReviewProducts } from './ReviewProducts';
import { Payments } from './Payments';

const ProductDetail = () => {
  const { dataLogin, setCartResponse, setShowModal } = useAuth();
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const [categoria, setCategoria] = useState();
  const [descripcion, setDescripcion] = useState();

  const navigate = useNavigate();
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
      const token = dataLogin.token;
      console.log(token);
      addProductToCart(
        {
          articuloId: product?.id,
          precio: product?.precio,
          cantidad: cantidad,
          carritoId: dataLogin.payload.carritoId,
        },
        token
      ).then((response) => {
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
          setCategoria(productData.categoriaId);
          setDescripcion(productData.descripcion);
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
      <div className="w-full h-full lg:h-[100vh] flex items-center justify-center lg:mt-[95rem]">
        <div className="containerWidth lg:flex lg:flex-row justify-center items-center mt-16 lg:mt-0">
          {isLoading && <Loader />}
          {!isLoading && (
            <div className="flex flex-col justify-center items-center ">
              <div className="flex flex-col lg:flex-row justify-center gap-5 mt-10 mb-20">
                <div className=" flex justify-center">
                  <div className="lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] lg:pr-20 flex justify-center">
                    <img
                      src={product?.imagenNew}
                      alt="article img"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="lg:w-[50%] w-[22rem] flex flex-col gap-9 mx-auto lg:mx-0">
                  <h2 className="text-2xl lg:text-4xl font-bold">
                    {product?.nombre}
                  </h2>
                  <p className="-mt-6">
                    {product?.descripcion}Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vestibulum dictum laoreet
                    ipsum, ac efficitur erat tempus ut. Nam ut aliquet metus,
                    sit amet.
                  </p>
                  <h2 className="text-4xl font-bold">${product?.precio}</h2>
                  <div className="flex flex-col gap-5 pb-10 lg:flex-row">
                    <div className="flex lg:w-[7em] w-full flex-row mr-7 justify-center gap-3 items-center px-0 rounded-xl font-semibold text-center border-[1px] border-neutral-900 ">
                      <button
                        onClick={handleDecrement}
                        className="text-xl flex"
                      >
                        -
                      </button>

                      <p className="w-4">{cantidad}</p>
                      <button onClick={handleIncrement} className="text-xl">
                        +
                      </button>
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
              <Payments />
              <div className="h-[1px] w-full bg-[#807f7f] my-32"></div>
              <RelatedProducts categoria={categoria} />
              <div className="h-[1px] w-full bg-[#807f7f] my-32"></div>
              <ProductsFeatures descripcion={descripcion} />
              <div className="h-[1px] w-full bg-[#807f7f] my-32"></div>
              <ReviewProducts />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
