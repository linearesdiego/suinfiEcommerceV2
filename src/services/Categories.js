import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;
//Fetching all categories
const fetchCategories = async () => {
  const urlAll = 'categoria/findAll';

  try {
    const response = await axios.get(`${baseUrl}${urlAll}`);

    if (response.status !== 200) {
      throw new Error('Error al obtener los datos');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default fetchCategories;
