import styled from "@emotion/styled";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BtnMenus from "../../components/CompCruises/BtnMenus";
import TodayIcon from "@mui/icons-material/Today";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CardDetails from "../../components/CompCruises/CardDetails";
import CardDeals from "../../components/CompCruises/CardDeals";
import TitleSection from "../../components/ComHomePage/TitleSection";
import CardWhiteBottom from "../../components/CompCruises/CardWhiteBottom";
import CruisingGuide from "../../components/CompCruises/CruisingGuide";

const Cruises = () => {
  const CusDarkBtnSearch = styled(Button)({
    backgroundColor: "var(--dark-color)",
    color: "#fff",
    whiteSpace: "nowrap",
    padding: "0.75rem  2rem",
    fontWeight: "bold",
    width: "200px",
  });
  return (
    <Box>
      <Container>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ marginTop: "1rem" }}
        >
          <Grid size={{ md: 12 }}>
            <Box display={"flex"} flexDirection={"column"} gap={3}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1.7rem",
                }}
              >
                بهترین سفر دریایی را برای خود پیدا کنید
              </Typography>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={1}
              >
                <BtnMenus
                  isWhereToInp={false}
                  textOnBtn="ماه حرکت"
                  icon={<TodayIcon />}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                      defaultValue={dayjs(new Date())}
                      views={["month", "year"]}
                      openTo="month"
                    />
                  </LocalizationProvider>
                </BtnMenus>
                <BtnMenus
                  isWhereToInp={true}
                  textOnBtn="به کجا ؟"
                  icon={<LocationOnOutlinedIcon />}
                >
                  This is Test ..
                </BtnMenus>
                <CusDarkBtnSearch>جست و جو </CusDarkBtnSearch>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: "#F2F2F2" }}>
        <Container sx={{ marginTop: "2rem" }}>
          <Grid
            container
            spacing={2}
            alignItems={"center"}
            sx={{ padding: "3rem  0" }}
          >
            <Grid size={{ md: 4 }}>
              <CardDetails
                coverImg="/public/images/Cruises/DetialsCards/img1.svg"
                disc="  برای مشاهده جزئیات کشتی، بررسی ها، عکس ها و برنامه های سفر، یک
              کشتی را انتخاب کنید"
                title="صفحات Ship-tinerary™ را کاوش کنید"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardDetails
                coverImg="/public/images/Cruises/DetialsCards/img3.svg"
                disc="  برای مشاهده جزئیات کشتی، بررسی ها، عکس ها و برنامه های سفر، یک
              کشتی را انتخاب کنید"
                title="صفحات Ship-tinerary™ را کاوش کنید"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardDetails
                coverImg="/public/images/Cruises/DetialsCards/img3.svg"
                disc="  برای مشاهده جزئیات کشتی، بررسی ها، عکس ها و برنامه های سفر، یک
              کشتی را انتخاب کنید"
                title="صفحات Ship-tinerary™ را کاوش کنید"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <TitleSection isSubTitle={false} mainTitle="معاملات ویژه کروز" />
            <Grid size={{ md: 6, xs: 12 }}>
              <CardDeals
                AfterDisCount={4.289}
                beforeDisCount={60.86}
                countDay={5}
                date="11/5/2024"
                departs="لاس وگاس"
                distination="تگزاس"
                nameShip="کروز شبانه"
              />
              <CardDeals
                AfterDisCount={4.289}
                beforeDisCount={60.86}
                countDay={5}
                date="11/5/2024"
                departs="لاس وگاس"
                distination="تگزاس"
                nameShip="کروز شبانه"
              />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
              <CardDeals
                AfterDisCount={4.289}
                beforeDisCount={60.86}
                countDay={5}
                date="11/5/2024"
                departs="لاس وگاس"
                distination="تگزاس"
                nameShip="کروز شبانه"
              />
              <CardDeals
                AfterDisCount={4.289}
                beforeDisCount={60.86}
                countDay={5}
                date="11/5/2024"
                departs="لاس وگاس"
                distination="تگزاس"
                nameShip="کروز شبانه"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} marginTop={"2rem"}>
            <TitleSection
              isSubTitle={false}
              mainTitle="سفرهای دریایی به مقصدهای محبوب جزیره"
            />
            <Grid size={{ md: 3, xs: 6 }}>
              <CardWhiteBottom
                link="/"
                coverImg="/public/images/Cruises/popularDistination/img1.jpg"
                name="برمودا"
              />
            </Grid>
            <Grid size={{ md: 3, xs: 6 }}>
              <CardWhiteBottom
                link="/"
                coverImg="/public/images/Cruises/popularDistination/img2.jpg"
                name="هاوایی"
              />
            </Grid>
            <Grid size={{ md: 3, xs: 6 }}>
              <CardWhiteBottom
                link="/"
                coverImg="/public/images/Cruises/popularDistination/img3.jpg"
                name="کیش"
              />
            </Grid>
            <Grid size={{ md: 3  , xs  :  6 }}>
              <CardWhiteBottom
                link="/"
                coverImg="/public/images/Cruises/popularDistination/img4.jpg"
                name="باهاماس"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} marginTop={"2rem"}>
            <TitleSection
              isSubTitle={false}
              mainTitle="سفرهای دریایی به مقصدهای محبوب"
            />
            <Grid size={{ md: 3  ,  xs :  6}}>
              <CardWhiteBottom
                link="/"
                coverImg="/public/images/Cruises/popularDistination/img3.jpg"
                name="آسیا"
              />
            </Grid>
            <Grid size={{ md: 3  ,  xs :  6 }}>
              <CardWhiteBottom
                link="/"
                coverImg="/public/images/Cruises/popularDistination/img4.jpg"
                name="آسیا"
              />
            </Grid>
            <Grid size={{ md: 3  ,  xs :  6 }}>
              <CardWhiteBottom
                link="/"
                coverImg="/public/images/Cruises/popularDistination/img1.jpg"
                name="آسیا"
              />
            </Grid>
            <Grid size={{ md: 3  , xs :  6 }}>
              <CardWhiteBottom
                link="/"
                coverImg="/public/images/Cruises/popularDistination/img2.jpg"
                name="آسیا"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} marginTop={"2rem"}>
            <TitleSection
              isSubTitle={false}
              mainTitle="سفرهای دریایی بر اساس طول"
            />
            <Grid size={{ md: 3  , xs :  6 }}>
              <CardWhiteBottom
                link="/"
                coverImg="/public/images/Cruises/popularDistination/img2.jpg"
                name="+15 روز"
              />
            </Grid>
            <Grid size={{ md: 3    , xs :  6}}>
              <CardWhiteBottom
                link="/"
                coverImg="/public/images/Cruises/popularDistination/img3.jpg"
                name="8روز"
              />
            </Grid>
            <Grid size={{ md: 3   , xs :  6 }}>
              <CardWhiteBottom
                link="/"
                coverImg="/public/images/Cruises/popularDistination/img4.jpg"
                name="2روز"
              />
            </Grid>
            <Grid size={{ md: 3  , xs :  6 }}>
              <CardWhiteBottom
                link="/"
                coverImg="/public/images/Cruises/popularDistination/img1.jpg"
                name="10-12 روز"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} marginTop={"3rem"}>
            <Grid size={{ md: 6 }}>
              <CruisingGuide
                mainText="اگر مکانی در لیست سطل خود دارید، به احتمال زیاد، یک کشتی دریایی شما را به آنجا خواهد رساند - به شرطی که مقصد در امتداد خط ساحلی یا آبراه داخلی باشد. سفرهای دریایی جهان را پوشش می دهند و سالانه میلیون ها مسافر را به مناطقی مانند کارائیب، باهاما، آلاسکا، اروپا، مدیترانه و حتی قطب جنوب می برند. سفرهای دریایی دارای ارزش فوق‌العاده‌ای است، با سفرهایی که شامل اقامت، وعده‌های غذایی و سرگرمی‌های شما می‌شود - همه به صورت یکجا. برخی از خطوط تفریحی لوکس حتی تعطیلات کاملاً فراگیر را ارائه می دهند که نوشیدنی ها و تورهای ساحلی را پوشش می دهد. و بهتر از همه، کروز به معنای دیدن راحت دنیا پس از باز کردن بسته‌بندی تنها یک بار است.
