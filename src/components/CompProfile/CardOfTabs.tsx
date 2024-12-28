import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";

interface CardOfTabsProps {
  title: string;
  textBody: string | React.ReactNode;
  isLink  :   boolean ;  
   LinkObj  ?:  {
    textLink  :  string  ; 
    urlLink  :  string
   }
}

const CardOfTabs: FC<CardOfTabsProps> = ({ textBody, title  , isLink ,  LinkObj}) => {
  return (
    <Box
      sx={{ bgcolor: "#fff", padding: "1rem" }}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={1}
    >
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold", fontSize: "1.2rem" }}
      >
        {title} 
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "#444",
          fontWeight: "light",
          fontSize: "0.90rem",
          lineHeight : 1.7
        }}
      >
        {textBody}  

        {
            isLink &&  <span><Link  style={{color :  "var(--primary-color)"}}  to={ LinkObj ?  LinkObj?.urlLink : "/"}>{LinkObj?.textLink}</Link></span>
        }
      </Typography>
    </Box>
  );
};

export default CardOfTabs;
