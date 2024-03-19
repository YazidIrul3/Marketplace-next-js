"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const router = useRouter();
  const refSearch = useRef();

  const handleProductsSearch = (e) => {
      e.preventDefault();
      const searchvalue = refSearch.current.value;

      router.push(`/productsearch/${searchvalue}`);
      // alert(searchvalue);
  };

  return (
    <div className="flex flex-row justify-start item-center p-2 w-full">
      <input
        type="text"
        className=" w-full bg-white px-8 py-2"
        placeholder="cari barang"
        ref={refSearch}
      ></input>

      <button type="submit"
        className=" bg-slate-900 ml-2 text-white px-4 p-1 hover:bg-slate-800"
        onClick={handleProductsSearch}
      >
        Cari
      </button>
    </div>
  );
};

export default InputSearch;
