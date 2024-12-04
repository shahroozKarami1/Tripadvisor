import React, { FC } from "react";
import Slider from "react-slick";

const FadeSlider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default FadeSlider;
