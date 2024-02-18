import useGetMealById from "@/hooks/useGetMealById";
import Sub from "@/layouts/Sub";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const mealDetails = () => {
  const {
    query: { mealId },
  } = useRouter();

  const { meals } = useGetMealById(mealId as string);
  const [ingredients, setIngredients] = useState<never[] | string[]>([]);

  return (
    <Sub>
      <div className="w-full">
        <img
          className="w-[80%] h-[350px] mx-auto rounded-lg mb-2"
          src={meals?.meals?.[0]?.strMealThumb}
          alt=""
        />

        <div className="divider lg:divider-horizontal my-5" />
        <div className="card bg-base-300 rounded-box p-5 flex flex-col space-y-2">
          <p className="lg:text-3xl font-bold">{meals?.meals?.[0]?.strMeal}</p>
          <p>
            Category :{" "}
            <span className="font-bold">{meals?.meals?.[0]?.strCategory}</span>{" "}
          </p>
          <p>
            Area :{" "}
            <span className="font-bold">{meals?.meals?.[0]?.strArea}</span>{" "}
          </p>
          <p>{meals?.meals?.[0]?.strInstructions}</p>
        </div>
      </div>
    </Sub>
  );
};

export default mealDetails;
