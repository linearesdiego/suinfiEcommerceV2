import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;
//FETCHING ALL ARTRICLES//
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

export const fetchFeaturedArticles = async () => {
  const urlFeatured = 'articulos/productoDestacado';

  try {
    const response = await axios.get(`${baseUrl}${urlFeatured}`);
    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para obtener la URL completa de la imagen
const getImageUrl = (imageName) => {
  return `https://ecommerce-suinfi-production.up.railway.app/api/v1/articulos/imagen/${imageName}`;
};

export { getImageUrl };

//FETCHING ONE ARTICLE//

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

//CREATE ARTICLE //

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
//EDIT ARTICLE //
export const editProduct = async (articleId, data, token) => {
  const urlEdit = `articulos/${articleId}`;

  try {
    const response = await axios.put(`${baseUrl}${urlEdit}`, data, {
      headers: {
        Authorization: `${token}`, // Include token with Bearer prefix
        'Content-Type': 'application/json', // Ensure data is sent as JSON
      },
    });

    if (response.status !== 200) {
      throw new Error('Error al editar el producto');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
//FETCHING USERS ARTICLES BY ID //
const fetchArticlesByUserId = async (usuarioId) => {
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
//DELETE ARTICLE //
const deleteArticleById = async (usuarioId, articleId, token) => {
  const url = `articulos/${articleId}`;

  try {
    const response = await axios.delete(`${baseUrl}${url}`, {
      headers: {
        Authorization: `${token}`, // Asegúrate de enviar el token de autenticación si es necesario
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error('Error al eliminar el artículo');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export { deleteArticleById };
