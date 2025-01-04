import Image from "next/image";
import { food } from "@/data/food-products";
import { CiSquarePlus } from "react-icons/ci";

function ProductsCard() {
  return (
    <div className="flex gap-2">
      {food.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-[300px] gap-2 border-dashed border-[#E2E2E2] rounded-xl border-2 py-4 px-6 group hover:bg-[#F7763D0A] hover:border-[#F7763D]"
        >
          <Image
            className="w-[180px] h-[180px]"
            alt={item.type}
            src={item.image}
            width={200}
            height={200}
          />
          <p className="text-xl font-semibold text-[#666666]">
            {item.description}
          </p>
          <div className="flex justify-between w-full">
            <p className="text-2xl font-medium text-[#79AF79] space-x-24 group-hover:text-[#F7763D]">
              قیمت:
            </p>
            <p className="text-2xl font-medium text-[#79AF79] space-x-24 group-hover:text-[#F7763D]">
              {item.price}
            </p>
          </div>
          <button className="flex items-center justify-center text-white text-lg gap-3 bg-[#519BC2] py-1 px-3 rounded-lg w-full group-hover:bg-[#F7763D]">
            <CiSquarePlus className="size-[24px] " />
            افزودن به سبد خرید
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductsCard;
