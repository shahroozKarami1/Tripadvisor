import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DarkBtn from "../DarkBtn/DarkBtn";
import LanguageIcon from "@mui/icons-material/Language";
import TopBarMenu from "./TopBarMenu";
import { CusStickyMenu } from "../../elements/CusComponets";
const TopBarHome = () => {
  return (
    <CusStickyMenu>
      <Grid container sx={{ marginTop: "1rem" }} alignItems={"center"}>
        <Grid size={{ md: 2 }}>
          <Box display={"flex"} gap={3} alignItems={"center"}>
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
          </Box>
        </Grid>
        <Grid size={{ md: 8 }}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <TopBarMenu
              titleMenu="کشف  کنید"
              subMenuArray={[{ link: "/", text: "تصاویر از سفرها" }]}
            />
            <TopBarMenu
              titleMenu="سفر ها"
              subMenuArray={[{ link: "/", text: "تصاویر از سفرها" }  ,  { link: "/", text: "شروع  یک سفر جدید !" }]}
            />
            <TopBarMenu
              titleMenu="بررسی کنید "
              subMenuArray={[{ link: "/", text: "تصاویر از سفرها" }]}
            />
            <TopBarMenu
              titleMenu="بیشتر"
              subMenuArray={[{ link: "/", text: "تصاویر از سفرها" }]}
            />
          </Box>
        </Grid>
        <Grid size={{ md: 2 }}>
          <img src="/public/images/logo.svg" alt="" />
        </Grid>
      </Grid>
    </CusStickyMenu>
  );
};

export default TopBarHome;
