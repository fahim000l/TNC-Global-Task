import DrinksCard from "@/components/home/DrinksCard";
import useGetAllDrinks from "../../hooks/useGetAllDrinks";
import Main from "@/layouts/Main";
import React, { useEffect } from "react";

const drinksPage = () => {
  const { allDrinks, drinksLoading } = useGetAllDrinks();

  return (
    <Main>
      <div>
        <p className="lg:text-5xl text-xl font-bold mb-5">
          Our <span className="text-[steelblue]">Drinks</span>{" "}
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-3">
          {drinksLoading
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((count) => (
                <div key={count} className="flex flex-col gap-4 w-52">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              ))
            : allDrinks?.drinks?.map((drink: any) => (
                <DrinksCard key={drink?.idDrink} drink={drink} />
              ))}
        </div>
      </div>
    </Main>
  );
};

export default drinksPage;
