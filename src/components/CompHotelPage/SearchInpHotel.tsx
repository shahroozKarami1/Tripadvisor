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
import { useEffect, useRef, useState } from "react";
import AddTravelerCard from "./AddTravelerCard";
import AutoCompleteBox from "../AutoCompleteBox/AutoCompleteBox";
const SearchInpHotel = () => {
  const inpRef = useRef<HTMLInputElement>(null); // ایجاد ریفرنس
  let [isShowAddTraveler, setIsShowAddTraveler] = useState<boolean>(false);
  let [countOfRooms, setCountOfRooms] = useState(2);
  let [countOfAdults, setCountOfAdults] = useState(2);
  let [isOpenAutoCompleteBox, setIsOpenAutoCompleteBox] = useState(false)
  let isXs = useMedia();
  const CusBtnAddTraveler = styled(Button)({
    display: "flex",
    alignItems: "center",
    width: isXs ? "70%" : "auto",
    gap: 10,
    border: "1px solid  #ccc",
    borderRadius: "1rem",
    padding: "0.5rem",
    position: "relative",
  });
  const CusSearchInpHotel = styled(Box)({
    backgroundColor: "#fff",
    borderRadius: isOpenAutoCompleteBox ? "0rem" : "2rem",
    borderTopLeftRadius: isOpenAutoCompleteBox ? "1rem" : "2rem",
    borderTopRightRadius: isOpenAutoCompleteBox ? "1rem" : "2rem",
    boxShadow: `var(--primary-shadow)`,
    display: "flex",
    alignItems: "center",
    flexDirection: isXs ? "column" : "row",
    gap: isXs ? 8 : 3,
    padding: "0.5rem",
    position: "relative",
    width: "100%",

  });

  useEffect(() => {
    if (inpRef.current) {
      inpRef.current.focus();
    }
  }, [isShowAddTraveler, countOfRooms, countOfAdults, isOpenAutoCompleteBox]);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
    e.preventDefault();
    setIsOpenAutoCompleteBox(true);
  };
  return (
    <CusSearchInpHotel  >
      ‌
      <Box>
        <Input
          ref={inpRef}
          onFocus={handleFocus}
          onBlur={() => setIsOpenAutoCompleteBox(false)}
          placeholder="اسم هتل یا مقصد"
          sx={{
            position: 'relative',
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
        <Typography
          sx={{ color: "#444", fontSize: "0.90rem", whiteSpace: "nowrap" }}
        >
          وارد کردن روز ها :
        </Typography>
        <CheckInOut />
      </Box>
      <CusBtnAddTraveler
        onClick={() => setIsShowAddTraveler(!isShowAddTraveler)}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Typography>{countOfAdults}</Typography>
          <PeopleOutlineIcon />
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Typography>{countOfRooms}</Typography>
          <BedIcon />
        </Box>
      </CusBtnAddTraveler>
      {isShowAddTraveler && (
        <AddTravelerCard
          adultsState={countOfAdults}
          roomState={countOfRooms}
          setAdult={setCountOfAdults}
          setRoom={setCountOfRooms}
        />
      )}
      <PrimaryBtn text="پیدا کردن هتل" />
      {
        isOpenAutoCompleteBox &&
        <Box sx={{ position: "absolute", right: "0", bottom: 0, width: "100%" }}>
          <AutoCompleteBox />
        </Box>
      }
    </CusSearchInpHotel>
  );
};

export default SearchInpHotel;
