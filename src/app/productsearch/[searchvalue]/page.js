import ProductSearch from "@/components/Section/ProductSearch";

const Page = ({ params }) => {
  return (
    <div>
      <ProductSearch query={params.searchvalue} />
    </div>
  );
};

export default Page;
