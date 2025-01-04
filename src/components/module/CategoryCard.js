import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

function CategoryCard({ path, image, text }) {
  return (
    <Link
      className="group py-3 px-6 bg-[#E0F5FF4F] hover:bg-[#F7763D21] hover:border-2  hover:border-dashed hover:border-[#F7763D] rounded-xl w-full max-w-[380px]"
      href={`/category/${path}`}
    >
      <div className="flex items-center justify-between gap-5 ">
        <div className="flex items-center gap-5">
          <Image
            className="w-[90px] h-[90px]"
            alt="دسته بندی حیوانات"
            src={image}
            width={50}
            height={50}
          />
          <p className="font-semibold text-xl">{text}</p>
        </div>
        <div className=" rounded-full bg-[#519BC2] p-1 w-fit group-hover:bg-[#F7763D]">
          <IoIosArrowBack className="text-white w-[40px] h-[40px]" />
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
