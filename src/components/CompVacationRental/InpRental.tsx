import { Box, Input, InputAdornment, Typography } from "@mui/material";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import CheckInOut from "../DataPicker/CheckInOut";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import { useMedia } from "../../context/MediaQueryContext";

const InpRental = () => {
    let isXs  =  useMedia ()
  const CusSearchInpHotel = styled(Box)({
    backgroundColor: "#fff",
    borderRadius: "3rem",
    boxShadow: `var(--primary-shadow)`,
    display: "flex",
    alignItems: "center",
    justifyContent :"space-evenly" ,  
    flexDirection: isXs ? "column" : "row",
    gap: isXs ? 8 : 3,
    padding: "0.5rem",
    width : "100%"
  });
  return (
    <CusSearchInpHotel>
      ‌
      <Box  >
        <Input
          fullWidth
          placeholder=  "سوئیت ریاست جمهوری مقابل اقیانوس | استراحتگاه ساحلی، کی وست، فلوریدا"
          sx={{
            width : "100%" ,  
            ":before": {
              display: "none",
            },
            ":after": {
              display: "none",
            },
          }}
          startAdornment={
            <InputAdornment position="start" sx={{ marginLeft: "0.5rem" }}>
              <SearchIcon sx={{ "& path": { color: "#ccc" } }} />
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
          وارد کردن روز ها :{" "}
        </Typography>
        <CheckInOut />
      </Box>
      <PrimaryBtn text="پیدا کردن  تعطیلات" />
    </CusSearchInpHotel>
  );
};

export default InpRental;
