import { FC } from "react";
import { ITravelerBoxProps } from "../../../types/intefaces";
import {  List, ListItem, Typography } from "@mui/material";
import { CusAddBtn, CusRemoveBtn, CusTravelerBox } from "../../../elements/CusComponets";

import Grid from "@mui/material/Grid2";
import RangeOfPeople from "./RangeOfPeople";
import styled from "@emotion/styled";

const TravelerBox: FC<ITravelerBoxProps> = ({}) => {
  const CusListItem = styled(ListItem)({
    marginBottom: "1rem  ",
    display: "flex",
    justifyContent: "center",
  });



  return (
    <CusTravelerBox>
      <Grid container>
        <Grid size={{ md: 6 }}>
          <List sx={{ display: "flex", flexDirection: "column" }}>
            <RangeOfPeople age="18-64" range="بزرگسالان" />
            <RangeOfPeople age="+65" range="سالمندان" />
            <RangeOfPeople age="17-3" range="کودکان" />
            <RangeOfPeople age="2-0" range="نوزادان در صندلی" />
          </List>
        </Grid>
        <Grid size={{ md: 6 }}>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CusListItem>
              <CusAddBtn />
              <Typography
                sx={{
                  margin: "0  0.75rem",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                0
              </Typography>
              <CusRemoveBtn />
            </CusListItem>
            <CusListItem>
              <CusAddBtn />
              <Typography
                sx={{
                  margin: "0  0.75rem",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                0
              </Typography>
              <CusRemoveBtn />
            </CusListItem>
            <CusListItem>
              <CusAddBtn />
              <Typography
                sx={{
                  margin: "0  0.75rem",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                0
              </Typography>
              <CusRemoveBtn />
            </CusListItem>
            <CusListItem>
              <CusAddBtn />
              <Typography
                sx={{
                  margin: "0  0.75rem",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                0
              </Typography>
              <CusRemoveBtn />
            </CusListItem>
          </List>
        </Grid>
      </Grid>
    </CusTravelerBox>
  );
};

export default TravelerBox;
