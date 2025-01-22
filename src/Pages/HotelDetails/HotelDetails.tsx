import {
  Box,
  Button,
  Container,
  IconButton,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
  useMediaQuery,
} from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SaveBtn from "../../components/SaveBtn/SaveBtn";
import Grid from "@mui/material/Grid2";
import Slider from "react-slick";
import CardSlider from "../../components/CompHotelDetails/CardSlider";
import CardDetailsRating from "../../components/CompHotelDetails/CardDetailsRating";
import CardDetailsBox from "../../components/CompHotelDetails/CardDetailsBox";
import CardMapDetails from "../../components/CompHotelDetails/CardMapDetails";
import BigBoxDetails from "../../components/CompHotelDetails/BigBoxDetails";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InpSearch from "../../components/InpSearch/InpSearch";
import ReviewBox from "../../components/CompHotelDetails/ReviewBox";
import RateProgress from "../../components/CompHotelDetails/RateProgress";
import PopularMentionsCard from "../../components/CompHotelDetails/PopularMentionsCard";
import {
  CusCardDetails,
  CusCircleIcon,
  CusCircleOutLine,
} from "../../elements/CusComponets";
import styled from "@emotion/styled";
import TitleSection from "../../components/ComHomePage/TitleSection";
import CardNearBy from "../../components/CompHotelDetails/CardNearBy";
import MentionText from "../../components/CompHotelDetails/MentionText";
import CircleRate from "../../components/CircleRate/CircleRate";
import { Link } from "react-router-dom";
import BoxSliderDetails from "../../components/CompHotelDetails/BoxSliderDetails";
const HotelDetails = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let isXs = useMediaQuery("(max-width: 1000px)");
  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#fff",
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: `var(--primary-shadow)`,
      fontSize: "0.80rem",
      lineHeight: 2,
    },
  }));

  return (
    <Box>
      <Container>
        <Box display={"flex"} flexDirection={"column"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginTop={"2rem"}
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Typography sx={{ fontWeight: "900", fontSize: "1.6rem" }}>
                اسپیناس پالاس
              </Typography>
              <Box display={"flex"} alignItems={"center"}>
                <Typography fontSize={"0.80rem"}>تایید شده</Typography>
                <VerifiedOutlinedIcon
                  sx={{
                    fontSize: "1rem",
                    path: { color: `var(--primary-color)` },
                  }}
                />
              </Box>
            </Box>
            <Box display={"flex"} gap={1}>
              <IconButton>
                <FileUploadOutlinedIcon />
              </IconButton>
              <SaveBtn />
            </Box>
          </Box>
          <Box display={"flex"} alignItems={isXs ? "right" : "center"} gap={1} my={"1rem"} flexDirection={isXs ? "column" : "row"}>
            <CircleRate isScoreText={false} scoreNum={3.6} />
            <MentionText text="# 37.838 بازدید" />
            <MentionText text="#3 از 25 کاری که  باید در هتل اسپیناس انجام داد" />
            <MentionText text="# تهران / ایران" />
            <MentionText text="#جزو 10 هتل برتر" />
          </Box>
          <Box>
            <Link to={"/UserReview"} style={{ fontWeight: "bold", fontSize: "0.90rem", borderBottom: "1px  solid  #000" }}>نوشتن بررسی </Link>
          </Box>
        </Box>
      </Container>
      <Box bgcolor={"#F2F2F2"} sx={{ padding: "2rem  0", mt: "2rem" }}>
        <Container>


          <Grid container spacing={3} alignItems={"flex-start"} flexDirection={isXs ? "column" : "row"} >
            <Grid size={{ md: 8, xs: 12 }}>
              <Grid container spacing={1} alignItems={"center"} height={"100%"}>
                {!isXs && (
                  <Grid size={{ md: 2 }}>
                    <CardSlider
                      count={118}
                      coverImg="/public/images/HotelDetail/ImgSlider/img1.jpg"
                      isMainImg={false}
                      title="منو"
                    />
                    <CardSlider
                      count={118}
                      coverImg="/public/images/HotelDetail/ImgSlider/img1.jpg"
                      isMainImg={false}
                      title="منو"
                    />
                    <CardSlider
                      count={1965}
                      coverImg="/public/images/HotelDetail/ImgSlider/img2.jpg"
                      isMainImg={false}
                      title="غذا"
                    />
                    <CardSlider
                      count={15}
                      coverImg="/public/images/HotelDetail/ImgSlider/img3.jpg"
                      isMainImg={false}
                      title="داخلی"
                    />
                  </Grid>
                )}
                <Grid size={{ md: 10, xs: 12 }}>
                  <Slider {...settings}>
                    <CardSlider
                      coverImg="/public/images/HotelDetail/ImgSlider/bigImg.jpg"
                      isMainImg={true}
                    />
                    <CardSlider
                      coverImg="/public/images/HotelDetail/ImgSlider/bigImg2.jpg"
                      isMainImg={true}
                    />
                    <CardSlider
                      coverImg="/public/images/HotelDetail/ImgSlider/bigImg.jpg"
                      isMainImg={true}
                    />
                  </Slider>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ md: 4, xs: 12 }}>
              <BoxSliderDetails />
            </Grid>

          </Grid>

          <Grid container spacing={2} marginTop={"5rem"}>
            <Grid size={{ md: 4, xs: 12 }}>
              <CardDetailsRating />
            </Grid>
            <Grid size={{ md: 4, xs: 12 }}>
              <CardDetailsBox />
            </Grid>
            <Grid size={{ md: 4, xs: 12 }}>
              <CardMapDetails />
            </Grid>
          </Grid>
          <Box sx={{ marginTop: "3rem" }}>
            <BigBoxDetails />
          </Box>
          <Box marginTop={"1rem"}>
            <CusCardDetails>
              <Grid container spacing={5}>
                <Grid size={{ md: 8 }}>
                  <InpSearch
                    isBtnSearch={false}
                    textPlaceHolder="جست و جو..."
                  />

                  <Box sx={{ margin: "1rem 0" }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "0.90rem",
                        padding: "0.5rem  0",
                      }}
                    >
                      اشاره های محبوب
                    </Typography>
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
                    <PopularMentionsCard text="منوی دوره" />
                    <PopularMentionsCard text="تجربه منحصر به فرد" />
                    <PopularMentionsCard text="یک بار در زندگی" />
                    <PopularMentionsCard text="کل تجربه" />
                    <PopularMentionsCard text="خاویار" />
                    <PopularMentionsCard text="آشپزخانه" />
                  </Box>
                  <ReviewBox
                    countContributions={22}
                    date="18 خرداد"
                    likeCount={5}
                    name="محمد سعید احمدی  کوپایی"
                    profile="/public/images//NextTrip/img1.jpg"
                    reviewBody="من و خانمم اصلا راضی نبودیم با این   که غذاخوری‌هایی با تجربه‌های شگفت‌انگیز غذایی داشتیم، از رفتن به کباب سرای مسلم برای جشن سالگرد ازدواجمان هیجان‌زده بودیم.
