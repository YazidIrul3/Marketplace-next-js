import { Star } from "@phosphor-icons/react/dist/ssr";

const RightBeside = ({ product }) => {
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
    <div className=" bg-slate-50 w-full h-full p-5">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
        {product.title}
      </h2>

      <div className="flex flex-row items-center mb-2 mr-1">
        <div className="flex flex-row items-center">
          <Star className="mr-2" size={15} color="#f5ff6b" weight="fill" />
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
        <h1 className=" font-normal xl:text-lg lg:text-xs line-through mr-3">Rp {price3}</h1>
        <h1 className=" font-bold xl:text-xl text-red-500 mr-3">Rp {price3}</h1>
        <button className="  bg-red-500 text-white px-3 py-1">
          {product.discountPercentage}%
        </button>
      </div>

      <div>
        <span className="font-bold text-gray-700 dark:text-gray-300">
          Product Description:
        </span>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante
          justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus
          commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum
          pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices
          placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
          sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
          tincidunt mi consectetur.
        </p>
      </div>
    </div>
  );
};

export default RightBeside;
