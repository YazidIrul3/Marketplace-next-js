"use client";

import "@/app/globals.css";
import RightBeside from "./RightBeside";
import LeftBeside from "./LeftBeside";

const CardDetailProduct = ({ product }) => {
  return (
    <div className="flex justify-center mx-auto px=10 py-3">
      <div className=" w-11/12 h-full xl:pt-3 lg:pt-2 sm:pt-40 bg-slate-50 shadow-slate-600 shadow-sm">
        <div
          className="grid xl:grid-rows-1 xl:grid-cols-2 lg:grid-rows-1 lg:grid-cols-2 sm:grid-rows-2 sm:grid-cols-1  place-content-center place-items-start
         min-w-full h-full mx-auto px-5"
        >
          <div>
            <LeftBeside product={product} />
          </div>

          <div>
            <RightBeside product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailProduct;