متأسفانه ما بسیار ناامید شدیم. 22 دوره که عموماً فاقد طعم بودند، به حداقل مهارت پخت و پز نیاز داشتند و عمدتاً فاقد مواد اولیه با کیفیت بودند.
مهمتر از آن ما احساس می کردیم که بسیار عجله داریم. سرویس نه تنها در نقاطی آشفته بود، بلکه شخصی دائماً پشت میز بود، اما به ندرت همان فرد بود. من بسیاری از ناهار سه ساعته تنبل را با تنها 4 دوره تجربه کرده ام. این 22 دوره انجام شد و در 2.5 ساعت گردگیری شد.
ما با پخت شراب رفتیم و این تا حدی بر غذا برتری داشت. وقتی نزدیک به 1000 یورو برای تجربه در موگاریتز (از جمله پرواز شراب) پرداخت می‌کنید - فکر نمی‌کنم غیرمنطقی باشد که انتظار داشته باشیم این تجربه باشکوه باشد. نزدیک نبود."
                    title="ناامید"
                    typeOfFamilly="زوج"
                  />
                  <ReviewBox
                    countContributions={22}
                    date="18 خرداد"
                    likeCount={5}
                    name="محمد سعید احمدی  کوپایی"
                    profile="/public/images//NextTrip/img1.jpg"
                    reviewBody="من و خانمم که به خود اعتراف می‌کردم که غذاخوری‌هایی با تجربه‌های شگفت‌انگیز غذایی داشتیم، از رفتن به موگاریتز برای جشن سالگرد ازدواجمان هیجان‌زده بودیم.
