import Image from "next/image";
import fish from "@/public/fish.svg";
import cat from "@/public/cat.svg";
import dog from "@/public/dog.svg";
import { IoIosArrowBack } from "react-icons/io";

function SpecialOffer() {
  return (
    <div className="flex w-full h-[132px] bg-gradient-to-r to-[#3EA6DD] from-[#41BDFF] rounded-2xl mb-8 mt-16">
      <div className="flex items w-1/2">
        <p className="text-white font-semibold text-[30px]">
          دنیای عجیب حیوانات خانگی
        </p>
        <div className=" w-fit rounded-full bg-white p-2">
          <button className="flex items-center justify-center gap-3 text-main text-2xl font-semibold">
            محصولات ویژه
            <IoIosArrowBack className="text-white bg-main w-[40px] h-[40px] rounded-full" />
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-8 w-1/2 items-center">
        <Image alt="" src={fish} width={70} height={70} />
        <Image alt="" src={cat} width={70} height={70} />
        <Image alt="" src={dog} width={70} height={70} />
      </div>
    </div>
  );
}

export default SpecialOffer;
