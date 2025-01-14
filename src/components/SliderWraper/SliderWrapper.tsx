import { Box, styled } from "@mui/material";
import React, { FC } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Slider from "react-slick";
interface ISliderWrapperProps {
  children: React.ReactNode;
  numberOfShowSlider: number;
}
const CusArrowForwardIcon = styled(ArrowCircleLeftIcon)({
  fontSize: "2.5rem",
  top: "50%",
  left: -40,
  "& path": {
    color: "var(--primary-color)"

  }
})
const CusArrowCircleRightIcon = styled(ArrowCircleRightIcon)({
  fontSize: "2.5rem",
  top: "50%",
  right: -40,
  "& path": {
    color: "var(--primary-color)"

  }
})
const SliderWrapper: FC<ISliderWrapperProps> = ({
  children,
  numberOfShowSlider,
}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: numberOfShowSlider,
    cssEase: "linear",
    autoplay: true,
    rtl: true,
    slidesToScroll: 1,
      nextArrow: <CusArrowCircleRightIcon />,
          prevArrow: <CusArrowForwardIcon />,
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
          slidesToShow: 2,

          slidesToScroll: 2,
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
