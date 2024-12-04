import { Box, Container, Pagination, Typography } from "@mui/material";
import MainSlider from "../../components/CompArticles/MainSlider";
import CardSlider from "../../components/CompArticles/CardSlider";
import Grid from "@mui/material/Grid2";
import CardInsidetext from "../../components/CompArticles/CardInsidetext";
import CardHorizontal from "../../components/CompArticles/CardHorizontal";
import TitleSection from "../../components/ComHomePage/TitleSection";
import MoreExploreCard from "../../components/ComHomePage/MoreExploreCard";
import SliderWrapper from "../../components/SliderWraper/SliderWrapper";
import CardTextFooter from "../../components/CompArticles/CardTextFooter";
import TitleCenter from "../../components/TitleCenter/TitleCenter";
function Article() {
  return (
    <Box>
      <Container maxWidth={"xl"}>
        <MainSlider>
          <CardSlider
            disc="به علاوه، کجا می توانید آن را برای خودتان در سراسر ایالات متحده ببینید."
            poster="/public/images/Articles/MainSlider/img1.jpg"
            title="چرا باید برای برداشت روغن زیتون در پاییز امسال سفر کنید؟"
          />
          <CardSlider
            disc="به علاوه، کجا می توانید آن را برای خودتان در سراسر ایالات متحده ببینید."
            poster="/public/images/Articles/MainSlider/img2.jpg"
            title="چرا باید برای برداشت روغن زیتون در پاییز امسال سفر کنید؟"
          />
          <CardSlider
            disc="به علاوه، کجا می توانید آن را برای خودتان در سراسر ایالات متحده ببینید."
            poster="/public/images/Articles/MainSlider/img1.jpg"
            title="چرا باید برای برداشت روغن زیتون در پاییز امسال سفر کنید؟"
          />
        </MainSlider>
      </Container>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          marginTop={"2rem"}
          gap={2}
        >
          <TitleCenter
            isSubTitle={true}
            subTitle="غذا و نوشیدنی
در بهترین رستوران ها و بارها، غذاهای خیابانی، و نقاط داغ آشپزی در سراسر جهان جستجو کنید. چه کسی گرسنه است؟"
            title="غذا و نوشیدنی"
          />
        </Box>

        <Grid container sx={{ marginTop: "2rem" }} spacing={2}>
          <Grid size={{ md: 3 }}>
            <CardInsidetext
              cover="/public/images/Articles/imgSectionOne/smallImg1.jpg"
              link="/"
              text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
            />
            <CardInsidetext
              cover="/public/images/Articles/imgSectionOne/smallImg2.jpg"
              link="/"
              text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
            />
          </Grid>
          <Grid size={{ md: 9 }}>
            <CardInsidetext
              cover="/public/images/Articles/imgSectionOne/BigImg.jpg"
              link="/"
              text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
              isBigImage={true}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "2rem" }} spacing={2}>
          <Grid size={{ md: 4 }}>
            <CardHorizontal
              link="/"
              coverCard="/public/images/Articles/CardHorizontal/img1.jpg"
              text="چرا باید برای برداشت روغن زیتون در پاییز امسال سفر کنید؟"
            />
          </Grid>
          <Grid size={{ md: 4 }}>
            <CardHorizontal
              link="/"
              coverCard="/public/images/Articles/CardHorizontal/img2.jpg"
              text="بهترین مکان برای اقامت در دوبلین"
            />
          </Grid>
          <Grid size={{ md: 4 }}>
            <CardHorizontal
              link="/"
              coverCard="/public/images/Articles/CardHorizontal/img3.jpg"
              text="چرا باید برای برداشت روغن زیتون در پاییز امسال سفر کنید؟"
            />
          </Grid>
        </Grid>

        <TitleSection
          isSubTitle={true}
          mainTitle="راهنمای شما برای پاییز"
          isSeeAll={false}
          subTitle="چگونه فصل را در خانه و دور انجام دهیم"
        />
        <SliderWrapper numberOfShowSlider={3}>
          <MoreExploreCard
            disc="7 بهترین سفر با قطار پاییزی در ایالات متحده"
            img="/public/images/Articles/CardHeartIcon/img1.jpg"
          />
          <MoreExploreCard
            disc="7 بهترین سفر با قطار پاییزی در ایالات متحده"
            img="/public/images/Articles/CardHeartIcon/img2.jpg"
          />
          <MoreExploreCard
            disc="7 بهترین سفر با قطار پاییزی در ایالات متحده"
            img="/public/images/Articles/CardHeartIcon/img3.jpg"
          />
        </SliderWrapper>
        <TitleCenter
          isSubTitle={true}
          subTitle="هیجان‌انگیزترین مقاصد، تجربیات، جواهرات پنهان و علاقه‌مندی‌های مسافران برای بررسی هم‌اکنون."
          title="مکان هایی برای بازدید"
        />
        <Grid container spacing={1}   justifyContent={"center"}  alignItems={"center"}>
          <Grid size={{ md: 4 }}>
            <Grid container  spacing={1} >
              <Grid size={{ md: 6 }}  >
                <CardInsidetext
                  cover="/public/images/Articles/PlaceToVisitImg/img1.jpg"
                  link="/"
                  text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
                  isBigImage={false}
                />
              </Grid>
              <Grid size={{ md: 6 }}>
                <CardInsidetext
                  cover="/public/images/Articles/PlaceToVisitImg/img2.jpg"
                  link="/"
                  text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
                  isBigImage={false}
                />
              </Grid>
              <Grid size={{ md: 12 }}>
                <CardInsidetext
                  cover="/public/images/Articles/PlaceToVisitImg/img7.jpg"
                  link="/"
                  text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
                  isBigImage={true}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ md: 2 }}  display={"flex"}  height={"100%"}  >
            <CardInsidetext
              cover="/public/images/Articles/PlaceToVisitImg/img4.jpg"
              link="/"
              text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
              isBigImage={false}
            />
          </Grid>
          <Grid size={{ md: 2 }}>
            <CardInsidetext
              cover="/public/images/Articles/PlaceToVisitImg/img5.jpg"
              link="/"
              text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
              isBigImage={false}
            />
            <CardInsidetext
              cover="/public/images/Articles/PlaceToVisitImg/img5.jpg"
              link="/"
              text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
              isBigImage={false}
            />
          </Grid>
          <Grid size={{ md: 2 }}>
            <Box>
              <CardInsidetext
                cover="/public/images/Articles/PlaceToVisitImg/img6.jpg"
                link="/"
                text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
                isBigImage={false}
              />
            </Box>
          </Grid>
        </Grid>
        <TitleSection
          isSubTitle={true}
          mainTitle={`برترین برنامه های سفر "هیجانات در فضای باز".`}
          isSeeAll={false}
          subTitle="تجربیات فراگیر رهبران محلی خبره سفر بعدی خود را با Intrepid الهام بخش کنید."
        />

        <SliderWrapper numberOfShowSlider={3}>
          <CardTextFooter
            link="/"
            img="/public/images/Articles/interpidCard/img1.jpg"
            subTitle="از پرو تا ژاپن، محبوب‌ترین برنامه‌های سفر مشترک Intrepid را برای مسافران انفرادی کشف کنید."
            title="برترین ماجراهای «انفرادی بروید، با هم سفر کنید»."
          />
          <CardTextFooter
            link="/"
            img="/public/images/Articles/interpidCard/img2.jpg"
            subTitle="از پرو تا ژاپن، محبوب‌ترین برنامه‌های سفر مشترک Intrepid را برای مسافران انفرادی کشف کنید."
            title="برترین ماجراهای «انفرادی بروید، با هم سفر کنید»."
          />
          <CardTextFooter
            link="/"
            img="/public/images/Articles/interpidCard/img3.jpg"
            subTitle="از پرو تا ژاپن، محبوب‌ترین برنامه‌های سفر مشترک Intrepid را برای مسافران انفرادی کشف کنید."
            title="برترین ماجراهای «انفرادی بروید، با هم سفر کنید»."
          />
        </SliderWrapper>

        <TitleSection
          isSubTitle={true}
          mainTitle="پاسپورت کلیدها کیف پول"
          isSeeAll={false}
          subTitle="مکان جدیدی را از روی صندلی راننده ببینید"
        />
        <SliderWrapper numberOfShowSlider={3}>
          <MoreExploreCard
            disc="7 بهترین سفر با قطار پاییزی در ایالات متحده"
            img="/public/images/Articles/CardHeartIcon/img1.jpg"
          />
          <MoreExploreCard
            disc="7 بهترین سفر با قطار پاییزی در ایالات متحده"
            img="/public/images/Articles/CardHeartIcon/img2.jpg"
          />
          <MoreExploreCard
            disc="7 بهترین سفر با قطار پاییزی در ایالات متحده"
            img="/public/images/Articles/CardHeartIcon/img3.jpg"
          />
        </SliderWrapper>

        <TitleCenter isSubTitle={false} title="به کاوش ادامه دهید" />
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          <Grid size={{ md: 10 }}>
            <Grid container spacing={2}>
              <Grid size={{ md: 4 }}>
                <CardInsidetext
                  cover="/public/images/TheBestDistination/image1.jpg"
                  link="/"
                  text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
                />
                <CardInsidetext
                  cover="/public/images/TheBestDistination/image2.jpg"
                  link="/"
                  text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
                />
                <CardInsidetext
                  cover="/public/images/TheBestDistination/image3.jpg"
                  link="/"
                  text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
                />
              </Grid>
              <Grid size={{ md: 4 }}>
                <CardInsidetext
                  cover="/public/images/NextTrip/img1.jpg"
                  link="/"
                  text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
                />
                <CardInsidetext
                  cover="/public/images/NextTrip/img2.jpg"
                  link="/"
                  text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
                />
                <CardInsidetext
                  cover="/public/images/NextTrip/img3.jpg"
                  link="/"
                  text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
                />
              </Grid>
              <Grid size={{ md: 4 }}>
                <CardInsidetext
                  cover="/public/images/NextTrip/img4.jpg"
                  link="/"
                  text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
                />
                <CardInsidetext
                  cover="/public/images/NextTrip/img5.jpg"
                  link="/"
                  text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
                />
                <CardInsidetext
                  cover="/public/images/Articles/imgSectionOne/smallImg2.jpg"
                  link="/"
                  text="چگونه در فلورانس واقعاً خوب غذا بخوریم - فراتر از نقاط توریستی."
                />
              </Grid>
            </Grid>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              marginTop={"2rem"}
              sx={{ direction: "ltr" }}
            >
              <Pagination count={10} color="primary" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Article;
