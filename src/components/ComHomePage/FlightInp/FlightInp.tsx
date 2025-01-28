import {
  Box,
  Button,
  Container,
  InputAdornment,
  styled,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CusInput } from "../../../elements/CusComponets";
import DataPicker from "../../DataPicker/DataPicker";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import FlightLandOutlinedIcon from "@mui/icons-material/FlightLandOutlined";
import { useEffect, useRef, useState } from "react";
import TravelerBox from "../TravelerBox/TravelerBox";
const FlightInp = () => {
  const [isShowTravelerBox, setIsShowTravelerBox] = useState<Boolean>(false);
  let BoxRef = useRef<HTMLDivElement | null>(null)
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
  useEffect(() => {

    const handlerCLoseOnDoc = (e: MouseEvent) => {
      if (BoxRef.current && !BoxRef.current.contains(e.target as Node)) {
        setIsShowTravelerBox(false)
      }
    }
    document.addEventListener("mousedown", handlerCLoseOnDoc)
    return () => {
      document.removeEventListener("mousedown", handlerCLoseOnDoc)
    }
  }, [])
  console.log(BoxRef)
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
                <Box position={"relative"} >
                  <CusBtnTraverler onClick={() => setIsShowTravelerBox(true)}  >
                    <PeopleOutlineOutlinedIcon />
                    <Typography
                      sx={{ fontWeight: "bold", fontSize: "0.85rem" }}
                    >
                      1 مسافر
                    </Typography>
                  </CusBtnTraverler>
                  {isShowTravelerBox && <TravelerBox BoxRef={BoxRef} />}
                </Box>
                <CusBtnSearch>جست و جو </CusBtnSearch>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FlightInp;
