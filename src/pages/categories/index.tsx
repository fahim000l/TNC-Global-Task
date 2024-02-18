import CategoryCard from "@/components/categories/CategoryCard";
import useGetCategories from "@/hooks/useGetCategories";
import Sub from "@/layouts/Sub";
import React from "react";

const categoriesPage = () => {
  const { categories } = useGetCategories();

  return (
    <Sub>
      <div>
        <p className="text-5xl font-bold mb-5">
          Meal <span className="text-[steelblue]">Categories</span>{" "}
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-5 gap-3">
          {categories?.categories?.map((category: any) => (
            <CategoryCard category={category} key={category?.idCategory} />
          ))}
        </div>
      </div>
    </Sub>
  );
};

export default categoriesPage;
