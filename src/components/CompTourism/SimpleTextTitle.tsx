import { Box, Typography } from "@mui/material";
import { FC } from "react";

const SimpleTextTitle: FC<{ title: string; textBody: string }> = ({
  textBody,
  title,
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      sx={{ margin: "1rem  0" }}
    >
      <Typography  sx={{fontWeight : "bold"}}> {title}</Typography>
      <Typography  sx ={{fontSize : "1rem"}}> {textBody}</Typography>
    </Box>
  );
};

export default SimpleTextTitle;
