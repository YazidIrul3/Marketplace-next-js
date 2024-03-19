import Image from "next/image";

const LeftBeside = ({ product }) => {
  return (
    <div className="flex justify-center w-11/12 mx-auto">
      <Image
        id="detail-card-product"
        className="flex justify-center w-full max-h-full object-cover rounded-xl"
        src={product.thumbnail}
        alt="..."
        width={2000}
        height={1000}
      ></Image>
    </div>
  );
};

export default LeftBeside;
