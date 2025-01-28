import { Box } from "@mui/material";
import TourWaysCard from "./TourWaysCard";
import SliderWrapper from "../SliderWraper/SliderWrapper";
const TourWaySection = () => {
  return (
    <Box sx={{ marginTop: "2rem" }}>
      <SliderWrapper numberOfShowSlider={4} ArrowPosition="35%">
        <TourWaysCard
          price={134}
          score={935}
          disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
          img="/public/images/frankfordDistination/img1.jpg"
        />

        <TourWaysCard
          price={134}
          score={935}
          disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
          img="/public/images/frankfordDistination/img2.jpg"
        />

        <TourWaysCard
          price={134}
          score={935}
          disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
          img="/public/images/frankfordDistination/img3.jpg"
        />

        <TourWaysCard
          price={134}
          score={935}
          disc="گشت روز قلعه هایدلبرگ و شهر از فرانکفورت147"
          img="/public/images/frankfordDistination/img4.jpg"
        />
      </SliderWrapper>
    </Box>
  );
};

export default TourWaySection;
