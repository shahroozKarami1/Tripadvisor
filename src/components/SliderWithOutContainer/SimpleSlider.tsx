import React, { FC } from "react";
import Slider from "react-slick";

const SimpleSlider: FC<{
  children: React.ReactNode;
  countOfSlider: number;
}> = ({ children, countOfSlider }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true  ,  
    cssEase: "linear",
    slidesToShow: countOfSlider,
    slidesToScroll: 1,
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
          initialSlide: 2,
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
  return <Slider {...settings}>{children}</Slider>;
};
export default SimpleSlider;
