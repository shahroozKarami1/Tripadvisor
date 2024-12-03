import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import WhiteBtnColor from "../WhiteBtnColor/WhiteBtnColor";
import { DarkOverlay } from "../../elements/CusComponets";



const CardSlider: FC<{ poster: string; title: string; disc: string }> = ({
  disc,
  poster,
  title,
}) => {
  const CusPosterSlider = styled(Box)({
    background: `url(${poster})`,
    height: "70vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: "4rem",
    position: "relative",
  });

  return (
    <CusPosterSlider>
      <DarkOverlay />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        zIndex={99}
        gap={2}
      >
        <Typography
          sx={{ color: "#fff", fontWeight: "bold", fontSize: "2.5rem" }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontWeight: "light", color: "#fff", fontSize: "1rem" }}
        >
          {disc}
        </Typography>
        <WhiteBtnColor title="بیشتر بخوانید" />
      </Box>
    </CusPosterSlider>
  );
};

export default CardSlider;
