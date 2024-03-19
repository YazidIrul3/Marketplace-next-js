import ProductDetail from "@/components/Section/ProductDetail";

const Page = ({ params }) => {
  return (
    <>
      <ProductDetail id={params.id} />
    </>
  );
};

export default Page;
