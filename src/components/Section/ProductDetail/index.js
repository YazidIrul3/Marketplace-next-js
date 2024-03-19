"use client";

import { _useApi } from "@/app/libs/axios/get";
import Loading from "@/components/Loading";
import CardDetailProduct from "@/components/Product/CardDetailProduct";
import { useEffect, useState } from "react";

const ProductDetail = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [productById, setProductById] = useState({});

  const getProductById = async () => {
    try {
      setLoading(false);
      const detailProductById = await _useApi(`products/${id}`);

      // console.log(detailProductById);
      setProductById(detailProductById.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <section>
      {loading ? <Loading /> : null}
      <div className="flex justify-center">
        <CardDetailProduct product={productById} />
      </div>
    </section>
  );
};

export default ProductDetail;
