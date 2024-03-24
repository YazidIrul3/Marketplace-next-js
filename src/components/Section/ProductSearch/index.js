"use client";

import Loading from "@/components/Loading";
import Card from "@/components/Product/Card";
import { useProducts } from "@/features/product/fetchProducts";

const ProductSearch = ({ query }) => {
  const { data: products, loading } = useProducts(`products/search?q=${query}`);

  return (
    <section>
      {loading ? <Loading /> : null}
      <div className="flex justify-center">
        <div className="grid place-content-center xl:grid-cols-4 lg:grid-cols-3 grid-cols-2">
          {products.products?.map((product, i) => {
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
