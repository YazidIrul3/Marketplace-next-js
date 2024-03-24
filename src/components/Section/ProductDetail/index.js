"use client";
import Loading from "@/components/Loading";
import CardDetailProduct from "@/components/Product/CardDetailProduct";
import { useProducts } from "@/features/product/fetchProducts";

const ProductDetail = ({ id }) => {
  const { data: product, loading } = useProducts(`products/${id}`);

  return (
    <section>
      {loading ? <Loading /> : null}
      <div className="flex justify-center">
        <CardDetailProduct product={product} />
      </div>
    </section>
  );
};

export default ProductDetail;
