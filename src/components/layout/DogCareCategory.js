import ProductsCard from "@/module/ProductsCard";
import { products } from "@/data/carring-products";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

function DogCareCategory() {
  return (
    <div className="flex justify-between pb-16 max-lg:flex-col max-lg:gap-10 max-lg:items-center">
      <div className="w-[360px] h-[780px] bg-[#A7CCFD54] rounded-xl -rotate-3 border-2 border-dashed border-[#A3C9FD] mx-5">
        <div className="w-[360px] h-[780px] bg-[url('/image/lavazemBanner.png')] rotate-3">
          <Link href="category/dog/carring" className="w-full h-full">
            <p className="flex flex-col items-center w-full h-full text-white text-[30px] font-semibold pt-[150px]">
              لوازم نگهداری سگ{" "}
              <span className="flex text-black font-semibold">
                مشاهده همه
                <IoIosArrowBack />
              </span>{" "}
            </p>
          </Link>
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-y-10 gap-x-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {products.map((item, index) => (
          <ProductsCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default DogCareCategory;
