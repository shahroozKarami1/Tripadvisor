import { FC } from "react";
import { ITipCardProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";

const TipCard: FC<ITipCardProps> = ({ name, profile, tipBody }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={1}
      sx={{
        margin: "2rem  0",
        
      }}
    >
      <img
        src={profile}
        style={{
          borderRadius: "50%",
          width: "70px",
        }}
        alt=""
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        sx={{ borderBottom: "1px  solid #ccc", padding: "1rem  0" }}
      >
        <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
        <Typography>{tipBody}</Typography>
      </Box>
    </Box>
  );
};

export default TipCard;
