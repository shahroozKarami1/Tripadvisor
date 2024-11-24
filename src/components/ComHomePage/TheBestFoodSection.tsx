import BestFoodsCard from "./BestFoodsCard";
import SliderWrapper from "../SliderWraper/SliderWrapper";

const TheBestFoodSection = () => {
  return (
    // <Box display={"flex"} gap={2} sx={{ marginTop: "2rem" }}>
    <SliderWrapper  numberOfShowSlider={4}>
      <BestFoodsCard
        img="/public/images/TheBastFood/image1.jpg"
        name="ماکارونی"
      />
      <BestFoodsCard
        img="/public/images/TheBastFood/image2.jpg"
        name="ماکارونی"
      />
      <BestFoodsCard
        img="/public/images/TheBastFood/image3.jpg"
        name="ماکارونی"
      />
      <BestFoodsCard
        img="/public/images/TheBastFood/image4.jpg"
        name="ماکارونی"
      />
    </SliderWrapper>
    // </Box>
  );
};

export default TheBestFoodSection;
