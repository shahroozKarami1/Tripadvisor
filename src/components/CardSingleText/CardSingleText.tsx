import { FC } from "react";
import { ICardSingleTextProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { DarkOverlay } from "../../elements/CusComponets";

const CardSingleText: FC<ICardSingleTextProps> = ({
  TopCover,
  textBody,
  heightCard,
}) => {
  const CusTPForCard = styled(Typography)({
    bottom: 0,
    position: "absolute",
    right: 0,
    color: "#fff",
    padding: "1rem",
    fontSize: "1.3rem",
    fontWeight: "bold",
  });
  return (
    <Box>
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
            height: "100%",
            borderRadius: "0.5rem",
          }}
        />
        <CusTPForCard>{textBody}</CusTPForCard>
      </Box>
    </Box>
  );
};

export default CardSingleText;
