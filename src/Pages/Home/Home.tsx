import { Box, Container, Typography } from "@mui/material";
import TopBarHome from "../../components/ComHomePage/TopBarHome";
import NavBarHome from "../../components/ComHomePage/NavBarHome";
import FirstBanner from "../../components/ComHomePage/FirstBanner";
import TitleSection from "../../components/ComHomePage/TitleSection";
import TheBestFoodSection from "../../components/ComHomePage/TheBestFoodSection";
import TheBestdistination from "../../components/ComHomePage/TheBestdistination";
import TourWaySection from "../../components/ComHomePage/TourWaySection";
import MoreExploreSection from "../../components/ComHomePage/MoreExploreSection";
import NextTripSection from "../../components/ComHomePage/NextTripSection";
import SecoundBanner from "../../components/ComHomePage/SecoundBanner";
import ThirdBanner from "../../components/ComHomePage/ThirdBanner";
import FallDistinationSec from "../../components/ComHomePage/FallDistinations/FallDistinationSec";
import { useEffect, useState } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";

const Home = () => {
  let [isShowStickyMenu, SetIsShowStickyMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        SetIsShowStickyMenu(true);
      } else {
        SetIsShowStickyMenu(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <Container>
        {isShowStickyMenu && <MainHeader />}
        {!isShowStickyMenu && <TopBarHome />}
        <NavBarHome />
        <FirstBanner />
        <TitleSection
          isSubTitle={true}
          subTitle="جوایز انتخاب مسافران ۲۰۲۴ بهترین رستوران‌ها"
          mainTitle="خودتان را با یک وعده غذایی برنده جایزه پذیرایی کنید"
        />
        <TheBestFoodSection />
        <TitleSection
          isSubTitle={true}
          subTitle="راهنمایی های آزموده شده و واقعی برای کمک به سفر بزرگ بعدی شما"
          mainTitle="از سازندگان سفرهای مورد علاقه ما الهام بگیرید"
        />
        <TheBestdistination />
        <TitleSection
          isSubTitle={true}
          subTitle="برای نگاهی نزدیک به فرانکفورت، این تجربیات را رزرو کنید."
          mainTitle="راه های تور فرانکفورت"
        />
        <TourWaySection />
        <TitleSection
          isSubTitle={true}
          subTitle="برای نگاهی نزدیک به فرانکفورت، این تجربیات را رزرو کنید."
          mainTitle="چیزهای  بیشتر برای انجام  در فرانکفورد"
        />
        <TourWaySection />
      </Container>
      <Box sx={{ bgcolor: "#F2F1EC", marginTop: "2rem" }}>
        <Container sx={{ padding: "  0.25rem 0" }}>
          <Box sx={{ margin: "1rem  0" }}>
            <TitleSection isSubTitle={false} mainTitle="اکتشافات بیشتر" />
          </Box>
          <MoreExploreSection />
        </Container>
      </Box>
      <Container sx={{ marginTop: "2rem" }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          رویای سفر بعدی خود را داشته باشید
        </Typography>
        <NextTripSection
          dataNextTripArr={[
            {
              img: "/public/images/NextTrip/img4.jpg",
              title: "آمستردام /  آلمان",
            },
            {
              img: "/public/images/NextTrip/img1.jpg",
              title: "آمستردام /  آلمان",
            },
            {
              img: "/public/images/NextTrip/img2.jpg",
              title: "آمستردام /  آلمان",
            },
            {
              img: "/public/images/NextTrip/img3.jpg",
              title: "آمستردام /  آلمان",
            },
          ]}
          mainTitle="تعطیلات آخر هفته از فرانکفورت"
        />
        <NextTripSection
          dataNextTripArr={[
            {
              img: "/public/images/NextTrip/img6.jpg",
              title: "آمستردام /  آلمان",
            },
            {
              img: "/public/images/NextTrip/img7.jpg",
              title: "آمستردام /  آلمان",
            },
            {
              img: "/public/images/NextTrip/img8.jpg",
              title: "آمستردام /  آلمان",
            },
            {
              img: "/public/images/NextTrip/img5.jpg",
              title: "آمستردام /  آلمان",
            },
          ]}
          mainTitle="مقاصد عملیاتی برای تعطیلات بعدی شما"
        />
        <SecoundBanner />
      </Container>
      <Box sx={{ bgcolor: "#FFF7E1", marginTop: "5rem" }}>
        <ThirdBanner />
      </Box>
      <Container>
        <Box sx={{ margin: "1rem  0" }}>
          <TitleSection isSubTitle={false} mainTitle="پرطرفدار در سفر" />
        </Box>
        <FallDistinationSec />
      </Container>
    </Box>
  );
};

export default Home;
