import { Box, Typography } from "@mui/material";
import { FC } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
// import DateRangeIcon from '@mui/icons-material/DateRange';
import InputIcon from "react-multi-date-picker/components/input_icon";

const CheckInOut: FC<{ label: string }> = ({ label }) => {
  return (
    <Box>
      <Typography sx={{fontSize : "0.80rem"  ,  marginY :  "0.5rem"}}>{label} :</Typography>
      <DatePicker
        render={<InputIcon />}
        range
        rangeHover
        minDate={new DateObject({ calendar: persian })}
        dateSeparator=" تا  "
        style={{
          borderRadius: "0.25rem",
          border: "1px  solid  #444",
          padding : "1rem",
          width : "150px"
        }}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-center"
      />
    </Box>
  );
};

export default CheckInOut;
