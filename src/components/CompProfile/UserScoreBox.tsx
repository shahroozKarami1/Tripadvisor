import { Box, Typography } from "@mui/material";
import { FC } from "react";

const UserScoreBox: FC<{ number: number; titleOfScore: string }> = ({
  number,
  titleOfScore,
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{ margin: "0  1.5rem " }}
    >
      <Typography sx={{ fontWeight: 600, fontSize: "1rem"  ,  whiteSpace : "nowrap"}}>
        {titleOfScore}
      </Typography>
      <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold"  ,  color  : "gray" }}>
        {number}
      </Typography>
    </Box>
  );
};

export default UserScoreBox;
