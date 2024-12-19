import { Box, Typography } from "@mui/material";
import InpSearch from "../InpSearch/InpSearch";
import Grid from "@mui/material/Grid2";
import CardForFirstTrip from "./CardForFirstTrip";
import { FC } from "react";
const FirstStep: FC<{ changePageHandler: () => void }> = ({
  changePageHandler,
}) => {
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: "3rem" }}
        >
          اول، کجا می خواهید بروید؟
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "0.90rem" }}>
          عکس‌های سفارشی دریافت می‌کنید که می‌توانید ذخیره کنید و به یک برنامه
          سفر تبدیل کنید.
        </Typography>
      </Box>
      <Grid container justifyContent={"center"}>
        <Grid size={{ md: 8 }}>
          <Box marginTop={"3rem"}>
            <InpSearch
              isBtnSearch={false}
              textPlaceHolder="یک شهر یا محل خاص راانتخاب  کنید"
            />
          </Box>
        </Grid>
      </Grid>
      ‌
      <Box marginTop={"2rem"}>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
            padding: "1rem  0",
          }}
        >
          یا با یک مقصد محبوب شروع کنید
        </Typography>
        <Grid container>
          <Grid size={{ md: 2, xs: 6 }}>
            <CardForFirstTrip
              changePageHandler={changePageHandler}
              countryName="ایالات متحده آمریکا"
              coverImg="/public/images/TripBuilderImg/FirstStepCards/img1.jpg"
              titleImg="لاس وگاس"
            />
          </Grid>
          <Grid size={{ md: 2, xs: 6 }}>
            <CardForFirstTrip
              changePageHandler={changePageHandler}
              countryName="ایالات متحده آمریکا"
              coverImg="/public/images/TripBuilderImg/FirstStepCards/img2.jpg"
              titleImg="لاس وگاس"
            />
          </Grid>
          <Grid size={{ md: 2, xs: 6 }}>
            <CardForFirstTrip
              changePageHandler={changePageHandler}
              countryName="ایالات متحده آمریکا"
              coverImg="/public/images/TripBuilderImg/FirstStepCards/img3.jpg"
              titleImg="لاس وگاس"
            />
          </Grid>
          <Grid size={{ md: 2, xs: 6 }}>
            <CardForFirstTrip
              changePageHandler={changePageHandler}
              countryName="ایالات متحده آمریکا"
              coverImg="/public/images/TripBuilderImg/FirstStepCards/img4.jpg"
              titleImg="لاس وگاس"
            />
          </Grid>
          <Grid size={{ md: 2, xs: 6 }}>
            <CardForFirstTrip
              changePageHandler={changePageHandler}
              countryName="ایالات متحده آمریکا"
              coverImg="/public/images/TripBuilderImg/FirstStepCards/img5.jpg"
              titleImg="لاس وگاس"
            />
          </Grid>
          <Grid size={{ md: 2, xs: 6 }}>
            <CardForFirstTrip
              changePageHandler={changePageHandler}
              countryName="ایالات متحده آمریکا"
              coverImg="/public/images/TripBuilderImg/FirstStepCards/img6.jpg"
              titleImg="لاس وگاس"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FirstStep;
