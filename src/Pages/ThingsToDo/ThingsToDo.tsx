import { Box, Container, Typography } from "@mui/material";
import InpSearch from "../../components/InpSearch/InpSearch";
import { CusThingsToDoPage } from "../../elements/CusComponets";
import Grid from "@mui/material/Grid2";
import PlanCard from "../../components/CompThingsToDo/PlanCard";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import TitleSection from "../../components/ComHomePage/TitleSection";
import TourWaysCard from "../../components/ComHomePage/TourWaysCard";
import SliderWrapper from "../../components/SliderWraper/SliderWrapper";

const ThingsToDo = () => {
  return (
    <>
      <CusThingsToDoPage>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ height: "100%" }}
        >
          <Grid size={{ md: 9 }}>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={4}
            >
              <Typography
                sx={{ fontWeight: "bold", color: "#fff", fontSize: "2.5rem" ,  textAlign: "center" }}
              >
                کارهایی را برای انجام هر کجا پیدا کنید
              </Typography>
              <InpSearch textPlaceHolder="بگرد..." isBtnSearch={false} />
            </Box>
          </Grid>
        </Grid>
      </CusThingsToDoPage>
      <Container sx={{ height: "100%" }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ margin: "3rem  0" }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            برنامه ریزی کنید، رزرو کنید، بروید—ما کار را آسان می کنیم
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ margin: "2rem  0" }}>
          <PlanCard
            disc="با نظرات واقعی تقریباً همه چیز را ببینید مردم چه چیزی را دوست داشتند (یا دوست نداشتند)."
            icon={<PeopleAltOutlinedIcon />}
            title="با حمایت مسافران"
          />
          <PlanCard
            disc="با جریان برو. اکثر تجربیات را می توان تا 24 ساعت قبل لغو کرد."
            icon={<RestoreOutlinedIcon />}
            title="لغو رایگان"
          />
          <PlanCard
            disc="کارهای سرگرم کننده را بدون شکستن بانک انجام دهید - ما بهترین قیمت ها را داریم.
برای شما توصیه می شود"
            icon={<PeopleAltOutlinedIcon />}
            title="کمترین قیمت تضمینی"
          />
        </Grid>
        {/* section */}
        <Box sx={{ marginBottom: "1rem" }}>
          <TitleSection isSubTitle={false} mainTitle="اخیرا مشاهده شده است" />
          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              link="/Attractions/AttractionsDetails"
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img1.jpg"
            />
            <TourWaysCard
              link="/Attractions/AttractionsDetails"
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
            <TourWaysCard
              link="/Attractions/AttractionsDetails"
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img3.jpg"
            />
            <TourWaysCard
              link="/Attractions/AttractionsDetails"
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img2.jpg"
            />
            <TourWaysCard
              link="/Attractions/AttractionsDetails"
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img1.jpg"
            />
          </SliderWrapper>
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <TitleSection
            isSubTitle={false}
            mainTitle="تجربیات برتر در منطقه خرس بزرگ"
          />
          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img1.jpg"
            />
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img3.jpg"
            />
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img2.jpg"
            />
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img1.jpg"
            />
          </SliderWrapper>
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <TitleSection
            isSubTitle={false}
            mainTitle="جاذبه های برتر در منطقه خرس بزرگ"
          />
          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img1.jpg"
            />
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img3.jpg"
            />
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img2.jpg"
            />
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img1.jpg"
            />
          </SliderWrapper>
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <TitleSection isSubTitle={false} mainTitle="مقاصد برتر جهانی" />
          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img1.jpg"
            />
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img3.jpg"
            />
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img2.jpg"
            />
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img1.jpg"
            />
          </SliderWrapper>
        </Box>
      </Container>
    </>
  );
};

export default ThingsToDo;
