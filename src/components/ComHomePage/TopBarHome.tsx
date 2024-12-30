import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DarkBtn from "../DarkBtn/DarkBtn";
import TopBarMenu from "./TopBarMenu";
import { CusStickyMenu } from "../../elements/CusComponets";
import { useMedia } from "../../context/MediaQueryContext";
import { useState } from "react";
import LoginBox from "../LoginBox/LoginBox";
const TopBarHome = () => {
  let [isOpenProfileBox, setIsOpenProfileBox] = useState<boolean>(false);
  let isXs = useMedia();

  return (
    <>
      {!isXs && (
        <CusStickyMenu>
          <Container>
            <Grid container alignItems={"center"}>
              <Grid size={{ md: 2 }}>
                <Box sx={{ width :  "150px"   , height : "100px"}}>
                  <img
                    src="/public/images/AllNewLogos/persian vertical 2-01.svg"
                    alt=""
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </Box>
              </Grid>

              <Grid size={{ md: 8 }}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <TopBarMenu
                    titleMenu="کشف  کنید"
                    subMenuArray={[
                      { link: "/Articles", text: "داستان های سفر" },
                      { link: "/TravelersChoice", text: "انتخاب مسافران" },
                    ]}
                  />
                  <TopBarMenu
                    titleMenu="سفر ها"
                    subMenuArray={[
                      { link: "/Trips", text: "مشاهده سفرهای من" },
                      { link: "/Trips", text: "شروع  یک سفر جدید !" },
                      { link: "/TripBuilder", text: "ساهت سفر باهوش مصنوعی" },
                    ]}
                  />
                  <TopBarMenu
                    titleMenu="بررسی کنید "
                    subMenuArray={[
                      { link: "/UserReview", text: "نوشتن بررسی" },
                      { link: "/PostPhotos", text: "ارسال تصاویر" },
                      { link: "/CreateListing", text: "اضافه کردن مکان" },
                    ]}
                  />
                  <TopBarMenu
                    titleMenu="بیشتر"
                    subMenuArray={[
                      { link: "/Cruises", text: "کروز ها" },
                      { link: "/ForumHome", text: "انجمن ها" },
                    ]}
                  />
                </Box>
              </Grid>
              <Grid size={{ md: 2 }}>
                <Box display={"flex"} gap={3} alignItems={"center"}>
                  <DarkBtn setState={setIsOpenProfileBox}>ورود </DarkBtn>
                  <LoginBox
                    setOpen={setIsOpenProfileBox}
                    open={isOpenProfileBox}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </CusStickyMenu>
      )}
    </>
  );
};

export default TopBarHome;
