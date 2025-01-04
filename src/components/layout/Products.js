import ProductsCard from "@/module/ProductsCard";
import Link from "next/link";

function Products() {
  return (
    <div className="gap-10">
      <div className="flex justify-between ">
        <p className="text-2xl font-semibold">جدیدترین محصولات</p>
        <Link
          href="/category/cat/foods"
          className="text-2xl font-semibold text-main"
        >
          مشاهده همه
        </Link>
      </div>
      <div className="py-8">
        <ProductsCard />
      </div>
    </div>
  );
}

export default Products;
