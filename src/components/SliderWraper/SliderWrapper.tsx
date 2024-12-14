import { Box } from "@mui/material";
import React, { FC } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Slider from "react-slick";
import styled from "@emotion/styled";
interface ISliderWrapperProps {
  children: React.ReactNode;
  numberOfShowSlider: number;
}
const CusRightArrow = styled(ArrowCircleRightIcon)({
  display: "block",
  top: " 133px",
  right: "-53px",
  // boxShadow :  `var(--main-shadow)`  ,
  fontSize: "3rem",
  "&.MuiSvgIcon-root  path": {
    color: `var(--primary-color)`, 
  },
});
const CusLeftArrow = styled(ArrowCircleLeftIcon)({
  display: "block",
  top: " 133px",
  left: "-53px",
  fontSize: "3rem",
  "&.MuiSvgIcon-root  path": {
    color: `var(--primary-color)`, 
  },
});
const SliderWrapper: FC<ISliderWrapperProps> = ({
  children,
  numberOfShowSlider,
}) => {
  var settings = {
    dots: true,
    infinite: true , 
    speed: 1000,
    slidesToShow: numberOfShowSlider,
    // autoplaySpeed: 7000,
    // pauseOnHover: true,
    cssEase: "linear",
    autoplay: false  ,  
    rtl: true,
    slidesToScroll: 1,
    nextArrow: <CusRightArrow />,
    prevArrow: <CusLeftArrow />,
    initialSlide: 0,
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
          initialSlide: 1,
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
  return (
    <Box>
      <div className="slider-container   mt-8  ">
        <Slider {...settings}>{children}</Slider>
      </div>
    </Box>
  );
};

export default SliderWrapper;
