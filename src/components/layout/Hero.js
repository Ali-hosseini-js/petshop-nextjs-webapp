import Image from "next/image";
import Link from "next/link";
import banner from "@/public/image/banner.png";

function Hero() {
  return (
    <Link href="/category/dog/food">
      <Image
        className="mb-10"
        alt="تخفیفات غذای سگ"
        src={banner}
        width={2000}
        height={1200}
      />
    </Link>
  );
}

export default Hero;
