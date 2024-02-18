import { Button, Stack } from "@mui/material";
import React from "react";
import { DinnerDining, LocalBar, ShoppingCart } from "@mui/icons-material";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className="w-[10%] lg:flex hidden flex-col space-y-2 justify-start pl-2">
      <Link href={"/"}>
        <Button
          startIcon={<DinnerDining />}
          variant="contained"
          className="bg-[steelblue] hover:bg-white hover:text-black w-full"
        >
          Meals
        </Button>
      </Link>
      <Link href={"/drinks"}>
        <Button
          startIcon={<LocalBar />}
          variant="contained"
          className="bg-[steelblue] hover:bg-white hover:text-black w-full"
        >
          Drinks
        </Button>
      </Link>
      <Link href={"/cart"}>
        <Button
          startIcon={<ShoppingCart />}
          variant="contained"
          className="bg-[steelblue] hover:bg-white hover:text-black w-full"
        >
          Cart
        </Button>
      </Link>
    </div>
  );
};

export default SideNav;
