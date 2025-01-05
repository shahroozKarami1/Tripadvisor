import { Box, Typography } from "@mui/material";
import { CusAutoComplete } from "../../elements/CusComponets";
import AutoCompleteItem from "./AutoCompleteItem";

const AutoCompleteBox = () => {
  return (
    <CusAutoComplete>
      <AutoCompleteItem IsNearby={true} name="در نزدیکی" />
      <AutoCompleteItem
        IsNearby={false}
        country="خراسان رضوی / ایران"
        cover="/public/images/NextTrip/img7.jpg"
        name="مشهد"
      />
      <Box sx={{ margin: "1rem  0 " }}>
        <Typography sx={{ fontSize: "0.90rem", fontWeight: "bold" }}>
          بیشترین بازدید
        </Typography>
      </Box>

      <AutoCompleteItem
        IsNearby={false}
        country=" تبریز / ایران"
        cover="/public/images/NextTrip/img8.jpg"
        name="عمارت ایل گلی"
      />
      <AutoCompleteItem
        IsNearby={false}
        country=" تبریز / ایران"
        cover="/public/images/NextTrip/img1.jpg"
        name="عمارت ایل گلی"
      />
    </CusAutoComplete>
  );
};

export default AutoCompleteBox;
