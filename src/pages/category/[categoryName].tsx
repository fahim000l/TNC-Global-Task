import MealsCard from "@/components/home/MealsCard";
import useGetMealByCat from "@/hooks/useGetMealByCat";
import Main from "@/layouts/Main";
import { useRouter } from "next/router";
import React from "react";

const categoryMeals = () => {
  const {
    query: { categoryName },
  } = useRouter();

  const { mealsByCat } = useGetMealByCat(categoryName as string);

  return (
    <Main>
      <div>
        <p className="text-5xl font-bold mb-5">
          Meals of{" "}
          <span className="text-[steelblue]">{categoryName} category </span>{" "}
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-3">
          {mealsByCat?.meals?.map((meal: any) => (
            <MealsCard meal={meal} />
          ))}
        </div>
      </div>
    </Main>
  );
};

export default categoryMeals;
