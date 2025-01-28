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
  let [isShowAddTraveler, setIsShowAddTraveler] = useState<boolean>(false);
  let [countOfRooms, setCountOfRooms] = useState(2);
  let [countOfAdults, setCountOfAdults] = useState(2);
  let [isOpenAutoCompleteBox, setIsOpenAutoCompleteBox] = useState(false)
  let isXs = useMedia();
  let BoxTravelerRef = useRef<HTMLDivElement | null>(null)
  const CusBtnAddTraveler = styled(Button)({
    display: "flex",
    alignItems: "center",
    width: isXs ? "70%" : "auto",
    gap: 10,
    border: "1px solid  #ccc",
    borderRadius: "1rem",
    padding: " 0.5rem   1rem",
    position: "relative",
  });
  useEffect(() => {
    const handlerClickOutSide = (e: MouseEvent) => {
      if (BoxTravelerRef.current && !BoxTravelerRef.current.contains(e.target as Node)) {
        setIsShowAddTraveler(false);
      }
    }
    document.addEventListener("mousedown", handlerClickOutSide)
    return () => {
      document.removeEventListener("mousedown", handlerClickOutSide)
    }
  }, [])

  return (

    <Box

      className="hotel_inp_Wrapper" sx={{
        borderRadius: isOpenAutoCompleteBox ? "0rem" : "2rem",
        gap: 3,
        flexDirection: isXs ? "column" : "row",
        borderTopLeftRadius: isOpenAutoCompleteBox ? "1rem" : "2rem",
        borderTopRightRadius: isOpenAutoCompleteBox ? "1rem" : "2rem",
      }}>

      <Box>
        <Input
          onClick={() => setIsOpenAutoCompleteBox(true)}
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
          BoxRef={BoxTravelerRef }
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


    </Box>

  );
};

export default SearchInpHotel;
