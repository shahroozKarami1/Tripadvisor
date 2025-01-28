import DistinationCard from "./DistinationCard";
import SliderWrapper from "../SliderWraper/SliderWrapper";

const TheBestdistination = () => {
  return (
    // <Box  display={"flex"} gap={2 }  sx={{marginTop : "2rem"}}>
    <SliderWrapper numberOfShowSlider={3}  ArrowPosition="30%">
      <DistinationCard
        img="/public/images/TheBestDistination/image1.jpg"
        item={30}
        name="شهروز کرمی"
        title="3 روز خانوادگی در رم"
      />
      <DistinationCard
        img="/public/images/TheBestDistination/image2.jpg"
        item={30}
        name="رضا فاطمی"
        title="3 روز خانوادگی در رم"
      />
      <DistinationCard
        img="/public/images/TheBestDistination/image3.jpg"
        item={30}
        name="سعید احمدی"
        title="3 روز خانوادگی در رم"
      />{" "}
    </SliderWrapper>
    // </Box>
  );
};

export default TheBestdistination;
