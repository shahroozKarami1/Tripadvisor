import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BoxOfHeader from "../../components/CompTrips/BoxOfHeader";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapIcon from "@mui/icons-material/Map";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StartAndBuildCard from "../../components/CompTrips/StartAndBuildCard";
import SliderWrapper from "../../components/SliderWraper/SliderWrapper";
import AiCardPlanning from "../../components/CompTrips/AiCardPlanning";
const Trips = () => {
  return (
    <Box>
      <Container>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={"2rem"}
        >
          <Grid size={{ md: 7 }}>
            <Typography
              sx={{
                fontWeight: "900",
                fontSize: "2.5rem",
                textAlign: "center",
              }}
            >
              برنامه ریزی سفر خود را با سفرها شخصی سازی کنید
            </Typography>
            <Typography
              sx={{ lineHeight: 2, marginTop: "1rem", textAlign: "center" }}
            >
              با سفرها، دو برنامه‌ریز سفر را در یک برنامه دریافت می‌کنید—از هوش
              مصنوعی برای ساخت سفر خود استفاده کنید یا خودتان آن را بسازید. در
              هر صورت، بیش از 8 میلیون مکان برای کشف وجود دارد، با بیش از یک
              میلیارد مرور و نظرات مسافر که شما را راهنمایی می کند.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          spacing={5}
          container
          justifyContent={"center"}
          alignItems={"flex-start"}
        >
          <Grid size={{ md: 2 }}>
            <BoxOfHeader
              icon={<AddLocationAltIcon />}
              text="با هوش مصنوعی عکس های شخصی سازی شده دریافت کنید"
            />
          </Grid>
          <Grid size={{ md: 2 }}>
            <BoxOfHeader
              icon={<FavoriteBorderIcon />}
              text="هتل ها، رستوران ها و موارد دیگر را ذخیره کنید"
            />
          </Grid>
          <Grid size={{ md: 2 }}>
            <BoxOfHeader
              icon={<MapIcon />}
              text="ذخیره های خود را در نقشه سفارشی خود مشاهده کنید"
            />
          </Grid>
          <Grid size={{ md: 2 }}>
            <BoxOfHeader
              icon={<PeopleAltOutlinedIcon />}
              text="به اشتراک بگذارید و با غنچه های سفر خود همکاری کنید"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: "4rem" }}>
          <Grid size={{ md: 6 }}>
            <StartAndBuildCard
              colorBack="#EAFAF4"
              colorBtn={{ colorBack: `var(--primary-color)`, colorText: "var(--dark-color)" }}
              cover="/public/images/Trips/BuildAndStartCards/img2.png"
              disc="مقاصد برتر، رستوران‌ها و کارهایی که باید انجام دهید را مرور کنید و در حین رفتن، موارد مورد علاقه خود را در برنامه سفر خود ذخیره کنید."
              textBtn="خودت انجامش بده"
              title="سفر خود را از ابتدا بسازید"
            />
          </Grid>
          <Grid size={{ md: 6 }}>
            <StartAndBuildCard
              colorBack="#DBCCFD"
              colorBtn={{ colorBack: "#301D49", colorText: "#fff" }}
              cover="/public/images/Trips/BuildAndStartCards/img1.png"
              disc="به چهار سوال کوتاه پاسخ دهید و با استفاده از هوش مصنوعی، عکس‌های شخصی‌سازی شده را دریافت کنید، با راهنمایی نظرات مسافران."
              textBtn="AI trip builder را امتحان کنید"
              title="سفر را در چند دقیقه با هوش مصنوعی شروع کنید"
            />
          </Grid>
        </Grid>

          <SliderWrapper numberOfShowSlider={5}>
            <AiCardPlanning text="لندن" img="/public/images/NextTrip/img1.jpg"/>
            <AiCardPlanning text="امارات" img="/public/images/NextTrip/img2.jpg"/>
            <AiCardPlanning text="پکن" img="/public/images/NextTrip/img3.jpg"/>
            <AiCardPlanning text="لس آنجلس" img="/public/images/NextTrip/img4.jpg"/>
            <AiCardPlanning text="لندن" img="/public/images/NextTrip/img5.jpg"/>
          </SliderWrapper>
      </Container>
    </Box>
  );
};

export default Trips;
