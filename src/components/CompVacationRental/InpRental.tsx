import { Box, Input, InputAdornment, styled, Typography } from "@mui/material";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import CheckInOut from "../DataPicker/CheckInOut";
import { useMedia } from "../../context/MediaQueryContext";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useState } from "react";
import AutoCompleteBox from "../AutoCompleteBox/AutoCompleteBox";
const InpRental = () => {
  let isXs = useMedia()
  let [isOpenAutoCompleteBox, setIsOpenCompleteBox] = useState<boolean>(false)
  const CusSearchInpHotel = styled(Box)({
    backgroundColor: "#fff",
    position : "relative" , 
    borderRadius: isXs ? 0 : "3rem",
    boxShadow: `var(--primary-shadow)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: isXs ? "column" : "row",
    gap: isXs ? 8 : 3,
    height: isXs ? "100%" : " 60px",
    padding: isXs ? "1rem" : 0,
  });
  return (
    <CusSearchInpHotel>
      ‌
      <Box  >
        <Input
          onFocus={() => setIsOpenCompleteBox(true)}
          onBlur={() => setIsOpenCompleteBox(false)}
          fullWidth
          placeholder="سوئیت ریاست جمهوری مقابل اقیانوس | استراحتگاه ساحلی، کی وست، فلوریدا"
          sx={{
            width: "100%",
            ":before": {
              display: "none",
            },
            ":after": {
              display: "none",
            },
          }}
          startAdornment={
            <InputAdornment position="start" sx={{ marginLeft: "0.5rem" }}>
              <FmdGoodIcon sx={{ "& path": { color: "var(--primary-color)" } }} />
            </InputAdornment>
          }
        />
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={1}
        sx={{
          border: "1px  solid  #ccc",
          padding: "0.5rem",
          borderRadius: "1rem",
        }}
      >
        <Typography sx={{ color: "#444", fontSize: "0.90rem" }}>
          وارد کردن روز ها :
        </Typography>
        <CheckInOut />
      </Box>
      <PrimaryBtn text="پیدا کردن  تعطیلات" />
      {/* {
        isOpenAutoCompleteBox && (
          <Box sx={{ position: "absolute", right: 0, bottom: 0, width: "100%" }}>

            <AutoCompleteBox />

          </Box>
        )
      } */}
    </CusSearchInpHotel>
  );
};

export default InpRental;
