import CategoryCard from "@/module/CategoryCard";
import fish from "@/public/fish.svg";
import cat from "@/public/cat.svg";
import dog from "@/public/dog.svg";

function Category() {
  return (
    <div className="flex justify-between mb-10 max-lg:flex-col max-lg:items-center max-lg:gap-10">
      <CategoryCard path="fish" image={fish} text="غذا ماهی" />
      <CategoryCard path="cat" image={cat} text="غذا و لوازم گربه" />
      <CategoryCard path="dog" image={dog} text="غذا و لوازم سگ" />
    </div>
  );
}

export default Category;
