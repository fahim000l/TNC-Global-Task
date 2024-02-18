import React from "react";
import SideCatCard from "../home/SideCatCard";
import useGetCategories from "@/hooks/useGetCategories";
import { Button } from "@mui/joy";
import Link from "next/link";

const CatNav = () => {
  const { categories } = useGetCategories();

  return (
    <div className="hidden lg:inline">
      <div className="mb-2 lg:flex hidden flex-col space-y-2">
        <p className="text-3xl font-bold">
          Meals <span className="text-[steelblue]">Categories</span>{" "}
        </p>
        <Link href={"/categories"}>
          <Button variant="outlined">Show All</Button>
        </Link>
      </div>
      <div className="flex flex-col space-y-3">
        {categories?.categories?.map((category: any) => (
          <SideCatCard key={category?.idCategory} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatNav;
