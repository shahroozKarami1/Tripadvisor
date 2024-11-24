import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ICardDetailsProps } from "../../types/intefaces";

const CardDetails: FC<ICardDetailsProps> = ({ coverImg, disc, title }) => {
  return (
    <Box display={"flex"} alignItems={"center"}   gap={1}  flexDirection={"column"}  justifyContent={"center"}>
      <img src={coverImg} alt=""  width={"50px"} />
      <Typography  sx={{fontWeight :  "bold"}}>{title}</Typography>
      <Typography  sx={{textAlign :"center"  ,  fontSize : "0.90rem"}}>{disc}</Typography>
    </Box>
  );
};

export default CardDetails;
