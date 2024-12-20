import {
  Box,
  Container,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import DataPicker from "../../components/DataPicker/DataPicker";
import DarkBtn from "../../components/DarkBtn/DarkBtn";
import Grid from "@mui/material/Grid2";
const VacationRentalDetails = () => {
  return (
    <Box>
      <Container>
        ‌‌
        <Box display={"flex"} flexDirection={"column"}>
          <Box>
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                paddingBottom: "2rem",
              }}
            >
              جنگل های هیرکانی
            </Typography>
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Input
                placeholder="مقصد"
                sx={{
                  border: "1px  solid  #000",
                  borderRadius: "2rem",
                  padding: "  0.75rem  1rem",
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <FmdGoodOutlinedIcon />
                  </InputAdornment>
                }
              />

              <DataPicker placeholder="تاریخ پذیرش :" />
              <DataPicker placeholder="تاریخ ترک کردن :" />
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <DarkBtn>
                <FmdGoodOutlinedIcon sx={{ path: { color: "#fff" } }} />
                نقشه
              </DarkBtn>
            </Box>
          </Box>
        </Box>
        <Grid container>
            <Grid size={{md  :  4}}>Hello </Grid>
            <Grid size={{md  :  4}}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VacationRentalDetails;
