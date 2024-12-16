import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MainBanner from "../../components/CopmTripDetails/MainBanner";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AccordionChildren from "../../components/AccordionChildren/AccordionChildren";
import CardSliderReadMore from "../../components/CopmTripDetails/CardSliderReadMore";
const TripDetails = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}  marginTop={"3rem"}>
          <Grid size={{ md: 4 }}>This is LeafLat map</Grid>
          <Grid size={{ md: 8 }}>
            <MainBanner />
            <Box sx={{ margin: "1rem  0" }}>
              <Typography
                sx={{ color: "#444", fontSize: "0.90rem", lineHeight: 2 }}
              >
                رم بزرگ، شلوغ و طاقت فرسا است - حتی برای مسافران باتجربه. وقتی
                بچه های کوچک را به مخلوط اضافه می کنید، می تواند حتی بیشتر هم
                شود. اما، بر اساس تجربه من، اگر بخواهید از مسیر شکسته خارج شوید
                و در کنار شلوغی جمعیت کار کنید، شهر بارهای زیادی برای خانواده ها
                دارد.
              </Typography>
            </Box>
            <Box>
              <AccordionChildren
                id={50}
                titleAccordion="کارهایی برای انجام (9)"
              >
                <CardSliderReadMore
                  category={[
                    {
                      icon: <ForestOutlinedIcon />,
                      text: "گردشگری",
                    },
                    {
                      icon: <AccessTimeOutlinedIcon />,
                      text: "مدت زمان : بیش از سه روز",
                    },
                  ]}
                  comment={{
                    name: "شهروز کرمی",
                    profile: "/public/images/NextTrip/img5.jpg",
                    textComment:
                      "موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است! موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است!",
                  }}
                  countOfLike={150}
                  imgCover={[
                    "/public/images/Tourism/Slider/img4.jpg",
                    "/public/images/Tourism/Slider/img5.jpg",
                    "/public/images/Tourism/Slider/img6.jpg",
                  ]}
                  isComment={true}
                  titeCard="سفر به جزایر سه گانه و کیش  و قشم"
                  textBodyCard="موزه به چهار بخش تقسیم می‌شود، تاریخچه قلعه سنت آنجلو با چاپ‌های قدیمی، مناظر منظره و ایده‌آل‌های بازسازی جالب این بنا، همانطور که توسط تخیل هنرمندان و معماران رنسانس، از زمان ساخت تا نوزدهم پیشنهاد شده است، به تصویر کشیده شده است. قرن، در مسیری که شدید و مداوم را برجسته می کند."
                />
                <CardSliderReadMore
                  category={[
                    {
                      icon: <ForestOutlinedIcon />,
                      text: "گردشگری",
                    },
                    {
                      icon: <AccessTimeOutlinedIcon />,
                      text: "مدت زمان : بیش از سه روز",
                    },
                  ]}
                  comment={{
                    name: "شهروز کرمی",
                    profile: "/public/images/NextTrip/img5.jpg",
                    textComment:
                      "موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است! موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است!",
                  }}
                  countOfLike={150}
                  imgCover={[
                    "/public/images/Tourism/Slider/img4.jpg",
                    "/public/images/Tourism/Slider/img5.jpg",
                    "/public/images/Tourism/Slider/img6.jpg",
                  ]}
                  isComment={true}
                  titeCard="سفر به جزایر سه گانه و کیش  و قشم"
                  textBodyCard="موزه به چهار بخش تقسیم می‌شود، تاریخچه قلعه سنت آنجلو با چاپ‌های قدیمی، مناظر منظره و ایده‌آل‌های بازسازی جالب این بنا، همانطور که توسط تخیل هنرمندان و معماران رنسانس، از زمان ساخت تا نوزدهم پیشنهاد شده است، به تصویر کشیده شده است. قرن، در مسیری که شدید و مداوم را برجسته می کند."
                />
                <CardSliderReadMore
                  category={[
                    {
                      icon: <ForestOutlinedIcon />,
                      text: "گردشگری",
                    },
                    {
                      icon: <AccessTimeOutlinedIcon />,
                      text: "مدت زمان : بیش از سه روز",
                    },
                  ]}
                  comment={{
                    name: "شهروز کرمی",
                    profile: "/public/images/NextTrip/img5.jpg",
                    textComment:
                      "موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است! موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است!",
                  }}
                  countOfLike={150}
                  imgCover={[
                    "/public/images/Tourism/Slider/img4.jpg",
                    "/public/images/Tourism/Slider/img5.jpg",
                    "/public/images/Tourism/Slider/img6.jpg",
                  ]}
                  isComment={true}
                  titeCard="سفر به جزایر سه گانه و کیش  و قشم"
                  textBodyCard="موزه به چهار بخش تقسیم می‌شود، تاریخچه قلعه سنت آنجلو با چاپ‌های قدیمی، مناظر منظره و ایده‌آل‌های بازسازی جالب این بنا، همانطور که توسط تخیل هنرمندان و معماران رنسانس، از زمان ساخت تا نوزدهم پیشنهاد شده است، به تصویر کشیده شده است. قرن، در مسیری که شدید و مداوم را برجسته می کند."
                />
                <CardSliderReadMore
                  category={[
                    {
                      icon: <ForestOutlinedIcon />,
                      text: "گردشگری",
                    },
                    {
                      icon: <AccessTimeOutlinedIcon />,
                      text: "مدت زمان : بیش از سه روز",
                    },
                  ]}
                  comment={{
                    name: "شهروز کرمی",
                    profile: "/public/images/NextTrip/img5.jpg",
                    textComment:
                      "موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است! موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است!",
                  }}
                  countOfLike={150}
                  imgCover={[
                    "/public/images/Tourism/Slider/img4.jpg",
                    "/public/images/Tourism/Slider/img5.jpg",
                    "/public/images/Tourism/Slider/img6.jpg",
                  ]}
                  isComment={true}
                  titeCard="سفر به جزایر سه گانه و کیش  و قشم"
                  textBodyCard="موزه به چهار بخش تقسیم می‌شود، تاریخچه قلعه سنت آنجلو با چاپ‌های قدیمی، مناظر منظره و ایده‌آل‌های بازسازی جالب این بنا، همانطور که توسط تخیل هنرمندان و معماران رنسانس، از زمان ساخت تا نوزدهم پیشنهاد شده است، به تصویر کشیده شده است. قرن، در مسیری که شدید و مداوم را برجسته می کند."
                />
                <CardSliderReadMore
                  category={[
                    {
                      icon: <ForestOutlinedIcon />,
                      text: "گردشگری",
                    },
                    {
                      icon: <AccessTimeOutlinedIcon />,
                      text: "مدت زمان : بیش از سه روز",
                    },
                  ]}
                  comment={{
                    name: "شهروز کرمی",
                    profile: "/public/images/NextTrip/img5.jpg",
                    textComment:
                      "موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است! موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است!",
                  }}
                  countOfLike={150}
                  imgCover={[
                    "/public/images/Tourism/Slider/img4.jpg",
                    "/public/images/Tourism/Slider/img5.jpg",
                    "/public/images/Tourism/Slider/img6.jpg",
                  ]}
                  isComment={true}
                  titeCard="سفر به جزایر سه گانه و کیش  و قشم"
                  textBodyCard="موزه به چهار بخش تقسیم می‌شود، تاریخچه قلعه سنت آنجلو با چاپ‌های قدیمی، مناظر منظره و ایده‌آل‌های بازسازی جالب این بنا، همانطور که توسط تخیل هنرمندان و معماران رنسانس، از زمان ساخت تا نوزدهم پیشنهاد شده است، به تصویر کشیده شده است. قرن، در مسیری که شدید و مداوم را برجسته می کند."
                />
              </AccordionChildren>
              <AccordionChildren
                id={150}
                titleAccordion="غدا و نوشیدنی (50)"
              >
                <CardSliderReadMore
                  category={[
                    {
                      icon: <ForestOutlinedIcon />,
                      text: "گردشگری",
                    },
                    {
                      icon: <AccessTimeOutlinedIcon />,
                      text: "مدت زمان : بیش از سه روز",
                    },
                  ]}
                  comment={{
                    name: "شهروز کرمی",
                    profile: "/public/images/NextTrip/img5.jpg",
                    textComment:
                      "موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است! موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است!",
                  }}
                  countOfLike={150}
                  imgCover={[
                    "/public/images/Tourism/Slider/img4.jpg",
                    "/public/images/Tourism/Slider/img5.jpg",
                    "/public/images/Tourism/Slider/img6.jpg",
                  ]}
                  isComment={true}
                  titeCard="سفر به جزایر سه گانه و کیش  و قشم"
                  textBodyCard="موزه به چهار بخش تقسیم می‌شود، تاریخچه قلعه سنت آنجلو با چاپ‌های قدیمی، مناظر منظره و ایده‌آل‌های بازسازی جالب این بنا، همانطور که توسط تخیل هنرمندان و معماران رنسانس، از زمان ساخت تا نوزدهم پیشنهاد شده است، به تصویر کشیده شده است. قرن، در مسیری که شدید و مداوم را برجسته می کند."
                />
                <CardSliderReadMore
                  category={[
                    {
                      icon: <ForestOutlinedIcon />,
                      text: "گردشگری",
                    },
                    {
                      icon: <AccessTimeOutlinedIcon />,
                      text: "مدت زمان : بیش از سه روز",
                    },
                  ]}
                  comment={{
                    name: "شهروز کرمی",
                    profile: "/public/images/NextTrip/img5.jpg",
                    textComment:
                      "موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است! موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است!",
                  }}
                  countOfLike={150}
                  imgCover={[
                    "/public/images/Tourism/Slider/img4.jpg",
                    "/public/images/Tourism/Slider/img5.jpg",
                    "/public/images/Tourism/Slider/img6.jpg",
                  ]}
                  isComment={true}
                  titeCard="سفر به جزایر سه گانه و کیش  و قشم"
                  textBodyCard="موزه به چهار بخش تقسیم می‌شود، تاریخچه قلعه سنت آنجلو با چاپ‌های قدیمی، مناظر منظره و ایده‌آل‌های بازسازی جالب این بنا، همانطور که توسط تخیل هنرمندان و معماران رنسانس، از زمان ساخت تا نوزدهم پیشنهاد شده است، به تصویر کشیده شده است. قرن، در مسیری که شدید و مداوم را برجسته می کند."
                />
                <CardSliderReadMore
                  category={[
                    {
                      icon: <ForestOutlinedIcon />,
                      text: "گردشگری",
                    },
                    {
                      icon: <AccessTimeOutlinedIcon />,
                      text: "مدت زمان : بیش از سه روز",
                    },
                  ]}
                  comment={{
                    name: "شهروز کرمی",
                    profile: "/public/images/NextTrip/img5.jpg",
                    textComment:
                      "موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است! موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است!",
                  }}
                  countOfLike={150}
                  imgCover={[
                    "/public/images/Tourism/Slider/img4.jpg",
                    "/public/images/Tourism/Slider/img5.jpg",
                    "/public/images/Tourism/Slider/img6.jpg",
                  ]}
                  isComment={true}
                  titeCard="سفر به جزایر سه گانه و کیش  و قشم"
                  textBodyCard="موزه به چهار بخش تقسیم می‌شود، تاریخچه قلعه سنت آنجلو با چاپ‌های قدیمی، مناظر منظره و ایده‌آل‌های بازسازی جالب این بنا، همانطور که توسط تخیل هنرمندان و معماران رنسانس، از زمان ساخت تا نوزدهم پیشنهاد شده است، به تصویر کشیده شده است. قرن، در مسیری که شدید و مداوم را برجسته می کند."
                />
                <CardSliderReadMore
                  category={[
                    {
                      icon: <ForestOutlinedIcon />,
                      text: "گردشگری",
                    },
                    {
                      icon: <AccessTimeOutlinedIcon />,
                      text: "مدت زمان : بیش از سه روز",
                    },
                  ]}
                  comment={{
                    name: "شهروز کرمی",
                    profile: "/public/images/NextTrip/img5.jpg",
                    textComment:
                      "موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است! موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است!",
                  }}
                  countOfLike={150}
                  imgCover={[
                    "/public/images/Tourism/Slider/img4.jpg",
                    "/public/images/Tourism/Slider/img5.jpg",
                    "/public/images/Tourism/Slider/img6.jpg",
                  ]}
                  isComment={true}
                  titeCard="سفر به جزایر سه گانه و کیش  و قشم"
                  textBodyCard="موزه به چهار بخش تقسیم می‌شود، تاریخچه قلعه سنت آنجلو با چاپ‌های قدیمی، مناظر منظره و ایده‌آل‌های بازسازی جالب این بنا، همانطور که توسط تخیل هنرمندان و معماران رنسانس، از زمان ساخت تا نوزدهم پیشنهاد شده است، به تصویر کشیده شده است. قرن، در مسیری که شدید و مداوم را برجسته می کند."
                />
                <CardSliderReadMore
                  category={[
                    {
                      icon: <ForestOutlinedIcon />,
                      text: "گردشگری",
                    },
                    {
                      icon: <AccessTimeOutlinedIcon />,
                      text: "مدت زمان : بیش از سه روز",
                    },
                  ]}
                  comment={{
                    name: "شهروز کرمی",
                    profile: "/public/images/NextTrip/img5.jpg",
                    textComment:
                      "موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است! موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است!",
                  }}
                  countOfLike={150}
                  imgCover={[
                    "/public/images/Tourism/Slider/img4.jpg",
                    "/public/images/Tourism/Slider/img5.jpg",
                    "/public/images/Tourism/Slider/img6.jpg",
                  ]}
                  isComment={true}
                  titeCard="سفر به جزایر سه گانه و کیش  و قشم"
                  textBodyCard="موزه به چهار بخش تقسیم می‌شود، تاریخچه قلعه سنت آنجلو با چاپ‌های قدیمی، مناظر منظره و ایده‌آل‌های بازسازی جالب این بنا، همانطور که توسط تخیل هنرمندان و معماران رنسانس، از زمان ساخت تا نوزدهم پیشنهاد شده است، به تصویر کشیده شده است. قرن، در مسیری که شدید و مداوم را برجسته می کند."
                />
              </AccordionChildren>
              <AccordionChildren
                id={500}
                titleAccordion="مکان هایی برای رفتن (20)"
              >
                <CardSliderReadMore
                  category={[
                    {
                      icon: <ForestOutlinedIcon />,
                      text: "گردشگری",
                    },
                    {
                      icon: <AccessTimeOutlinedIcon />,
                      text: "مدت زمان : بیش از سه روز",
                    },
                  ]}
                  comment={{
                    name: "شهروز کرمی",
                    profile: "/public/images/NextTrip/img5.jpg",
                    textComment:
                      "موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است! موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است!",
                  }}
                  countOfLike={150}
                  imgCover={[
                    "/public/images/Tourism/Slider/img4.jpg",
                    "/public/images/Tourism/Slider/img5.jpg",
                    "/public/images/Tourism/Slider/img6.jpg",
                  ]}
                  isComment={true}
                  titeCard="سفر به جزایر سه گانه و کیش  و قشم"
                  textBodyCard="موزه به چهار بخش تقسیم می‌شود، تاریخچه قلعه سنت آنجلو با چاپ‌های قدیمی، مناظر منظره و ایده‌آل‌های بازسازی جالب این بنا، همانطور که توسط تخیل هنرمندان و معماران رنسانس، از زمان ساخت تا نوزدهم پیشنهاد شده است، به تصویر کشیده شده است. قرن، در مسیری که شدید و مداوم را برجسته می کند."
                />
                <CardSliderReadMore
                  category={[
                    {
                      icon: <ForestOutlinedIcon />,
                      text: "گردشگری",
                    },
                    {
                      icon: <AccessTimeOutlinedIcon />,
                      text: "مدت زمان : بیش از سه روز",
                    },
                  ]}
                  comment={{
                    name: "شهروز کرمی",
                    profile: "/public/images/NextTrip/img5.jpg",
                    textComment:
                      "موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است! موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است!",
                  }}
                  countOfLike={150}
                  imgCover={[
                    "/public/images/Tourism/Slider/img4.jpg",
                    "/public/images/Tourism/Slider/img5.jpg",
                    "/public/images/Tourism/Slider/img6.jpg",
                  ]}
                  isComment={true}
                  titeCard="سفر به جزایر سه گانه و کیش  و قشم"
                  textBodyCard="موزه به چهار بخش تقسیم می‌شود، تاریخچه قلعه سنت آنجلو با چاپ‌های قدیمی، مناظر منظره و ایده‌آل‌های بازسازی جالب این بنا، همانطور که توسط تخیل هنرمندان و معماران رنسانس، از زمان ساخت تا نوزدهم پیشنهاد شده است، به تصویر کشیده شده است. قرن، در مسیری که شدید و مداوم را برجسته می کند."
                />
                <CardSliderReadMore
                  category={[
                    {
                      icon: <ForestOutlinedIcon />,
                      text: "گردشگری",
                    },
                    {
                      icon: <AccessTimeOutlinedIcon />,
                      text: "مدت زمان : بیش از سه روز",
                    },
                  ]}
                  comment={{
                    name: "شهروز کرمی",
                    profile: "/public/images/NextTrip/img5.jpg",
                    textComment:
                      "موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است! موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است!",
                  }}
                  countOfLike={150}
                  imgCover={[
                    "/public/images/Tourism/Slider/img4.jpg",
                    "/public/images/Tourism/Slider/img5.jpg",
                    "/public/images/Tourism/Slider/img6.jpg",
                  ]}
                  isComment={true}
                  titeCard="سفر به جزایر سه گانه و کیش  و قشم"
                  textBodyCard="موزه به چهار بخش تقسیم می‌شود، تاریخچه قلعه سنت آنجلو با چاپ‌های قدیمی، مناظر منظره و ایده‌آل‌های بازسازی جالب این بنا، همانطور که توسط تخیل هنرمندان و معماران رنسانس، از زمان ساخت تا نوزدهم پیشنهاد شده است، به تصویر کشیده شده است. قرن، در مسیری که شدید و مداوم را برجسته می کند."
                />
                <CardSliderReadMore
                  category={[
                    {
                      icon: <ForestOutlinedIcon />,
                      text: "گردشگری",
                    },
                    {
                      icon: <AccessTimeOutlinedIcon />,
                      text: "مدت زمان : بیش از سه روز",
                    },
                  ]}
                  comment={{
                    name: "شهروز کرمی",
                    profile: "/public/images/NextTrip/img5.jpg",
                    textComment:
                      "موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است! موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است!",
                  }}
                  countOfLike={150}
                  imgCover={[
                    "/public/images/Tourism/Slider/img4.jpg",
                    "/public/images/Tourism/Slider/img5.jpg",
                    "/public/images/Tourism/Slider/img6.jpg",
                  ]}
                  isComment={true}
                  titeCard="سفر به جزایر سه گانه و کیش  و قشم"
                  textBodyCard="موزه به چهار بخش تقسیم می‌شود، تاریخچه قلعه سنت آنجلو با چاپ‌های قدیمی، مناظر منظره و ایده‌آل‌های بازسازی جالب این بنا، همانطور که توسط تخیل هنرمندان و معماران رنسانس، از زمان ساخت تا نوزدهم پیشنهاد شده است، به تصویر کشیده شده است. قرن، در مسیری که شدید و مداوم را برجسته می کند."
                />
                <CardSliderReadMore
                  category={[
                    {
                      icon: <ForestOutlinedIcon />,
                      text: "گردشگری",
                    },
                    {
                      icon: <AccessTimeOutlinedIcon />,
                      text: "مدت زمان : بیش از سه روز",
                    },
                  ]}
                  comment={{
                    name: "شهروز کرمی",
                    profile: "/public/images/NextTrip/img5.jpg",
                    textComment:
                      "موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است! موزه ای پر از گنجینه های شگفت انگیز است. همچنین، خندق قدیمی قلعه اکنون یک پارک بدون ماشین با زمین های بازی و فضایی برای دویدن رایگان است!",
                  }}
                  countOfLike={150}
                  imgCover={[
                    "/public/images/Tourism/Slider/img4.jpg",
                    "/public/images/Tourism/Slider/img5.jpg",
                    "/public/images/Tourism/Slider/img6.jpg",
                  ]}
                  isComment={true}
                  titeCard="سفر به جزایر سه گانه و کیش  و قشم"
                  textBodyCard="موزه به چهار بخش تقسیم می‌شود، تاریخچه قلعه سنت آنجلو با چاپ‌های قدیمی، مناظر منظره و ایده‌آل‌های بازسازی جالب این بنا، همانطور که توسط تخیل هنرمندان و معماران رنسانس، از زمان ساخت تا نوزدهم پیشنهاد شده است، به تصویر کشیده شده است. قرن، در مسیری که شدید و مداوم را برجسته می کند."
                />
              </AccordionChildren>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TripDetails;
