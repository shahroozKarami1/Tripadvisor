import { Box, Container, Typography } from "@mui/material";
import InpSearch from "../../components/InpSearch/InpSearch";
import Grid from "@mui/material/Grid2";
import MainCardsRestaurant from "../../components/CompRestaurantsPage/MainCardsRestaurant";
import TitleSection from "../../components/ComHomePage/TitleSection";
import MainBanner from "../../components/MainBanner/MainBanner";
import { useMedia } from "../../context/MediaQueryContext";
import SliderWrapper from "../../components/SliderWraper/SliderWrapper";
import CardWithReviewAndPlace from "../../components/CompRestaurantsPage/CardWithReviewAndPlace";

const Restaurans = () => {
  const isXs = useMedia();
  return (
    <Box>
      <MainBanner bannerUrl={"/public/images/ResturantImgs/Banner.jpg"}>
        <Container sx={{ height: "100%" }}>
          <Grid
            container
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={2}
          >
            <InpSearch textPlaceHolder="جست و جو" isBtnSearch={false} />
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: isXs ? "1.5rem" : "2.5rem",
                textAlign: "center",
              }}
            >
              بهترین رستوران خود را پیدا کنید
            </Typography>
          </Grid>
        </Container>
      </MainBanner>
      <Container sx={{ marginTop: "4rem" }}>
        {!isXs && (
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
        )}
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="رستوران های جدید و پرطرفدار در دبی"
            isSeeAll={true}
          />
          <SliderWrapper numberOfShowSlider={4}>
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img1.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img2.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img3.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img4.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="ناهار در دبی "
            isSeeAll={true}
          />
          <SliderWrapper numberOfShowSlider={4}>
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img1.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img2.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img3.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img4.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="شام در دبی"
            isSeeAll={true}
          />
          <SliderWrapper numberOfShowSlider={4}>
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img1.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img2.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img3.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img4.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="صبحانه در دبی"
            isSeeAll={true}
          />
          <SliderWrapper numberOfShowSlider={4}>
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img1.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img2.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img3.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img4.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="خوردنی های ارزان در دبی"
            isSeeAll={true}
          />
          <SliderWrapper numberOfShowSlider={4}>
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img1.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img2.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img3.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
            <CardWithReviewAndPlace
              cardCover="/public/images/ResturantImgs/otherImgs/img4.jpg"
              countOfReviews={7500}
              link="/"
              textPlace="دبی / امارات متحده عربی"
              titleCard="رستوران بوف سیاه"
            />
          </SliderWrapper>
        </Box>
      </Container>
    </Box>
  );
};

export default Restaurans;
