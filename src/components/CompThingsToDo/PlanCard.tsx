import { FC } from "react";
import { IPlanCardProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
const PlanCard: FC<IPlanCardProps> = ({ disc, icon, title }) => {
  return (
    <Grid size ={{md   :  4}}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box sx={{bgcolor : `var(--primary-color)`  ,  padding : "0.5rem"  ,  borderRadius : "50%"}}>{icon}</Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
          {title}
        </Typography>
        <Typography
          sx={{
            fontWeight: "light",
            fontSize: "0.85rem",
            textAlign :"center"
          }}
        >
          {disc}
        </Typography>
      </Box>
    </Grid>
  );
};

export default PlanCard;
