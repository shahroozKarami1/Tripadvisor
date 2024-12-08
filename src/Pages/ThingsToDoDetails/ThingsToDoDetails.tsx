import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SaveBtn from "../../components/SaveBtn/SaveBtn";
import { CusCircleIcon } from "../../elements/CusComponets";
import LinkBorder from "../../components/ThingsToDoDetails/LinkBorder";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid2";
import ReadMore from "../../components/ReadMore/ReadMore";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import React, { FC } from "react";
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import AccordionMenu from "../../components/AccordionMenu/AccordionMenu";
import PayCard from "../../components/ThingsToDoDetails/PayCard";
const ListItemComp: FC<{
  text: string;
  icon?: React.ReactNode;
  isIcon: boolean;
}> = ({ icon, text, isIcon }) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "0.25rem 0",
        gap: 1,
        path: { color: "#444" },
      }}
    >
      {isIcon ? (
        <Typography sx={{ fontSize: "0.80rem" }}>{icon}</Typography>
      ) : (
        <Typography>
          <CircleIcon sx={{ fontSize: "0.50rem" }} />
        </Typography>
      )}
      <Typography sx={{ fontSize: "0.90rem", color: "#444" }}>
        {text}
      </Typography>
    </ListItem>
  );
};
const ThingsToDoDetails = () => {
  const CusVerifiedOutlinedIcon = styled(VerifiedOutlinedIcon)({
    "& path": {
      color: "#FF5D5D",
    },
  });

  return (
    <Box>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginTop={"2rem"}
        >
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <Typography sx={{ fontWeight: "900", fontSize: "1.6rem" }}>
              ATV تپه های سرخ دبی، شترها، تماشای ستارگان و باربیکیو 5* کمپ
              الخیما
            </Typography>
            <Box>
              <LinkBorder link="/" text="توسط هواپپمایی کاسپین" />
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Box display={"flex"} alignItems={"center"}>
                <CusCircleIcon />
                <CusCircleIcon />
                <CusCircleIcon />
                <CusCircleIcon />
                <CusCircleIcon />
              </Box>
              <Box>
                <LinkBorder link="/" text="17000بازدید" />
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Typography sx={{ fontSize: "0.80rem" }}>
                  99 درصد از مسافران توصیه می کنند
                </Typography>
                <CusVerifiedOutlinedIcon />
              </Box>
            </Box>
          </Box>

          <Box display={"flex"} gap={1}>
            <IconButton>
              <FileUploadOutlinedIcon />
            </IconButton>
            <SaveBtn />
          </Box>
        </Box>
        <Grid container spacing={1} marginTop={"3rem"}>
          <Grid size={{ md: 7 }}>
            <Box sx={{ position: "relative" }} height={"409px"}>
              <img
                src="/public/images/ThingsToDoDetails/Banner/mainImg.jpg"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  borderTopRightRadius: "1rem  ",
                  borderBottomRightRadius: "1rem  ",
                  width: "100%",
                  objectPosition: "center",
                }}
                alt=""
              />
              <Box sx={{ position: "absolute", bottom: 10, right: 10 }}>dd</Box>
            </Box>
          </Grid>
          <Grid size={{ md: 5 }}>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Box height={"200px"}>
                <img
                  src="/public/images/ThingsToDoDetails/Banner/img1.jpg"
                  alt=""
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    objectPosition: "center",
                    borderTopLeftRadius: "1rem ",
                  }}
                />
              </Box>
              <Box height={"200px"}>
                <img
                  src="/public/images/ThingsToDoDetails/Banner/img2.jpg"
                  alt=""
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    objectPosition: "center",
                    borderBottomLeftRadius: "1rem ",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container marginTop={"3rem"}  spacing={3}>
          <Grid size={{ md: 7 }}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography sx={{ fontWeight: "bold" }}>درباره ما</Typography>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <CreateOutlinedIcon />
                <LinkBorder link="/" text="یک  بررسی  بنویسید" />
              </Box>
            </Box>
            <Box padding={"1rem  0"}>
              <ReadMore
                lineShow={3}
                textBody="در این تور صحرای تپه‌های سرخ از دبی، چندین فعالیت در بیابان را در یک گردش تجربه کنید، از جمله رانندگی با ATV - چیزی که بسیاری از تورها فقط با هزینه اضافی ارائه می‌دهند. از دردسر حمل و نقل و برنامه ریزی لجستیک بگذرید. و به سادگی از تپه های شنی و فعالیت های ارائه شده لذت ببرید. روی یک ATV بزرگنمایی کنید، شتر سوار شوید، سوار سندبورد شوید. لذت بردن از هنر حنا و عکس های لباس عربی. و با یک شام بوفه باربیکیو و برنامه های زنده پایان دهید."
              />
            </Box>

            <Box display={"flex"} gap={1} alignItems={"center"}>
              <AccountBalanceWalletOutlinedIcon
                sx={{
                  bgcolor: "var(--yellow-color)",
                  borderRadius: "50%",
                  padding: "0.25rem",
                }}
              />
              <LinkBorder link="/" text="تضمین کمترین قیمت" />&
              <LinkBorder link="/" text="اکنون رزرو کنید و بعدا پرداخت کنید" />&
              <LinkBorder link="/" text="لغو رایگان" />
            </Box>

            <List
              sx={{
                margin: "2rem  0",
                borderTop: "1px solid  #ccc",
                borderBottom: "1px  solid #ccc",
                padding: "1rem 0",
              }}
            >
              <ListItemComp
                isIcon={true}
                icon={<Groups2OutlinedIcon />}
                text="سنین 14 تا 55، حداکثر 15 در هر گروه"
              />
              <ListItemComp
                isIcon={true}
                icon={<TimelapseOutlinedIcon />}
                text="مدت زمان: 6 ساعت"
              />
              <ListItemComp
                isIcon={true}
                icon={<QueryBuilderOutlinedIcon />}
                text="زمان شروع: در دسترس بودن را بررسی کنید"
              />
              <ListItemComp
                isIcon={true}
                icon={<PhoneIphoneOutlinedIcon />}
                text="بلیط موبایل"
              />
              <ListItemComp
                isIcon={true}
                icon={<LanguageOutlinedIcon />}
                text="راهنمای زنده: انگلیسی"
              />
            </List>

            <Typography sx={{ fontWeight: "bold" }}>درباره ما</Typography>
            <List>
              <ListItemComp
                isIcon={false}
                text="تور یکپارچه صحرای لهباب در تپه قرمز از دبی، شامل رانندگی با ATV"
              />
              <ListItemComp
                isIcon={false}
                text="بدون برنامه ریزی یا تلاش برای شما: حمل و نقل و فعالیت های اصلی گنجانده شده است"
              />
              <ListItemComp
                isIcon={false}
                text="یک ATV برانید، سندبرد سواری کنید، شتر سوار شوید و از شام و نمایش های زنده لذت ببرید"
              />
              <ListItemComp
                isIcon={false}
                text="با دریافت و تحویل هتل در مرکز دبی، استراحت کنید"
              />
            </List>

            <Box sx={{ margin: "2rem  0 " }}>
              <AccordionMenu
                dataCoordion={[
                  {
                    textBody: `تحویل و تحویل در هتل/محل انتخابی خود با وسیله نقلیه تهویه مطبوع
60 دقیقه دوچرخه‌سواری چهارگانه در صحرای روباز تپه‌های قرمز با سوخت و کلاه ایمنی
همراه مربی مجرب
تجربه شتر سواری (قابل تکرار)
غذا دادن به شتر نوزاد با عکس های سلفی
تنوره، نمایش رقص بانوان خلیجی و نمایش آتش (نمایش آتش فقط با زمان عصر)
بازدید از کمپ صحرای الخیمه
آب معدنی سرد و نوشابه نامحدود
سندبورد در تپه های قرمز
توقف عکس نمای غروب
گیمت (شیرینی)، گهوا (قهوه) و خرما
نقاشی حنا برای خانم ها ” تاتو ”
"عکس" تجربه شاهین
لباس عربی محلی برای آرایش
لوله قلیان (طعم حباب هابل) در منطقه قلیان
جلسه تماشای ستارگان (فقط با زمان های عصرگاهی)
بوفه عربی 5* با ایستگاه باربیکیو زنده و نان محلی زنده "گیاهی و غیر گیاهی موجود است"`,
                    title: "چه چیزی گنجانده شده است",
                    id: 1,
                  },
                  {
                    textBody: `تحویل و تحویل در هتل/محل انتخابی خود با وسیله نقلیه تهویه مطبوع
60 دقیقه دوچرخه‌سواری چهارگانه در صحرای روباز تپه‌های قرمز با سوخت و کلاه ایمنی
همراه مربی مجرب
تجربه شتر سواری (قابل تکرار)
غذا دادن به شتر نوزاد با عکس های سلفی
تنوره، نمایش رقص بانوان خلیجی و نمایش آتش (نمایش آتش فقط با زمان عصر)
بازدید از کمپ صحرای الخیمه
آب معدنی سرد و نوشابه نامحدود
سندبورد در تپه های قرمز
توقف عکس نمای غروب
گیمت (شیرینی)، گهوا (قهوه) و خرما
نقاشی حنا برای خانم ها ” تاتو ”
"عکس" تجربه شاهین
لباس عربی محلی برای آرایش
لوله قلیان (طعم حباب هابل) در منطقه قلیان
جلسه تماشای ستارگان (فقط با زمان های عصرگاهی)
بوفه عربی 5* با ایستگاه باربیکیو زنده و نان محلی زنده "گیاهی و غیر گیاهی موجود است"`,
                    title: "انتظار چه چیزی",
                    id: 2,
                  },
                  {
                    textBody: `تحویل و تحویل در هتل/محل انتخابی خود با وسیله نقلیه تهویه مطبوع
60 دقیقه دوچرخه‌سواری چهارگانه در صحرای روباز تپه‌های قرمز با سوخت و کلاه ایمنی
همراه مربی مجرب
تجربه شتر سواری (قابل تکرار)
غذا دادن به شتر نوزاد با عکس های سلفی
تنوره، نمایش رقص بانوان خلیجی و نمایش آتش (نمایش آتش فقط با زمان عصر)
بازدید از کمپ صحرای الخیمه
آب معدنی سرد و نوشابه نامحدود
سندبورد در تپه های قرمز
توقف عکس نمای غروب
گیمت (شیرینی)، گهوا (قهوه) و خرما
نقاشی حنا برای خانم ها ” تاتو ”
"عکس" تجربه شاهین
لباس عربی محلی برای آرایش
لوله قلیان (طعم حباب هابل) در منطقه قلیان
جلسه تماشای ستارگان (فقط با زمان های عصرگاهی)
بوفه عربی 5* با ایستگاه باربیکیو زنده و نان محلی زنده "گیاهی و غیر گیاهی موجود است"`,
                    title: "خروج و بازگشت",
                    id: 3,
                  },
                ]}
              />
            </Box>
          </Grid>
          <Grid size={{ md: 5 }}>
            <PayCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThingsToDoDetails;