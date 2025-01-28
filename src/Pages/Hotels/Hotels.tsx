import { Box, Container, Typography } from "@mui/material";
import MainBanner from "../../components/MainBanner/MainBanner";
import Grid from "@mui/material/Grid2";
import TitleSection from "../../components/ComHomePage/TitleSection";
import TourWaysCard from "../../components/ComHomePage/TourWaysCard";
import CardTopDistination from "../../components/CompHotelPage/CardTopDistination";
import SliderWrapper from "../../components/SliderWraper/SliderWrapper";
import SearchInpHotel from "../../components/CompHotelPage/SearchInpHotel";
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
            <Grid size={{ md: 9, xs: 12 }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: "2.5rem",
                  textAlign: "center",
                  marginBottom: "3rem",
                }}
              >
                آخرین بررسی ها پایین ترین قیمت ها
              </Typography>
              <SearchInpHotel/>
            </Grid>
          </Grid>
        </Container>
      </MainBanner>

      <Container>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="انتخاب مسافران: استراحتگاه های فراگیر"
            isSeeAll={true}
          />
          <SliderWrapper numberOfShowSlider={4} ArrowPosition="35%">
            <TourWaysCard
              link="/Hotels/HotelDetails"
              isDetails={false}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/ResortsImgs/img1.jpg"
            />
            <TourWaysCard
              link="/Hotels/HotelDetails"
              isDetails={false}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/ResortsImgs/img2.jpg"
            />
            <TourWaysCard
              isDetails={false}
              link="/Hotels/HotelDetails"
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/ResortsImgs/img3.jpg"
            />
            <TourWaysCard
              isDetails={false}
              link="/Hotels/HotelDetails"
              score={4350}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/ResortsImgs/img4.jpg"
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="انتخاب مسافران: هتل های برتر"
            isSeeAll={true}
          />
          <SliderWrapper numberOfShowSlider={4} ArrowPosition="35%">
            <TourWaysCard
              isDetails={false}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/BestChoice/img1.jpg"
            />
            <TourWaysCard
              isDetails={false}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/BestChoice/img2.jpg"
            />
            <TourWaysCard
              isDetails={false}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/BestChoice/img3.jpg"
            />
            <TourWaysCard
              isDetails={false}
              score={4350}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/Hotelmg/BestChoice/img4.jpg"
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="هتل ها در مقاصد برتر"
            isSeeAll={true}
          />
          <SliderWrapper numberOfShowSlider={4}>
            <CardTopDistination
              diec="Scottsdale سرانه اسپاهای بیشتری نسبت به هر شهر دیگری در ایالات متحده دارد—بنابراین چه به دنبال جدیدترین فن‌آوری آبگرم رسانه‌ای باشید و چه به دنبال فضایی جدید و غیرعادی باشید، مطمئناً چیزی برای شما وجود دارد. این نیز چیز خوبی است - پس از گذراندن تمام روز برای گشت و گذار در صحرای زیبا، برای کمی نوازش سپاسگزار خواهید بود."
              img="/public/images/Hotelmg/TopDistination/img1.jpg"
              title="اسکاتسدیل"
            />
            <CardTopDistination
              diec="Scottsdale سرانه اسپاهای بیشتری نسبت به هر شهر دیگری در ایالات متحده دارد—بنابراین چه به دنبال جدیدترین فن‌آوری آبگرم رسانه‌ای باشید و چه به دنبال فضایی جدید و غیرعادی باشید، مطمئناً چیزی برای شما وجود دارد. این نیز چیز خوبی است - پس از گذراندن تمام روز برای گشت و گذار در صحرای زیبا، برای کمی نوازش سپاسگزار خواهید بود."
              img="/public/images/Hotelmg/TopDistination/img2.jpg"
              title="اسکاتسدیل"
            />
            <CardTopDistination
              diec="Scottsdale سرانه اسپاهای بیشتری نسبت به هر شهر دیگری در ایالات متحده دارد—بنابراین چه به دنبال جدیدترین فن‌آوری آبگرم رسانه‌ای باشید و چه به دنبال فضایی جدید و غیرعادی باشید، مطمئناً چیزی برای شما وجود دارد. این نیز چیز خوبی است - پس از گذراندن تمام روز برای گشت و گذار در صحرای زیبا، برای کمی نوازش سپاسگزار خواهید بود."
              img="/public/images/Hotelmg/TopDistination/img3.jpg"
              title="اسکاتسدیل"
            />
            <CardTopDistination
              diec="Scottsdale سرانه اسپاهای بیشتری نسبت به هر شهر دیگری در ایالات متحده دارد—بنابراین چه به دنبال جدیدترین فن‌آوری آبگرم رسانه‌ای باشید و چه به دنبال فضایی جدید و غیرعادی باشید، مطمئناً چیزی برای شما وجود دارد. این نیز چیز خوبی است - پس از گذراندن تمام روز برای گشت و گذار در صحرای زیبا، برای کمی نوازش سپاسگزار خواهید بود."
              img="/public/images/Hotelmg/TopDistination/img4.jpg"
              title="اسکاتسدیل"
            />
          </SliderWrapper>
        </Box>
      </Container>
    </Box>
  );
};

export default Hotels;
