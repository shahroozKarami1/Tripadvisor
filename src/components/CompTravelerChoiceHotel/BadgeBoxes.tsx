import { FC } from "react";
import { IBadgeBoxesProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const BadgeBoxes: FC<IBadgeBoxesProps> = ({ bgColor, icon, text }) => {
  const CusBadgeBox = styled(Box)({
    backgroundColor: bgColor ? bgColor : "#fff",
    display: "flex",
    alignItems: "center",
    borderRadius: "2rem",
    padding: "0.5rem  1rem",
    gap: 3,
  });
  return (
    <CusBadgeBox>
      <Typography sx={{ fontWeight: "bold", fontSize: "0.80rem" }}>
        {text}
      </Typography>
      <Typography>{icon}</Typography>
    </CusBadgeBox>
  );
};

export default BadgeBoxes;
