import { Avatar, AvatarGroup, Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BoxOfArticle from "../../components/CompArticleDetails/BoxOfArticle";
import BodyText from "../../components/CompArticleDetails/BodyText";
import SliderWrapper from "../../components/SliderWraper/SliderWrapper";
import TourWaysCard from "../../components/ComHomePage/TourWaysCard";
import YellowBtn from "../../components/CompArticleDetails/YellowBtn";
const ArticleDetails = () => {
  return (
    <Box>
      <Container>
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <Grid size={{ md: 8 }}>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={2}
              margin="3rem 0"
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "2.5rem",
                  textAlign: "center",
                }}
              >
                9 مکان باورنکردنی برای بازدید در ماه نوامبر در سراسر جهان
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                از آخرین نفس شاخ و برگ های پاییزی تا فرار جزیره ای.{" "}
              </Typography>
              <Box display={"flex"} gap={2} alignItems={"center"}>
                <AvatarGroup max={4}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/public/images/NextTrip/img1.jpg"
                  />
                  <Avatar
                    alt="Travis Howard"
                    src="/public/images/NextTrip/img2.jpg"
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src="/public/images/NextTrip/img3.jpg"
                  />
                  <Avatar
                    alt="Agnes Walker"
                    src="/public/images/NextTrip/img4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
                <Typography fontSize={"0.90rem"}>
                  توسط سارا کوتا و نیکلاس درنزو 1 نوامبر 2023 • 7 دقیقه مطالعه
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{ md: 12 }}>
            <img
              src="/public/images/ArticleDetails/Banner/bigBanner.jpg"
              alt=""
            />
          </Grid>
        </Grid>
        <Box>
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Grid size={{ md: 8 }}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={1}
                marginTop={"2rem"}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  به روز شده در 24 سپتامبر 2024
                </Typography>
                <BodyText textArticle="در ایالات متحده، فصل تعطیلات به طور جدی با تعطیلات آخر هفته شکرگزاری آغاز می شود و فرودگاه های شلوغ و افزایش قیمت ها را به همراه دارد. اما امسال، تعطیلات بسیار دیر می‌گذرد، یعنی در 28 نوامبر، به این معنی که ما تقریباً چهار هفته کامل از زمان پیش از تعطیلات خوشبختی داریم. در بسیاری از نقاط جهان، این فصل شانه است، زمانی که می توان معاملات عالی پیدا کرد و دمای هوا هنوز کاملاً راحت است قبل از شروع زمستان. البته، برای کسانی که تمایل به جشن دارند، این ماه فرصتی را نیز برای شروع کریسمس شاد ارائه می دهد. -ساخت زودهنگام هم" />
              </Box>
              <BoxOfArticle
                AverageTemp={{ max: 30, min: 25 }}
                TextArticle={[
                  {
                    text: "از اواخر اکتبر تا فوریه، ده‌ها هزار پروانه پادشاه غربی در جنگل‌های ساحلی کالیفرنیا جمع می‌شوند – و در ماه نوامبر، یکی از بهترین مکان‌ها برای دیدن آن‌ها، ساحل Pismo است، شهر کوچکی در نیمه راه بین لس‌آنجلس و سانفرانسیسکو.",
                  },
                  {
                    text: "پادشاهان به سمت درختان سر به فلک کشیده اکالیپتوس در Pismo State Beach Monarch Butterfly Grove می‌روند، جایی که همه چیزهایی را که برای رشد نیاز دارند در اختیار دارند: رطوبت زیاد، نور شدید خورشید، و محافظت در برابر باد. پارک کوچک است، اما می‌توانید یک بعدازظهر کامل را در اینجا به شگفتی حشرات بگذرانید، درباره چرخه زندگی آنها بیاموزید و در مسیرهای خاکی پهن و مسطح آن سرگردان باشید.",
                  },
                  {
                    text: "فراتر از پروانه ها، وقت خود را صرف گشت و گذار در تعداد انگشت شماری از پارک های دوست داشتنی شهر کنید: پارک غارهای دایناسور، که نام خود را از یک جاذبه کنار جاده (یک برونتوزاروس 50 فوتی) که در دهه 40 ساخته شد و در نهایت به ویرانه تبدیل شد (زمین بازی فعلی دایناسور است) به دست آورد. موضوعی)؛ پارک اقیانوس Eldwaylen، جایی که پله‌ها به ساحل شنی با استخرهای جزر و مد منتهی می‌شوند. و پارک Margo Dodd، که در بین غواصی‌ها و تماشاگران پرنده محبوب است.",
                  },
                  {
                    text: "نکته: اگر می‌خواهید کوتاه‌ترین رانندگی را داشته باشید، به فرودگاه سانتا باربارا پرواز کنید، در غیر این صورت، حدود چهار ساعت از SFO یا LAX فاصله دارد که می‌توانید به راحتی آن را به یک سفر جاده‌ای ساحلی تبدیل کنید.",
                  },
                ]}
                coverArticle="/public/images/ArticleDetails/coverArticle/img1.jpg"
                title="ساحل پیسمو، کالیفرنیا"
                topic="برای علاقه مندان به پروانه"
              />
            </Grid>
          </Grid>

          <SliderWrapper numberOfShowSlider={5}>
            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img1.jpg"
            />
            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img1.jpg"
            />

            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img2.jpg"
            />

            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img3.jpg"
            />

            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </SliderWrapper>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"} margin={"5rem 0"}>
            <YellowBtn link="/" text="برای سفر به ساحل برنامه  ریزی کنید" />
          </Box>
        </Box>
        <Box>
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Grid size={{ md: 8 }}>
              <BoxOfArticle
                AverageTemp={{ max: 30, min: 25 }}
                TextArticle={[
                  {
                    text: "از اواخر اکتبر تا فوریه، ده‌ها هزار پروانه پادشاه غربی در جنگل‌های ساحلی کالیفرنیا جمع می‌شوند – و در ماه نوامبر، یکی از بهترین مکان‌ها برای دیدن آن‌ها، ساحل Pismo است، شهر کوچکی در نیمه راه بین لس‌آنجلس و سانفرانسیسکو.",
                  },
                  {
                    text: "پادشاهان به سمت درختان سر به فلک کشیده اکالیپتوس در Pismo State Beach Monarch Butterfly Grove می‌روند، جایی که همه چیزهایی را که برای رشد نیاز دارند در اختیار دارند: رطوبت زیاد، نور شدید خورشید، و محافظت در برابر باد. پارک کوچک است، اما می‌توانید یک بعدازظهر کامل را در اینجا به شگفتی حشرات بگذرانید، درباره چرخه زندگی آنها بیاموزید و در مسیرهای خاکی پهن و مسطح آن سرگردان باشید.",
                  },
                  {
                    text: "فراتر از پروانه ها، وقت خود را صرف گشت و گذار در تعداد انگشت شماری از پارک های دوست داشتنی شهر کنید: پارک غارهای دایناسور، که نام خود را از یک جاذبه کنار جاده (یک برونتوزاروس 50 فوتی) که در دهه 40 ساخته شد و در نهایت به ویرانه تبدیل شد (زمین بازی فعلی دایناسور است) به دست آورد. موضوعی)؛ پارک اقیانوس Eldwaylen، جایی که پله‌ها به ساحل شنی با استخرهای جزر و مد منتهی می‌شوند. و پارک Margo Dodd، که در بین غواصی‌ها و تماشاگران پرنده محبوب است.",
                  },
                  {
                    text: "نکته: اگر می‌خواهید کوتاه‌ترین رانندگی را داشته باشید، به فرودگاه سانتا باربارا پرواز کنید، در غیر این صورت، حدود چهار ساعت از SFO یا LAX فاصله دارد که می‌توانید به راحتی آن را به یک سفر جاده‌ای ساحلی تبدیل کنید.",
                  },
                ]}
                coverArticle="/public/images/ArticleDetails/coverArticle/img2.jpg"
                title="ساحل پیسمو، کالیفرنیا"
                topic="برای علاقه مندان به پروانه"
              />
            </Grid>
          </Grid>
          <SliderWrapper numberOfShowSlider={5}>
            <TourWaysCard
              price={134}
              isDetails={true}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img1.jpg"
            />
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img1.jpg"
            />

            <TourWaysCard
              price={134}
              isDetails={true}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img2.jpg"
            />

            <TourWaysCard
              price={134}
              isDetails={true}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img3.jpg"
            />

            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </SliderWrapper>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"} margin={"5rem 0"}>
            <YellowBtn link="/" text="برای سفر به ساحل برنامه  ریزی کنید" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ArticleDetails;
