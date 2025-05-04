import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
export const getMovies = async (page = 1) => {
  const { data } = await axios.get(`${apiUrl}/movies?page=${page}`);
  return data;
};
