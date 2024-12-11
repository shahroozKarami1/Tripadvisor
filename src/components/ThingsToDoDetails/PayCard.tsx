import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { CusAddBtn, CusRemoveBtn } from "../../elements/CusComponets";
import DataPicker from "../DataPicker/DataPicker";
const PayCard = () => {
  let [travelers, setTraveler] = useState<number>(1);
  let [isOpenTravelerBox, setIsOpenTravelerBox] = useState<boolean>(false);
  let [isOpenDataPickerBox, setIsOpenDataPickerBox] = useState<boolean>(false);
  let [dataState, setDateSate] = useState <number>(new Date().getFullYear());
  const CusPayCard = styled(Box)({
    boxShadow: "var(--main-shadow)",
    borderRadius: "1rem ",
    padding: "1.2rem ",
    border: "1px  solid #ccc",
  });

  const CusBoxDetailsTraveler = styled(Box)({
    boxShadow: "var(--main-shadow)",
    borderRadius: "1rem",
    padding: "1rem",
  });

  const CusBtnSibmitTarveler = styled(Button)({
    backgroundColor: "var(--yellow-color)",
    width: "100%",
    borderRadius: "2rem",
    color: "var(--dark-color)",

    fontWeight: "bold",
    marginTop: "1rem",
  });

  function addTravler() {
    if (travelers >= 1 && travelers < 15) {
      setTraveler(travelers + 1);
    } else if (travelers === 0) {
      setTraveler(1);
    }
  }
  function ramoveTraveler() {
    if (travelers <= 1) {
      setTraveler(1);
    } else {
      setTraveler(travelers - 1);
    }
  }
  return (
    <CusPayCard>
      <Box display={"flex"} flexDirection={"column"} marginBottom={"0.5rem"}>
        <Typography sx={{ fontSize: "1.3rem", fontWeight: "bold" }}>
          از25.25 $
        </Typography>
        <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
          به ازای هر بزرگسالان
        </Typography>
      </Box>
      <Typography sx={{ fontSize: "0.90rem", fontWeight: "bold" }}>
        تاریخ و مسافران را انتخاب کنید
      </Typography>
      <Box display={"flex"} alignItems={"center"} margin={"1rem  0"}>
        <Button
          sx={{
            border: "1px solid #ccc",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
          }}
          onClick={() => setIsOpenTravelerBox(!isOpenTravelerBox)}
        >
          <Typography>{travelers}</Typography>
          <Typography>
            <PeopleAltOutlinedIcon sx={{ fontSize: "1.2rem" }} />
          </Typography>
        </Button>

        <Button onClick={() => setIsOpenDataPickerBox(!isOpenDataPickerBox)}>
          <CalendarMonthOutlinedIcon />
          <Typography>{dataState}</Typography>
        </Button>
      </Box>
      {isOpenTravelerBox && (
        <CusBoxDetailsTraveler>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography sx={{ fontWeight: "bold" }}>
                بزرگسالان{" "}
                <span className="font-light  text-xs  text-gray-800">
                  سن 14 -55
                </span>
              </Typography>
              <Typography sx={{ fontSize: "0.80rem" }}>
                2 میلیون تومان
              </Typography>
            </Box>
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <CusAddBtn onClick={addTravler}>+</CusAddBtn>
              <Typography sx={{ fontWeight: "bold" }}>{travelers}</Typography>
              <CusRemoveBtn onClick={ramoveTraveler}>-</CusRemoveBtn>
            </Box>
          </Box>
          ‌
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <CusBtnSibmitTarveler>بروزرسانی جست و جو </CusBtnSibmitTarveler>
          </Box>
        </CusBoxDetailsTraveler>
      )}

      {isOpenDataPickerBox && (
        <CusBoxDetailsTraveler>
          <DataPicker />
        </CusBoxDetailsTraveler>
      )}
    </CusPayCard>
  );
};

export default PayCard;
