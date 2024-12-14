import { FC } from "react";
import { IBadgeBoxesProps } from "../../types/intefaces";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

const BadgeBoxes: FC<IBadgeBoxesProps> = ({ bgColor, icon, text }) => {
  const CusBadgeBox = styled(Button)({
    backgroundColor: bgColor ? bgColor : "#fff",
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "2rem",
    padding: "0.5rem  1rem",
    gap: 3,
    margin  : "0.5rem" , 
    border   : "1px  solid #ccc"
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
