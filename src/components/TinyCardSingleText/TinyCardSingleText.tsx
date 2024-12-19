import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { DarkOverlay } from "../../elements/CusComponets";
import styled from "@emotion/styled";

const TinyCardSingleText: FC<{
  link: string;
  cover: string;
  text: string;
}> = ({ cover, link, text }) => {
  const CusTpCard = styled(Typography)({
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.5rem",
    bottom: 15,
    right: 10,
    position  :"absolute"
  });

  const CusCardWrapper = styled(Box)({
    position: "relative",
    // width : "100%" , 
    margin : "0  0.5rem"
  });

  return (
    <CusCardWrapper>
        <Link to={link}>
        <DarkOverlay />
        <img src={cover} alt="" style={{borderRadius : "1rem" ,  objectFit : "cover"  , width : "100%"}}   />
        <CusTpCard>{text}</CusTpCard>
    </Link>
      </CusCardWrapper>
  );
};
export default TinyCardSingleText;
