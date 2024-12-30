import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DarkBtn from "../DarkBtn/DarkBtn";
import { useMedia } from "../../context/MediaQueryContext";
const SecoundBanner = () => {
  let   isXs  =  useMedia()
  const CusSecoundBanner = styled(Box)({
    backgroundColor: `#F2ECF9`,
    marginTop: "4rem",
    padding: "1.2rem",
    borderRadius: "0.5rem",
  });
  return (
    <CusSecoundBanner>
      <Grid container>
        <Grid size={{ md: 6 }}>
          <Box
            sx={{ height: "100%"  ,  margin : "0  2rem"}}
            display={"flex"}
            gap={1}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box display={"flex"} alignItems={"center"}  gap={1}>
                <Typography sx={{ fontSize: "0.90rem", fontWeight: "light" }}>
                    ساخته شده توسط <u>شهروز</u> 
            </Typography>
                <img src="/public/images/AllNewLogos/singleLogo.svg" alt=""  width={"40px"} />
            </Box>
            <Typography sx={{ fontSize: "1.7rem", fontWeight: "bold" }}>
              با هم رفتن راحت تر از همیشه است !
            </Typography>
            <Typography sx={{textAlign : "center"  }}>
              سفر زمانی بهتر است که بتوانید آن را با بهترین دوست خود به اشتراک
              بگذارید. تمام نکات، راهنماها و ابزارهایی را که برای سفر رویایی با
              سگ خود نیاز دارید، بیابید.
            </Typography>
            <Box sx={{marginTop : "1rem"}}>
            <DarkBtn >گشتن بیشتر</DarkBtn>

            </Box>
          </Box>
        </Grid>
        <Grid size={{ md: 6 }}   sx ={{marginTop : isXs  ? "2rem" :  "0rem"}}>
          <img
            src="/public/images/secoundBannerImg/caption.jpg"
            className="rounded-md"
            alt=""
          />
        </Grid>
      </Grid>
    </CusSecoundBanner>
  );
};

export default SecoundBanner;
