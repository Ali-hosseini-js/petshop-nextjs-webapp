import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { FiPhoneCall } from "react-icons/fi";

function Footer() {
  return (
    <div className="flex justify-col items-end bg-[url('/image/bgFooter.png')] sm:h-[450px] sm:max-w-[1220px] bg-contain bg-no-repeat max-lg:bg-none">
      <div className="flex flex-col items-center justify-center divide-y-2 divide-dashed divide-main mx-auto  sm:max-w-[650px] sm:max-h-[350px] ">
        <div className="grid grid-cols-3 gap-10 w-full pb-20 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:">
          <div className="flex flex-col max-sm:w-[200px] max-sm:justify-center max-sm:items-center">
            <h4 className="text-[17px] font-semibold pb-3">دسترسی سریع</h4>
            <Link
              href="/about"
              className="text-[#666666] text-[18px] font-normal"
            >
              درباره ما
            </Link>
            <Link
              href="/call"
              className="text-[#666666] text-[18px] font-normal"
            >
              تماس با ما
            </Link>
            <Link
              href="/questions"
              className="text-[#666666] text-[18px] font-normal"
            >
              سوالات متداول
            </Link>
            <Link
              href="shopping"
              className="text-[#666666] text-[18px] font-normal"
            >
              پیگیری سفارشات
            </Link>
          </div>
          <div className="flex flex-col max-sm:w-[200px] max-sm:justify-center max-sm:items-center">
            <h4 className="text-[17px] font-semibold pb-3">لینک های مهم</h4>
            <Link
              href="/about"
              className="text-[#666666] text-[18px] font-normal"
            >
              حساب کاربری من
            </Link>
            <Link
              href="/call"
              className="text-[#666666] text-[18px] font-normal"
            >
              سبد خرید
            </Link>
            <Link
              href="/questions"
              className="text-[#666666] text-[18px] font-normal"
            >
              قوانین و مقررات
            </Link>
            <Link
              href="shopping"
              className="text-[#666666] text-[18px] font-normal"
            >
              سیاست حفظ حریم شخصی
            </Link>
          </div>
          <div className="max-sm:w-[200px] max-sm:justify-center max-sm:items-center">
            <Link className="flex gap-3 items-center" href="/">
              <Image alt="shapet" src={logo} width={50} height={50} />
              <p className="text-main font-semibold text-xl">فروشگاه شاپت</p>
            </Link>
            <p className="text-[#666666] text-[12px] py-2 max-sm:text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است،
            </p>
            <div className="flex items-center gap-3">
              <FiPhoneCall className="w-[20px] h-[24px]" />
              <p className="font-semibold text-[14px] text-nowrap">
                شماره تماس:
              </p>
              <p className="font-semibold text-[17px] text-main">
                {" "}
                ۰۹۱۷۱۲۳۴۵۶۷
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-10 py-auto h-full w-full">
          <p className="text-[18px] font-medium">
            تمامی حقوق این وبسایت برای{" "}
            <span className="text-main font-medium">شاپت</span> محفوظ می باشد.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
