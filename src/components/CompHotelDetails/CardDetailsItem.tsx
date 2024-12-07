import { Box, Typography } from "@mui/material";
import { FC } from "react";

const CardDetailsItem: FC<{ title: string; details: string[] }> = ({
    details,
    title,
  }) => {
    return (
      <Box display={"flex"} flexDirection={"column"}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "0.80rem",
            paddingTop: "1rem",
            paddingBottom: "0.5rem",
          }}
        >
          {title}
        </Typography>
        <Box display={"flex"}>
          {details.map((details) => {
            return (
              <Typography sx={{ fontSize: "0.80rem", padding: "0 0.2rem" }}>
                {details}
              </Typography>
            );
          })}
        </Box>
      </Box>
    );
  };
  
  export  default  CardDetailsItem