import { Box, Container, Typography } from "@mui/material";
import FadeSlider from "../../components/CompTravelerChoiceHotel/FadeSlider";
import CardSlider from "../../components/CompTourism/CardSlider";
import Grid from "@mui/material/Grid2";
import SaveBtn from "../../components/SaveBtn/SaveBtn";
import ReadMore from "../../components/ReadMore/ReadMore";
import TitleSection from "../../components/ComHomePage/TitleSection";
import CardAdvice from "../../components/CompTourism/CardAdvice";
import PopularMentionsCard from "../../components/CompHotelDetails/PopularMentionsCard";
import CardHeaderSlider from "../../components/CompTourism/CardHeaderSlider";
import SliderWrapper from "../../components/SliderWraper/SliderWrapper";
import WhenToVisitCard from "../../components/CompTourism/WhenToVisitCard";
const Tourism = () => {
  return (
    <Box>
      <Container>
        <FadeSlider>
          <CardSlider cover="/public/images/Tourism/Slider/img1.jpg" link="/" />
          <CardSlider cover="/public/images/Tourism/Slider/img2.jpg" link="/" />
          <CardSlider cover="/public/images/Tourism/Slider/img3.jpg" link="/" />
        </FadeSlider>

        <Grid container alignItems={"center"}>
          <Grid size={{ md: 6 }}>
            <Box display={"flex"} flexDirection={"column"} marginTop={"2rem"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                padding={"1rem 0"}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "2.7rem" }}>
                  انگلستان , لندن
                </Typography>
                <SaveBtn />
              </Box>
              <ReadMore
                lineShow={3}
                textBody="لندن شهری وسیع در مرکز همه چیز است: هنر، تاریخ، فرهنگ. اما چیزی که آن را از دیگر مراکز اصلی متمایز می کند، محله های متمایز آن است که هر کدام حال و هوای خاص خود را دارند. یک بعدازظهر را با خانواده‌ها در کنزینگتون بگذرانید: موزه‌ها، پارک‌ها و بسیاری از کارهای مورد تأیید بچه‌ها برای انجام دادن دارد. یا برای فروشگاه‌های جذاب و نقاشی‌های دیواری خیابانی، Shoreditch هیجان‌انگیز را بررسی کنید (مناسب برای عکس‌برداری)، سپس به سوهو بروید، جایی که می‌توانید در یک میخانه یک نیم لیتری بخورید یا تا صبح به باشگاه بروید و مهمانی کنید. غذا در اینجا بسیار مهم است: بله، ماهی و چیپس وجود دارد، اما همچنین به لطف جامعه پر رونق بنگلادشی لندن (از بین نقاط مختلف در Brick Lane انتخاب کنید)، به علاوه فهرست رو به رشد رستوران‌های سرآشپز مشهور در میفر شیک همیشه چیز جدیدی در جریان است و ما در زیر عکس های بیشتری داریم."
              />
            </Box>
          </Grid>
          <Grid size={{ md: 6 }}></Grid>
        </Grid>

        <Box>
          <TitleSection isSubTitle={false} mainTitle="مشاوره سفر" />
          <Grid container spacing={2} margin={"2rem 0"}>
            <Grid size={{ md: 3 }}>
              <CardAdvice
                cover="/public/images/Tourism/CardAdvice/img1.svg"
                link="/"
                text="بهترین  زمان  برای بازدید"
              />
            </Grid>
            <Grid size={{ md: 3 }}>
              <CardAdvice
                cover="/public/images/Tourism/CardAdvice/img2.svg"
                link="/"
                text="دور زدن"
              />
            </Grid>
            <Grid size={{ md: 3 }}>
              <CardAdvice
                cover="/public/images/Tourism/CardAdvice/img3.svg"
                link="/"
                text="آداب رسوم محلی"
              />
            </Grid>
            <Grid size={{ md: 3 }}>
              <CardAdvice
                cover="/public/images/Tourism/CardAdvice/img4.svg"
                link="/"
                text="نکاتی  از حرفه ایی ها"
              />
            </Grid>
          </Grid>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={true}
            mainTitle="لندن ضروری"
            isSeeAll={false}
            subTitle="دسته ایی برای فیلتر کردن تصاویرتان انتخاب کنید"
          />
          ‌
          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{ overflowX: "scroll" }}
          >
            <PopularMentionsCard text="ساعت" />
            <PopularMentionsCard text="مرغ" />
            <PopularMentionsCard text="مسافرت" />
            <PopularMentionsCard text="شگفتانه" />
            <PopularMentionsCard text="پاستا" />
            <PopularMentionsCard text="مرزها" />
            <PopularMentionsCard text="رویکرد" />
            <PopularMentionsCard text="حومه شهر" />
            <PopularMentionsCard text="شگفتی ها" />
            <PopularMentionsCard text="تئاتر" />
            <PopularMentionsCard text="سفر" />
            <PopularMentionsCard text="غذاخوری" />
            <PopularMentionsCard text="ساعت" />
            <PopularMentionsCard text="ارائه" />
          </Box>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={false}
            isSeeAll={true}
            mainTitle="کارهایی برای انجام"
          />
          <Grid container marginTop={"2rem"}>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc: "/public/images/NextTrip/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc: "/public/images/NextTrip/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc: "/public/images/NextTrip/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img6.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img5.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img2.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            isSeeAll={true}
            mainTitle="غدا و نوشیدنی"
          />
          <Grid container marginTop={"2rem"}>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/TheBastFood/image1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/TheBastFood/image3.jpg",
                  },
                  {
                    id: 2,
                    imgSrc: "/public/images/NextTrip/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc: "/public/images/NextTrip/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc: "/public/images/NextTrip/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/TheBastFood/image5.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img5.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img2.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            isSeeAll={true}
            mainTitle="جاهایی برای ماندن"
          />
          <Grid container marginTop={"2rem"}>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc: "/public/images/NextTrip/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc: "/public/images/NextTrip/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc: "/public/images/NextTrip/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img6.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img5.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img2.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
          </Grid>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="چه زمانی  باید بازدید کرد "
            isSeeAll={false}
          />
          <SliderWrapper numberOfShowSlider={4}>
            <WhenToVisitCard
              countOfRainDay={11}
              temperature={45}
              typeOfBusy="خیلی"
              monthName="فروردین"
            />
            <WhenToVisitCard
              countOfRainDay={11}
              temperature={45}
              typeOfBusy="به طور متوسط"
              monthName="اردیبهشت"
            />
            <WhenToVisitCard
              countOfRainDay={11}
              temperature={45}
              typeOfBusy="خیلی"
              monthName="خرداد"
            />
            <WhenToVisitCard
              countOfRainDay={11}
              temperature={45}
              typeOfBusy="کمتر"
              monthName="تیر"
            />
            <WhenToVisitCard
              countOfRainDay={11}
              temperature={45}
              typeOfBusy="کمتر"
              monthName="دی"
              isDetails={true}
              details={{
                busyDetail: "حداقل شلوغی ماه",
                rainDayDetail: "مرطوب ترین",
                tempDetail: "سردترین ماه",
              }}
            />
            <WhenToVisitCard
              countOfRainDay={11}
              temperature={45}
              typeOfBusy="کمتر"
              monthName="بهمن"
            />
            <WhenToVisitCard
              countOfRainDay={11}
              temperature={45}
              typeOfBusy="کمتر"
              monthName="آذر"
            />
          </SliderWrapper>
        </Box>
      </Container>
    </Box>
  );
};

export default Tourism;
