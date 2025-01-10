import { Box, Container, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import GuideCard from "../../components/CompBlogPage/GuideCard";
import ServicesCard from "../../components/CompBlogPage/ServicesCard";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import DirectionsBusFilledOutlinedIcon from "@mui/icons-material/DirectionsBusFilledOutlined";
import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import MainBlogCard from "../../components/CompBlogPage/MainBlogCard";
import MainTitle from "../../components/CompBlogPage/MainTitle";
import WriterProfile from "../../components/CompBlogPage/WriterProfile";
import SingleParagraph from "../../components/CompBlogPage/SingleParagraph";
import AccordionChildren from "../../components/AccordionChildren/AccordionChildren";
import ChipsBlog from "../../components/CompBlogPage/ChipsBlog";
import MoreInterstedCard from "../../components/CompBlogPage/MoreInterstedCard";
const CusInnerBlogBox = styled(Box)({
  boxShadow: "0 4px 5px 0 rgba(0,0,0,.09)",
  backgroundColor: "#fff",
  borderRadius: "0.5rem",
  padding: "1rem",
  margin: "1rem  0",
});
const CusTitleRightSide = styled(Typography)({
  fontSize: "1.2rem",
});
const Blog = () => {
  return (
    <Box sx={{ bgcolor: "#F7F7F7" }}>
      <Container maxWidth="lg" >
        <Grid container spacing={2}>
          <Grid size={{ md: 8 }}>
            <CusInnerBlogBox>
              <Box>
                <img
                  src="/public/images/imgBlog/mainBanner.jpg"
                  alt=""
                  style={{
                    borderRadius: "0.5rem",
                  }}
                />
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={1} mt={"1rem"}>
                <ChipsBlog text="رستوران" />
                <ChipsBlog text="شیراز" />
                <ChipsBlog text="ایران گردی" />
              </Box>
              <MainTitle isSubTitle={true} subTitle="معرفی معروف‌ترین رستوران‌ها و فست‌فودی‌های شهر شعر" title="بهترین رستوران های شیراز برای شکم‌گردهای حرفه‌ای" />
              <WriterProfile name="شهروز کرمی" profile="/public/images/Hotelmg/ResortsImgs/img2.jpg" />
              <SingleParagraph text="خوشگذرانی در رستوران‌ها و کافه‌ها بخش مهمی از سفر است. تصور کنید به اصفهان بروید و طعم بریونی آن را نچشید یا در سفر به شهرهای استان گیلان به فکر خوردن باقالی‌قاتوق و ترش‌تره نباشید. سفر به شیراز هم تنها در بازدید از حافظیه و شاه‌چراغ و خرید از بازار وکیل خلاصه نمی‌شود و باید سری هم به بهترین رستوران های شیراز زد." />
              <SingleParagraph text="غذاهای رنگارنگی مثل کلم‌پلو شیرازی، دوپیازه، دمپختک، عرقیات شیرازی و شربت‌های شیرازی رنگ و روی واقعی به سفر می‌دهد که چشیدن طعم آن‌ها برای هر شکم‌گرد و اهل سفر یک تجربه فوق‌العاده است. شاید بپرسید بهترین رستوران های شیراز برای چشیدن طعم واقعی غذاهای شیرازی کدام است؟ جواب این سوال را می‌توانید در این مطلب مجله گردشگری علی بابا پیدا کنید." />

              <AccordionChildren id={85} titleAccordion="بهترین کبابی شیراز کدام است؟">
                <SingleParagraph text="بر اساس نظریات مشتریان باربیکیو دیاکو بهترین کبابی شیراز است و بعد از آن نون و کباب درباری، کباب‌سرای خودمونی و کبابی جگر طلای شیراز قرار دارد." />
              </AccordionChildren>
              <AccordionChildren id={510} titleAccordion="رستوران شرزه شیراز کجاست؟">
                <SingleParagraph text="رستوران شرزه شیراز در خیابان طالقانی، خیابان مسجد وکیل، مجموعه وکیل، زیرگذر زند قرار دارد." />
              </AccordionChildren>
              <AccordionChildren id={605} titleAccordion="رستوران باغ راز شیراز کجاست؟">
                <SingleParagraph text="رستوران باغ راز را می‌توانید در شیراز، قصردشت، بلوار شاهد پیدا کنید. این رستوران دو بخش باغ همراه با سرو غذاهای سنتی و بام با سرو غذاهای رستورانی دارد." />
              </AccordionChildren>
              <MainTitle isSubTitle={false} title="مشتریان این شش رستوران را بهترین رستوران های شیراز می‌دانند" />
              <SingleParagraph text="در ادامه رستوران‌هایی که به انتخاب مشتریان محبوبیت بیشتری دارد، به شما معرفی کرده‌ایم." />
              <SingleParagraph text="حوالی دروازه‌قرآن یکی بهترین رستوران های شیراز به نام رستوران هفت‌خوان قرار دارد. این رستوران مانند اسمش دقیقا هفت‌خوان مختلف دارد. نگران نشوید. قرار نیست از هفت‌خوان سخت رد شوید تا غذای دلخواهتان را بخورید. در واقع این رستوران از هفت رستوران مختلف تشکیل شده که هرکدام سبک خاصی از غذا را سرو می‌کند." />
              <SingleParagraph text="برای نام‌گذاری رستوران‌ها از شاهنامه فردوسی استفاده شده است. رستوران فرود (طبقه زیر همکف)، رستوران نوفل (طبقه دوم)، رستوران سیندخت (طبقه همکف)، رستوران گرسیوز (پشت‌بام)، فست‌فود بلیان (طبقه اول)، کافی‌شاپ گیسیا (طبقه دوم) و کافی‌شاپ زریر (طبقه اول) هرکدام با طراحی خاص خود غذاهای مختلف از سنتی گرفته تا فست‌فود و غذاهای فرنگی را به مشتریان ارائه می‌دهد." />
              <MainBlogCard
                Address={{
                  link: "/",
                  text: "آدرس رستوران هفت‌خوان شیراز روی گوگل مپ",
                }}
                cover="/public/images/NextTrip/img5.jpg"
                paragrapth={[
                  "تصور کنید به بازار و مسجد وکیل و شاه‌چراغ رفته‌اید، بعد از نیمروز گشت‌وگذار، دلتان هوای خانه را می‌کند که هم خستگی از تن به در کنید و هم غذایی سنتی و خانگی میل کنید. اینجاست که باید سری به خانه سنتی پرهامی بزنید. این خانه قدیمی یکی از بهترین رستوران های شیراز به سبک سنتی است که کاملا حس و حال قدیم را به شما منتقل می‌کند.",

                  "تخت‌های داخل حیاط، حوض آب و ماهی قرمز آن کنار خوردن یک غذای سنتی شیرازی تمام خستگی شما را برطرف می‌کند. هر روز چهار مدل غذای سنتی در این رستوران سرو می‌شود که کلم‌پلوی آن یکی از معروف‌ترین‌هاست.",
                  "آدرس رستوران خانه سنتی پرهامی : خیابان لطفعلی خان زند، بعد از سه‌راه احمدی، گود عربان، ضلع مقابل مسجد نصیرالملک",
                  "شماره تماس رستوران سنتی پرهامی: ۰۷۱۳۲۲۳۲۰۱۵",
                ]}
                title="رستوران خانه سنتی پرهامی؛ جایی با طعم غذاهای مادربزرگ"
              />
              <MainBlogCard
                Address={{
                  link: "/",
                  text: "آدرس رستوران هفت‌خوان شیراز روی گوگل مپ",
                }}
                cover="/public/images/NextTrip/img2.jpg"
                paragrapth={[
                  "تصور کنید به بازار و مسجد وکیل و شاه‌چراغ رفته‌اید، بعد از نیمروز گشت‌وگذار، دلتان هوای خانه را می‌کند که هم خستگی از تن به در کنید و هم غذایی سنتی و خانگی میل کنید. اینجاست که باید سری به خانه سنتی پرهامی بزنید. این خانه قدیمی یکی از بهترین رستوران های شیراز به سبک سنتی است که کاملا حس و حال قدیم را به شما منتقل می‌کند.",

                  "تخت‌های داخل حیاط، حوض آب و ماهی قرمز آن کنار خوردن یک غذای سنتی شیرازی تمام خستگی شما را برطرف می‌کند. هر روز چهار مدل غذای سنتی در این رستوران سرو می‌شود که کلم‌پلوی آن یکی از معروف‌ترین‌هاست.",
                  "آدرس رستوران خانه سنتی پرهامی : خیابان لطفعلی خان زند، بعد از سه‌راه احمدی، گود عربان، ضلع مقابل مسجد نصیرالملک",
                  "شماره تماس رستوران سنتی پرهامی: ۰۷۱۳۲۲۳۲۰۱۵",
                ]}
                title="رستوران خانه سنتی پرهامی؛ جایی با طعم غذاهای مادربزرگ"
              />
              <MainBlogCard
                Address={{
                  link: "/",
                  text: "آدرس رستوران هفت‌خوان شیراز روی گوگل مپ",
                }}
                cover="/public/images/NextTrip/img8.jpg"
                paragrapth={[
                  "تصور کنید به بازار و مسجد وکیل و شاه‌چراغ رفته‌اید، بعد از نیمروز گشت‌وگذار، دلتان هوای خانه را می‌کند که هم خستگی از تن به در کنید و هم غذایی سنتی و خانگی میل کنید. اینجاست که باید سری به خانه سنتی پرهامی بزنید. این خانه قدیمی یکی از بهترین رستوران های شیراز به سبک سنتی است که کاملا حس و حال قدیم را به شما منتقل می‌کند.",

                  "تخت‌های داخل حیاط، حوض آب و ماهی قرمز آن کنار خوردن یک غذای سنتی شیرازی تمام خستگی شما را برطرف می‌کند. هر روز چهار مدل غذای سنتی در این رستوران سرو می‌شود که کلم‌پلوی آن یکی از معروف‌ترین‌هاست.",
                  "آدرس رستوران خانه سنتی پرهامی : خیابان لطفعلی خان زند، بعد از سه‌راه احمدی، گود عربان، ضلع مقابل مسجد نصیرالملک",
                  "شماره تماس رستوران سنتی پرهامی: ۰۷۱۳۲۲۳۲۰۱۵",
                ]}
                title="رستوران خانه سنتی پرهامی؛ جایی با طعم غذاهای مادربزرگ"
              />
              <MainBlogCard
                Address={{
                  link: "/",
                  text: "آدرس رستوران هفت‌خوان شیراز روی گوگل مپ",
                }}
                cover="/public/images/NextTrip/img6.jpg"
                paragrapth={[
                  "تصور کنید به بازار و مسجد وکیل و شاه‌چراغ رفته‌اید، بعد از نیمروز گشت‌وگذار، دلتان هوای خانه را می‌کند که هم خستگی از تن به در کنید و هم غذایی سنتی و خانگی میل کنید. اینجاست که باید سری به خانه سنتی پرهامی بزنید. این خانه قدیمی یکی از بهترین رستوران های شیراز به سبک سنتی است که کاملا حس و حال قدیم را به شما منتقل می‌کند.",

                  "تخت‌های داخل حیاط، حوض آب و ماهی قرمز آن کنار خوردن یک غذای سنتی شیرازی تمام خستگی شما را برطرف می‌کند. هر روز چهار مدل غذای سنتی در این رستوران سرو می‌شود که کلم‌پلوی آن یکی از معروف‌ترین‌هاست.",
                  "آدرس رستوران خانه سنتی پرهامی : خیابان لطفعلی خان زند، بعد از سه‌راه احمدی، گود عربان، ضلع مقابل مسجد نصیرالملک",
                  "شماره تماس رستوران سنتی پرهامی: ۰۷۱۳۲۲۳۲۰۱۵",
                ]}
                title="رستوران خانه سنتی پرهامی؛ جایی با طعم غذاهای مادربزرگ"
              />
              <MainTitle isSubTitle={false} title="در آخر…" />
              <SingleParagraph text="تعداد رستوران‌های خوب شیراز آن‌قدر زیاد است که شاید در یک مطلب جای نگیرد. لیستی که در این مطلب مجله گردشگری علی بابا ارائه دادیم تعدادی از بهترین رستوران ها از دیدگاه گردشگران و مشتریان هستند که امیدواریم راهنمایی مناسبی برای سفر بعدی شما به شیراز باشد." />

            </CusInnerBlogBox>
            <CusInnerBlogBox>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ width: "120px", height: "80px" }}>
                  <img src="/public/images/NextTrip/img5.jpg" alt="" style={{ objectFit: "cover", borderRadius: "0.5rem", height: "100%", width: "100%", objectPosition: "center" }} />
                </Box>
                <Box display={"flex"} flexDirection={"column"} gap={1}>
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    <Typography>شهروز کرمی</Typography>
                    ـ
                    <Typography sx={{ color: "#444", fontSize: "0.90rem" }}>55  مطلب</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
                      همه بهم می‌گفتن خیلی از این شاخه به اون شاخه می‌پرم؛ شاید چون عاشق یادگیری بودم و هستم. اما حالا دیگه رو یه شاخه محکم و استوار نشستم و هر چیزی رو که بخوام با خوندن و نوشتن یاد می گیرم.


                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CusInnerBlogBox>
            <CusInnerBlogBox>
              <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{borderBottom : '1px solid  #444' ,  mb : "1rem"}}>
                <MainTitle isSubTitle={false} title="ممکن است به این مطالب نیز علاقه‌مند باشید" />
                <Typography sx={{ fontSize: "0.80rem", fontWeight: "bold" }}>مطالب بیشتر از این نویسنده   </Typography>
              </Box>
              <Grid container spacing={2}>

                <Grid size={{ md: 4 }}>
                  <MoreInterstedCard link="/" coverCard="/public/images/NextTrip/img7.jpg" markCard="استان مازندران" textCard="دریاچه لفور سوادکوه؛ ماجراجویی در جنگل‌های بکر مازندران" />
                </Grid>
                <Grid size={{ md: 4 }}>
                  <MoreInterstedCard link="/" coverCard="/public/images/NextTrip/img8.jpg" markCard="استان مازندران" textCard="دریاچه لفور سوادکوه؛ ماجراجویی در جنگل‌های بکر مازندران" />
                </Grid>
                <Grid size={{ md: 4 }}>
                  <MoreInterstedCard link="/" coverCard="/public/images/NextTrip/img3.jpg" markCard="استان مازندران" textCard="دریاچه لفور سوادکوه؛ ماجراجویی در جنگل‌های بکر مازندران" />
                </Grid>
              </Grid>

            </CusInnerBlogBox>
          </Grid>
          <Grid size={{ md: 3.5 }}>
            <CusInnerBlogBox>
              <CusTitleRightSide>
                راهنمای سفر به جای جای ایران
              </CusTitleRightSide>
              <GuideCard
                isVisitorNumber={false}
                cover="/public/images/NextTrip/img8.jpg"
                link="/"
                text="بندر عباس"
              />
              <GuideCard
                isVisitorNumber={false}
                cover="/public/images/NextTrip/img6.jpg"
                link="/"
                text="کیش"
              />
              <GuideCard
                isVisitorNumber={false}
                cover="/public/images/NextTrip/img2.jpg"
                link="/"
                text="قشم"
              />
              <GuideCard
                isVisitorNumber={false}
                cover="/public/images/NextTrip/img3.jpg"
                link="/"
                text="شیراز"
              />
              <GuideCard
                isVisitorNumber={false}
                cover="/public/images/NextTrip/img1.jpg"
                link="/"
                text="مشهد"
              />
              <GuideCard
                isVisitorNumber={false}
                cover="/public/images/NextTrip/img8.jpg"
                link="/"
                text="بندر عباس"
              />
              <GuideCard
                isVisitorNumber={false}
                cover="/public/images/NextTrip/img6.jpg"
                link="/"
                text="کیش"
              />
              <GuideCard
                isVisitorNumber={false}
                cover="/public/images/NextTrip/img2.jpg"
                link="/"
                text="قشم"
              />
              <GuideCard
                isVisitorNumber={false}
                cover="/public/images/NextTrip/img3.jpg"
                link="/"
                text="شیراز"
              />
              <GuideCard
                isVisitorNumber={false}
                cover="/public/images/NextTrip/img1.jpg"
                link="/"
                text="مشهد"
              />
            </CusInnerBlogBox>

            <CusInnerBlogBox>
              <CusTitleRightSide>پر بازدید ترین ها</CusTitleRightSide>
              <GuideCard
                isVisitorNumber={true}
                visitorNumber={255500}
                cover="/public/images/Tourism/Slider/img3.jpg"
                link="/"
                text="
