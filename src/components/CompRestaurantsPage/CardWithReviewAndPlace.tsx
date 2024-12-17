import { FC } from "react";
import { ICardWithReviewAndPlaceProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { CusCircleIcon } from "../../elements/CusComponets";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const CardWithReviewAndPlace: FC<ICardWithReviewAndPlaceProps> = ({
  countOfReviews,
  textPlace,
  titleCard,
  cardCover,
  link,
}) => {
  const CusCardWrapper = styled(Box)({
    position: "relative",
    margin: "0.25rem  0.5rem",
    height: "230px",
  });

  return (
    <Link to={link}>
      <CusCardWrapper>
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
        <img
          src={cardCover}
          alt=""
          style={{
            borderRadius: "0.25rem",
            objectFit: "cover",
            objectPosition: "center",
            height: "100%",
            width: "100%",
          }}
        />
      </CusCardWrapper>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        sx={{ margin: " 0.5rem", direction: "rtl" }}
      >
        <Typography>{titleCard}</Typography>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Box display={"flex"} alignItems={"center"}>
            <CusCircleIcon />
            <CusCircleIcon />
            <CusCircleIcon />
            <CusCircleIcon />
            <CusCircleIcon />
          </Box>
          <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
            {countOfReviews}دیدگاه
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
          {textPlace}
        </Typography>
      </Box>
    </Link>
  );
};

export default CardWithReviewAndPlace;
