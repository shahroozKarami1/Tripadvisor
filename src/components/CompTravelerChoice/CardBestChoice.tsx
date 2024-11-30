import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const CardBestChoice: FC<{ text: string; cover: string ,  link : string }> = ({
  cover,
  text,
  link
}) => {
  const BoxOverLay = styled(Box)({
    position: "absolute",
    height: "100%",
    width: "100%",
     inset : 0  , 
     background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%)", 
    });

  return (
    <Link   to={link}>
        <Box sx={{ position: "relative"  ,  margin : "1.5rem  0" }}>
      <img src={cover} alt="" />
      <BoxOverLay />
      <Box sx={{ position: "absolute", right: 20, bottom: 20 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "3rem"  ,  color : "#fff" }}>
          {text}
        </Typography>
      </Box>
    </Box>
    </Link>
  );
};

export default CardBestChoice;
