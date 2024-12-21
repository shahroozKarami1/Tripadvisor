import {
  Box,
  Button,
  Input,
  InputAdornment,
  styled,
  Typography,
} from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SearchIcon from "@mui/icons-material/Search";
import CheckInOut from "../DataPicker/CheckInOut";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import { useMedia } from "../../context/MediaQueryContext";
import BedIcon from "@mui/icons-material/Bed";
import { useState } from "react";
import { CusAddBtn, CusRemoveBtn } from "../../elements/CusComponets";
const SearchInpHotel = () => {
  let [isShowAddTraveler, setIsShowAddTraveler] = useState<boolean>(false);
  let [countOfRoom] = useState<number>(1);
  let [countOfPeople] = useState<number>(1);
  let isXs = useMedia();
  const CusSearchInpHotel = styled(Box)({
    backgroundColor: "#fff",
    borderRadius: "3rem",
    boxShadow: `var(--primary-shadow)`,
    display: "flex",
    alignItems: "center",
    flexDirection: isXs ? "column" : "row",
    gap: isXs ? 8 : 3,
    padding: "0.5rem",
  });

  return (
    <CusSearchInpHotel>
      ‌
      <Box>
        <Input
          placeholder="اسم هتل یا مقصد"
          sx={{
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
        <Typography sx={{ color: "#444", fontSize: "0.90rem" ,  whiteSpace : "nowrap" }}>
          وارد کردن روز ها :{" "}
        </Typography>
        <CheckInOut />
      </Box>
      <Button
        onClick={() => setIsShowAddTraveler(!isShowAddTraveler)}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          border: "1px solid  #ccc",
          borderRadius: "1rem",
          padding: "1rem",
          position: "relative",
        }}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Typography>{countOfPeople}</Typography>
          <PeopleOutlineIcon />
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Typography>{countOfRoom}</Typography>
          <BedIcon />
        </Box>
        {isShowAddTraveler && (
          <Box
            sx={{
              position: "absolute",
              bgcolor: "#fff",
              borderRadius: "1rem",
              top: 60 ,  
              padding : "1rem" ,
              width : "300px" ,
              zIndex :  99 ,
              
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            
            >
              <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Typography sx={{ fontWeight: "bold" }}> بزرگسالان</Typography>
              </Box>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <CusAddBtn>+</CusAddBtn>
                <Typography sx={{ fontWeight: "bold" }}>
                  {countOfPeople}
                </Typography>
                <CusRemoveBtn>-</CusRemoveBtn>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Typography sx={{ fontWeight: "bold" }}>بچه ها</Typography>
              </Box>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <CusAddBtn>+</CusAddBtn>
                <Typography sx={{ fontWeight: "bold" }}>
                  {countOfPeople}
                </Typography>
                <CusRemoveBtn>-</CusRemoveBtn>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Typography sx={{ fontWeight: "bold" }}>اتاق ها</Typography>
              </Box>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <CusAddBtn>+</CusAddBtn>
                <Typography sx={{ fontWeight: "bold" }}>
                  {countOfPeople}
                </Typography>
                <CusRemoveBtn>-</CusRemoveBtn>
              </Box>
            </Box>
          </Box>
        )}
      </Button>
      <PrimaryBtn text="پیدا کردن هتل" />
    </CusSearchInpHotel>
  );
};

export default SearchInpHotel;
