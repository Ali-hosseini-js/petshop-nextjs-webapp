import { FiPhoneCall } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

function List() {
  return (
    <div className="flex justify-between max-md:justify-center mx-auto my-10">
      <div>
        <ul className="flex gap-8 text-nowrap">
          <li className="flex gap-1 items-center text-[22px] hover:text-main cursor-pointer">
            خانه
            <IoIosArrowDown />
          </li>
          <li className="flex gap-1 items-center text-[22px] hover:text-main cursor-pointer">
            فروشگاه
            <IoIosArrowDown />
          </li>
          <li className="text-[22px] hover:text-main cursor-pointer">
            <Link href="/blog"> وبلاگ</Link>
          </li>
          <li className="text-[22px] hover:text-main cursor-pointer">
            <Link href="/call"> تماس با ما</Link>
          </li>
          <li className="text-[22px] hover:text-main cursor-pointer">
            <Link href="/about"> درباره ما</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3 max-md:hidden">
        <FiPhoneCall className="w-[24px] h-[29px]" />
        <p className="font-semibold text-[22px]">شماره تماس:</p>
        <p className="font-semibold text-[22px] text-main"> ۰۹۱۷۱۲۳۴۵۶۷</p>
      </div>
    </div>
  );
}

export default List;
