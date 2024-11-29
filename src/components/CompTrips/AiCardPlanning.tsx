import { Box, Typography } from "@mui/material";
import { FC } from "react";

import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import styled from "@emotion/styled";

const AiCardPlanning: FC<{ text: string; img: string }> = ({ text, img }) => {
  const CusCardText = styled(Typography)({
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.5rem",
    bottom: 10,
    position: "absolute",
    right: "20px",
  });

  const  CusIcon   =  styled(AutoAwesomeOutlinedIcon)({

   "&.MuiSvgIcon-root  "  :  {
      backgroundColor : "#F2ECF9"  , 
      borderRadius : "50%"  ,  
      fontSize : "2.5rem",
      padding : "0.5rem" ,  
      "& path" : {
        color : "#784AB1"
      }
   }
  })
  return (
    <Box sx={{ position: "relative", margin: "0  0.5rem", height: "100%"  }}>
      <img src={img} alt="" className="rounded-lg"  />
      <Box
    sx={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 70%)",
      zIndex: 0,
    }}
  />

      <Box sx={{ position: "absolute", left: 10, top: 10 }}>
        <CusIcon />
      </Box>
      <CusCardText>{text}</CusCardText>
    </Box>
  );
};

export default AiCardPlanning;
