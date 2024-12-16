import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React, { FC } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import { DarkOverlay } from "../../elements/CusComponets";
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
const BannerBtn: FC<{
  isText: Boolean;
  icon: React.ReactNode;
  text?: string;
}> = ({ icon, isText, text }) => {
  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#fff",
        borderRadius: "2rem",
        color: `var(--dark-color)`,
        gap: 1,
        padding: "0.5rem  0.75rem ",
      }}
    >
      <Typography sx={{ fontSize: "0.90rem", fontWeight: "bold" }}>
        {icon}
      </Typography>
      {isText && (
        <Typography sx={{ fontWeight: "bold", fontSize: "0.70rem" }}>
          {text}
        </Typography>
      )}
    </Button>
  );
};
const MainBanner = () => {
  const CusMainBanner = styled(Box)({
    position: "relative",
    height: "320px",
  });
  const CusTopOfBanner = styled(Box)({
    position: "absolute",
    top: 20,
    left: 20,
    display: "flex",
    gap: 10,
    alignItems: "center",
  });
  const CusBottomBanner = styled(Box)({
    position: "absolute",
    bottom: 20,
    right: 30,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  });

  return (
    <CusMainBanner>
      <img
        src="/public/images/TripDetails/Banner/banner.jpg"
        alt=""
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
          borderRadius: "1rem",
        }}
      />
      <DarkOverlay />
      <CusTopOfBanner>
        <BannerBtn icon={<MoreHorizIcon />} isText={false} />
        <BannerBtn
          icon={<FavoriteBorderIcon />}
          isText={true}
          text="ذخیره تمام آیتم ها "
        />
        <BannerBtn icon={<IosShareIcon />} isText={true} text="اشتراک سفر" />
      </CusTopOfBanner>

      <CusBottomBanner>
        <Typography
          sx={{ fontWeight: "bold", color: "#fff", fontSize: "3rem" }}
        >
          3 روز خانوادگی در رم
        </Typography>
        <Box display={"flex"} alignItems={"center"} gap={3}>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <img
              src="/public/images/NextTrip/img5.jpg"
              style={{
                width: "40px",
                borderRadius: "50%",
              }}
              alt=""
            />
            <Typography sx={{ color: "#fff", fontWeight: "bold"  ,  fontSize  :"0.90rem"}}>
              شهروز کرمی
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <DateRangeOutlinedIcon  sx={{"& path" : {color  : "#fff"}}}/>
          <Typography sx={{ color: "#fff", fontWeight: "bold"  ,  fontSize  :"0.90rem"}}>
            3 روز
            </Typography>
          </Box>
        </Box>
      </CusBottomBanner>
    </CusMainBanner>
  );
};

export default MainBanner;
