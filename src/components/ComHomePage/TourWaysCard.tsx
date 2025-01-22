import { FC } from "react";
import { ITourWaysCardProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  CusBoxIconHeart,
} from "../../elements/CusComponets";
import { Link } from "react-router-dom";
import CircleRate from "../CircleRate/CircleRate";
const TourWaysCard: FC<ITourWaysCardProps> = ({
  disc,
  img,
  price,
  score,
  isDetails,
  link,
}) => {
  return (
    <Box sx={{ direction: "rtl" }}>
      <Link to={link ? link : "/"}>
        <Box sx={{ position: "relative", margin: "0 0.5rem" }}>
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
        <Box sx={{ marginRight: "0.70rem", padding: "0.5rem 0 " }}>
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

          {/* <Box display={"flex"} alignItems={"center"} gap={1}>
            <Rating
              sx={{ direction: "ltr", transform: "rotate(-180deg)" }}
              readOnly
              value={2.3}
              precision={0.25}
              emptyIcon={<CusCircleOutLine />}
              icon={<CusCircleIcon />}
            />
            <Typography sx={{ color: "#444" }}>{score}</Typography>
          </Box> */}
          <CircleRate isScoreText={true} scoreNum={2.3} scoreText={score} />

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
