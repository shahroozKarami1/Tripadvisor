import { Box, Container, Typography } from "@mui/material";
import InpSearch from "../../components/InpSearch/InpSearch";
import Grid from "@mui/material/Grid2";
import MainCardsRestaurant from "../../components/CompRestaurantsPage/MainCardsRestaurant";
import TitleSection from "../../components/ComHomePage/TitleSection";
import TourWaysCard from "../../components/ComHomePage/TourWaysCard";
import NextTripSection from "../../components/ComHomePage/NextTripSection";
import MainBanner from "../../components/MainBanner/MainBanner";

const Restaurans = () => {
  return (
    <Box>
      <MainBanner bannerUrl= {"/public/images/ResturantImgs/Banner.jpg"}>
        <Container sx={{ height: "100%" }}>
          <Grid
            container
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={2}
          >
            <InpSearch isBtnSearch={false} />
            <Typography
              sx={{ fontWeight: "bold", color: "#fff", fontSize: "2.5rem" }}
            >
              بهترین رستوران خود را پیدا کنید
            </Typography>
          </Grid>
        </Container>
      </MainBanner>
      <Container sx={{ marginTop: "4rem" }}>
        <Grid container spacing={3}>
          <MainCardsRestaurant
            disc="4.3 میلیون رستوران - همه چیز، از غذاهای خیابانی گرفته تا غذاهای عالی"
            logo="/public/images/ResturantImgs/cardImg1.png"
            title="بهترین  مکان ها برای خوردن رو پیدا کن"
          />
          <MainCardsRestaurant
            disc=" میلیون ها بررسی و عکس رستوران از جامعه جهانی سفر ما"
            logo="/public/images/ResturantImgs/cardImg2.png"
            title="آخرین  بازدید ها را ببینید"
          />
          <MainCardsRestaurant
            disc=" در رستوران های سراسر جهان به صورت آنلاین رزرو کنید"
            logo="/public/images/ResturantImgs/cardImg3.png"
            title="جدول رزرو ها"
          />
        </Grid>
    <Grid container  spacing={3}>
      <TitleSection  isSubTitle  ={false}  mainTitle="انتخاب مسافران: غذاخوری عالی"  isSeeAll ={true} />
      <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/ResturantImgs/BestChoice/photo1.jpg"
            />
          </Grid>
      <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/ResturantImgs/BestChoice/photo2.jpg"
            />
          </Grid>
      <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={true}
            
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/ResturantImgs/BestChoice/photo3.jpg"
            />
          </Grid>
      <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/ResturantImgs/BestChoice/photo4.jpg"
            />
          </Grid>
    </Grid>
    <Grid container>
      <TitleSection  isSubTitle  ={false}  mainTitle="رستوران ها در مقاصد برتر"  isSeeAll ={true} />
    <NextTripSection
          dataNextTripArr={[
            {
              img: "/public/images/NextTrip/img4.jpg",
              title: "آمستردام /  آلمان",
            },
            {
              img: "/public/images/NextTrip/img1.jpg",
              title: "آمستردام /  آلمان",
            },
            {
              img: "/public/images/NextTrip/img2.jpg",
              title: "آمستردام /  آلمان",
            },
            {
              img: "/public/images/NextTrip/img3.jpg",
              title: "آمستردام /  آلمان",
            },
          ]}
        />
    </Grid>
      </Container>
      
    </Box>
  );
};

export default Restaurans;
