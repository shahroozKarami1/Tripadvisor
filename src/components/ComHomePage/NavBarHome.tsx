import { Box, Container, List } from "@mui/material";
import { CusTitleHomePage } from "../../elements/CusComponets";
import NavbarMenu from "./NavBarMenu";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import HouseboatOutlinedIcon from "@mui/icons-material/HouseboatOutlined";
import Grid from "@mui/material/Grid2";
import InpSearch from "../InpSearch/InpSearch";
import { useState } from "react";
import FlightInp from "./FlightInp/FlightInp";
const NavBarHome = () => {
  let [textPlaceholder, setPlaceHolder] = useState<string>(
    "جاهایی برای رفتن و کارهایی برای انجام دادن و هتل ها و..."
  );
  let [textHomeTitle, setTextHomeTitle] = useState<string>("کجا میخوای بری");
  let [isFlightSearch, setIsFlightSearch] = useState<boolean>(false);

  function handleBtnClick(
    mainTitle: string,
    textPlaceholder: string,
    isFlight?: boolean
  ) {
    if (mainTitle && textPlaceholder) {
      setPlaceHolder(textPlaceholder);
      setTextHomeTitle(mainTitle);
    }
    if (isFlight) {
      setIsFlightSearch(true);
    } else {
      setIsFlightSearch(false);
    }
  }


  return (
    <Box sx={{ marginTop: "4rem" }}>
      <Container>
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <Grid size={{ md: 12 }}>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <CusTitleHomePage>{textHomeTitle}</CusTitleHomePage>
              <Box>
                <List sx={{ display: "flex" }}>
                  <NavbarMenu
                    HandlerBtn={handleBtnClick}
                    fontSize={"1rem"}
                    NavBarMenuArr={[
                      {
                        icon: <CottageOutlinedIcon />,
                        title: "جست و جوی همه ",
                        textTitle: "کجا میخوای بری",
                        placeholder:
                          "جاهایی برای رفتن و کارهایی برای انجام دادن و هتل ها ...",
                      },
                    ]}
                  />
                  <NavbarMenu
                    HandlerBtn={handleBtnClick}
                    fontSize={"1rem"}
                    NavBarMenuArr={[
                      {
                        icon: <KingBedOutlinedIcon />,
                        title: "هتل ها  ",
                        textTitle: "یه جای عالی بمون",
                        placeholder: "اسم هتل یا مقصد",
                      },
                    ]}
                  />
                  <NavbarMenu
                    HandlerBtn={handleBtnClick}
                    fontSize={"1rem"}
                    NavBarMenuArr={[
                      {
                        icon: <CottageOutlinedIcon />,
                        title: "کارهایی برای انجام ",
                        textTitle: "یه کار سرگرم کننده انجام بده",
                        placeholder: "جاذبه، فعالیت یا مقصد",
                      },
                    ]}
                  />
                  <NavbarMenu
                    HandlerBtn={handleBtnClick}
                    fontSize={"1rem"}
                    NavBarMenuArr={[
                      {
                        icon: <RestaurantOutlinedIcon />,
                        title: "رستوران ها ",
                        textTitle: "مکان هایی برای غذا خوردن پیدا کنید",
                        placeholder: "رستوران یا مقصد",
                      },
                    ]}
                  />
                  <NavbarMenu
                    HandlerBtn={handleBtnClick}
                    isFlight={true}
                    fontSize={"1rem"}
                    NavBarMenuArr={[
                      {
                        icon: <FlightTakeoffOutlinedIcon />,
                        title: "پرواز ها ",
                        textTitle: "بهترین سفر رو پیدا کن",
                        placeholder:
                          "جاهایی برای رفتن و  کارهایی برای انجام دادن و هتل ها ...",
                      },
                    ]}
                  />
                  <NavbarMenu
                    HandlerBtn={handleBtnClick}
                    fontSize={"1rem"}
                    NavBarMenuArr={[
                      {
                        icon: <HouseboatOutlinedIcon />,
                        title: "تعطیلات اجاره ها",
                        textTitle: "مکان های اجاره ای را کاوش کنید",
                        placeholder: "مقصد",
                      },
                    ]}
                  />
                </List>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ md: isFlightSearch ? 12 : 9 }}>
            <Box sx={{ marginTop: "2rem" }}>
              {isFlightSearch ? (
                <FlightInp />
              ) : (
                <InpSearch
                  isBtnSearch={true}
                  textPlaceHolder={textPlaceholder}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NavBarHome;
