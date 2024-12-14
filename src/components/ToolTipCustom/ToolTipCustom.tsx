import { Button, Tooltip } from "@mui/material";
import React, { FC } from "react";

const ToolTipCustom: FC<{
  text: string;
  icon: React.ReactNode;
}> = ({ icon, text }) => {
  return (
    <Tooltip   title={text} arrow>
      <Button  sx={{justifyContent : 'flex-start'}}>{icon}</Button>
    </Tooltip>
  );
};

export default ToolTipCustom;
