import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IBoxOfHeaderProps } from "../../types/intefaces";
const BoxOfHeader: FC<IBoxOfHeaderProps> = ({ icon, text }) => {
  return (
    <Box
      gap={2}
      marginTop={"3rem"}
      display={"flex"}
      
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box  sx={{border : "1px  solid  #ccc"  ,  padding  : "0.8rem"  ,  borderRadius :"50%"}}>{icon}</Box>
      <Typography sx={{ textAlign: "center" , fontSize :"0.90rem" }}>{text}</Typography>
    </Box>
  );
};

export default BoxOfHeader;
