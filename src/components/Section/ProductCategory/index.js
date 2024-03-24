"use client";

import Loading from "@/components/Loading";
import Card from "@/components/Product/Card";
import { useProducts } from "@/features/product/fetchProducts";

const ProductsCategory = ({ category }) => {
  const { data: products, loading } = useProducts(
    `products/category/${category}`
  );

  return (
    <div className="flex justify-center ">
      {loading ? <Loading /> : null}
      <div className="overflow-x-hidden grid place-items-center place-content-center xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 ">
        {products.products?.map((product, i) => {
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
