import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IPorpsNextTrip } from "../../types/intefaces";
import { CusCard, CusTPSimpleCard } from "../../elements/CusComponets";
import Grid from "@mui/material/Grid2";
const NextTripSection: FC<IPorpsNextTrip> = ({
  dataNextTripArr,
  mainTitle,
}) => {
  return (
    <Box sx={{ marginTop: "1rem" }}>
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold"  ,  marginBottom : "1rem"}}>
        {mainTitle}
      </Typography>
      <Grid container spacing={2}>
        {dataNextTripArr.map(({ img, title }) => {
          return (
            <>
              <Grid size={{ md: 3 }}>
                <CusCard>
                  <img src={img} alt="" className="rounded-lg" />
                  <CusTPSimpleCard>{title}</CusTPSimpleCard>
                </CusCard>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

export default NextTripSection;
