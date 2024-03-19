import DiscountFilter from "@/components/Section/DiscountAndFilter/Discount.Toogle";
import HomePage from "@/components/Section/Home";
import Category from "@/components/Product/CategoryIcon/Category";

const Home = () => {
  return (
    <div className="flex flex-col justify-center mx-auto">
      <div className="flex flex-row justify-start overflow-x-auto">
        <Category />
      </div>

      <HomePage />
    </div>
  );
};

export default Home;
