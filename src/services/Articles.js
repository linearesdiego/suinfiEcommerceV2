import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;
//Fetching all articles
const fetchArticles = async (search) => {
  const urlAll = 'articulos/findAll?limit=100&offset=1';
  const urlSearch = `articulos/findAll?limit=100&offset=1&nombre=${
    search ? search : ''
  }`;
  try {
    const response = await axios.get(
      `${baseUrl}${search ? urlSearch : urlAll}`
    );

    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default fetchArticles;

const fetchProductById = async (productId) => {
  const url = `articulos/findOne/${productId}`;
  try {
    const response = await axios.get(`${baseUrl}${url}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    throw error;
  }
};

export { fetchProductById };

export const postProduct = async (data, token) => {
  const urlCreate = 'articulos';

  try {
    const response = await axios.post(`${baseUrl}${urlCreate}`, data, {
      headers: {
        Authorization: `${token}`, // Include token with Bearer prefix
        'Content-Type': 'application/json', // Ensure data is sent as JSON
      },
    });

    if (response.status !== 200) {
      throw new Error('Error al crear el producto');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const fetchArticlesByUserId = async (usuarioId) => {
  console.log('TRAIGO USUARIO ID', usuarioId);
  const url = `articulos/findAll?limit=10&offset=0&usuarioId=${usuarioId}`;

  try {
    const response = await axios.get(`${baseUrl}${url}`);

    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
export { fetchArticlesByUserId };
