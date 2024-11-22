import { Box, Container, Typography } from "@mui/material";
import MainBanner from "../../components/MainBanner/MainBanner";
import Grid from "@mui/material/Grid2";
import InpSearch from "../../components/InpSearch/InpSearch";
import CardRental from "../../components/CompVacationRental/CardRental";
import CardSingleText from "../../components/CardSingleText/CardSingleText";
const Vacations = () => {
  return (
    <Box>
      <MainBanner bannerUrl="/public/images/VacationRental/Banner.jpg">
        <Container sx={{ height: "100%" }}>
          <Grid
            container
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={2}
          >
            <Grid size={{ md: 12 }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: "2.5rem",
                  textAlign: "center",
                  marginBottom: "3rem",
                }}
              >
                آخرین بررسی ها پایین ترین قیمت ها.{" "}
              </Typography>
              <InpSearch isBtnSearch={false} />
            </Grid>
          </Grid>
        </Container>
      </MainBanner>
      <Container sx={{ marginTop: "5rem" }}>
        <Grid container spacing={3}>
          <Grid size={{ md: 6 }}>
            <CardRental
              TopCover="/public/images/VacationRental/RentalCard/img1.png"
              textBody="از فضا و حریم خصوصی بیشتر در یک محیط خانه تمیز شده فقط با خانواده و دوستان خود لذت ببرید"
            />
          </Grid>
          <Grid size={{ md: 6 }}>
            <CardRental
              TopCover="/public/images/VacationRental/RentalCard/img2.png"
              textBody="نظرات مسافرانی که در آنجا اقامت داشته‌اند را بخوانید، تا بتوانید قبل از پیدا کردن، اعتماد به نفس داشته باشید"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}  sx={{marginTop : "3rem"}}>
          <Grid size={{ md: 3 }}>
            <CardSingleText
              TopCover="/public/images/RentalFile/img1.jpg"
              textBody="اجاره تعطیلات منطقه خرس بزرگ"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <CardSingleText
              TopCover="/public/images/RentalFile/img2.jpg"
              textBody="اجاره تعطیلات منطقه خرس بزرگ"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <CardSingleText
              TopCover="/public/images/RentalFile/img3.jpg"
              textBody="اجاره تعطیلات منطقه خرس بزرگ"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <CardSingleText
              TopCover="/public/images/RentalFile/img4.jpg"
              textBody="اجاره تعطیلات منطقه خرس بزرگ"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Vacations;
