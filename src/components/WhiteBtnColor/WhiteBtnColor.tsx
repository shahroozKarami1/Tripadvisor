import { Button } from "@mui/material";
import { FC } from "react";

const WhiteBtnColor: FC<{ title: string }> = ({ title }) => {
  return (
    <Button sx={{ bgcolor: "#fff", color: "#000", borderRadius: "30px"  , padding : "1rem"  ,  fontWeight :"bold"}}>
      {title}
    </Button>
  );
};

export default WhiteBtnColor;
