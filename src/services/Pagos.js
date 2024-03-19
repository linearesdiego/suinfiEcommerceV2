import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;
const fetchPagos = async (pasarelaId, carritoId) => {
  const url = `pago-mercadopago/create-order/${pasarelaId}/${carritoId}`;
  try {
    const response = await axios.post(`${baseUrl}${url}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export { fetchPagos };
