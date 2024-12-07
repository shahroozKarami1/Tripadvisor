import { Box, Typography } from "@mui/material";
import { CusCardDetails } from "../../elements/CusComponets";
import Grid from "@mui/material/Grid2";
import CardDetailsItem from "./CardDetailsItem";
const BigBoxDetails = () => {
  return (
    <CusCardDetails>
      <Box sx={{ borderBottom: "1px  solid #ccc" }}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1.5rem", padding: "1rem  0" }}
        >
          جزییات
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid size={{ md: 3 }} sx={{ borderLeft: "1px solid  #ccc" }}>
          <CardDetailsItem
            details={[
              "با تغذیه کنجکاوی، حواس یا میل، به دنبال ارضای گرسنگی خطر، بازی یا پاسخ و ارضای لذت غافلگیری، کشف و کاوش ناشناخته ها هستیم. برای دستیابی به این هدف، منطق دنیای خوراکی را زیر سوال می بریم، عادات و تعصبات اجتماعی را بازنگری می کنیم. ما به دنبال ایجاد زمینه‌ای هستیم که در آن غذاخوری‌ها برای غلبه بر تحمیل آداب و رسوم، به حواس خود آزادی عمل بدهند. برای تقریباً سه ساعت و از طریق حدود 20 خلاقیت، با هم سعی خواهیم کرد داستانی از داستان ها، حرکات و احساسات را دور میز ببافیم. و همچنین خارج از آن. طعم‌ها، بافت‌ها و رایحه‌هایی که می‌توانید با استفاده از دستان خود برای تحریک تمام حواس و تداعی آداب و رسوم اولیه‌تر ما از آن لذت ببرید و احساس کنید.",
            ]}
            title="درباره"
          />
        </Grid>
        <Grid size={{ md: 4 }}>
          <CardDetailsItem details={["اروپا", "اسپانیا"]} title="غذاهای" />
          <CardDetailsItem
            details={["صبحانه", "ناهار", "میان وعده"]}
            title="وعده ها"
          />
        </Grid>
        <Grid size={{ md: 4 }}>
          <CardDetailsItem
            details={[
              "رزرو، صندلی در فضای باز، صندلی، پارکینگ موجود، قابل دسترسی با ویلچر، الکل ارائه می‌دهد، کارت‌های اعتباری می‌پذیرد، سرویس میز",
            ]}
            title="قابلیت  ها"
          />
        </Grid>
      </Grid>
    </CusCardDetails>
  );
};

export default BigBoxDetails;
