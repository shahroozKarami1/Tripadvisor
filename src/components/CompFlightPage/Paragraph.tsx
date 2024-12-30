import { FC } from "react";
import { IParagraphProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import { useMedia } from "../../context/MediaQueryContext";

const Paragraph: FC<IParagraphProps> = ({ header, textBody }) => {
  let isXs = useMedia();
  return (
    <Box
      display={"flex"}
      sx={{ margin: "0.5rem  0", padding: isXs ? "1rem" : "0rem" }}
      gap={1}
      flexDirection={"column"}
      justifyContent={"flex-start"}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
        {header}
      </Typography>
      <Typography sx={{ fontSize: "0.80rem", lineHeight: 2 }}>
        {textBody}
      </Typography>
    </Box>
  );
};

export default Paragraph;
