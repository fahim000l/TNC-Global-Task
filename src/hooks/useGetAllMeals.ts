import { useQuery } from "@tanstack/react-query";
import React from "react";

const useGetAllMeals = () => {
  const {
    data: allMeals = [],
    refetch: mealsRefetch,
    isLoading: mealsLoading,
  } = useQuery({
    queryKey: ["api/json/v1/1/search.php"],
    queryFn: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=").then(
        (res) => res.json()
      ),
  });

  return { allMeals, mealsRefetch, mealsLoading };
};

export default useGetAllMeals;
