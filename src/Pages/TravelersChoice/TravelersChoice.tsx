import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import CardBestChoice from "../../components/CompTravelerChoice/CardBestChoice";
import SliderWrapper from "../../components/SliderWraper/SliderWrapper";
import TitleSection from "../../components/ComHomePage/TitleSection";
import AiCardPlanning from "../../components/CompTrips/AiCardPlanning";

const TextsForDisc: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography sx={{ margin: "1rem  0", fontWeight: "light" }}>
      {children}
    </Typography>
  );
};
const TravelersChoice = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid size={{ md: 12 }}>
            <Box sx={{ marginTop: "2rem" }}>
              <img src="public/images/TravelersChoice/MainBanner.jpg" alt="" />
            </Box>
          </Grid>
        </Grid>
        <Box marginTop={"2rem"}>
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Grid size={{ md: 8 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "2.2rem" }}>
                جوایز انتخاب مسافران بهترین ها در سال 2024
              </Typography>
              <TextsForDisc>
                هر سال، بر اساس نظرات و رتبه‌بندی‌های جمع‌آوری‌شده طی ۱۲ ماه، به
                مقصد، هتل‌ها، رستوران‌ها و کارهای مورد علاقه مسافران در سراسر
                جهان جایزه می‌دهیم. بنابراین جوایز انتخاب مسافران ما بهترین از
                بهترین برندگان توسط شما تعیین می شود: مسافران واقعی از سراسر
                جهان، نظرات و داستان های واقعی را به اشتراک می گذارند.
              </TextsForDisc>
              <TextsForDisc>
                برندگان سال 2024 جشنی است برای تمام کارهایی که در سال گذشته
                انجام دادیم - همه مکان هایی که کشف کردیم و همه زمان هایی که فقط
                به ماجراهای جدید "بله" گفتیم. ما برندگان را بر اساس دسته بندی در
                طول سال نشان خواهیم داد، بنابراین برای آخرین موارد به بررسی مجدد
                ادامه دهید.
              </TextsForDisc>
              <TextsForDisc>
                برای کسب اطلاعات بیشتر در مورد نحوه انتخاب برندگان،
                <Link
                  to={"/"}
                  style={{
                    borderBottom: "4px solid #ccc",
                    fontSize: "0.80rem",
                  }}
                >
                  از صفحه سیاست جوایز ما دیدن کنی
                </Link>
                .
              </TextsForDisc>

              <CardBestChoice
                link="TravelersChoice-Hotels"
                cover="/public/images/TravelersChoice/coverImgs/img1.jpg"
                text="مقاصد"
              />
              <CardBestChoice
                link="TravelersChoice-Hotels"
                cover="/public/images/TravelersChoice/coverImgs/img2.jpg"
                text="سواحل"
              />
              <CardBestChoice
                link="TravelersChoice-Hotels"
                cover="/public/images/TravelersChoice/coverImgs/img3.jpg"
                text="هتل ها"
              />
              <CardBestChoice
                link="TravelersChoice-Hotels"
                cover="/public/images/TravelersChoice/coverImgs/img4.jpg"
                text="کارهایی  برای انجام"
              />
              <CardBestChoice
                link="TravelersChoice-Hotels"
                cover="/public/images/TravelersChoice/coverImgs/img5.jpg"
                text="رستوران ها"
              />
            </Grid>
          </Grid>
        </Box>

        <TitleSection
          isSubTitle={false}
          mainTitle="همه دسته بندی های بهترین ها را کاوش کنید"
        />

        <SliderWrapper numberOfShowSlider={5}>
          <AiCardPlanning text="لندن" img="/public/images/NextTrip/img1.jpg" />
          <AiCardPlanning
            text="امارات"
            img="/public/images/NextTrip/img2.jpg"
          />
          <AiCardPlanning text="پکن" img="/public/images/NextTrip/img3.jpg" />
          <AiCardPlanning
            text="لس آنجلس"
            img="/public/images/NextTrip/img4.jpg"
          />
          <AiCardPlanning text="لندن" img="/public/images/NextTrip/img5.jpg" />{" "}
        </SliderWrapper>
      </Container>
    </Box>
  );
};

export default TravelersChoice;
