import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DarkBtn from "../DarkBtn/DarkBtn";
const ThirdBanner = () => {
  return (
    <Box>
      <Container>
        <Grid container sx={{ overflow: "hidden" }} spacing={4}>
          <Grid size={{ md: 7 }}>
            <img src="/public/images/ThirdBanner/ThirdBanner.png" alt="" />
          </Grid>
          <Grid size={{ md: 5 }}>
            <Box display={"flex"} flexDirection={"column"}  justifyContent={"center"} gap={1}  sx={{height  : "100%"}}>
                <Box>
                    <img src="/public/images/ThirdBanner/TopImg.svg" alt="" />
                </Box>
              <Typography sx={{fontWeight : "bold"  ,  fontSize : "3rem"}}>جوایز انتخاب مسافران بهترین از بهترین ها</Typography>
              <Typography sx={{marginTop : "1rem"  ,  fontWeight  : "light" , fontSize : "1.1rem"}}>
                در میان 1% برتر ما از مکان‌ها، اقامت‌ها، غذا خوردن و تجربه‌هایی
                که توسط شما تصمیم گرفته شده است.
              </Typography>
              ‌<Box   sx={{marginTop : "0.5rem"}}  >
              <DarkBtn>برندگان را ببینید</DarkBtn>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThirdBanner;
