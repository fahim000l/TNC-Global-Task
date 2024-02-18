import { Button, Stack } from "@mui/material";
import React from "react";
import { DinnerDining, LocalBar, ShoppingCart } from "@mui/icons-material";
import Link from "next/link";
import { Chip, Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { RootStateType } from "@/app/store";

const SideNav = () => {
  const { cart } = useSelector((state: RootStateType) => state.cart);

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
          startIcon={
            <Badge color="error" badgeContent={cart?.length}>
              <ShoppingCart />
            </Badge>
          }
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
