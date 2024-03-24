import "@/app/globals.css";
import { Star } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const CardDetailProduct = ({ product }) => {
  const productPriceToRupiah = product.price * 16000;
  const price2 = productPriceToRupiah.toString().split("");
  const priceLength = price2.length;

  if (priceLength <= 6) {
    price2.splice(priceLength - 3, 0, ".");
  } else if (priceLength <= 9) {
    price2.splice(priceLength - 3, 0, ".");
    price2.splice(priceLength - 6, 0, ".");
  }

  const price3 = price2.join("");

  return (
    <div className="flex justify-center mx-auto px=10 py-3">
      <div className=" w-11/12 h-full pt-3 bg-slate-50 shadow-slate-600 shadow-sm">
        <div
          className="grid xl:grid-rows-1 xl:grid-cols-2 lg:grid-rows-1 lg:grid-cols-2 sm:grid-rows-2 sm:grid-cols-1  place-content-center place-items-start
         min-w-full h-full mx-auto px-5"
        >
          <div>
            <div className="flex justify-center w-11/12 mx-auto">
              <Image
                id="detail-card-product"
                className="flex justify-center w-full max-h-full object-cover rounded-xl m-auto"
                src={product.thumbnail}
                alt="..."
                width={2000}
                height={1000}
              ></Image>
            </div>
          </div>

          <div>
            <div className=" bg-slate-50 w-full h-full p-5">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product.title}
              </h2>

              <div className="flex flex-row items-center mb-2 mr-1">
                <div className="flex flex-row items-center">
                  <Star
                    className="mr-2"
                    size={15}
                    color="#f5ff6b"
                    weight="fill"
                  />
                  <h2>{product.rating}</h2>
                </div>

                <div className="ml-1">
                  <h1>| {product.stock} stock sisa</h1>
                </div>
              </div>

              <p className="flex flex-wrap text-gray-600 dark:text-gray-300 text-sm mb-4 w-full">
                {product.description}
              </p>

              <div className="flex justify-start items-center mb-2 ">
                <h1 className=" font-normal xl:text-lg lg:text-xs line-through mr-3">
                  Rp {price3}
                </h1>
                <h1 className=" font-bold xl:text-xl text-red-500 mr-3">
                  Rp {price3}
                </h1>
                <button className="  bg-red-500 text-white px-3 py-1">
                  {product.discountPercentage}%
                </button>
              </div>

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                  Duis dapibus augue vel ipsum pretium, et venenatis sem
                  blandit. Quisque ut erat vitae nisi ultrices placerat non eget
                  velit. Integer ornare mi sed ipsum lacinia, non sagittis
                  mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                  tincidunt mi consectetur.
                </p>
              </div>
              <div className=" flex flex-row text-white font-bold text-sm my-4">
                <button className=" bg-red-500 px-4 py-2 mr-3 ">
                  ADD TO CART
                </button>
                <button className=" bg-red-500 px-4 py-2 ">
                  BELI SEKARANG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailProduct;
