import { useQuery } from "@tanstack/react-query";
import React from "react";

const useGetMealById = (mealId: string) => {
  const {
    data: meals,
    refetch: mealRefetch,
    isLoading: mealLoading,
  } = useQuery({
    queryKey: ["api/json/v1/1/lookup.php", mealId],
    queryFn: () => {
      if (mealId) {
        return fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        ).then((res) => res.json());
      } else {
        return [];
      }
    },
  });

  return { meals, mealRefetch, mealLoading };
};

export default useGetMealById;
