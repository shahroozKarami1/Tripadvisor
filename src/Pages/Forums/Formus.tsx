import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import InpSearch from "../../components/InpSearch/InpSearch";
import DarkBtn from "../../components/DarkBtn/DarkBtn";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import ListOfForum from "../../components/CompForum/ListOfForum";
import PopularFourmsCard from "../../components/CompForum/PopularFourmsCard";
import SliderWrapper from "../../components/SliderWraper/SliderWrapper";
import TitleSection from "../../components/ComHomePage/TitleSection";
import { useMedia } from "../../context/MediaQueryContext";
const Formus = () => {
  let  isXs  =  useMedia ()

  const CusMainBox = styled(Box)({
    margin: "3rem  0",
    padding: "2rem",
    borderRadius: "1rem",
  });
  const CusTgSubText = styled(Typography)({
    fontSize:  isXs ?  "0.90rem" :   "1.2rem",
    margin: "0.5rem",
    width: "250px",
    fontWeight: 500,
  });
  let browseDistinationArr = [
    { text: "آمریکا", link: "/" },
    { text: "اروپا", link: "/" },
    { text: "کانادا", link: "/" },
    { text: "آسیا", link: "/" },
    { text: "آمریکای مرکزی", link: "/" },
    { text: "آفریقا", link: "/" },
    { text: "کلمبیا", link: "/" },
    { text: "آسیا", link: "/" },
    { text: "آمریکای مرکزی", link: "/" },
    { text: "آفریقا", link: "/" },
    { text: "کلمبیا", link: "/" },
  ];

  let browseTheme = [
    { text: "مسافرت  با حیوانات خانگی ", link: "/" },
    { text: "خارج از منزل / سفر ماجراجویی ", link: "/" },
    { text: "سفرهای جاده ای ", link: "/" },
    { text: "اسبابک و وسایل سفر ", link: "/" },
    { text: "ماه عسل و عاشقانه ", link: "/" },
    { text: "ماه عسل و عاشقانه ", link: "/" },
    { text: "سفر خانوادگی ", link: "/" },
    { text: "سفر مقرون به صرفه ", link: "/" },
  ];
  return (
    <Box>
      <Box sx={{ bgcolor: "#F2F2F2", margin: "3rem  0 ", padding: "3rem" }}>
        <Container>
          <Grid container  justifyContent={"center"} alignItems={"flex-end"}>
            <Grid size={{ md: 6 }}  >
              <Box display={"flex"}   flexDirection={ isXs ?"column" : "row"} gap={2}>
                <img
                  src="/public/images/Formus/bgImg.svg"
                  alt=""
                  width={"250px"}
                />
                <Typography sx={{ fontWeight: "bold", fontSize:  isXs? "1.5rem" :    "2.5rem" }}>
                  انجمن های Tripadvisor
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ md: 6   }}>
              <Box    flexDirection={isXs ? "column"  : "row"} display={"flex"} gap={1}  >
                <Box width={"100%"}>
                  <InpSearch
                    isBtnSearch={false}
                    textPlaceHolder="بهترین راه برای سفر با قطار در ژاپن؟"
                  />
                </Box>
                <DarkBtn>جستجو در انجمن ها</DarkBtn>
              </Box>
            </Grid>
          </Grid>
          <CusMainBox sx={{ bgcolor: "#fff" }}>
            <Grid container spacing={3}>
              <Grid size={{ md: 5 }}>
                <Box
                  display={"flex"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                  gap={1}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    به اشتراک بگذارید یاد بگیرید. برو
                  </Typography>
                  <CusTgSubText>
                    از مسافرانی که قبلاً آنجا بوده اند بپرسید.
                  </CusTgSubText>
                  <CusTgSubText>
                    تجربه خود را با همسفران در میان بگذارید.{" "}
                  </CusTgSubText>
                  <Link to={"/"}>
                    <CusTgSubText>
                      از مرکز راهنمایی انجمن ها دیدن کنید
                    </CusTgSubText>
                  </Link>
                </Box>
              </Grid>
              <Grid size={{ md: 7 }}>
                <Grid container>
                  <Grid size={{ md: 6 }}>
                    <ListOfForum
                      title="بر اساس مقصد مرور کنید"
                      DataArrListFormus={browseDistinationArr}
                    />
                  </Grid>
                  <Grid size={{ md: 6 }}>
                    <ListOfForum
                      title="بر اساس موضوع مرور کنید"
                      DataArrListFormus={browseTheme}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CusMainBox>
        </Container>
      </Box>
      <Container>
        <Box>
          <TitleSection isSubTitle ={false}  mainTitle="به بحث بپیوندید" isSeeAll ={false}  />
          <Typography  fontWeight={"bold"}   fontSize={"2.5rem"}>انجمن های محبوب مقصد</Typography>
          <SliderWrapper numberOfShowSlider={3}>
            <PopularFourmsCard
              name="شهر نیویورک"
              coverImg="/public/images/Formus/popularFormus/img1.jpg"
              numberTopics={21700}
            />
            <PopularFourmsCard
              name="شهر نیویورک"
              coverImg="/public/images/Formus/popularFormus/img2.jpg"
              numberTopics={21700}
            />
            <PopularFourmsCard
              name="شهر نیویورک"
              coverImg="/public/images/Formus/popularFormus/img3.jpg"
              numberTopics={21700}
            />
          </SliderWrapper>
        </Box>
      </Container>
    </Box>
  );
};

export default Formus;
