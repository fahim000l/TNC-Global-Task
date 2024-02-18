import { useQuery } from "@tanstack/react-query";
import React from "react";

const useGetCategories = () => {
  const {
    data: categories,
    refetch: categoriesRefetch,
    isLoading: categoriesLoading,
  } = useQuery({
    queryKey: ["api/json/v1/1/categories.php"],
    queryFn: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(
        (res) => res.json()
      ),
  });

  return { categories, categoriesRefetch, categoriesLoading };
};

export default useGetCategories;
