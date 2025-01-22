import { FC } from "react";
import { ICardSliderProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { DarkOverlay } from "../../elements/CusComponets";

const CardSlider: FC<ICardSliderProps> = ({
  count,
  coverImg,
  isMainImg,
  title,
}) => {
  const CusSmallImgBox = styled(Box)({
    position: "relative",
    margin: "0.5rem 0",
    width: "100%",
    height: "100%",
  });
  const CusInnerBox = styled(Box)({
    position: "absolute",
    bottom: 0,
    padding: "0.5rem",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  });
  const CusInnerBigBox = styled(Box)({
    width: "100%",
    height: "400px",
  });
  return (
    <Box>
      {!isMainImg ? (
        <CusSmallImgBox>
          <DarkOverlay />
          <img src={coverImg} alt="" className="rounded-r-md" />
          <CusInnerBox>
            <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
              {title}
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
              {count}
            </Typography>
          </CusInnerBox>
        </CusSmallImgBox>
      ) : (
        <CusInnerBigBox>
          <img
            src={coverImg}
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
              borderTopLeftRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
          />
        </CusInnerBigBox>
      )}
    </Box>
  );
};

export default CardSlider;
