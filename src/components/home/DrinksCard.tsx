import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import { Button } from "@mui/material";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { AddShoppingCart, RemoveShoppingCart } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/app/features/cartSlice";
import { RootStateType } from "@/app/store";

interface props {
  drink: any;
}
// sx={{ width: 320 }}

export default function DrinksCard({ drink }: props) {
  const { push } = useRouter();

  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootStateType) => state.cart);

  return (
    <Card sx={{ width: [260, 200, 200] }}>
      <div>
        <Typography level="title-lg">{drink?.strDrink}</Typography>
        {cart?.includes(drink) ? (
          <IconButton
            aria-label="bookmark Bahamas Islands"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
            onClick={() => dispatch(removeFromCart(drink?.idDrink))}
          >
            <RemoveShoppingCart />
          </IconButton>
        ) : (
          <IconButton
            aria-label="bookmark Bahamas Islands"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
            onClick={() => dispatch(addToCart(drink))}
          >
            <AddShoppingCart />
          </IconButton>
        )}
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src={drink?.strDrinkThumb} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent orientation="vertical">
        <div className="flex justify-center items-center space-x-2">
          <Typography level="body-xs">Price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${drink?.idDrink?.slice(0, 2)}
          </Typography>
        </div>
        <Button
          onClick={() => push(`/drink-details/${drink?.idDrink}`)}
          variant="contained"
          size="small"
          className="bg-[steelblue] text-white hover:bg-[steelblue] hover:text-white"
        >
          Details
        </Button>
      </CardContent>
    </Card>
  );
}
