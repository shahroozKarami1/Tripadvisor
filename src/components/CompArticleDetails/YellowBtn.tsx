import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { FC } from "react";

const YellowBtn: FC<{ text: string; link: string }> = ({ link, text }) => {
  const CusYellowBtn = styled(Button)({
    backgroundColor: `var(--yellow-color)`,
    fontWeight : "bold" ,  
    padding : "1rem"  ,  
    borderRadius : "2rem"  , 
    color : "#000"
  });
  return <CusYellowBtn href={link}>{text}</CusYellowBtn>;
};

export default YellowBtn;
