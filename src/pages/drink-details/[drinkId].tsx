import useGetDrinkById from "@/hooks/useGetDrinkById";
import Sub from "@/layouts/Sub";
import { useRouter } from "next/router";
import React from "react";

const drinkDetails = () => {
  const {
    query: { drinkId },
  } = useRouter();

  const { drinks, drinkLoading } = useGetDrinkById(drinkId as string);

  return (
    <Sub>
      {drinkLoading ? (
        <div className="flex items-center justify-center min-h-screen w-full">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="w-full">
          <img
            className="w-[80%] h-[350px] mx-auto rounded-lg mb-2"
            src={drinks?.drinks?.[0]?.strDrinkThumb}
            alt=""
          />

          <div className="divider lg:divider-horizontal my-5" />
          <div className="card bg-base-300 rounded-box p-5 flex flex-col space-y-2">
            <p className="lg:text-3xl font-bold">
              {drinks?.drinks?.[0]?.strDrink}
            </p>
            <p>
              Category :{" "}
              <span className="font-bold">
                {drinks?.drinks?.[0]?.strCategory}
              </span>{" "}
            </p>
            <p>
              Glass Type :{" "}
              <span className="font-bold">{drinks?.drinks?.[0]?.strGlass}</span>{" "}
            </p>
            <p>{drinks?.drinks?.[0]?.strInstructions}</p>
          </div>
        </div>
      )}
    </Sub>
  );
};

export default drinkDetails;
