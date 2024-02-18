import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import { Button } from "@mui/material";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

interface props {
  drink: any;
}
// sx={{ width: 320 }}

export default function DrinksCard({ drink }: props) {
  console.log(drink);

  return (
    <Card>
      <div>
        <Typography level="title-lg">{drink?.strDrink}</Typography>
        <Typography level="body-sm">April 24 to May 02, 2021</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <BookmarkAdd />
        </IconButton>
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
