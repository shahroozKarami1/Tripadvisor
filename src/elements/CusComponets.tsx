import styled from "@emotion/styled";
import { Box, Button, Input, Typography } from "@mui/material";
import FirstBannerImg from "../../public/images/HomePage/FirstBanner.jpg";
import MainBanner from "/public/images/ThingsToDoPage/Banner.jpg";

export const CusMenuBtn = styled(Button)({
  backgroundColor: "transparent",
  color: `var(--dark-color)`,
  fontWeight: "bold",
});
export const CusTitleHomePage = styled(Typography)({
  fontSize: "3rem",
  fontWeight: "bolder",
  marginBottom: "1rem",
});
export const CusSearchInp = styled(Input)({
  border: 0,
  padding: "0.5rem",
  backgroundColor  : "#fff" ,  
  boxShadow: `var(--main-shadow)`,
  borderRadius: "2rem",
  width: "100%",
  "&.MuiInput-underline": {
    ":before": {
      display: "none",
    },
  },
});
export const CusSearchBtn = styled(Button)({
  whiteSpace: "nowrap",
  backgroundColor: `var(--primary-color)`,
  borderRadius: "2rem",
  color: "#000",
  padding: "0.5rem  1.2rem",
  fontWeight: "bold",
  marginLeft: "0.5rem",
});
export const CusFirstBanner = styled(Box)({
  backgroundImage: `url(${FirstBannerImg})`,
  height: "500px",
  backgroundPosition: "right",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  marginTop: "4rem",
  borderRadius: "0.25rem",
  position: "relative",
});

export const CusSectionTitle = styled(Box)({
  marginTop: "3rem ",
  display: "flex",
  gap: 4,
  flexDirection: "column",
});
export const CusTPSimpleCard = styled(Typography)({
  position: "absolute",
  bottom: "2px",
  padding: "0.25rem 0.5rem",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#fff",
  width: "100%",
  boxShadow: " inset  -3px -20px 25px 2px rgba(0, 0, 0, 0.45)",
});

export const CusBoxIconHeart = styled(Box)({
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "#fff",
  borderRadius: "50%",
  padding: "0.5rem",
});

export const CusCard = styled(Box)({
  position: "relative",
  overflow: "hidden",
});
export const CusStickyMenu = styled(Box)({
  backgroundColor: "#fff",
  position: "sticky",
  top: 0,
  zIndex: 999,
  padding: "0.5rem  0",
});
export const CusThingsToDoPage = styled(Box)({
  background: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${MainBanner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "70vh",
  width: "100vw",
});
