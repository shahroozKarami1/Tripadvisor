import { Box, styled } from "@mui/material";
import React, { FC } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Slider from "react-slick";
interface ISliderWrapperProps {
  children: React.ReactNode;
  numberOfShowSlider: number;
  ArrowPosition  ?:   string ;
}
const SliderWrapper: FC<ISliderWrapperProps> = ({
  children,
  numberOfShowSlider,
  ArrowPosition
}) => {
  const CusArrowForwardIcon = styled(ArrowCircleLeftIcon)(({ theme }) => ({

    fontSize: "2.5rem",
    top:  ArrowPosition ? ArrowPosition  :  "50%",
    backgroundColor: "#000",
    borderRadius: "50%",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      left: "0px",
      zIndex: 99
    },
    left: -50,
    "& path": {
      color:  "#fff"
    },
  })
  )
  const CusArrowCircleRightIcon = styled(ArrowCircleRightIcon)(({ theme }) => ({
    fontSize: "2.5rem",
    backgroundColor: "#000",
    position: "absolute",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      right: "0px"
    },
    right: -50,
    top:  ArrowPosition ? ArrowPosition  :  "50%",
    "& path": {
      color:  "#fff"

    }
  }))
  function SampleArrow(props: any) {
    const { children, onClick } = props;
    return (
      <div onClick={onClick} style={{ cursor: 'pointer' }}>
        {children}
      </div>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: numberOfShowSlider,
    cssEase: "linear",
    autoplay: true,
    rtl: true,
    slidesToScroll: 1,
    nextArrow: <SampleArrow><CusArrowCircleRightIcon /></SampleArrow>,
    prevArrow: <SampleArrow><CusArrowForwardIcon /></SampleArrow>,
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
