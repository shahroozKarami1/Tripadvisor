import { FC } from "react";
import { ICardYellowBackProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
  CusCircleIcon,
  CusCircleOutLine,
  CusYellowCard,
} from "../../elements/CusComponets";
import YellowBtn from "../CompArticleDetails/YellowBtn";

const CardYellowBack: FC<ICardYellowBackProps> = ({
  CardPrice,
  TypeOfCard,
  coutOfLike,
  coverCard,
  title,
}) => {
  return (
    <CusYellowCard>
      <Box sx={{ height: "250px" }}>
        <img
          src={coverCard}
          alt=""
          style={{
            borderRadius: "0.5rem",
            objectFit: "cover",
            height: "100%",
            width: "100%",
            objectPosition: "center",
          }}
        />
        <Box sx={{ position: "absolute", top: 20, right: 20 }}>
          <FavoriteBorderOutlinedIcon
            sx={{
              bgcolor: "#fff",
              borderRadius: "50%",
              fontSize: "2rem",
              padding: "0.25rem",
            }}
          />
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography
          sx={{
            fontWeight: "bold",
            padding: "0.75rem  0",
            fontSize: "0.90rem",
          }}
        >
          {title}
        </Typography>
        <Box display={"flex"} gap={1}>
          <Box display={"flex"}>
            <CusCircleIcon />
            <CusCircleIcon />
            <CusCircleIcon />
            <CusCircleIcon />
            <CusCircleOutLine />
          </Box>
          <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
            {coutOfLike}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "0.90rem", color: "#000" }}>
          {TypeOfCard}
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"flex-end"}
        >
          <Box
            marginTop={"2rem"}
            gap={1}
            display={"flex"}
            flexDirection={"column"}
          >
            <Typography sx={{ fontSize: "0.70rem" }}>از</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              {CardPrice} میلیون تومان
            </Typography>
            <Typography sx={{ fontSize: "0.70rem" }}>
              به ازای هر بزرگسال
            </Typography>
          </Box>
          <YellowBtn link="/" text="رزرو کنید" />
        </Box>
      </Box>
    </CusYellowCard>
  );
};

export default CardYellowBack;
