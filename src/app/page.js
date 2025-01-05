import Blog from "@/layout/Blog";
import Category from "@/layout/Category";
import DogCareCategory from "@/layout/DogCareCategory";
import Hero from "@/layout/Hero";
import List from "@/layout/List";
import Products from "@/layout/Products";
import SpecialCategory from "@/layout/SpecialCategory";
import SpecialOffer from "@/layout/SpecialOffer";

export default function Home() {
  return (
    <>
      <List />
      <Hero />
      <Category />
      <Products />
      <SpecialOffer />
      <SpecialCategory />
      <DogCareCategory />
      <Blog />
    </>
  );
}
