import { Box } from "@mui/material";
import { FC } from "react";

const CardSliderImg: FC<{ img: string }> = ({ img }) => {
  return (
    <Box  sx={{height  : "350px"  ,  width : "100%"}}>
      <img
        src={img}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          height: "100%",
          width: "100%",
        }}
      />
    </Box>
  );
};

export default CardSliderImg;
