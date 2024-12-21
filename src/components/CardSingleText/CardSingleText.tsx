import { FC } from "react";
import { ICardSingleTextProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { DarkOverlay } from "../../elements/CusComponets";
import { useMedia } from "../../context/MediaQueryContext";
import { Link } from "react-router-dom";

const CardSingleText: FC<ICardSingleTextProps> = ({
  TopCover,
  textBody,
  heightCard,
  link
}) => {
  const isXs = useMedia();
  const CusTPForCard = styled(Typography)({
    bottom: 0,
    position: "absolute",
    right: 0,
    color: "#fff",
    padding: "1rem",
    fontSize: isXs ? "0.90rem " : "1.3rem",
    fontWeight: isXs ? "light" : "bold",
  });
  return (
  <Link to={link  ?  link  :  "/"}>
        <Box margin={"0  0.25rem"}>
      <Box
        sx={{ position: "relative", height: heightCard ? heightCard : "100%" }}
      >
        <DarkOverlay />
        <img
          src={TopCover}
          alt=""
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: heightCard ? heightCard : "250px",
            borderRadius: "0.5rem",
          }}
        />
        <CusTPForCard>{textBody}</CusTPForCard>
      </Box>
    </Box>
  </Link>
  );
};

export default CardSingleText;
