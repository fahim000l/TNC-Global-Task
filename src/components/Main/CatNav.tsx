import React, { useState, useEffect } from "react";
import SideCatCard from "../home/SideCatCard";
import useGetCategories from "@/hooks/useGetCategories";

const CatNav = () => {
  const { categories } = useGetCategories();

  return (
    <div>
      <p className="text-[steelblue] mb-2 text-3xl font-bold">Categories</p>
      <div className="flex flex-col space-y-3">
        {categories?.categories?.map((category: any) => (
          <SideCatCard category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatNav;
