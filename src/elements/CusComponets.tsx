import styled from "@emotion/styled";
import { Box, Button, Input, Typography } from "@mui/material";
import FirstBannerImg from "../../public/images/HomePage/FirstBanner.jpg";
import MainBanner from "/public/images/ThingsToDoPage/Banner.jpg";
import CircleIcon from "@mui/icons-material/Circle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

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
  backgroundColor: "#fff",
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
  justifyContent: "space-between",
  width: "100%",
  gap: 4,
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
  left: "10px",
  backgroundColor: "#fff",
  borderRadius: "50%",
  padding: "0.5rem",
});

export const CusCard = styled(Box)({
  position: "relative",
  overflow: "hidden",
  margin: "0  0.5rem",
  direction: "rtl",
});
export const CusStickyMenu = styled(Box)({
  backgroundColor: "#fff",
  position: "sticky",
  display: "block",
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

export const CusReviewCard = styled(Box)({
  backgroundColor: `#fff`,
  borderRadius: "0.75rem",
  padding: "1.2rem",
  border: "1px  solid  #ccc",
});

export const CusCircleIcon = styled(CircleIcon)({
  "&.MuiSvgIcon-root": {
    fill: `var(--primary-color)`,
    fontSize: "1.2rem",
  },
});

export const CusInput = styled(Input)({
  border: "1px solid #000",
  borderRadius: "2rem",
  padding: "0.70rem",
  width: "100%",

  "&.MuiInputBase-root::before": {
    display: "none !important",
  },
  "&.MuiInputBase-root::after": { border: 0, display: "none !important" },
  "&.MuiInputAdornment-root": {
    "& ::after": {
      display: "none",
    },
  },
});
export const CusTravelerBox = styled(Box)({
  backgroundColor: "#fff",
  boxShadow: `var(--main-shadow)`,
  width: "400px",
  borderRadius: "0.5rem",
  marginTop: "1rem",
  padding: "1rem",
  position: "absolute",
  zIndex: 99,
});

export const CusCardDeals = styled(Box)({
  backgroundColor: "#fff",
  padding: "1rem",
  borderRadius: "0.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "1rem",
});

export const CusCircleOutLine = styled(PanoramaFishEyeIcon)({
  "&.MuiSvgIcon-root": {
    // transition: "all  0.25s  ease ",
    // padding: 0,
    // ":hover": {
    //   borderRadius: "50%",
    //   backgroundColor: `var(--primary-color)`,
    //   border: 0,
    // },
    fontSize: "2rem",
    fill: `var(--primary-color)`,
  },
});
export const CusStartAndBuildCardTrip = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "5rem ",
  borderRadius: "1rem",

  height: "100%",
});

export const DarkOverlay = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 50%)",
        zIndex: 0,
        borderRadius: "0.5rem",
 
      }}
    />
  );
};
