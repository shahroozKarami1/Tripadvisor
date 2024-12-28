import {
  Box,
  Button,
  Input,
  InputAdornment,

  styled,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FC } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DateObject from "react-date-object";
import Grid from "@mui/material/Grid2";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CheckListCus from "../CompTourAttractions/CheckListCus";
const InpLocation: FC<{ placeholder: string; width: string }> = ({
  placeholder,
  width,
}) => {
  return (
    <Input
      placeholder={`${placeholder}...`}
      sx={{
        borderLeft: "1px  solid  #ccc",
        padding: "1rem",
        width: width,
        "&.MuiInputBase-root": {
          ":after": {
            display: "none",
          },
          ":before": {
            display: "none",
          },
        },
      }}
      startAdornment={
        <InputAdornment position="start">
          <LocationOnIcon
            sx={{
              "& path": {
                color: "var(--primary-color)",
              },
            }}
          />
        </InputAdornment>
      }
    />
  );
};
const RoundTripInp = () => {
  const CusRoundTripInp = styled(Box)({
    backgroundColor: "#fff",
    borderRadius: "2rem",
    display: "flex",
    alignItems: "center",
    position: "relative",
  });

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <CusRoundTripInp>
        <InpLocation width="200px" placeholder="از کجا" />
        <InpLocation width="350px" placeholder="به کجا" />
        <Box
          display={"flex"}
          alignItems={"center"}
          marginRight={"0.5rem"}
          borderLeft={"1px  solid #ccc"}
        >
          <DateRangeIcon
            sx={{
              "& path": {
                color: "var(--primary-color)",
              },
            }}
          />
          <DatePicker
            placeholder="تاریخ خود را وارد کنید"
            style={{
              border: 0,
              padding: "2rem 0.5rem",
            }}
            range
            rangeHover
            minDate={new DateObject({ calendar: persian })}
            dateSeparator=" تا  "
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-center"
          />
        </Box>
        <Box>
          <Button
            sx={{
              color: "#000",
              borderRadius: 0,
              marginRight: "2rem",
            }}
            endIcon={<KeyboardArrowDownIcon sx={{ marginRight: "0.5rem" }} />}
          >
            5 نفره / اقتصادی
          </Button>
        </Box>
        ‌
        <Button
          sx={{
            color: "#fff",
            bgcolor: "#004F32",
            padding: " 1.3rem 1rem  ",
            borderTopLeftRadius: "2rem",
            borderBottomLeftRadius: "2rem",
            position: "absolute",
            left: 0,
          }}
        >
          پیدا کردن پرواز ها
        </Button>
      </CusRoundTripInp>

      <Box
        sx={{ bgcolor: "#fff", borderRadius: "0.25rem", padding: "   1rem" }}
      >
        <Grid container>
          <Grid size={{ md: 6 }}>
            <CheckListCus nameList={"سفر بی وقفه را ترجیح میدهید "} />
          </Grid>
          <Grid size={{ md: 6 }}>
            <CheckListCus nameList={"شامل فرودگاه های نزدیک"} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RoundTripInp;
