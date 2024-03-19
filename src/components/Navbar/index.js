import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center bg-red-500 p-4 w-screen right-0 left-0 top-0">
      <div className="xl:text-xl lg:text-lg text-sm font-extrabold w-72 text-white">
        <h1>YKH MARKETPLACE</h1>
      </div>

      <div className="w-screen">
        <InputSearch /> 
      </div>

      <div className=" w-40 flex justify-center">
        <ShoppingCartSimple size={32} color="#fcfcfc" />
      </div>
    </nav>
  );
};

export default Navbar;
