import { FadersHorizontal } from "@phosphor-icons/react/dist/ssr";

const FIlterProduct = () => {
  return (
    <div className="flex shadow-lg rounded ">
      <FadersHorizontal size={32} weight="fill" />
      <h1 className=" font-bold text-lg">Filter</h1>
      <select>
            <option>Harga</option>
      </select>
    </div>
  );
};

export default FIlterProduct;
