import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const LinkBorder: FC<{ text: string; link: string }> = ({ text, link }) => {
        const  CusBtn  =  styled  (Button)  ({
            color : "#444" ,  
            fontSize : "0.90rem" ,  
            borderBottom : "1px solid #000" ,
            padding : 0  ,
            margin : "0.25rem 0"  , 
            borderRadius : 0
        })
  return (
    <CusBtn>
      <Link to={link}>{text}</Link>
    </CusBtn>
  );
};

export default LinkBorder;
