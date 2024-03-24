import { axiosIntence } from "@/libs/axios";
import { useEffect, useState } from "react";

export const useProducts = (route) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      setLoading(false);
      const products = await axiosIntence.get(route);
      // console.log(products.data);
      setProducts(products.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    data: products,
    loading: loading,
  };
};
