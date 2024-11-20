import { FC } from "react";
import { IMainCardsRestaurant } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styled from "@emotion/styled";
const MainCardsRestaurant: FC<IMainCardsRestaurant> = ({
  disc,
  logo,
  title,
}) => {
  const CardRestauran = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "2rem",
    border: "1px solid  var(--gray-color)",
    position :"relative"  ,  
    borderRadius : "0.5rem"
  });
  return (
    <Grid size={{ md: 4 }}>
      <CardRestauran>
        <Box sx={{ position: "absolute" ,  top : "-30px" }}>
          <img src={logo} alt="" width={"120px"} />
        </Box>
         <Box sx={{marginTop : "1rem"}} >
         <Typography sx={{ fontWeight: "bold", color: `var(--primary-color)`  ,  textAlign :"center"}}>
          {title}
        </Typography>
        <Typography sx={{ textAlign: "center" ,  marginTop :"0.75rem"  ,  fontSize :"0.90rem" }}>{disc}</Typography>
         </Box>
      </CardRestauran>
    </Grid>
  );
};

export default MainCardsRestaurant;
