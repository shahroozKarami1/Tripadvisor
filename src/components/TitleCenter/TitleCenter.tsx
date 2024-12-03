import { FC } from "react";
import { ITitleCenterProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";

const TitleCenter: FC<ITitleCenterProps> = ({
  isSubTitle,
  title,
  subTitle,
}) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={2}
      sx={{marginTop : "6rem"}}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
        {title}
      </Typography>
      {isSubTitle && <Typography  fontSize={"1rem"}>{subTitle}</Typography>}
    </Box>
  );
};

export default TitleCenter;
