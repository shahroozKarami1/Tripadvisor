import {
  Box,
  Button,
  Container,
  InputAdornment,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import FlightLandOutlinedIcon from "@mui/icons-material/FlightLandOutlined";
import { CusInput } from "../../../elements/CusComponets";
import { useState } from "react";

import styled from "@emotion/styled";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import TravelerBox from "../TravelerBox/TravelerBox";
import DataPicker from "../../DataPicker/DataPicker";
// import { useMedia } from "../../../context/MediaQueryContext";
function FlightInp() {
  const [isShowTravelerBox, setIsShowTravelerBox] = useState<Boolean>(false);

  const CusBtnTraverler = styled(Button)({
    backgroundColor: "#fff",
    border: "1px  solid  #000",
    borderRadius: "2rem",
    padding: "  1rem   2rem ",
    gap: 5,
    whiteSpace: "nowrap",
  });
  const CusBtnSearch = styled(Button)({
    backgroundColor: `var(--primary-color)`,
    color: "#000",
    width: "100%",
    fontWeight: "bold",
    borderRadius: "2rem",
    padding: "1rem",
    whiteSpace: "nowrap",
  });

  function HandlerTravelerBox() {
    setIsShowTravelerBox(!isShowTravelerBox);
  }
  // let  isXs   = useMedia()
  return (
    <Container sx={{ width: "100%" }}>
      <Grid container width={"100%"} spacing={1}>
        <Grid size={{ md: 6, xs: 12 }}>
          <Box display={"flex"} gap={2}>
            <CusInput
              placeholder="مبدا"
              startAdornment={
                <InputAdornment position="start">
                  <Box display={"flex"} gap={1}>
                    <FlightTakeoffOutlinedIcon />
                    <Typography sx={{ fontWeight: "bold" }}>از:</Typography>
                  </Box>
                </InputAdornment>
              }
            />
            <CusInput
              placeholder="مقصد"
              startAdornment={
                <InputAdornment position="start">
                  <Box display={"flex"} gap={1}>
                    <FlightLandOutlinedIcon />
                    <Typography sx={{ fontWeight: "bold" }}>به:</Typography>
                  </Box>
                </InputAdornment>
              }
            />
          </Box>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Grid container alignItems={"center"}>
            <Grid size={{ md: 6, xs: 12 }}>
              <Box>
                <DataPicker placeholder="تاریخ سفر" />
              </Box>
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
              <Box
                gap={1}
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
              >
                <Box position={"relative"}>
                  <CusBtnTraverler onClick={() => HandlerTravelerBox()}>
                    <PeopleOutlineOutlinedIcon />
                    <Typography
                      sx={{ fontWeight: "bold", fontSize: "0.85rem" }}
                    >
                      1 مسافر
                    </Typography>
                  </CusBtnTraverler>
                  {isShowTravelerBox && <TravelerBox />}
                </Box>
                <CusBtnSearch>جست و جو </CusBtnSearch>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FlightInp;
