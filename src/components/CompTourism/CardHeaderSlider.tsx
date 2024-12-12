import { FC } from "react";
import { ICardHeaderSliderProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { CusCircleIcon, CusCircleOutLine, DarkOverlay } from "../../elements/CusComponets";
import FadeSlider from "../CompTravelerChoiceHotel/FadeSlider";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const CardHeaderSlider: FC<ICardHeaderSliderProps> = ({
  conutOfLike,
  footerCard,
  link,
  cover,
  title,
}) => {
  const CusCardHeaderSliderWrapper = styled(Box)({
    position: "relative",
    margin : " 0.5rem"
  });
  const CusLikeIcon = styled(Box)({
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "#fff",
    borderRadius: "1rem",
    padding: "0.25rem",
  });
  return (
    <Link to={link}>
      <CusCardHeaderSliderWrapper>

        <Box>
          <FadeSlider>
            {cover.map(({ id, imgSrc }) => {
                return (
                    <Box key={id}  height={"300px"}>
                              <DarkOverlay />

                  <img src={imgSrc} alt="" className="rounded-lg   w-full  h-full  object-cover object-center  " />
                  <CusLikeIcon>
                    <FavoriteBorderOutlinedIcon />
                  </CusLikeIcon>
                </Box>
              );
            })}
            
          </FadeSlider>
          <Box
            marginTop={"1rem"}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
          >
            <Typography sx={{ fontWeight: "bold"  ,  fontSize : "1.1rem"}}>{title}</Typography>
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <Box display={"flex"}>
                <CusCircleIcon />
                <CusCircleIcon />
                <CusCircleIcon />
                <CusCircleIcon />
                <CusCircleOutLine />
              </Box>
              <Typography sx={{ color: "#444", fontSize: "0.80rem" }}>
                {conutOfLike}
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
              {footerCard}
            </Typography>
          </Box>
        </Box>
      </CusCardHeaderSliderWrapper>
    </Link>
  );
};

export default CardHeaderSlider;
