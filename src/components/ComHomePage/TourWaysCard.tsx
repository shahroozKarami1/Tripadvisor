import { FC } from "react";
import { ITourWaysCardProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CusBoxIconHeart, CusCircleIcon } from "../../elements/CusComponets";
import { Link } from "react-router-dom";
const TourWaysCard: FC<ITourWaysCardProps> = ({
  disc,
  img,
  price,
  score,
  isDetails,
}) => {

  return (
    <Box  sx={{direction :"rtl"}}>
 <Link  to={"/"}>
 <Box sx={{ position: "relative" ,  margin : "0 0.70rem" }}>
        <img
          src={img}
          alt=""
          className="rounded-lg  "
          style={{
            height: "255px",
            width: "100%",
          }}
        />
        <CusBoxIconHeart>
          <FavoriteBorderIcon />
        </CusBoxIconHeart>
      </Box>
      <Box  sx={{marginRight :"0.70rem"}}>
        <Typography
          sx={{
            fontSize: "0.90rem",
            fontWeight: "bold",
            margin: "0.25rem  0",
            lineHeight: 2,
          }}
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
        {isDetails && (
          <Typography sx={{ fontWeight: "bold", fontSize: "0.80rem" }}>
            از {price} دلار برای هر بزرگسال
          </Typography>
        )}
      </Box>
 
 </Link>
    </Box>
  );
};

export default TourWaysCard;
