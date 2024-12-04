import { Box, Button, Container, List, Typography } from "@mui/material";
import { CusCircleIcon, DarkOverlay } from "../../elements/CusComponets";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid2";
import FadeSlider from "../../components/CompTravelerChoiceHotel/FadeSlider";
import CardSlider from "../../components/CompTravelerChoiceHotel/CardSlider";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BadgeBoxes from "../../components/CompTravelerChoiceHotel/BadgeBoxes";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import PoolIcon from "@mui/icons-material/Pool";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RangeScore from "../../components/CompTravelerChoiceHotel/RangeScore";
import SliderWrapper from "../../components/SliderWraper/SliderWrapper";
import ReadMore from "../../components/ReadMore/ReadMore";
import CardComment from "../../components/CompTravelerChoiceHotel/CardComment";
const TravelersChoiceHotels = () => {
  const CusTPTitle = styled(Typography)({
    color: "#fff",
    fontWeight: "bold",
  });
  const CusInnerMainBanner = styled(Box)({
    position: "absolute",
    bottom: 100,
    right: 150,
    display: "flex",
    alignItems: "center",
  });

  return (
    <Box>
      <Box position={"relative"}>
        <DarkOverlay />
        <img
          src="/public/images/BestChoiceDetails/Banner/MainBanner.png"
          alt=""
        />
        <CusInnerMainBanner>
          <img
            src="/public/images/BestChoiceDetails/Banner/logo.png"
            width={"100px"}
            className="ml-5"
            alt=""
          />
          <Box display={"flex"} flexDirection={"column"}>
            <CusTPTitle sx={{ fontSize: "2rem" }}>
              جوایز انتخاب مسافران
            </CusTPTitle>
            <CusTPTitle sx={{ fontSize: "3rem" }}>
              بهترین از بهترین هتل ها
            </CusTPTitle>
          </Box>
        </CusInnerMainBanner>
      </Box>
      <Container>
        <Grid container sx={{ borderBottom: "3px  solid #F2B203" }}>
          <Grid size={{ md: 8 }}>
            <Box sx={{ margin: "2rem  0" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  padding: "1rem  0",
                  fontSize: "2rem",
                }}
              >
                بالا - جهان
              </Typography>
              <Typography sx={{ fontSize: "0.80rem" }}>
                وقتی به هتلی فکر می‌کنید که همه جعبه‌ها (خدمات عالی، اتاق‌های
                راحت، آثار) را بررسی می‌کند، احتمالاً یکی از این نقاط برنده است.
              </Typography>
              <Typography sx={{ fontSize: "0.80rem", marginTop: "1rem" }}>
                عنوان Best of the Best Awards انتخاب مسافران، بالاترین سطح برتری
                در سفر را جشن می گیرد. این جایزه به کسانی اعطا می شود که در یک
                دوره 12 ماهه حجم بالایی از بررسی ها و نظرات فراتر و فراتر از
                جامعه Tripadvisor را دریافت کنند. از 8 میلیون لیست ما، کمتر از
                1٪ به این نقطه عطف دست یافته اند.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box margin={"3rem  0"}>
          <Box sx={{ bgcolor: "#F2F1EC", borderRadius: "1rem" }}>
            <FadeSlider>
              <CardSlider
                cover="/public/images/BestChoiceDetails/FadeSliderImgs/img1.jpg"
                link="/"
              />
              <CardSlider
                cover="/public/images/BestChoiceDetails/FadeSliderImgs/img2.jpg"
                link="/"
              />
              <CardSlider
                cover="/public/images/BestChoiceDetails/FadeSliderImgs/img3.jpg"
                link="/"
              />
            </FadeSlider>
            <Box sx={{ padding: "2rem" }}>
              <Grid container spacing={2}>
                <Grid size={{ md: 7 }}>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
                      هتل اسپیناس پالاس
                    </Typography>
                    ‌
                    <Box display={"flex"} gap={1}>
                      <FmdGoodOutlinedIcon />
                      <Typography sx={{ borderBottom: "2px  solid  #000" }}>
                        ایران - تهران
                      </Typography>
                    </Box>
                    <Box display={"flex"} gap={1} marginTop={"1rem"}>
                      <AutoAwesomeIcon />
                      <ReadMore
                        lineShow={3}
                        textBody={
                          "هتل کولین دو فرانس در محیطی زیبا قرار دارد، جایی که ترکیبی از پیچیدگی و راحتی را خواهید یافت. اتاق‌ها با تخت‌های بزرگ و امکانات رفاهی L'Occitane احساس لوکسی دارند، در حالی که سوئیت امپریال لذت‌بخش‌تر است. استراحت در استخر آب گرم، اسپا، سونا، و اتاق بخار در انتظار شما است یا در مرکز تناسب اندام تمرین کنید. موسیقی زنده پیانو را در هنگام صبحانه دوست خواهید داشت و آیا به شراب گازدار رایگان اشاره کردیم؟ طراحی هیجان انگیز و فضای گرم هتل، آن را به انتخابی منحصربفرد برای یک استراحت زیبا و در عین حال دنج تبدیل کرده است."
                        }
                      />
                    </Box>
                    <Typography
                      sx={{ fontWeight: "bold", fontSize: "0.80rem" }}
                    >
                      مسافران بیشتر عاشق چی هستند؟
                    </Typography>
                    ‌
                    <Box display={"flex"} gap={1}>
                      <BadgeBoxes icon={<DinnerDiningIcon />} text="رستوران" />
                      <BadgeBoxes icon={<SpaOutlinedIcon />} text="آبگرم" />
                      <BadgeBoxes icon={<PoolIcon />} text="استخر گرم" />
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ md: 5 }}>
                  <Box display={"flex"} justifyContent={"flex-end"}>
                    <Button
                      sx={{
                        bgcolor: "#fff",
                        border: "1px  solid #000",
                        padding: "0.5rem  1rem",
                        borderRadius: "2rem",
                      }}
                    >
                      <FavoriteBorderOutlinedIcon />
                      <Typography
                        sx={{ fontWeight: "bold", fontSize: "0.90rem" }}
                      >
                        ذخیره
                      </Typography>
                    </Button>
                  </Box>
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                      5.0
                    </Typography>
                    <Box display={"flex"}>
                      <CusCircleIcon />
                      <CusCircleIcon />
                      <CusCircleIcon />
                      <CusCircleIcon />
                      <CusCircleIcon />
                    </Box>
                    <Typography
                      sx={{ fontWeight: "light", fontSize: "0.90rem" }}
                    >
                      4.931 بازدید
                    </Typography>
                  </Box>
                  <List
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      marginTop: "1rem",
                    }}
                  >
                    <RangeScore score={5.0} topic="موقعیت" />
                    <RangeScore score={4.1} topic="پاکیزگی" />
                    <RangeScore score={4.6} topic="سرویس" />
                    <RangeScore score={4.8} topic="ارزش" />
                  </List>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <SliderWrapper numberOfShowSlider={3}>
          <CardComment
            CommentBody="خدمات بی عیب و نقص، امکانات تمیز، تخت خواب های شیک با بالش های انتخابی شما، غذای عالی، می توانم ادامه دهم. از لحظه ورود تا خروج احساس می کنید یک VIP هستید. من واقعا از اقامتم لذت بردم، احتمالا یکی از بهترین هتل هایی که تا به حال در آن اقامت داشته ام."
            date="نوامبر 2024"
            email="@shahroozKarami"
            profile="/public/images/NextTrip/img1.jpg"
          />
          <CardComment
            CommentBody="خدمات بی عیب و نقص، امکانات تمیز، تخت خواب های شیک با بالش های انتخابی شما، غذای عالی، می توانم ادامه دهم. از لحظه ورود تا خروج احساس می کنید یک VIP هستید. من واقعا از اقامتم لذت بردم، احتمالا یکی از بهترین هتل هایی که تا به حال در آن اقامت داشته ام."
            date="نوامبر 2024"
            email="@shahroozKarami"
            profile="/public/images/NextTrip/img1.jpg"
          />
          <CardComment
            CommentBody="خدمات بی عیب و نقص، امکانات تمیز، تخت خواب های شیک با بالش های انتخابی شما، غذای عالی، می توانم ادامه دهم. از لحظه ورود تا خروج احساس می کنید یک VIP هستید. من واقعا از اقامتم لذت بردم، احتمالا یکی از بهترین هتل هایی که تا به حال در آن اقامت داشته ام."
            date="نوامبر 2024"
            email="@shahroozKarami"
            profile="/public/images/NextTrip/img1.jpg"
          />
        </SliderWrapper>
      </Container>
    </Box>
  );
};

export default TravelersChoiceHotels;
