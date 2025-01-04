import Category from "@/layout/Category";
import Hero from "@/layout/Hero";
import List from "@/layout/List";
import Products from "@/layout/Products";

export default function Home() {
  return (
    <>
      <List />
      <Hero />
      <Category />
      <Products />
      <div className=" h-[100px] bg-black">sgh</div>
    </>
  );
}
