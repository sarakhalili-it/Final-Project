import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
export const getMoviesByGeners = async (genername, page = 1) => {
  const { data } = await axios.get(
    `${apiUrl}/genres/${genername}/movies?page=${page}`
  );
  return data;
};
