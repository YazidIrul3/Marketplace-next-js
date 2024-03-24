import CategoryIcon from "@/components/Product/CategoryIcon";
import {
  DeviceMobile,
  ForkKnife,
  HouseLine,
  Laptop,
  MaskHappy,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Category = () => {
  return (
    <div className=" mx-auto">
      <div className="flex justify-start mx-auto mt-2 w-full">
        <Link href="/productcategory/smartphone">
          <CategoryIcon
            icon={<DeviceMobile size={32} color="#040101" />}
            category="Smartphone"
          />
        </Link>

        <Link href="/productcategory/laptop">
          <CategoryIcon
            icon={<Laptop size={32} color="#040101" />}
            category="Laptop"
          />
        </Link>

        <Link href="/productcategory/skincare">
          <CategoryIcon
            icon={<MaskHappy size={32} color="#040101" />}
            category="Skincare"
          />
        </Link>

        <Link href="/productcategory/groceries">
          <CategoryIcon
            icon={<ForkKnife size={32} color="#040101" />}
            category="Groceries"
          />
        </Link>
        <Link href="/productcategory/homedecoration">
          <CategoryIcon
            icon={<HouseLine size={32} color="#040101" />}
            category="Decoration"
          />
        </Link>
        <Link href="/productcategory/homedecoration">
          <CategoryIcon
            icon={<HouseLine size={32} color="#040101" />}
            category="Decoration"
          />
        </Link>
        <Link href="/productcategory/homedecoration">
          <CategoryIcon
            icon={<HouseLine size={32} color="#040101" />}
            category="Decoration"
          />
        </Link>
        <Link href="/productcategory/homedecoration">
          <CategoryIcon
            icon={<HouseLine size={32} color="#040101" />}
            category="Decoration"
          />
        </Link>
      </div>
    </div>
  );
};

export default Category;
