import ProductsCard from "@/module/ProductsCard";
import Link from "next/link";
import { foods } from "@/data/food-products";

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
      <div className="flex flex-wrap justify-center gap-10 py-8">
        {foods.map((item, index) => (
          <ProductsCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
