import axios from "axios";

export const axiosIntence = axios.create({
  baseURL: "https://dummyjson.com/",
});

// ' https://dummyjson.com/products'
