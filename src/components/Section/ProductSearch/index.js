"use client";

import { _useApi } from "@/app/libs/axios/get";
import Loading from "@/components/Loading";
import Card from "@/components/Product/Card";
import { useEffect, useState } from "react";

const ProductSearch = ({ query }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProductsSearch = async () => {
    try {
      setLoading(false);
      const productSearchAPI = await _useApi(`products/search?q=${query}`);

      setProducts(productSearchAPI.data.products);
      // console.log(productSearchAPI);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsSearch();
  }, []);

  return (
    <section>
      {loading ? <Loading /> : null}
      <div className="flex justify-center">
        <div className="grid place-content-center xl:grid-cols-4 lg:grid-cols-3 grid-cols-2">
          {products.map((product, i) => {
            return (
              <div key={i} className="flex justify-center mt-3 ">
                <Card product={product} />;
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSearch;
