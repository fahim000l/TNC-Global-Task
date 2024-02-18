import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import { useRouter } from "next/router";

interface props {
  category: any;
}

export default function SideCatCard({ category }: props) {
  //   width: 320,

  const { push } = useRouter();
  return (
    <Card
      onClick={() => push(`/category/${category?.strCategory}`)}
      variant="outlined"
      orientation="horizontal"
      className="cursor-pointer"
      sx={{
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img src={category?.strCategoryThumb} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent>
        <Typography level="title-lg" id="card-description">
          {category?.strCategory}
        </Typography>
      </CardContent>
    </Card>
  );
}
