import { useQuery } from "@tanstack/react-query";

const useGetMealByCat = (categoryName: string) => {
  const {
    data: mealsByCat,
    refetch: mealsByCatRefetch,
    isLoading: mealsByCatLoading,
  } = useQuery({
    queryKey: ["api/json/v1/1/filter.php?c", categoryName],
    queryFn: () => {
      if (categoryName) {
        return fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        ).then((res) => res.json());
      } else return [];
    },
  });

  return { mealsByCat, mealsByCatRefetch, mealsByCatLoading };
};

export default useGetMealByCat;
