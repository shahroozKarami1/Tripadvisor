import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IPorpsNextTrip } from "../../types/intefaces";
import { CusCard, CusTPSimpleCard } from "../../elements/CusComponets";
import SliderWrapper from "../SliderWraper/SliderWrapper";
const NextTripSection: FC<IPorpsNextTrip> = ({
  dataNextTripArr,
  mainTitle,
}) => {
  return (
    <Box sx={{ marginTop: "1rem" }}>
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold"  ,  marginBottom : "1rem"}}>
        {mainTitle}
      </Typography>
      <SliderWrapper  numberOfShowSlider={4}>
      {dataNextTripArr.map(({ img, title }) => {
          return (
            <>
                <CusCard>
                  <img src={img} alt="" className="rounded-lg" />
                  <CusTPSimpleCard>{title}</CusTPSimpleCard>
                </CusCard>
            </>
          );
        })}
      </SliderWrapper>
    </Box>
  );
};

export default NextTripSection;