متأسفانه ما بسیار ناامید شدیم. 22 دوره که عموماً فاقد طعم بودند، به حداقل مهارت پخت و پز نیاز داشتند و عمدتاً فاقد مواد اولیه با کیفیت بودند.
مهمتر از آن ما احساس می کردیم که بسیار عجله داریم. سرویس نه تنها در نقاطی آشفته بود، بلکه شخصی دائماً پشت میز بود، اما به ندرت همان فرد بود. من بسیاری از ناهار سه ساعته تنبل را با تنها 4 دوره تجربه کرده ام. این 22 دوره انجام شد و در 2.5 ساعت گردگیری شد.
ما با پخت شراب رفتیم و این تا حدی بر غذا برتری داشت. وقتی نزدیک به 1000 یورو برای تجربه در موگاریتز (از جمله پرواز شراب) پرداخت می‌کنید - فکر نمی‌کنم غیرمنطقی باشد که انتظار داشته باشیم این تجربه باشکوه باشد. نزدیک نبود."
                    title="ناامید"
                    typeOfFamilly="زوج"
                  />
                  <ReviewBox
                    countContributions={22}
                    date="18 خرداد"
                    likeCount={5}
                    name="محمد سعید احمدی  کوپایی"
                    profile="/public/images//NextTrip/img1.jpg"
                    reviewBody="من و خانمم که به خود اعتراف می‌کردم که غذاخوری‌هایی با تجربه‌های شگفت‌انگیز غذایی داشتیم، از رفتن به موگاریتز برای جشن سالگرد ازدواجمان هیجان‌زده بودیم.
متأسفانه ما بسیار ناامید شدیم. 22 دوره که عموماً فاقد طعم بودند، به حداقل مهارت پخت و پز نیاز داشتند و عمدتاً فاقد مواد اولیه با کیفیت بودند.
مهمتر از آن ما احساس می کردیم که بسیار عجله داریم. سرویس نه تنها در نقاطی آشفته بود، بلکه شخصی دائماً پشت میز بود، اما به ندرت همان فرد بود. من بسیاری از ناهار سه ساعته تنبل را با تنها 4 دوره تجربه کرده ام. این 22 دوره انجام شد و در 2.5 ساعت گردگیری شد.
ما با پخت شراب رفتیم و این تا حدی بر غذا برتری داشت. وقتی نزدیک به 1000 یورو برای تجربه در موگاریتز (از جمله پرواز شراب) پرداخت می‌کنید - فکر نمی‌کنم غیرمنطقی باشد که انتظار داشته باشیم این تجربه باشکوه باشد. نزدیک نبود."
                    title="ناامید"
                    typeOfFamilly="زوج"
                  />
                  <ReviewBox
                    countContributions={22}
                    date="18 خرداد"
                    likeCount={5}
                    name="محمد سعید احمدی  کوپایی"
                    profile="/public/images//NextTrip/img1.jpg"
                    reviewBody="من و خانمم که به خود اعتراف می‌کردم که غذاخوری‌هایی با تجربه‌های شگفت‌انگیز غذایی داشتیم، از رفتن به موگاریتز برای جشن سالگرد ازدواجمان هیجان‌زده بودیم.
