import { Box } from "@mui/material";
import React from "react";
import BestFoodsCard from "./BestFoodsCard";

const TheBestFoodSection = () => {
  return (
    <Box display={"flex"}  gap={2} sx={{marginTop :"2rem"}}>
      <BestFoodsCard
        img="/public/images/TheBastFood/image1.jpg"
        name="ماکارونی"
      />
      <BestFoodsCard
        img="/public/images/TheBastFood/image2.jpg"
        name="ماکارونی"
      />
      <BestFoodsCard
        img="/public/images/TheBastFood/image3.jpg"
        name="ماکارونی"
      />
      <BestFoodsCard
        img="/public/images/TheBastFood/image4.jpg"
        name="ماکارونی"
      />
    </Box>
  );
};

export default TheBestFoodSection;
