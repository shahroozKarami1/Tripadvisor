import React, { FC } from "react";
import { ITourCardSliderProps } from "../../types/intefaces";
import { Box, Button, Icon, Typography } from "@mui/material";
import { CusCircleIcon } from "../../elements/CusComponets";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import UpdateIcon from "@mui/icons-material/Update";
import Slider from "react-slick";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid2";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ToolTipCustom from "../ToolTipCustom/ToolTipCustom";
import VerifiedIcon from '@mui/icons-material/Verified';
const BestSellerCard = () => {
  return (
    <Box display={"flex"}>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "0.80rem",
          borderRadius: "0.25rem",
          border: "1px solid  #444",
          padding: "0.25rem  0.5rem",
        }}
      >
        پر فروش ترین
      </Typography>
    </Box>
  );
};

const CardOfSlider: FC<{ coverImg: string }> = ({ coverImg }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "300px",
        width: "100%",
        borderRadius: "1rem",
      }}
    >
      <img
        src={coverImg}
        alt=""
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          borderRadius: "1rem",
          height: "100%",
        }}
      />
      <Box sx={{ position: "absolute", top: 20, right: 20 }}>
        <FavoriteBorderOutlinedIcon
          sx={{
            bgcolor: "#fff",
            cursor: "pointer",
            borderRadius: "50%",
            fontSize: "2rem",
            padding: "0.25rem",
          }}
        />
      </Box>
    </Box>
  );
};
const MoreDetails: FC<{
  icon: React.ReactNode;
  text: string;
  badgeDetails: { icon: React.ReactNode; title: string };
}> = ({ badgeDetails, icon, text }) => {
  return (
    <Box display={"flex"} alignItems={"center"} margin={"0.25rem  0  0  0"}>
      <Typography>{icon}</Typography>
      <Typography sx={{ fontSize: "0.75rem" }}>{text}</Typography>
      <ToolTipCustom icon={badgeDetails.icon} text={badgeDetails.title} />
    </Box>
  );
};

const TourCardSlider: FC<ITourCardSliderProps> = ({
  TourPrice,
  TypeOfTour,
  countOfLike,
  disc,
  hours,
  imgCover,
  recommendedPercent,
  titeCard,
  typeOfTraveler,
}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const CusReserveBtn = styled(Button)({
    backgroundColor: `var(--yellow-color)`,
    color: "var(--black-color) ",
    fontWeight: "bold",
    borderRadius: "2rem",
    padding: "  0.5rem 1rem",
    fontSize: "1rem",
    marginTop: "1rem",
  });

  return (
    <Box  sx={{margin :"2rem 0"}}>
      <Grid container spacing={3}  >
        <Grid size={{ md: 4 }}>
          <Slider {...settings}>
            {imgCover.map((src) => {
              return <CardOfSlider coverImg={src} />;
            })}
          </Slider>
        </Grid>
        <Grid size={{ md: 8 }}>
          <Box display={"flex"} flexDirection={"column"}>
            <BestSellerCard />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                padding: "0.75rem  0",
              }}
            >
              {titeCard}
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ md: 10 }}>
                <Box>
                  <Box
                    display={"flex"}
                    gap={1}
                    alignItems={"center"}
                    margin={"0.25rem  0"}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <CusCircleIcon />
                      <CusCircleIcon />
                      <CusCircleIcon />
                      <CusCircleIcon />
                      <CusCircleIcon />
                    </Box>
                    <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
                      {countOfLike}
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography sx={{ fontSize: "0.80rem" }}>
                      {TypeOfTour}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "0.80rem", margin: "0.65rem 0" }}
                    >
                      {hours} ساعت
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography sx={{ fontSize: "0.80rem" }}>{disc}</Typography>

                    <MoreDetails
                      badgeDetails={{
                        icon: <ErrorOutlineIcon />,
                        title:
                          "مطمئن نیستید؟ برای بازپرداخت کامل می توانید این رزرو را تا 24 ساعت قبل لغو کنید.",
                      }}
                      icon={
                        <UpdateIcon
                          sx={{
                            borderRadius: "50%",
                            padding: "0.25rem",
                            fontSize: "1.8rem",
                            bgcolor: "#C9F2E3",
                            "& path": { color: "#004F32" },
                          }}
                        />
                      }
                      text="لغو رایگان"
                    />
                    <MoreDetails
                      badgeDetails={{
                        icon: <ErrorOutlineIcon />,
                        title: `${recommendedPercent}% از بازبینان به این محصول امتیاز حباب 4 یا بالاتر داده اند.`,
                      }}
                      icon={
                        <VerifiedIcon
                          sx={{
                            borderRadius: "50%",
                            padding: "0.25rem",
                            fontSize: "1.8rem",
                            "& path": { color: "#FF5D5D" },
                          }}
                        />
                      }
                      text={`${recommendedPercent} درصد از مسافران توصیه می کنند`}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ md: 2   ,  xs  : 12}}>
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
                    از
                  </Typography>
                  <Typography sx={{ fontWeight: "bold"  ,  fontSize : "0.90rem"}}>
                    {TourPrice} میلیون تومان
                  </Typography>
                  <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
                    به ازای هر {typeOfTraveler}
                  </Typography>
                  <CusReserveBtn>رزرو</CusReserveBtn>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TourCardSlider;
