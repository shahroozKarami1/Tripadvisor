import styled from "@emotion/styled";
import {  Box, Button, Input, Typography } from "@mui/material";
import FirstBannerImg from "../../public/images/HomePage/FirstBanner.jpg";
import MainBanner from "/public/images/ThingsToDoPage/Banner.jpg";
import CircleIcon from "@mui/icons-material/Circle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { Opacity } from "@mui/icons-material";
export const CusMenuBtn = styled(Button)({
  backgroundColor: "transparent",
  color: `var(--dark-color)`,
  fontWeight: "bold",
  fontSize : "0.90rem"
});
export const CusTitleHomePage = styled(Typography)({
  fontSize: "3rem",
  fontWeight: "bolder",
  marginBottom: "1rem",
});
export const CusSearchInp = styled(Input)({
  border: 0,
  padding: "  0.75rem   1rem ",
  backgroundColor: "#fff",
  boxShadow: `var(--main-shadow)`,
  borderRadius: "2rem",
  width: "100%",
  "&.MuiInput-underline": {
    ":before": {
      display: "none",
    },
    "&.MuiInputBase-root" : {
      "::after" :  {
        display : "none"
      }
    }
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
  alignItems: "center",
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
  right: "10px",
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
  width  : "100vw" ,  
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
    fontSize: "1.2rem",

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

        height : "100%"  ,  
        width: "100%",
      }}
    />
  );
};
export const CusCardDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  // border: "1px  solid  #ccc",
  borderRadius: "1rem",
  height: "100%",
  backgroundColor: "#fff",
});

export const CusOutLineLinkBtn = styled(Button)({
  padding: "0",
  color: "var(--dark-color)",
  fontWeight: "bold",
  fontSize: "0.80rem",
  borderBottom: "1px  solid  var(--dark-color)",
});

export const CusAddBtn = styled(AddCircleOutlinedIcon)({
  fontSize: "2.2rem",
  cursor: "pointer",
});
export const CusRemoveBtn = styled(RemoveCircleOutlinedIcon)({
  fontSize: "2.2rem",
  "&.MuiSvgIcon-root  path": {
    color: `var(--gray-color)`,
    cursor: "pointer",
  },
});

export const CusBackOfSlider = styled(Box)({
  position: "absolute",
  width: "100%",
  top : -30 ,
  left : 30  ,   
  height: "100%",
  background: " #D9D3FB",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  zIndex: 0,
});

export const AiBtn = styled(Button)({
  backgroundColor: "#CEBEE5",
  color: "#000",
  fontWeight: "bold",
  borderRadius: "2rem",
  padding: "0.5rem  1em",
  fontSize: "0.80rem",
  marginLeft: "0.5rem",
});

export const BetaText = styled(Typography)({
  fontSize: "0.7rem",
  fontWeight: "bold",
  backgroundColor: "#CEBEE5",
  padding: "0.35rem",
  borderRadius: "0.25rem",
});

export const CusYellowCard = styled(Box)({
  position: "relative",
  margin: "0   0.2rem",
  direction: "rtl",
  backgroundColor: "#FFF7E1",
  padding: "0.80rem",
  borderRadius: "1rem",
});


export  const CusSearchCard = styled (Box) ({
 backgroundColor  : "#fff"   ,
 borderRadius  : "0.5rem"    , 
 overflow : "hidden"  ,  
 margin : "2rem  0 " , 
 boxShadow :"var(--main-shadow)" ,  
   ":hover" : {
    "& .titleHover" : {
      transition : "all  0.25s  ease"  ,  
      opacity : 0.5  , 
      borderBottom : "1px  solid  #444"
    }
   }
})