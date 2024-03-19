import axios from "axios";

export const _useApi = async (resource) => {
  const url = await axios.get(`https://dummyjson.com/${resource}`);
 
// ' https://dummyjson.com/products'
  return url;
};
