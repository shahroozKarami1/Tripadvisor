import { Checkbox , ListItem, Typography } from "@mui/material";
import React, { FC } from "react";

const CheckListCus: FC<{ nameList: string | React.ReactNode }> = ({ nameList }) => {
  return (
    <ListItem  sx={{padding  : 0   , margin : 0}}>
      <Checkbox   />
      <Typography sx={{color : "#000" ,  fontSize : "0.90rem"}}>{nameList}</Typography>
    </ListItem>
  );
};

export default CheckListCus;
