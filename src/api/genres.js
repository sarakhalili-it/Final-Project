import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
export const getgenres = async () => {
  const { data } = await axios.get(`${apiUrl}/genres`);
  return data;
};
