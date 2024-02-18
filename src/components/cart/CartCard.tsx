import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Add, Remove, X } from "@mui/icons-material";
import { IconButton, Chip } from "@mui/material";
import { useDispatch } from "react-redux";
import { decrement, increment } from "@/app/features/cartSlice";

interface props {
  item: any;
}

export default function CartCard({ item }: props) {
  const dispatch = useDispatch();

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: "90%",
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img src={item?.strDrinkThumb || item?.strMealThumb} alt="" />
      </AspectRatio>
      <CardContent>
        <Typography level="title-lg" id="card-description">
          {item?.strDrink || item?.strMeal}
        </Typography>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
          Price : ${item?.idDrink?.slice(0, 2) || item?.idMeal?.slice(0, 2)}
        </Typography>
        <div className="flex justify-start space-x-3 items-center">
          <IconButton
            onClick={() => dispatch(increment(item?.productId))}
            size="small"
            className="bg-[steelblue] text-white"
          >
            <Add />
          </IconButton>
          <Chip label={item?.count} />
          <IconButton
            onClick={() => dispatch(decrement(item?.productId))}
            size="small"
            className="bg-[steelblue] text-white"
          >
            <Remove />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}
