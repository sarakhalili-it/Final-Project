import axios from "axios";
export const getgenres = async () => {
  const { data } = await axios.get(
    "https://moviesapi.codingfront.dev/api/v1/genres"
  );
  return data;
};
