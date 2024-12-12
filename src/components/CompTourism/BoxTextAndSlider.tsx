import styled from "@emotion/styled";
import { Avatar, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Slider from "react-slick";
import ReadMore from "../ReadMore/ReadMore";
import BtnWhteBlackTex from "../BtnWhiteTextBlackColor/BtnWhteBlackTex";
import TourWaysCard from "../ComHomePage/TourWaysCard";
const BoxTextAndSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 2,
    speed: 500,
    dots :  true ,
    cssEase: "linear",
    autoplay: true  ,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
  
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
  
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const CusBoxTextAndSlider = styled(Box)({
    border: "1px  solid  #ccc",
    padding: "1.2rem",
    borderRadius: "1rem",
    margin: "1rem  0",
  });

  const CusLabelCard = styled(Typography)({
    color: "#444",
    border: "1px  solid  #ccc",
    padding: "0.25rem",
    borderRadius: "0.5rem",
    fontSize: "0.70rem",
    
  });

  return (
    <CusBoxTextAndSlider>
      <Grid container  spacing={3}>
        <Grid size={{ md: 4 }} sx={{ padding: "1rem  0" }}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} gap={1}>
              <CusLabelCard>مکان های تاریخی</CusLabelCard>
              <CusLabelCard>موزه ها</CusLabelCard>
              <CusLabelCard>فعالیت در فضای باز</CusLabelCard>
            </Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                padding: "  0.75em  0.5rem  ",
              }}
            >
              سفری پر از تاریخ به لندن با بچه ها
            </Typography>

            <Box
              display={"flex"}
              alignItems={"center"}
              gap={1}
              padding={"0.5rem  0"}
            >
              <Avatar sx={{ width: 24, height: 24 }} />
              <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
                توسط شهروز کرمی
              </Typography>
            </Box>
            <ReadMore
              lineShow={3}
              textBody="سفر خانوادگی ما به لندن مملو از نکات مهم بود. ما یک سفر یک روزه به استون هنج داشتیم، از چای بریتانیا لذت بردیم، در موزه بریتانیا گشت زدیم، مراسم تعویض گارد در کاخ باکینگهام را تماشا کردیم و از برج لندن دیدن کردیم. با این حال، ما از استودیو هری پاتر یا بازار بورو بازدید نکردیم - بنابراین فقط باید برگردیم!"
            />
            <Box>
              <BtnWhteBlackTex link="/" title="برنامه سفر را ببینید" />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ md: 8 }}>
          <Slider {...settings}>
            <TourWaysCard
              disc="هتل هزاره و مرکز کنفرانس گلاستر لندن"
              img="/public/images/Tourism/Slider/img4.jpg"
              isDetails={false}
              score={15.055}
            />
            <TourWaysCard
              disc="هتل هزاره و مرکز کنفرانس گلاستر لندن"
              img="/public/images/Tourism/Slider/img5.jpg"
              isDetails={false}
              score={15.055}
            />
            <TourWaysCard
              disc="هتل هزاره و مرکز کنفرانس گلاستر لندن"
              img="/public/images/Tourism/Slider/img6.jpg"
              isDetails={false}
              score={15.055}
            />
          </Slider>
        </Grid>
      </Grid>
    </CusBoxTextAndSlider>
  );
};

export default BoxTextAndSlider;
