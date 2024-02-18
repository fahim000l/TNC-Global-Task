import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { useRouter } from "next/router";

interface props {
  category: any;
}

export default function CategoryCard({ category }: props) {
  const { push } = useRouter();
  return (
    <div
      onClick={() => push(`/category/${category?.strCategory}`)}
      className="lg:transition lg:ease-in-out lg:delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:duration-300 cursor-pointer"
    >
      <Card sx={{ minHeight: "280px", width: [250, 200, 250] }}>
        <CardCover>
          <img src={category?.strCategoryThumb} loading="lazy" alt="" />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor="#fff">
            {category?.strCategory}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
