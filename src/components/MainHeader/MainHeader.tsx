import { Box, Container, Divider, List, Typography } from "@mui/material";
import  Grid from "@mui/material/Grid2";
import DarkBtn from "../DarkBtn/DarkBtn";
import LanguageIcon from "@mui/icons-material/Language";
import TopBarMenu from "../ComHomePage/TopBarMenu";
import InpSearch from "../InpSearch/InpSearch";
import { CusStickyMenu } from "../../elements/CusComponets";
import NavbarMenu from "../ComHomePage/NavBarMenu";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <CusStickyMenu>
      <Container>
        <Box
          display={"flex"}
          gap={3}
          alignItems={"center"}
          sx={{ margin: "1rem  0" }}
        >
          <DarkBtn>ورود </DarkBtn>
          <Box
            sx={{ cursor: "pointer" }}
            display={"flex"}
            alignItems={"center"}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "0.85rem" }}>
              USD
            </Typography>
            <Divider>|</Divider>
            <LanguageIcon />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ whiteSpace: "nowrap" }}
          >
            <TopBarMenu
              titleMenu="کشف  کنید"
              subMenuArray={[{ link: "/", text: "تصاویر از سفرها" }]}
            />
            <TopBarMenu
              titleMenu="سفر ها"
              subMenuArray={[
                { link: "/", text: "تصاویر از سفرها" },
                { link: "/", text: "شروع  یک سفر جدید !" },
              ]}
            />
            <TopBarMenu
              titleMenu="بررسی کنید "
              subMenuArray={[{ link: "/", text: "تصاویر از سفرها" }]}
            />
          </Box>
          <InpSearch isBtnSearch={false} />

          <Link to={"/"}>
            <img src="/public/images/logo.svg" alt="" width={"400px"} />
          </Link>
        </Box>
        ‌
        <Grid container>
            <Box>
              <List sx={{ display: "flex" }}>
                <NavbarMenu
                fontSize="0.80rem"
                  NavBarMenuArr={[{ title: "هتل ها  ", link: "/Hotels" }]}
                />
                <NavbarMenu
                fontSize="0.80rem"
                  NavBarMenuArr={[
                    {
                      title: "کارهایی برای انجام ",
                      link: "/Attractions",
                    },
                  ]}
                />
                <NavbarMenu
                fontSize="0.80rem"
                  NavBarMenuArr={[
                    { title: "رستوران ها ", link: "/Restaurants" },
                  ]}
                />
                <NavbarMenu
                fontSize="0.80rem"
                  NavBarMenuArr={[
                    { title: "پرواز ها ", link: "/CheapFlightsHome" },
                  ]}
                />
                <NavbarMenu
                fontSize="0.80rem"
                  NavBarMenuArr={[
                    {
                      title: " تعطیلات اجاره ها ",
                      link: "/Rentals",
                    },
                  ]}
                />
                <NavbarMenu
                fontSize="0.80rem"
                  NavBarMenuArr={[
                    {
                      title: "صفحه اصلی انجمن ",
                      link: "/ForumHome",
                    },
                  ]}
                />
                <NavbarMenu
                fontSize="0.80rem"
                  NavBarMenuArr={[
                    {
                      title: "ماشین های اجاره ای ",
                      link: "/RentalCars",
                    },
                  ]}
                />
                <NavbarMenu
                fontSize="0.80rem"
                  NavBarMenuArr={[
                    {
                      title: "سفرهای دریایی ",
                      link: "/Cruises",
                    },
                  ]}
                />
              </List>
            </Box>
        </Grid>
      </Container>
    </CusStickyMenu>
  );
};

export default MainHeader;
