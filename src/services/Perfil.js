import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;
//fetching all users
const fetchUsers = async () => {
  const url = "usuario/findAll";
  try {
    const response = await axios.get(`${baseUrl}${url}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

//fetching one user
const fetchOneProfile = async (id) => {
  const url = `perfil/findOne/${id}`;
  try {
    const response = await axios.get(`${baseUrl}${url}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export { fetchUsers, fetchOneProfile };
