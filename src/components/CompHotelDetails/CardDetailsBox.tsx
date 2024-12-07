import { Box, Typography } from "@mui/material";
import { CusCardDetails, CusOutLineLinkBtn } from "../../elements/CusComponets";
import CardDetailsItem from "./CardDetailsItem";

 

const CardDetailsBox = () => {
  return (
    <CusCardDetails>
      <Typography sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
        جزییات
      </Typography>
      <CardDetailsItem details={["اروپا", "اسپانیا"]} title="غذاهای " />
      <CardDetailsItem details={["صبحانه", "ناهار ", "شام"]} title="وعده ها " />
      <CardDetailsItem
        details={["پارکینگ", "رزرواسیون", "استخر"]}
        title="ویژگی ها "
      />
      ‌
      <Box>
        <CusOutLineLinkBtn>دیدن همه جزییات</CusOutLineLinkBtn>
      </Box>
    </CusCardDetails>
  );
};

export default CardDetailsBox;
