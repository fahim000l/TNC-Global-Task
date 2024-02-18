import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

interface props {
  category: any;
}

export default function SideCatCard({ category }: props) {
  //   width: 320,
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
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
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: "text.tertiary" }}
          >
            California, USA
          </Link>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: "none" }}
        >
          Cool weather all day long
        </Chip>
      </CardContent>
    </Card>
  );
}