اطلاعیه پیش‌فروش بلیط قطار | دی ماه ۱۴۰۳"
              />
              <GuideCard
                isVisitorNumber={true}
                visitorNumber={255500}
                cover="/public/images/Tourism/Slider/img5.jpg"
                link="/"
                text="
اطلاعیه پیش‌فروش بلیط قطار | دی ماه ۱۴۰۳"
              />
              <GuideCard
                isVisitorNumber={true}
                visitorNumber={255500}
                cover="/public/images/Tourism/Slider/img3.jpg"
                link="/"
                text="
اطلاعیه پیش‌فروش بلیط قطار | دی ماه ۱۴۰۳"
              />
              <GuideCard
                isVisitorNumber={true}
                visitorNumber={255500}
                cover="/public/images/Tourism/Slider/img3.jpg"
                link="/"
                text="
اطلاعیه پیش‌فروش بلیط قطار | دی ماه ۱۴۰۳"
              />
            </CusInnerBlogBox>

            <CusInnerBlogBox sx={{ position: "sticky", top: 180 }}>
              <CusTitleRightSide>خدمات سندباد تریپ</CusTitleRightSide>
              <Box mt={"1.5rem"}>
                <ServicesCard
                  icon={<FlightOutlinedIcon />}
                  link="/"
                  text="بلیط هواپیما"
                />
                <ServicesCard
                  icon={<TrainOutlinedIcon />}
                  link="/"
                  text="بلیط قطار"
                />
                <ServicesCard
                  icon={<DirectionsBusFilledOutlinedIcon />}
                  link="/"
                  text="بلیط اتوبوس"
                />
                <ServicesCard
                  icon={<LuggageOutlinedIcon />}
                  link="/"
                  text="رزرو هتل "
                />
                <ServicesCard
                  icon={<ConfirmationNumberOutlinedIcon />}
                  link="/"
                  text="بلیط چارتر"
                />
                <ServicesCard
                  icon={<FlightOutlinedIcon />}
                  link="/"
                  text="بلیط هواپیما"
                />
                <ServicesCard
                  icon={<TrainOutlinedIcon />}
                  link="/"
                  text="بلیط قطار"
                />
                <ServicesCard
                  icon={<DirectionsBusFilledOutlinedIcon />}
                  link="/"
                  text="بلیط اتوبوس"
                />
                <ServicesCard
                  icon={<LuggageOutlinedIcon />}
                  link="/"
                  text="رزرو هتل "
                />
                <ServicesCard
                  icon={<ConfirmationNumberOutlinedIcon />}
                  link="/"
                  text="بلیط چارتر"
                />
              </Box>
            </CusInnerBlogBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