کشتی‌های تفریحی همچنین گزینه‌ی فوق‌العاده‌ای برای خانواده‌ها فراهم می‌کنند، زیرا بسیاری از کشتی‌ها چیزهایی مانند سرسره‌های آبی، زمین‌های مینی گلف و باشگاه‌های سرگرم‌کننده برای کودکان، نوجوانان و نوجوانان را ارائه می‌دهند. در حالی که بیشتر آنها رایگان هستند، برنامه های مهد کودک ممکن است هزینه بیشتری داشته باشند. برنامه ریزی آسان است: مقصد و کشتی (و خط) مناسب را برای سبک سفر خود انتخاب کنید. خط کروز کار را ساده می‌کند و بسته‌هایی را ارائه می‌کند که به شما کمک می‌کند در موارد اضافی مانند الکل، تورهای ساحلی یا حتی بلیط هواپیما صرفه‌جویی کنید.
مسافران می‌گویند که سفر دریایی را انتخاب می‌کنند، زیرا سفر دریایی معمولاً در مقایسه با تعطیلات زمینی در یک هتل، هزینه کمتری در هر شب دارد، جایی که آنها باید هر اضافی را رزرو کنند - و هزینه آن را بپردازند."
                titleText="چرا به تعطیلات سفر دریایی بروید؟"
              />

              <CruisingGuide
                mainText={`
                اگر مسافری انعطاف پذیر هستید، شانس بیشتری برای یافتن سفرهای دریایی ارزان خواهید داشت. از سفر دریایی استفاده کنید که در تابستان یا تعطیلات، زمانی که قیمت‌ها بالاترین قیمت است، سفر نمی‌کند. یک کابین داخلی رزرو کنید، یا شانس خود را با یک "کابین گارانتی" انتخاب کنید، ایده آل برای مسافرانی که در مورد موقعیت اتاق کابین خود حساس نیستند اما واقعاً پایین ترین قیمت موجود را می خواهند. کابین‌ها را روی عرشه‌های پایین‌تر رزرو کنید، که اغلب با قیمت‌های پایین‌تری نسبت به اتاق‌های طبقه‌های بالاتر عرضه می‌شوند - یعنی اتاق‌های خواب و سوئیت.

مارک‌های کروز مانند Carnival Cruise Line، MSC Cruises، Norwegian Cruise Line و Royal Caribbean International نرخ‌هایی را ارائه می‌دهند که ممکن است تا ۷۵ دلار برای هر نفر در هر شب کاهش پیدا کند - و گاهی حتی کمتر.

اگر می خواهید یک معامله واقعی داشته باشید، یک سفر دریایی ماوراء اقیانوس اطلس یا تغییر موقعیت را در نظر بگیرید. این کروزها سفرهای یک طرفه یا فک باز هستند که از یک بندر شروع و در بندر دیگر به پایان می رسند. برای مثال می‌توانید از فلوریدا به اروپا یا حتی از نیویورک به فلوریدا معامله کنید. فقط حواستان باشد، احتمالاً برای برگشت باید کمی بیشتر برای بلیط هواپیما بپردازید.
                `}
                titleText="نکاتی برای یافتن سفرهای دریایی ارزان چیست؟"
              />
            </Grid>
            <Grid size={{ md: 6 }}>
              <CruisingGuide
                mainText="اگر مکانی در لیست سطل خود دارید، به احتمال زیاد، یک کشتی دریایی شما را به آنجا خواهد رساند - به شرطی که مقصد در امتداد خط ساحلی یا آبراه داخلی باشد. سفرهای دریایی جهان را پوشش می دهند و سالانه میلیون ها مسافر را به مناطقی مانند کارائیب، باهاما، آلاسکا، اروپا، مدیترانه و حتی قطب جنوب می برند. سفرهای دریایی دارای ارزش فوق‌العاده‌ای است، با سفرهایی که شامل اقامت، وعده‌های غذایی و سرگرمی‌های شما می‌شود - همه به صورت یکجا. برخی از خطوط تفریحی لوکس حتی تعطیلات کاملاً فراگیر را ارائه می دهند که نوشیدنی ها و تورهای ساحلی را پوشش می دهد. و بهتر از همه، کروز به معنای دیدن راحت دنیا پس از باز کردن بسته‌بندی تنها یک بار است.
