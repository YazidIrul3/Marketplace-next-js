import { Star } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import "@/app/globals.css";
import Link from "next/link";
import { useState } from "react";

const Card = ({ product }) => {
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

  const handleDiscount = () => {
    const discountPrice =
      productPriceToRupiah -
      (product.discountPercentage / 100) * productPriceToRupiah;
    const discountPriceString = discountPrice.toString().split("");
    const discountPriceLength = discountPriceString.length;

    if (discountPriceLength <= 6) {
      discountPriceString.splice(discountPriceLength - 3, 0, ".");
    } else if (discountPriceLength <= 9) {
      discountPriceString.splice(discountPriceLength - 3, 0, ".");
      discountPriceString.splice(discountPriceLength - 6, 0, ".");
    }

    const discountPriceRP = discountPriceString.join("");

    setDiscountPrice(discountPriceRP);
  };

  return (
    <Link
      href={`/productdetail/${product.id}`}
      className="h-full "
      id="card-product"
    >
      <div className="flex flex-col justify-between bg-slate-50 min-w-screen shadow-slate-900 shadow-sm px-1 m-2  hover:border border-red-500">
        <div className="flex items-center w-full">
          <Image
            className="rounded-lg w-screen flex justify-center items-center mx-auto h-screen object-cover"
            src={product.thumbnail}
            alt="..."
            width={1000}
            height={1000}
          />
          <button
            className=" absolute z-10 mx-auto mb-40 bg-red-500 text-white px-3 py-2 hover:border border-white"
            onClick={handleDiscount}
          >
            -{product.discountPercentage}%
          </button>
        </div>

        <div className=" flex flex-row justify-between text-sm font-medium pt-1">
          <h2 className="text-lg overflow-hidden truncate">{product.title}</h2>
        </div>

        <div>
          <p className=" font-light text-sm overflow-hidden py-1 truncate">
            {" "}
            {product.description}{" "}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <div className=" font-bold text-sm py-1">
            <h2>{`Rp ${price3}`}</h2>
          </div>
          <div className="flex flex-row items-center px-1">
            <Star className="mr-2" size={15} color="#f5ff6b" weight="fill" />
            <h2>{product.rating}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
