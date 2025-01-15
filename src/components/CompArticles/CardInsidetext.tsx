import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ICardInsideText } from "../../types/intefaces";
import { DarkOverlay } from "../../elements/CusComponets";

const CardInsidetext: FC<ICardInsideText> = ({
  cover,
  text,
  link,
  isBigImage,
}) => {
  const CusCardWrapper = styled(Box)({
    position: "relative",
    borderRadius: "0.5rem",
    margin: "0.75rem 0",

  });
  const CusCardTextBox = styled(Box)({
    position: "absolute",
    bottom: "10px",

    padding: "1rem",
    "& .CardText": {
      color: "#fff",
      fontWeight: "bold",
      lineHeight: 1.5,
      fontSize: isBigImage ? "2rem" : "1rem",
    },
  });

  return (
    <Link to={link}>
      <CusCardWrapper>
        <DarkOverlay />
        <img
          src={cover}
          alt=""
          style={{
            borderRadius: "1rem",
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
        <CusCardTextBox>
          <Typography className="CardText">{text}</Typography>
        </CusCardTextBox>
      </CusCardWrapper>
    </Link>
  );
};

export default CardInsidetext;
