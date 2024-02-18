import { useQuery } from "@tanstack/react-query";
import React from "react";

const useGetDrinkById = (drinkId: string) => {
  const {
    data: drinks,
    refetch: drinkRefetch,
    isLoading: drinkLoading,
  } = useQuery({
    queryKey: ["api/json/v1/1/lookup.php", drinkId],
    queryFn: () => {
      if (drinkId) {
        return fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
        ).then((res) => res.json());
      } else {
        return [];
      }
    },
  });

  return { drinks, drinkRefetch, drinkLoading };
};

export default useGetDrinkById;
