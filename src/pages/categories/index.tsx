import CategoryCard from "@/components/categories/CategoryCard";
import useGetCategories from "@/hooks/useGetCategories";
import Sub from "@/layouts/Sub";
import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

const categoriesPage = () => {
  const { categories, categoriesLoading } = useGetCategories();

  const [requiredCategories, setRequiredCategories] = useState<never[] | any[]>(
    []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (categories) {
      if (searchText) {
        setRequiredCategories(
          categories?.categories?.filter((category: any) =>
            category?.strCategory
              ?.toLocaleLowerCase()
              ?.includes(searchText?.toLocaleLowerCase())
          )
        );
      } else {
        setRequiredCategories(categories?.categories);
      }
    }
  }, [searchText, categories]);

  return (
    <Sub>
      <div>
        <p className="lg:text-5xl text-xl font-bold mb-5">
          Meal <span className="text-[steelblue]">Categories</span>{" "}
        </p>
        <TextField
          onChange={(e) => setSearchText(e.target.value)}
          variant="standard"
          size="small"
          fullWidth
          label={"Search category by name"}
        />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-5 gap-3 mt-5 px-auto">
          {categoriesLoading || !requiredCategories
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((count: number) => (
                <div key={count} className="skeleton w-52 h-52"></div>
              ))
            : requiredCategories?.map((category: any) => (
                <CategoryCard category={category} key={category?.idCategory} />
              ))}
        </div>
      </div>
    </Sub>
  );
};

export default categoriesPage;