کشتی‌های تفریحی همچنین گزینه‌ی فوق‌العاده‌ای برای خانواده‌ها فراهم می‌کنند، زیرا بسیاری از کشتی‌ها چیزهایی مانند سرسره‌های آبی، زمین‌های مینی گلف و باشگاه‌های سرگرم‌کننده برای کودکان، نوجوانان و نوجوانان را ارائه می‌دهند. در حالی که بیشتر آنها رایگان هستند، برنامه های مهد کودک ممکن است هزینه بیشتری داشته باشند. برنامه ریزی آسان است: مقصد و کشتی (و خط) مناسب را برای سبک سفر خود انتخاب کنید. خط کروز کار را ساده می‌کند و بسته‌هایی را ارائه می‌کند که به شما کمک می‌کند در موارد اضافی مانند الکل، تورهای ساحلی یا حتی بلیط هواپیما صرفه‌جویی کنید.
مسافران می‌گویند که سفر دریایی را انتخاب می‌کنند، زیرا سفر دریایی معمولاً در مقایسه با تعطیلات زمینی در یک هتل، هزینه کمتری در هر شب دارد، جایی که آنها باید هر اضافی را رزرو کنند - و هزینه آن را بپردازند."
                titleText="چرا به تعطیلات سفر دریایی بروید؟"
              />

              <CruisingGuide
                mainText={`
                اگر مسافری انعطاف پذیر هستید، شانس بیشتری برای یافتن سفرهای دریایی ارزان خواهید داشت. از سفر دریایی استفاده کنید که در تابستان یا تعطیلات، زمانی که قیمت‌ها بالاترین قیمت است، سفر نمی‌کند. یک کابین داخلی رزرو کنید، یا شانس خود را با یک "کابین گارانتی" انتخاب کنید، ایده آل برای مسافرانی که در مورد موقعیت اتاق کابین خود حساس نیستند اما واقعاً پایین ترین قیمت موجود را می خواهند. کابین‌ها را روی عرشه‌های پایین‌تر رزرو کنید، که اغلب با قیمت‌های پایین‌تری نسبت به اتاق‌های طبقه‌های بالاتر عرضه می‌شوند - یعنی اتاق‌های خواب و سوئیت.

مارک‌های کروز مانند Carnival Cruise Line، MSC Cruises، Norwegian Cruise Line و Royal Caribbean International نرخ‌هایی را ارائه می‌دهند که ممکن است تا ۷۵ دلار برای هر نفر در هر شب کاهش پیدا کند - و گاهی حتی کمتر.

اگر می خواهید یک معامله واقعی داشته باشید، یک سفر دریایی ماوراء اقیانوس اطلس یا تغییر موقعیت را در نظر بگیرید. این کروزها سفرهای یک طرفه یا فک باز هستند که از یک بندر شروع و در بندر دیگر به پایان می رسند. برای مثال می‌توانید از فلوریدا به اروپا یا حتی از نیویورک به فلوریدا معامله کنید. فقط حواستان باشد، احتمالاً برای برگشت باید کمی بیشتر برای بلیط هواپیما بپردازید.
                `}
                titleText="نکاتی برای یافتن سفرهای دریایی ارزان چیست؟"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Cruises;
