import axios from "axios";
export const getMoviesByGeners = async (genername, page = 1) => {
  const { data } = await axios.get(
    `https://moviesapi.codingfront.dev/api/v1/genres/${genername}/movies?page=${page}`
  );
  return data;
};
