import DrinksCard from "@/components/home/DrinksCard";
import useGetAllDrinks from "@/hooks/useGetAllDrinks";
import Main from "@/layouts/Main";
import React, { useEffect } from "react";

const drinksPage = () => {
  const { allDrinks } = useGetAllDrinks();

  return (
    <Main>
      <div>
        <p className="text-5xl font-bold mb-5">
          Our <span className="text-[steelblue]">Drinks</span>{" "}
        </p>
        hii
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-3">
          {allDrinks?.drinks?.map((drink: any) => (
            <DrinksCard key={drink?.idDrink} drink={drink} />
          ))}
        </div>
      </div>
    </Main>
  );
};

export default drinksPage;
