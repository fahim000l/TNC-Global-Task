import { useQuery } from "@tanstack/react-query";
import React from "react";

const useGetAllDrinks = () => {
  const {
    data: allDrinks,
    refetch: drinksRefetch,
    isLoading: drinksLoading,
  } = useQuery({
    queryKey: ["api/json/v1/1/search.php?s="],
    queryFn: () =>
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then(
        (res) => res.json()
      ),
  });

  return { allDrinks, drinksRefetch, drinksLoading };
};

export default useGetAllDrinks;
