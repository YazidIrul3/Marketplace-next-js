"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Product/Card";
import { _useApi } from "@/app/libs/axios/get";
import Loading from "../../Loading";
import DiscountFilter from "../DiscountAndFilter/Discount.Toogle";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const productsAPI = _useApi("products");

  const getProducts = async () => {
    try {
      setLoading(false);
      const products = await productsAPI;
      // console.log(products);
      setProducts(products.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="flex justify-center">
        {loading ? <Loading /> : null}
      <div className="grid place-items-center place-content-between 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 ">

        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-row justify-center mt-3"
            >
              <Card product={product}/>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomePage;
