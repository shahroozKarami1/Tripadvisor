import { Box, Container, Typography } from "@mui/material";
import InpSearch from "../../components/InpSearch/InpSearch";
import { CusThingsToDoPage } from "../../elements/CusComponets";
import Grid from "@mui/material/Grid2";
import PlanCard from "../../components/CompThingsToDo/PlanCard";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import TitleSection from "../../components/ComHomePage/TitleSection";
import TourWaysCard from "../../components/ComHomePage/TourWaysCard";

const ThingsToDo = () => {
  return (
    <CusThingsToDoPage>
      <Container sx={{ height: "100%" }}>
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
                sx={{ fontWeight: "bold", color: "#fff", fontSize: "2.5rem" }}
              >
                کارهایی را برای انجام هر کجا پیدا کنید
              </Typography>
              <InpSearch isBtnSearch={false} />
            </Box>
          </Grid>
        </Grid>
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
          <TitleSection isSubTitle={false} mainTitle="برای شما توصیه می شود" />
        </Box>
        <Grid container spacing={2}>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
        </Grid>
        {/* section */}
        <Box sx={{ marginBottom: "1rem" }}>
          <TitleSection
            isSubTitle={false}
            mainTitle="جاذبه های برتر در پونتا کانا"
          />
        </Box>
        <Grid container spacing={2}>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
        </Grid>
        {/* section */}
        <Box sx={{ marginBottom: "1rem" }}>
          <TitleSection
            isSubTitle={false}
            mainTitle="تجربیات برتر در پونتا کانا"
          />
        </Box>
        <Grid container spacing={2}>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={true}
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
        </Grid>
        {/* section */}
        <Box sx={{ marginBottom: "1rem" }}>
          <TitleSection isSubTitle={false} mainTitle="مقاصد برتر جهانی" />
        </Box>
        <Grid container spacing={2}>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
        </Grid>
        {/* section */}
        <Box sx={{ marginBottom: "1rem" }}>
          <TitleSection
            isSubTitle={false}
            mainTitle="تجربیات برتر در سراسر جهان"
          />
        </Box>
        <Grid container spacing={2}>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
              isDetails={true}
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
              isDetails={true}
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              price={134}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
              isDetails={true}
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              price={134}
              score={935}
              isDetails={true}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
        </Grid>

        {/* section */}
        <Box sx={{ marginBottom: "1rem" }}>
          <TitleSection isSubTitle={false} mainTitle="برترین جاذبه های جهانی" />
        </Box>
        <Grid container spacing={2}>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={false}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={false}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={false}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <TourWaysCard
              isDetails={false}
              score={935}
              disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
              img="/public/images/frankfordDistination/img4.jpg"
            />
          </Grid>
        </Grid>
      </Container>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </CusThingsToDoPage>
  );
};

export default ThingsToDo;
