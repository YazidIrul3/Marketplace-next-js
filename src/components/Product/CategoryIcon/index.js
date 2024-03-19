import "@/app/globals.css";

const CategoryIcon = ({ icon, category }) => {
  return (
    <div
      className=" flex flex-col justify-center items-center w-full h-full p-2 px-4 "
      id="category-card"
    >
      <div className="flex justify-center items-center bg-slate-50 shadow-black shadow-xxl rounded-sm p-3">
        <div className="object-cover">{icon}</div>
      </div>

      <div>
        <h1 className="flex flex-wrap text-sm font-light py-1">{category}</h1>
      </div>
    </div>
  );
};

export default CategoryIcon;
