import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  DinnerDining,
  LocalBar,
  ShoppingCart,
  Category,
} from "@mui/icons-material";
import { useRouter } from "next/router";

export default function BottomNav() {
  const { push } = useRouter();
  return (
    <Box className="lg:hidden sticky bottom-0 z-[500]">
      <BottomNavigation showLabels className="bg-[steelblue]">
        <BottomNavigationAction
          className="text-white"
          label="Meals"
          icon={<DinnerDining />}
          onClick={() => push("/")}
        />
        <BottomNavigationAction
          className="text-white"
          label="Drinks"
          icon={<LocalBar />}
          onClick={() => push("/drinks")}
        />
        <BottomNavigationAction
          className="text-white"
          label="Category"
          icon={<Category />}
          onClick={() => push("/categories")}
        />
        <BottomNavigationAction
          className="text-white"
          label="Cart"
          icon={<ShoppingCart />}
          onClick={() => push("/cart")}
        />
      </BottomNavigation>
    </Box>
  );
}
