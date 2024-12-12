import React, { FC } from "react";
import Slider from "react-slick";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import styled from "@emotion/styled";
const FadeSlider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const CusPreArrow = styled(ArrowCircleLeftOutlinedIcon)({
    position: "absolute",
    zIndex: 100,
    left: 0,
    fontSize: "3rem",
    "& path" : {
   color  : "#fff"
    }  , 
  });
  const CusNextArrow = styled(ArrowCircleRightOutlinedIcon)({
    position: "absolute",
    zIndex: 100,
    right: 0,
    "& path" : {
   color  : "#fff"
    }  , 
    fontSize: "3rem",
  });
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CusNextArrow />,
    prevArrow: <CusPreArrow />,
    waitForAnimate: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default FadeSlider;
