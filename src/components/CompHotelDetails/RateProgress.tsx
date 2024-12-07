import { Box, Typography } from "@mui/material";
import { FC } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

interface IRateProgressProps {
  topic: string;
  progressValue: number;
  countProgress: number;
}

const RateProgress: FC<IRateProgressProps> = ({
  topic,
  countProgress,
  progressValue,
}) => {
  return (
    <Box display={"flex"} gap={1}  alignItems={"center"}  sx={{margin : "0.4rem  0"}}>
      <Typography  sx={{fontSize : "0.70rem"}}>{countProgress}</Typography>
      <ProgressBar value={progressValue} />
      <Typography  sx={{fontSize : "0.70rem" ,  whiteSpace :"nowrap"}}>{topic}</Typography>
    </Box>
  );
};

export default RateProgress;
