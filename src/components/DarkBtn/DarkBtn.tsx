import { Button } from "@mui/material";
import { FC } from "react";
import { IDarkBtnProps } from "../../types/intefaces";
import styled from "@emotion/styled";



const DarkBtn: FC<IDarkBtnProps> = ({ children }) => {
  const CusDarkBtn  =  styled(Button) (
    {
        backgroundColor :  `var(--dark-color)`  ,
        color : "#fff"  , 
        borderRadius : "1.2rem"  , 
        padding :  "0.5rem" , 
        fontSize : "1rem" ,
        fontWeight  : "bold"
    }
  )

  return <CusDarkBtn>{children}</CusDarkBtn>;
};

export default DarkBtn;
