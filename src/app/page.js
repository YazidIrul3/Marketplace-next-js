import HomePage from "@/components/Section/Home";
import Category from "@/components/Product/CategoryIcon/Category";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col justify-center mx-auto">
      <div id="image-home-promo" className="mx-auto">
        <Image
          className=" "
          src={
            "https://assets.digination.id/crop/0x0:0x0/x/photo/2022/04/01/962777367.jpeg"
          }
          alt=""
          width={2000}
          height={2000}
        />
      </div>

      <div className="flex flex-row justify-start overflow-x-auto xl:w-full lg:w-11/12 sm:w-11/12 mx-auto">
        <Category />
      </div>

      <HomePage />
    </div>
  );
};

export default Home;
