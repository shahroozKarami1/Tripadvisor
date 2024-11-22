import {
  Box,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import FlightLandOutlinedIcon from "@mui/icons-material/FlightLandOutlined";
import { CusInput } from "../../../elements/CusComponets";
import { useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function FlightInp() {
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(null);
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);

  const handleInputClick = () => {
    setIsPickerOpen(true);
  };

  return (
    <Container sx={{ width: "100%" }}>
      <Grid container width={"100%"} spacing={3}>
        <Grid size={{ md: 6 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="تاریخ شروع و پایان"
                sx={{
                  border: "1px solid  #ccc",
                  borderRadius: "1rem",
                  "& .MuiOutlinedInput-notchedOutline": {
                    display: "none",
                  },
                }}
                onClick={handleInputClick}
                value={
                  startDate && endDate
                    ? `${startDate.year()}/${startDate.month()}/${startDate.date()} - ${endDate.year()}/${endDate.month()}/${endDate.date()} `
                    : ""
                }
                placeholder="تاریخ را انتخاب کنید"
              />

              {isPickerOpen && (
                <>
                  <Box display={"flex"} gap={2}>
                    <DatePicker
                      value={startDate}
                      onChange={(newValue) => setStartDate(newValue)}
                      onClose={() => setIsPickerOpen(true)}
                      label="تاریخ  شروع"
                      sx={{
                        border: "1px solid  #ccc",
                        borderRadius: "1rem",
                        "& .MuiFormLabel-root": {
                          right: "20px",
                          border: 0,
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          display: "none",
                        },
                      }}
                    />
                    <DatePicker
                      label="تاریخ پایان"
                      sx={{
                        border: "1px solid  #ccc",
                        borderRadius: "1rem",
                        "& .MuiFormLabel-root": {
                          right: "20px",
                          border: 0,
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          display: "none",
                        },
                      }}
                      value={endDate}
                      onChange={(newValue) => setEndDate(newValue)}
                      onClose={() => setIsPickerOpen(false)}
                    />
                  </Box>
                </>
              )}
            </Box>
          </LocalizationProvider>
        </Grid>
        <Grid size={{ md: 6 }}>
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
      </Grid>
    </Container>
  );
}

export default FlightInp;
