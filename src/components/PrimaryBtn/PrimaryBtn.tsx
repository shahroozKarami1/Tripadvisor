import { Button } from "@mui/material";
import { FC } from "react";
import { useMedia } from "../../context/MediaQueryContext";


const PrimaryBtn: FC<{ text: string }> = ({ text }) => {
    let  isXs =  useMedia()
  return <Button sx={{
  bgcolor : "var(--primary-color)" ,  
  color  : "#000" , 
  width  :  isXs ? "90%" : "200px" ,  
  fontWeight : "bold"  ,  
  height : "100%" ,  
 padding : "0.5rem  1rem" ,
 marginRight : "1rem" ,   
  borderRadius : "2rem"

  }}  onClick={() => console.log("object")}>{text}</Button>;
};

export default PrimaryBtn;
