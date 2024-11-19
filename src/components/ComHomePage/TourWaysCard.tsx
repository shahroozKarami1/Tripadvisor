import { FC } from "react";
import { ITourWaysCardProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import styled from "@emotion/styled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CusBoxIconHeart } from "../../elements/CusComponets";
const TourWaysCard: FC<ITourWaysCardProps> = ({ disc, img, price, score }) => {
  const CusCircleIcon = styled(CircleIcon)({
    width: "17px",
    fill: `var(--primary-color)`,
  });

  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <img src={img} alt="" className="rounded-lg" />
        <CusBoxIconHeart>
          <FavoriteBorderIcon />
        </CusBoxIconHeart>
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: "1rem", fontWeight: "bold", margin: "0.25rem  0" }}
        >
          {disc}
        </Typography>
        <Box display={"flex"} sx={{ margin: "0.5rem  0" }}>
          <CusCircleIcon />
          <CusCircleIcon />
          <CusCircleIcon />
          <CusCircleIcon />
          <Typography sx={{ marginRight: "0.25rem" }}>{score}</Typography>
        </Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "0.80rem" }}>
          از {price} دلار برای هر بزرگسال
        </Typography>
      </Box>
    </Box>
  );
};

export default TourWaysCard;
