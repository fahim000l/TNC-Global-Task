import MealsCard from "@/components/home/MealsCard";
import useGetAllMeals from "@/hooks/useGetAllMeals";
import Main from "@/layouts/Main";
import { useEffect, useState } from "react";

export default function Home() {
  const { allMeals, mealsLoading } = useGetAllMeals();
  return (
    <Main>
      <div>
        <p className="lg:text-5xl text-xl font-bold mb-5">
          Our <span className="text-[steelblue]">Meals</span>{" "}
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-3">
          {mealsLoading
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((count: number) => (
                <div key={count} className="flex flex-col gap-4 w-52">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              ))
            : allMeals?.meals?.map((meal: any) => <MealsCard meal={meal} />)}
        </div>
      </div>
    </Main>
  );
}
