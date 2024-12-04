import { Box, Container, Typography } from "@mui/material";
import MainBanner from "../../components/MainBanner/MainBanner";
import InpSearch from "../../components/InpSearch/InpSearch";
import Grid from "@mui/material/Grid2";
import TitleSection from "../../components/ComHomePage/TitleSection";
import TourWaysCard from "../../components/ComHomePage/TourWaysCard";
import CardTopDistination from "../../components/CompHotelPage/CardTopDistination";
const Hotels = () => {
  return (
    <Box>
      <MainBanner bannerUrl="/public/images/Hotelmg/Banner.jpg">
        <Container sx={{ height: "100%" }}>
          <Grid
            container
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={2}
          >
            <Grid size={{ md: 7 }}>
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
              <InpSearch textPlaceHolder="جست و جو" isBtnSearch={false} />
            </Grid>
          </Grid>
        </Container>
      </MainBanner>

      <Container>
        <Grid container spacing={3}>
          <TitleSection
            isSubTitle={false}
            mainTitle="انتخاب مسافران: استراحتگاه های فراگیر"
            isSeeAll={true}
          />
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={false}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/ResortsImgs/img1.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={false}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/ResortsImgs/img2.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={false}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/ResortsImgs/img3.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={false}
              score={4350}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/ResortsImgs/img4.jpg"
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <TitleSection
            isSubTitle={false}
            mainTitle="انتخاب مسافران: هتل های برتر"
            isSeeAll={true}
          />
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={false}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/BestChoice/img1.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={false}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/BestChoice/img2.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={false}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/BestChoice/img3.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={false}
              score={4350}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/BestChoice/img4.jpg"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <TitleSection
            isSubTitle={false}
            mainTitle="هتل ها در مقاصد برتر"
            isSeeAll={true}
          />
          <Grid size={{ md: 3 }}>
            <CardTopDistination
              diec="Scottsdale سرانه اسپاهای بیشتری نسبت به هر شهر دیگری در ایالات متحده دارد—بنابراین چه به دنبال جدیدترین فن‌آوری آبگرم رسانه‌ای باشید و چه به دنبال فضایی جدید و غیرعادی باشید، مطمئناً چیزی برای شما وجود دارد. این نیز چیز خوبی است - پس از گذراندن تمام روز برای گشت و گذار در صحرای زیبا، برای کمی نوازش سپاسگزار خواهید بود."
              img="/public/images/Hotelmg/TopDistination/img1.jpg"
              title="اسکاتسدیل"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <CardTopDistination
              diec="Scottsdale سرانه اسپاهای بیشتری نسبت به هر شهر دیگری در ایالات متحده دارد—بنابراین چه به دنبال جدیدترین فن‌آوری آبگرم رسانه‌ای باشید و چه به دنبال فضایی جدید و غیرعادی باشید، مطمئناً چیزی برای شما وجود دارد. این نیز چیز خوبی است - پس از گذراندن تمام روز برای گشت و گذار در صحرای زیبا، برای کمی نوازش سپاسگزار خواهید بود."
              img="/public/images/Hotelmg/TopDistination/img2.jpg"
              title="اسکاتسدیل"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <CardTopDistination
              diec="Scottsdale سرانه اسپاهای بیشتری نسبت به هر شهر دیگری در ایالات متحده دارد—بنابراین چه به دنبال جدیدترین فن‌آوری آبگرم رسانه‌ای باشید و چه به دنبال فضایی جدید و غیرعادی باشید، مطمئناً چیزی برای شما وجود دارد. این نیز چیز خوبی است - پس از گذراندن تمام روز برای گشت و گذار در صحرای زیبا، برای کمی نوازش سپاسگزار خواهید بود."
              img="/public/images/Hotelmg/TopDistination/img3.jpg"
              title="اسکاتسدیل"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <CardTopDistination
              diec="Scottsdale سرانه اسپاهای بیشتری نسبت به هر شهر دیگری در ایالات متحده دارد—بنابراین چه به دنبال جدیدترین فن‌آوری آبگرم رسانه‌ای باشید و چه به دنبال فضایی جدید و غیرعادی باشید، مطمئناً چیزی برای شما وجود دارد. این نیز چیز خوبی است - پس از گذراندن تمام روز برای گشت و گذار در صحرای زیبا، برای کمی نوازش سپاسگزار خواهید بود."
              img="/public/images/Hotelmg/TopDistination/img4.jpg"
              title="اسکاتسدیل"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hotels;
