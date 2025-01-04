import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import search from "@/public/search.svg";
import tick from "@/public/Tick.svg";
import post from "@/public/post.svg";
import cart from "@/public/cart.svg";
import profile from "@/public/profile.svg";
import like from "@/public/like.svg";

function Header() {
  return (
    <div className="flex justify-between items-center my-6">
      <Link className="flex gap-3 items-center" href="/">
        <Image alt="shapet" src={logo} width={58} height={58} />
        <p className="text-main font-semibold text-2xl">شاپت</p>
      </Link>
      <div className="flex gap-3 rounded-full items-center bg-[#F2F2F2] w-full max-w-96 p-2">
        <input
          className="bg-inherit p-2 w-full"
          type="text"
          placeholder="محصول مورد نظر رو جستجو کنید ..."
        />
        <button className="rounded-full p-1 bg-[#5124C4]">
          {" "}
          <Image alt="search" src={search} width={26} height={26} />
        </button>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Image alt="ضمانت اصالت کالا" src={tick} width={38} height={38} />
        <div>
          <p className="font-semibold text-[15px]">ضمانت اصالت کالا</p>
          <p className="font-normal text-sm text-black/25">٪۱۰۰ تضمین اصالت</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Image alt="ارسال رایگان" src={post} width={38} height={38} />
        <div>
          <p className="font-semibold text-[15px]">ارسال رایگان</p>
          <p className="font-normal text-sm text-black/25">تمامی خرید ها</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/cart">
          <Image
            className="w-[46px] h-[40px]"
            alt="سبد خرید"
            src={cart}
            width={46}
            height={40}
          />
        </Link>
        <Link href="/like">
          <Image
            className="w-[46px] h-[40px]"
            alt="مورد علاقه ها"
            src={like}
            width={46}
            height={40}
          />
        </Link>
        <Link href="/profile">
          <Image
            className="w-[46px] h-[40px]"
            alt="پروفایل شخصی"
            src={profile}
            width={46}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
