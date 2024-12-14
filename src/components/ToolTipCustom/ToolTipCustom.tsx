import { Button, Tooltip, Typography } from "@mui/material";
import React, { FC } from "react";

const ToolTipCustom: FC<{
  text: string;
  icon: React.ReactNode;
}> = ({ icon, text }) => {
  return (
    <Tooltip
      sx={{ lineHeight: 5 }}
      title={
        <Typography sx={{ lineHeight: 2, fontSize: "0.875rem", color : "#fff" }}>
          {text}
        </Typography>
      }
      arrow
    >
      <Button sx={{ justifyContent: "flex-start", padding: 0 }}>{icon}</Button>
    </Tooltip>
  );
};

export default ToolTipCustom;
