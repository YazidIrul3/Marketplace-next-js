"use client";

import { _useApi } from "@/app/libs/axios/get";
import Loading from "@/components/Loading";
import Card from "@/components/Product/Card";
import { useEffect, useState } from "react";

const ProductsCategory = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProductsByCategoty = async () => {
    try {
      setLoading(false);
      const productCategoryAPI = await _useApi(`products/category/${category}`);

      setProducts(productCategoryAPI.data.products);
      // console.log(productCategoryAPI);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsByCategoty();
  }, []);

  return (
    <div className="flex justify-center ">
        {loading ? <Loading /> : null}
      <div className="overflow-x-hidden grid place-items-center place-content-center xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 ">

        {products.map((product, i) => {
          return (
            <div key={i} className="flex justify-center mt-3 mx-auto ">
              <Card product={product} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsCategory;
