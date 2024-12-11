import { FC, useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";


const DataPicker: FC = () => {
  dayjs.locale("fa");
  const [value, setValue] = useState<Dayjs | null>(null); // نوع مناسب برای value

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DataPicker;
