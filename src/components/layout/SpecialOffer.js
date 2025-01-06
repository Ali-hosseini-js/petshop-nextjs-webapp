import Image from "next/image";
import fish from "@/public/fish.svg";
import cat from "@/public/cat.svg";
import dog from "@/public/dog.svg";
import { IoIosArrowBack } from "react-icons/io";

function SpecialOffer() {
  return (
    <div className="flex w-full h-[132px] bg-gradient-to-r to-[#3EA6DD] from-[#41BDFF] rounded-2xl mb-8 mt-16 px-5">
      <div className="flex items-center justify-center w-1/2 max-lg:w-full max-sm:flex-col gap-4">
        <p className="text-white text-nowrap font-semibold text-[30px]">
          دنیای عجیب حیوانات خانگی
        </p>
        <div className=" w-fit rounded-full bg-white p-2">
          <button className="flex items-center justify-center p-1 w-fit h-[30px] gap-3 text-nowrap text-main text-2xl font-semibold">
            محصولات ویژه
            <IoIosArrowBack className="text-white bg-main w-[30px] h-[30px] rounded-full" />
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-8 w-1/2 items-center max-lg:hidden">
        <Image alt="" src={fish} width={70} height={70} />
        <Image alt="" src={cat} width={70} height={70} />
        <Image alt="" src={dog} width={70} height={70} />
      </div>
    </div>
  );
}

export default SpecialOffer;
