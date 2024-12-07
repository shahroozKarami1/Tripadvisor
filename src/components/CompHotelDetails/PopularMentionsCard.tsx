import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { FC } from "react";

const PopularMentionsCard: FC<{ text: string }> = ({ text }) => {
  const CusMentions = styled(Button)({
    color: "#000",
    border :"1px solid #ccc" ,  
    borderRadius : "2rem" , 
    padding : "0.5rem" ,  
    margin : "0.25rem" ,  
    fontSize  :"0.70rem" , 
    fontWeight: "bold",
  });

  return <CusMentions>{text}</CusMentions>;
};

export default PopularMentionsCard;
