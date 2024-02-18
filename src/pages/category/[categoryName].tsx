import MealsCard from "@/components/home/MealsCard";
import useGetMealByCat from "@/hooks/useGetMealByCat";
import Main from "@/layouts/Main";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

const categoryMeals = () => {
  const {
    query: { categoryName },
  } = useRouter();

  const { mealsByCat, mealsByCatLoading } = useGetMealByCat(
    categoryName as string
  );

  const [requiredMeals, setRequiredMeals] = useState<never[] | any[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (mealsByCat) {
      if (searchText) {
        setRequiredMeals(
          mealsByCat?.meals?.filter((meal: any) =>
            meal?.strMeal
              ?.toLocaleLowerCase()
              ?.includes(searchText?.toLocaleLowerCase())
          )
        );
      } else {
        setRequiredMeals(mealsByCat?.meals);
      }
    }
  }, [searchText, mealsByCat]);

  return (
    <Main>
      <div>
        <p className="lg:text-5xl text-xl font-bold mb-5">
          Meals of{" "}
          <span className="text-[steelblue]">{categoryName} category </span>{" "}
        </p>
        <TextField
          onChange={(e) => setSearchText(e.target.value)}
          variant="standard"
          size="small"
          fullWidth
          label={"Search meal by name"}
        />
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-3 mt-2">
          {mealsByCatLoading || !requiredMeals
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((count: number) => (
                <div key={count} className="flex flex-col gap-4 w-52">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              ))
            : requiredMeals?.map((meal: any) => <MealsCard meal={meal} />)}
        </div>
      </div>
    </Main>
  );
};

export default categoryMeals;
