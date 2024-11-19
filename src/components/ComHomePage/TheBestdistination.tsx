import { Box } from "@mui/material";
import React from "react";
import DistinationCard from "./DistinationCard";

const TheBestdistination = () => {
  return (
    <Box  display={"flex"} gap={2 }  sx={{marginTop : "2rem"}}>
      <DistinationCard  img="/public/images/TheBestDistination/image1.jpg"  item={30} name="شهروز کرمی"  title="3 روز خانوادگی در رم"/>
      <DistinationCard  img="/public/images/TheBestDistination/image2.jpg"  item={30} name="رضا فاطمی"  title="3 روز خانوادگی در رم"/>
      <DistinationCard  img="/public/images/TheBestDistination/image3.jpg"  item={30} name="سعید احمدی"  title="3 روز خانوادگی در رم"/>
    </Box>
  );
};

export default TheBestdistination;
