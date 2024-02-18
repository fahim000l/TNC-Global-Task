import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import { Button } from "@mui/material";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { AddShoppingCart } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";

interface props {
  meal: any;
}

export default function MealsCard({ meal }: props) {
  const { push } = useRouter();

  return (
    <Card sx={{ width: 200 }}>
      <div>
        <Typography level="title-lg">
          {meal?.strMeal?.length > 10
            ? meal?.strMeal?.slice(0, 10) + "..."
            : meal?.strMeal}
        </Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <AddShoppingCart />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src={meal?.strMealThumb} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent orientation="vertical">
        <div className="flex justify-center items-center space-x-2">
          <Typography level="body-xs">Price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${meal?.idMeal?.slice(0, 2)}
          </Typography>
        </div>
        <Button
          onClick={() => push(`/meal-details/${meal?.idMeal}`)}
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
