"use client";

import Card from "@/components/Product/Card";
import Loading from "../../Loading";
import { useProducts } from "@/features/product/fetchProducts";

const HomePage = () => {
  const { data, loading } = useProducts("products");

  return (
    <section className="flex justify-center">
      {loading ? <Loading /> : null}

      <div className="grid place-items-center place-content-between 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 ">
        {data.products?.map((product) => {
          return (
            <div key={product.id} className="flex flex-row justify-center mt-3">
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomePage;
