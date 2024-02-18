import MealsCard from "@/components/home/MealsCard";
import useGetAllMeals from "@/hooks/useGetAllMeals";
import Main from "@/layouts/Main";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";

export default function Home() {
  const { allMeals, mealsLoading } = useGetAllMeals();

  const [requiredMeals, setRequiredMeals] = useState<never[] | any[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (allMeals) {
      if (searchText) {
        setRequiredMeals(
          allMeals?.meals?.filter((meal: any) =>
            meal?.strMeal
              ?.toLocaleLowerCase()
              ?.includes(searchText?.toLocaleLowerCase())
          )
        );
      } else {
        setRequiredMeals(allMeals?.meals);
      }
    }
  }, [searchText, allMeals]);

  return (
    <Main>
      <div>
        <p className="lg:text-5xl text-xl font-bold mb-5">
          Our <span className="text-[steelblue]">Meals</span>{" "}
        </p>
        <TextField
          onChange={(e) => setSearchText(e.target.value)}
          variant="standard"
          size="small"
          fullWidth
          label={"Search meal by name"}
        />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 mt-2">
          {mealsLoading || !requiredMeals
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
}
