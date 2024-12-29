import { Button } from "@mui/material";
import { FC } from "react";

const BtnWhteBlackTex: FC<{ link: string; title: string ,  funcHandler ?: ()  => {} }> = ({
  link,
  title,
  funcHandler
}) => {
  return (
    <Button
    onClick={funcHandler}
      sx={{
        fontWeight: "bold",
        backgroundColor: "#fff",
        transition: "all  0.5s  ease",
        color: "#000",
        border: "1px  solid  #000",
        padding : "0.5rem" , 
        fontSize : "0.80rem" ,  
        borderRadius: "2rem",
        ":hover": {
          bgcolor: "var(--dark-color)",
          color: "#fff",
        },
      }}
      href={link}
    >
      {title}
    </Button>
  );
};

export default BtnWhteBlackTex;