متأسفانه ما بسیار ناامید شدیم. 22 دوره که عموماً فاقد طعم بودند، به حداقل مهارت پخت و پز نیاز داشتند و عمدتاً فاقد مواد اولیه با کیفیت بودند.
مهمتر از آن ما احساس می کردیم که بسیار عجله داریم. سرویس نه تنها در نقاطی آشفته بود، بلکه شخصی دائماً پشت میز بود، اما به ندرت همان فرد بود. من بسیاری از ناهار سه ساعته تنبل را با تنها 4 دوره تجربه کرده ام. این 22 دوره انجام شد و در 2.5 ساعت گردگیری شد.
ما با پخت شراب رفتیم و این تا حدی بر غذا برتری داشت. وقتی نزدیک به 1000 یورو برای تجربه در موگاریتز (از جمله پرواز شراب) پرداخت می‌کنید - فکر نمی‌کنم غیرمنطقی باشد که انتظار داشته باشیم این تجربه باشکوه باشد. نزدیک نبود."
                    title="ناامید"
                    typeOfFamilly="زوج"
                  />
                </Grid>
                <Grid size={{ md: 4, xs: 12 }}>
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                      3.5
                    </Typography>
                    <Box display={"flex"} alignItems={"center"}>
                      <CusCircleIcon />
                      <CusCircleIcon />
                      <CusCircleOutLine />
                      <CusCircleOutLine />
                      <CusCircleOutLine />
                    </Box>
                    <Typography sx={{ fontSize: "0.90rem" }}>
                      1,405دیدگاه
                    </Typography>
                  </Box>

                  <Box display={"flex"} flexDirection={"column"}>
                    <RateProgress
                      countProgress={700}
                      progressValue={100}
                      topic="فوق العاده"
                    />
                    <RateProgress
                      countProgress={232}
                      progressValue={50}
                      topic="خیلی خوب"
                    />
                    <RateProgress
                      countProgress={153}
                      progressValue={40}
                      topic="میانگین"
                    />
                    <RateProgress
                      countProgress={164}
                      progressValue={64}
                      topic="ضعیف"
                    />
                    <RateProgress
                      countProgress={402}
                      progressValue={70}
                      topic="افتضاح"
                    />
                  </Box>
                </Grid>
              </Grid>
            </CusCardDetails>
          </Box>
          <Box sx={{ marginTop: "1rem" }}>
            <Grid container justifyContent={"flex-start"}>
              <Grid size={{ md: 9 }}>
                <CusCardDetails>
                  <Box display={"flex"} alignItems={"center"}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                      بهترین نزدیک ها
                    </Typography>
                    <LightTooltip
                      title="ما این هتل‌ها، رستوران‌ها و جاذبه‌ها را با متعادل کردن نظرات اعضای خود و میزان نزدیکی آنها به این مکان رتبه‌بندی می‌کنیم."
                      arrow
                    >
                      <IconButton>
                        <ErrorOutlineIcon />
                      </IconButton>
                    </LightTooltip>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    marginTop={"2rem"}
                  >
                    <img
                      src="/public/images/HotelDetail/bigMap.png"
                      alt=""
                      className="rounded-lg  w-full"
                    />
                  </Box>

                  <Grid container>
                    <TitleSection
                      isSubTitle={false}
                      isSeeAll={true}
                      mainTitle="بهترین هتل ها در نزدیکی"
                    />
                    <Grid size={{ md: 6 }}>
                      <CardNearBy
                        countOfLike={124}
                        coverCard="/public/images/Hotelmg/TopDistination/img2.jpg"
                        linkCard="/"
                        mileAway={4.6}
                        titleCard="هتل قو تهران"
                      />
                      <CardNearBy
                        countOfLike={124}
                        coverCard="/public/images/Hotelmg/TopDistination/img3.jpg"
                        linkCard="/"
                        mileAway={4.6}
                        titleCard="هتل قو تهران"
                      />
                    </Grid>
                    <Grid size={{ md: 6 }}>
                      <CardNearBy
                        countOfLike={124}
                        coverCard="/public/images/Hotelmg/TopDistination/img4.jpg"
                        linkCard="/"
                        mileAway={4.6}
                        titleCard="هتل قو تهران"
                      />
                      <CardNearBy
                        countOfLike={124}
                        coverCard="/public/images/Hotelmg/TopDistination/img1.jpg"
                        linkCard="/"
                        mileAway={4.6}
                        titleCard="هتل قو تهران"
                      />
                    </Grid>
                  </Grid>
                </CusCardDetails>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HotelDetails;
