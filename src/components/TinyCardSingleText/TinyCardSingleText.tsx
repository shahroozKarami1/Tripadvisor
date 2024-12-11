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
    margin: "0.5rem",
  });

  return (
    <Link to={link}>
      <CusCardWrapper>
        <DarkOverlay />
        <img src={cover} alt="" style={{borderRadius : "1rem"}} />
        <CusTpCard>{text}</CusTpCard>
      </CusCardWrapper>
    </Link>
  );
};
export default TinyCardSingleText;
