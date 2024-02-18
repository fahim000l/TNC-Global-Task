import DrinksCard from "@/components/home/DrinksCard";
import useGetAllDrinks from "../../hooks/useGetAllDrinks";
import Main from "@/layouts/Main";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

const drinksPage = () => {
  const { allDrinks, drinksLoading } = useGetAllDrinks();
  const [requiredDrinks, setRequiredDrinks] = useState<never[] | any[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (allDrinks) {
      if (searchText) {
        setRequiredDrinks(
          allDrinks?.drinks?.filter((drink: any) =>
            drink?.strDrink
              ?.toLocaleLowerCase()
              ?.includes(searchText?.toLocaleLowerCase())
          )
        );
      } else {
        setRequiredDrinks(allDrinks?.drinks);
      }
    }
  }, [searchText, allDrinks]);

  return (
    <Main>
      <div>
        <p className="lg:text-5xl text-xl font-bold mb-5">
          Our <span className="text-[steelblue]">Drinks</span>{" "}
        </p>
        <TextField
          onChange={(e) => setSearchText(e.target.value)}
          variant="standard"
          size="small"
          fullWidth
          label={"Search drink by name"}
        />
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-3 mt-2">
          {drinksLoading || !requiredDrinks
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((count) => (
                <div key={count} className="flex flex-col gap-4 w-52">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              ))
            : requiredDrinks?.map((drink: any) => (
                <DrinksCard key={drink?.idDrink} drink={drink} />
              ))}
        </div>
      </div>
    </Main>
  );
};

export default drinksPage;
