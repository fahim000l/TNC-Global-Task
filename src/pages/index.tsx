import MealsCard from "@/components/home/MealsCard";
import Main from "@/layouts/Main";
import { useEffect, useState } from "react";

export default function Home() {
  const [meals, setMeals] = useState<never[] | any[]>([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => setMeals(data?.meals));
  }, []);

  return (
    <Main>
      <div>
        <p className="text-5xl font-bold mb-5">
          Our <span className="text-[steelblue]">Meals</span>{" "}
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-3">
          {meals?.map((meal: any) => (
            <MealsCard meal={meal} />
          ))}
        </div>
      </div>
    </Main>
  );
}
