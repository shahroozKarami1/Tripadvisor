import styled from "@emotion/styled";
import { Box, ListItem, Typography } from "@mui/material";
import { FC } from "react";

const RangeScore: FC<{ topic: string; score: number }> = ({ score, topic }) => {
  const CusLine = styled(Box)({
    backgroundColor: "var(--primary-color)",
    height: "15px",
    width: "150px",
    borderRadius: "2rem",
  });
  return (
    <ListItem
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Typography sx={{ fontSize: "0.90rem" }}>{topic}</Typography>
      ‌<CusLine />
      <Typography>{score}</Typography>
    </ListItem>
  );
};

export default RangeScore;
