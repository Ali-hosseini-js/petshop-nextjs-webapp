import Category from "@/layout/Category";
import Hero from "@/layout/Hero";
import List from "@/layout/List";
import Products from "@/layout/Products";
import SpecialOffer from "@/layout/SpecialOffer";

export default function Home() {
  return (
    <>
      <List />
      <Hero />
      <Category />
      <Products />
      <SpecialOffer />
      <div className=" h-[100px] bg-black">sgh</div>
    </>
  );
}
