import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;
//Fetching all carts
const fetchCart = async () => {
  const url = 'carrito/findAll';
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

//Fetching one cart
const fetchOneCart = async (id) => {
  const url = `carrito/findOne/${id}`;
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

export { fetchCart, fetchOneCart };

//Create a new cart
const createCart = async (data) => {
  const url = 'carrito/';
  try {
    const response = await axios.post(`${baseUrl}${url}`, data);

    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

//Update a cart
const updateCart = async (id, data) => {
  const url = `carrito/${id}`;
  try {
    const response = await axios.put(`${baseUrl}${url}`, data);

    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

//Delete a cart
const deleteCart = async (id) => {
  const url = `carrito/${id}`;
  try {
    const response = await axios.delete(`${baseUrl}${url}`);

    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export { createCart, updateCart, deleteCart };

// Add a product to a cart
const addProductToCart = async (data, token) => {
  const url = `carrito/addItem`;
  try {
    const response = await axios.post(`${baseUrl}${url}`, data, {
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

//Remove a product from a cart
const removeProductFromCart = async (data, token) => {
  const url = `carrito/subItem`;
  try {
    const response = await axios.delete(`${baseUrl}${url}`, data, {
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export { addProductToCart, removeProductFromCart };
