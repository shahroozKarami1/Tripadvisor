import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const SecoundStep = () => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"} gap={1}>
      <Grid size={{ md: 12 }}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Calendar
            locale={persian_fa}
            calendar={persian}
            className="custom-calendar"
          />
          <Calendar
            locale={persian_fa}
            calendar={persian}
            className="custom-calendar"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SecoundStep;
