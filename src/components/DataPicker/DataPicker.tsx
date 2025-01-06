// import DatePicker from "react-multi-date-picker"

import { Box } from "@mui/material";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import { useMedia } from "../../context/MediaQueryContext";
import { FC } from "react";
// import type{Value} from "react-multi-date-picker"

const DataPicker: FC<{ placeholder: string }> = ({ placeholder }) => {
  const isXs = useMedia();
  return (
    <Box>
      <DatePicker
        range
        rangeHover
        minDate={new DateObject({ calendar: persian })}
        placeholder={placeholder}
        dateSeparator="   =>    "
        style={{
          padding: isXs ? "2rem  6rem" : " 1.75rem  2rem  ",
          margin: isXs ? "1rem 0" : 0,
          borderRadius: "2rem",
          border: "1px  solid  #000",
        }}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-center"
      />
    </Box>
  );
};

export default DataPicker;
