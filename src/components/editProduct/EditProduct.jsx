import React, { useEffect, useState } from 'react';
import { editProduct, getImageUrl } from '../../services/Articles';
import { useAuth } from '../../context/Auth';
import { useNavigate, useLocation } from 'react-router-dom';

export const EditProductComponent = ({ setSection, setDataProduct }) => {
  const navigate = useNavigate();
  const { dataLogin } = useAuth();
  const location = useLocation();

  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    categoriaId: 1,
    usuarioId: dataLogin.payload.userId,
    imagen1: null,
  });

  // Almacena dataProduct en un estado local
  const [dataProduct, setDataProductLocal] = useState(null);

  useEffect(() => {
    if (location.state && location.state.dataProduct) {
      const { dataProduct } = location.state;
      // Guarda dataProduct en el estado local
      setDataProductLocal(dataProduct);
      setFormData({
        nombre: dataProduct.nombre,
        descripcion: dataProduct.descripcion,
        precio: dataProduct.precio,
        categoriaId: dataProduct.categoriaId,
        usuarioId: dataProduct.usuarioId,
        imagen1: dataProduct.imagen1,
      });
    }
  }, [location.state]);

  const handleAddImageClick = () => {
    const inputElement = document.getElementById('productPictureInput');
    if (inputElement) {
      inputElement.click();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      imagen1: file,
    }));
  };

  const handleSubmit = async () => {
    try {
      const token = dataLogin.token; // Obtener el token de autenticación
      const response = await editProduct(dataProduct.id, formData, token);
      console.log(response);
      if (response) {
        alert('Producto actualizado con éxito!');
        // Aquí puedes realizar cualquier acción adicional después de la actualización exitosa
      } else {
        alert('Hubo un error al actualizar el producto.');
      }
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      alert('Hubo un error al actualizar el producto.');
    }
  };

  return (
    <div className="h-full">
      <div className="w-full flex flex-row h-full bgnewProduct ">
        <div className="lg:w-[25%] h-full flex items-center bg-sidebar">
          <aside className="text-white lg:w-full lg:my-auto min-h-[150vh]">
            <div className="lg:flex lg:justify-center lg:py-5 border-b border-white border-opacity-30">
              <button className="border-transparent bg-[#00000040] lg:p-5 lg:px-12 text-center text-[#D1C0D4] rounded-xl">
                <div className="hidden sm:block">
                  <p>CREAR UN NUEVO PRODUCTO</p>
                </div>
                <div className="md:hidden flex justify-center items-center w-[50px] h-[50px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path fill="#ffffff" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                  </svg>
                </div>
              </button>
            </div>
            <div className="lg:flex lg:flex-row lg:gap-3 lg:p-5 lg:ml-2  lg:items-center">
              <div className=" w-[50px] h-[50px] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
                  />
                </svg>
              </div>
              <div className="hidden sm:block">
                <p>TUS PUBLICACIONES</p>
              </div>
            </div>
          </aside>
        </div>
        <div className="w-full h-full lg:p-7">
          <section className="containerWidth">
            <div className="lg:max-w-[1000px] lg:mx-auto lg:flex lg:flex-col lg:gap-10">
              <div className="text-black flex flex-row justify-between  mb-5 lg:mb-0">
                <h1 className="font-bold text-3xl">Editar producto</h1>
                <div>
                  <button onClick={() => setSection(true)}>X</button>
                </div>
              </div>

              <div className="bg-white text-black w-full lg:h-[450px] rounded-lg shadow-[0px_4px_4px_0px_#00000040] mb-5 lg:mb-0">
                <div className="w-[95%] mx-auto">
                  <div className="py-3">
                    <p className="lg:text-xl font-bold">
                      Nombre y descripcion:
                    </p>
                  </div>
                  <div>
                    <label className="lg:text-lg font-medium">Nombre</label>
                    <input
                      type="text"
                      className="border border-[#D9D9D9] w-full rounded-lg outline-none"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <p className="lg:text-lg font-medium">Descripcion</p>
                    <textarea
                      className="border border-[#D9D9D9] w-full rounded-lg outline-none resize-none"
                      rows={12}
                      cols={12}
                      name="descripcion"
                      value={formData.descripcion}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="bg-white text-black w-full lg:h-[380px] rounded-lg shadow-[0px_4px_4px_0px_#00000040]  mb-5 lg:mb-0">
                <div className="w-[95%] mx-auto">
                  <div className="py-3">
                    <p className="lg:text-xl font-bold">Fotos</p>
                  </div>
                  <div className="py-10 lg:py-0">
                    {formData.imagen1 ? (
                      <img
                        src={getImageUrl(formData.imagen1)}
                        alt="Preview"
                        className="lg:w-[250px] lg:h-[250px] rounded-lg shadow-[0px_4px_4px_0px_#00000040]"
                      />
                    ) : (
                      <div className="lg:flex lg:flex-col border border-dashed border-black lg:w-[250px] lg:h-[250px] lg:justify-center lg:items-center gap-3 rounded-lg shadow-[0px_4px_4px_0px_#00000040]">
                        <div>
                          <label
                            onClick={handleAddImageClick}
                            className="cursor-pointer text-center lg:px-2 border border-black rounded-full text-3xl items-center"
                          >
                            +
                          </label>
                          <input
                            id="productPictureInput"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-white text-black w-full lg:h-[170px] rounded-lg shadow-[0px_4px_4px_0px_#00000040]  mb-5 lg:mb-0">
                <div className="w-[95%] mx-auto">
                  <div className="py-3">
                    <p className="lg:text-xl font-bold">Precio</p>
                  </div>

                  <div>
                    <p className="lg:text-lg font-medium">Precio en tienda</p>
                    <input
                      className="border border-[#D9D9D9] w-full rounded-lg outline-none"
                      type="number"
                      name="precio"
                      value={formData.precio}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-full h-[50px] ">
                <div className="w-full lg:flex lg:flex-row lg:justify-end gap-3 flex flex-col">
                  <button className="border bg-white lg:px-16 lg:py-3 px-7 py-3 rounded-full">
                    CANCELAR
                  </button>
                  <button
                    className="border bg-[#295F93] lg:px-20 lg:py-3  px-7 py-3 text-white rounded-full "
                    onClick={handleSubmit}
                  >
                    ACTUALIZAR
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EditProductComponent;
