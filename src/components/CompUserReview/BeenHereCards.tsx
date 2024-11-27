import { Box, Rating, Typography } from "@mui/material";
import { FC } from "react";
import { CusCircleIcon, CusCircleOutLine } from "../../elements/CusComponets";

import styled from "@emotion/styled";
interface BeenHereCardsProps {
  img: string;
  name: string;
  location: string;
}

const BeenHereCards: FC<BeenHereCardsProps> = ({ img, name, location }) => {
  const StyledRating = styled(Rating)({
    transform: "scaleX(-1)", // معکوس کردن محور X
    "& .MuiRating-icon": {
      transform: "scaleX(-1)", // برگرداندن آیکون‌ها به حالت عادی
    },  });
  return (
    <Box display={"flex"} gap={2} alignItems={"center"}>
      <img src={img} alt="" style={{ width: "70px", height: "70px" }} />
      <Box>
        <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
        <Typography sx={{margin : "0.10rem  0"}}>{location}</Typography>
        <Box display={"flex"}>
          <StyledRating
            defaultValue={2}
            // precision={0.5}
            icon={<CusCircleIcon fontSize="inherit" />}
            emptyIcon={<CusCircleOutLine fontSize="inherit" />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BeenHereCards;
