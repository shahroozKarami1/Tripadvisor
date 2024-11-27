import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CruisingGuide from "../../components/CompCruises/CruisingGuide";
import InpSearch from "../../components/InpSearch/InpSearch";
const PostPhotos = () => {
  return (
    <Container>
      <Grid container sx={{ marginTop: "3rem"  ,  height : "80vh" }} spacing={5}>
        <Grid size={{ md: 5 }}>
          <Box flexDirection={"column"} display={"flex"}>
            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              عکس های خود را به اشتراک بگذارید
            </Typography>
            <CruisingGuide
              mainText={`شما می توانید حداکثر 50 عکس را در یک زمان آپلود کنید
فرمت های عکس پذیرفته شده عبارتند از .jpg .jpeg .gif و .png
حجم فایل باید کمتر از 15 مگابایت باشد.
برای اطلاعات بیشتر به دستورالعمل های آپلود عکس ما مراجعه کنید`}
              titleText="برای عکس ها در نظر داشته باشید:"
            />
          </Box>
        </Grid>
        <Grid size={{ md: 7 }}>
          <Box
            display={"flex"}
            gap={3}
            flexDirection={"column"}
            sx={{
              height: "70%",
              paddingRight: "2rem",
              borderRight: "2px  solid  #ccc",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
              اینها را کجا بردی؟
            </Typography>
            <InpSearch
              isBtnSearch={false}
              textPlaceHolder="جست و جو برای  موقعیت"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostPhotos;
