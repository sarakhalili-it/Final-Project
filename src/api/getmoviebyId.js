import axios from "axios";
const formatMovie = (movie) => {
  const {
    id,
    title,
    poster,
    released,
    runtime,
    plot,
    imdb_rating,
    type,
    genres,
    images,
  } = movie;
  return {
    id,
    name: title,
    img: poster,
    date: released,
    time: runtime,
    desc: plot,
    rate: imdb_rating,
    type,
    genres: genres || [],
    backimg: images || [],
  };
};
export const getMovieById = async (id) => {
  if (!id) {
    return;
  }
  const { data } = await axios.get(
    `https://moviesapi.codingfront.dev/api/v1/movies/${id}`
  );
  return formatMovie(data);
};
