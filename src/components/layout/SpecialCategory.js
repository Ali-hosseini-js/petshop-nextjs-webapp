import Image from "next/image";
import baner1 from "@/public/image/specialBanner-1.png";
import baner2 from "@/public/image/specialBanner-2.png";
import baner3 from "@/public/image/specialBanner-3.png";
import baner4 from "@/public/image/specialBanner-4.png";
import Link from "next/link";

function SpecialCategory() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 pt-8 pb-16">
      <Link href="/category/dog/food">
        <Image
          className="w-auto h-auto"
          alt="انواع کنسرو برای سگ"
          src={baner1}
          width={400}
          height={550}
        />
      </Link>
      <Link href="/category/dog/food">
        <Image
          className="w-auto h-auto"
          alt="قرص و پودر های مولتیویتامین"
          src={baner2}
          width={290}
          height={415}
        />
      </Link>

      <Link href="/category/dog/food">
        <Image
          className="w-auto h-auto"
          alt="غذای سگ نژاد جونیور"
          src={baner3}
          width={290}
          height={415}
        />
      </Link>

      <Link href="/category/dog/food">
        <Image
          className="w-auto h-auto"
          alt="فروش انواع غذای خشک"
          src={baner4}
          width={290}
          height={415}
        />
      </Link>
    </div>
  );
}

export default SpecialCategory;
