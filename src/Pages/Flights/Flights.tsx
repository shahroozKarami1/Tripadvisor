import { Box, Container, Typography } from "@mui/material";
import MainBanner from "../../components/MainBanner/MainBanner";
import Grid from "@mui/material/Grid2";
import InpSearch from "../../components/InpSearch/InpSearch";
import PlanCard from "../../components/CompThingsToDo/PlanCard";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import ReviewsCard from "../../components/CompFlightPage/ReviewsCard";
import Paragraph from "../../components/CompFlightPage/Paragraph";
const Flights = () => {
  return (
    <Box>
      <MainBanner bannerUrl="/public/images/FlightsImg/Banner.png">
        <Container sx={{ height: "100%" }}>
          <Grid
            container
            height={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={2}
          >
            <Grid size={{ md: 12 }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: "2.5rem",
                  textAlign: "center",
                  marginBottom: "3rem",
                }}
              >
                بهترین پرواز را با قیمت مناسب پیدا کنید{" "}
              </Typography>
              <InpSearch isBtnSearch={false} />
            </Grid>
          </Grid>
        </Container>
      </MainBanner>

      <Container>
        <Grid container sx={{ marginTop: "2rem " }}>
          <PlanCard
            disc="قیمت پرواز صدها شرکت هواپیمایی و سایت مسافرتی را در یک مکان مقایسه کنید."
            icon={<LocalOfferOutlinedIcon />}
            title="بهترین معاملات را دریافت کنید"
          />
          <PlanCard
            disc="فیلتر برای خطوط هوایی دلخواه، زمان پرواز، قیمت مورد نظر و موارد دیگر."
            icon={<RestoreOutlinedIcon />}
            title="نتایج خود را سفارشی کنید"
          />
          <PlanCard
            disc="استفاده از ما کاملاً رایگان است—هیچ هزینه یا هزینه پنهانی در قیمت پرواز وجود ندارد."
            icon={<AccountBalanceWalletOutlinedIcon />}
            title="بدون نگرانی جستجو کنید"
          />
        </Grid>

        <Grid container>
          <Grid size={{ md: 12 }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
              sx={{
                bgcolor: "#F2F1EC",
                borderRadius: "1rem",
                marginTop: "3rem",
                padding: "2rem",
              }}
            >
              <Box
                sx={{
                  bgcolor: `var(--primary-color)`,
                  padding: "0.5rem",
                  borderRadius: "50%",
                }}
              >
                <AssistantOutlinedIcon />
              </Box>
              <Typography sx={{ fontWeight: "bold" ,  fontSize  : "1.2rem" }}>
                نظرات مسافران را ببینید
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "0.90rem",
                  margin: "0  2rem",
                }}
              >
                خدمات مشتری، فضای پا، وعده‌های غذایی - در بررسی‌های خطوط هوایی
                خود بدانید مسافران چه چیزی را دوست داشتند (یا دوست نداشتند). همه
                خطوط هوایی را مرور کنید
              </Typography>
              <Grid size={{ md: 7 }} sx={{ marginTop: "0.5rem" }}>
                <InpSearch isBtnSearch={false} />
              </Grid>
              <Grid container spacing={1} sx={{ marginTop: "1rem" }}>
                <Grid size={{ md: 3 }}>
                  <ReviewsCard
                    comment=" من نمی توانم به اندازه کافی از شرکت هواپیمایی امریکن ایرلاینز به خاطر همه حمایت هایشان در پرواز از لندن به فیلادلفیا تشکر کنم."
                    link="/"
                    profile="/public/images/FlightsImg/profileSample.jpg"
                    score={63.0}
                    title="خطوط هوایی آمریکا"
                    topRateIn="رتبه برتر در خدمات مشتری (به عنوان مثال نگرش، مراقبت، کمک)"
                  />
                </Grid>
                <Grid size={{ md: 3 }}>
                  <ReviewsCard
                    comment=" من نمی توانم به اندازه کافی از شرکت هواپیمایی امریکن ایرلاینز به خاطر همه حمایت هایشان در پرواز از لندن به فیلادلفیا تشکر کنم."
                    link="/"
                    profile="/public/images/FlightsImg/profileSample.jpg"
                    score={63.0}
                    title="خطوط هوایی آمریکا"
                    topRateIn="رتبه برتر در خدمات مشتری (به عنوان مثال نگرش، مراقبت، کمک)"
                  />
                </Grid>
                <Grid size={{ md: 3 }}>
                  <ReviewsCard
                    comment=" من نمی توانم به اندازه کافی از شرکت هواپیمایی امریکن ایرلاینز به خاطر همه حمایت هایشان در پرواز از لندن به فیلادلفیا تشکر کنم."
                    link="/"
                    profile="/public/images/FlightsImg/profileSample.jpg"
                    score={63.0}
                    title="خطوط هوایی آمریکا"
                    topRateIn="رتبه برتر در خدمات مشتری (به عنوان مثال نگرش، مراقبت، کمک)"
                  />
                </Grid>
                <Grid size={{ md: 3 }}>
                  <ReviewsCard
                    comment=" من نمی توانم به اندازه کافی از شرکت هواپیمایی امریکن ایرلاینز به خاطر همه حمایت هایشان در پرواز از لندن به فیلادلفیا تشکر کنم."
                    link="/"
                    profile="/public/images/FlightsImg/profileSample.jpg"
                    score={63.0}
                    title="خطوط هوایی آمریکا"
                    topRateIn="رتبه برتر در خدمات مشتری (به عنوان مثال نگرش، مراقبت، کمک)"
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Grid container>
          <Paragraph
            header="بهترین معاملات پرواز"
            textBody="دیگر نیازی به خرید از چندین سایت نیست. ما قبلاً این کار را با جستجوی صدها پرواز ارزان برای شما انجام داده‌ایم - جستجوی خطوط هوایی ممتاز، شرکت‌های هواپیمایی ارزان قیمت و بزرگترین آژانس‌های مسافرتی آنلاین برای بهترین معاملات. ما حتی تاریخ‌های جایگزین و فرودگاه‌های اطراف را بررسی می‌کنیم تا به شما در صرفه‌جویی در هزینه، زمان و حتی سلامت عقل در بلیط‌های هواپیمایی کمک کنیم."
          />
          <Paragraph
            header="فیلترهای جستجوی پرواز"
            textBody="فیلترهای ما به شما کمک می کند تا به راحتی پرواز ارزان قیمت مناسب خود را پیدا کنید. پروازهای مستقیم بدون توقف را پیدا کنید، از زمان‌های حرکت زودهنگام اجتناب کنید—یا فیلتر بهترین ارزش ما را امتحان کنید، که بر اساس قیمت، مدت زمان و عوامل دیگر مرتب می‌شود."
          />
          <Paragraph
          header="تجربه در پرواز" 
          textBody="Wi-Fi می خواهید؟ فضای پا بیشتر؟ یا حتی یک صندلی که به شما امکان می دهد کاملا صاف بخوابید؟ Tripadvisor Flights اکنون یافتن امکاناتی را که می‌تواند باعث ایجاد یا شکست پرواز شما شود، آسان‌تر می‌کند. بیابید کدام پروازها شامل Wi-Fi، تلویزیون زنده، پریز برق، چمدان رایگان و غیره هستند."
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default Flights;
