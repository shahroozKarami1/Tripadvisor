import { FC } from "react";
import { ICardSingleTextProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const CardSingleText: FC<ICardSingleTextProps> = ({ TopCover, textBody }) => {

    const  CusTPForCard   =  styled(Typography) ({
     bottom : 0  ,  position : "absolute" ,
     right : 0  , 
     color : "#fff" , 
     padding : "1rem" , 
     fontSize: "0.90rem" , 
     fontWeight : "bold"
    })
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <img src={TopCover} alt="" width={"100%"}  height={"100%"}/>
        <CusTPForCard >{textBody}</CusTPForCard>
      </Box>
    </Box>
  );
};

export default CardSingleText;
