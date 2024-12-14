import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FadeSlider from "../../components/CompTravelerChoiceHotel/FadeSlider";
import CardSliderImg from "../../components/OtherPageComp/CardSliderImg";
import { AiBtn, BetaText, CusBackOfSlider } from "../../elements/CusComponets";
import TitleSection from "../../components/ComHomePage/TitleSection";
import BadgeBoxes from "../../components/CompTravelerChoiceHotel/BadgeBoxes";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import SliderWrapper from "../../components/SliderWraper/SliderWrapper";
import CardYellowBack from "../../components/OtherPageComp/CardYellowBack";
import TourWaysCard from "../../components/ComHomePage/TourWaysCard";
import CardHeaderSlider from "../../components/CompTourism/CardHeaderSlider";
function OtherPage() {
  return (
    <Box>
      <Container>
        <Grid
          container
          marginTop={"4rem"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={8}
        >
          <Grid size={{ md: 6 }}>
            <CusBackOfSlider>
              <FadeSlider>
                <CardSliderImg img="/public/images/OtherPages/slider/img1.jpg" />
                <CardSliderImg img="/public/images/OtherPages/slider/img2.jpg" />
              </FadeSlider>
            </CusBackOfSlider>
          </Grid>
          <Grid size={{ md: 6 }}>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography sx={{ fontWeight: "bold", fontSize: "2.8rem" }}>
                کارهایی که باید در لندن انجام دهید
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.90rem",
                  padding: "0.5rem  0",
                  lineHeight: 2,
                }}
              >
                بازدید از مکان‌های سلطنتی و موزه‌ها از مهمترین کارهایی است که
                باید در لندن انجام شود - از مکان‌های دیدنی نمادین مانند کاخ
                کنزینگتون و پل برج گرفته تا موزه مشهور جهانی بریتانیا. برای
                توصیه های شخصی، محصول برنامه ریزی سفر با هوش مصنوعی ما را امتحان
                کنید.
              </Typography>

              <Box display={"flex"} alignItems={"center"} gap={1}>
                <AiBtn>
                  سفر خود را بسازید
                  <AutoAwesomeIcon sx={{ fontSize: "0.90rem" }} />
                </AiBtn>
                <Typography sx={{ fontSize: "0.7rem" }}>
                  ساخته شده با هوش مصنوعی
                </Typography>
                <BetaText>آزمایشی</BetaText>‌
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box>
          <TitleSection
            isSubTitle={true}
            mainTitle="تجربیات محبوب را کاوش کنید"
            isSeeAll={true}
            subTitle="بر اساس رتبه‌بندی‌ها و تعداد رزرو، ببینید سایر مسافران دوست دارند چه کاری انجام دهند."
          />
          <Grid container>
            <Grid size={{ md: 12 }}>
              <Box marginTop={"1rem"}>
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={true}
            mainTitle="تجربیات ضروری در لندن"
            isSeeAll={true}
            subTitle=" این تجربیات را برای نگاهی نزدیک به لندن رزرو کنید."
          />

          <SliderWrapper numberOfShowSlider={4}>
            <CardYellowBack
              CardPrice={50}
              TypeOfCard="کریسمس"
              coutOfLike="1200"
              coverCard="/public/images/Tourism/Slider/img2.jpg"
              title="تور لندن با اتوبوس شبانه با چراغ‌های کریسمس و راهنمای زنده"
            />
            <CardYellowBack
              CardPrice={50}
              TypeOfCard="کریسمس"
              coutOfLike="1200"
              coverCard="/public/images/Tourism/Slider/img4.jpg"
              title="تور لندن با اتوبوس شبانه با چراغ‌های کریسمس و راهنمای زنده"
            />
            <CardYellowBack
              CardPrice={50}
              TypeOfCard="کریسمس"
              coutOfLike="1200"
              coverCard="/public/images/Tourism/Slider/img5.jpg"
              title="تور لندن با اتوبوس شبانه با چراغ‌های کریسمس و راهنمای زنده"
            />
            <CardYellowBack
              CardPrice={50}
              TypeOfCard="کریسمس"
              coutOfLike="1200"
              coverCard="/public/images/Tourism/Slider/img8.jpg"
              title="تور لندن با اتوبوس شبانه با چراغ‌های کریسمس و راهنمای زنده"
            />
          </SliderWrapper>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="لندن سلطنتی را کاوش کنید"
            isSeeAll={false}
          />

          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/Tourism/Slider/img3.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/Tourism/Slider/img4.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/Tourism/Slider/img5.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/Tourism/Slider/img7.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="سفرهای دریایی خوش منظره تیمز"
            isSeeAll={false}
          />

          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/Tourism/Slider/img10.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/Tourism/Slider/img9.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/Tourism/Slider/img12.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/Tourism/Slider/img11.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={true}
            mainTitle="برترین جاذبه های لندن"
            subTitle="این رتبه‌بندی‌ها توسط داده‌های Tripadvisor ارائه می‌شوند—ما نظرات مسافران، رتبه‌بندی‌ها، تعداد بازدید از صفحه و مکان کاربر را در نظر می‌گیریم."
            isSeeAll={true}
          />

          <SliderWrapper numberOfShowSlider={3}>
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
          </SliderWrapper>
          <SliderWrapper numberOfShowSlider={3}>
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
          </SliderWrapper>
          <SliderWrapper numberOfShowSlider={3}>
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
          </SliderWrapper>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={true}
            mainTitle="سفرهای یک روزه"
            subTitle="از گردش های سریع گرفته تا گردش های یک روزه"
            isSeeAll={true}
          />

          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/Tourism/Slider/img10.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/Tourism/Slider/img7.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/Tourism/Slider/img3.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/Tourism/Slider/img5.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
          </SliderWrapper>
        </Box>

        <Box>
          <TitleSection isSubTitle={false} mainTitle="کریسمس" isSeeAll={true} />

          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/OtherPages/Slider/img6.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/OtherPages/Slider/img3.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/OtherPages/Slider/img4.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/OtherPages/Slider/img5.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
          </SliderWrapper>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="تور های پیاده روی"
            isSeeAll={true}
          />

          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/NextTrip/img4.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/NextTrip/img8.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/NextTrip/img3.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/NextTrip/img1.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="بلیط و پاس موزه"
            isSeeAll={true}
          />

          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/OtherPages/Slider/img9.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/OtherPages/Slider/img8.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/OtherPages/Slider/img7.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/OtherPages/Slider/img10.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="تور های  کویری"
            isSeeAll={true}
          />

          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/ThingsToDoDetails/Simllerexp/img1.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/ThingsToDoDetails/Simllerexp/img2.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/ThingsToDoDetails/Simllerexp/img3.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              img="/public/images/ThingsToDoDetails/Simllerexp/img4.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
          </SliderWrapper>
        </Box>
      </Container>

      <Box sx={{backgroundColor : "#EAFAF4"  ,  marginTop : "5rem "}} >
           This  is  fake  .... 
      </Box>
    </Box>
  );
}

export default OtherPage;
